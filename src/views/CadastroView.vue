<script>
import * as fb from "@/plugins/firebase";
import { createUserWithEmailAndPassword , getAuth} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      alertInvalidInfo: false,
      invalidInfo:false,
      userExiste: false,
      user: [{ nome: "", password: "", email: "" ,sobrenome:""}],
    };
  },
  methods: {
  async criarNovaConta() {
    try{
      if(this.user.nome == null || this.user.nome == ''|| this.user.email == null || this.user.email == '' || this.user.sobrenome == null || this.user.sobrenome == '' || this.user.password == null || this.user.password == ''){
        this.invalidInfo = false
        this.alertInvalidInfo = true
      }
      else{
        this.invalidInfo = true
      }
      if(this.invalidInfo == true){
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );      
      this.registrarPerfil();
      this.login();
      }
      else{
        this.alertInvalidInfo = true
      }
      }catch (error){
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            this.emailInvalid = true;
            this.user = {};
            break;
          case "auth/email-already-in-use":
            this.userExiste = true;
            this.user = {};
            break;
          default:
            this.userExiste = true;
            break;
        }
      }
    },
    async login() {
      try {
        await fb.auth.signInWithEmailAndPassword(
          this.user.email,
          this.user.password,
        );
        this.$router.push({ name: "Home" });
      }
      catch (error) {
        this.errologin = true;
      }
},
    async registrarPerfil(){
      this.uid = fb.auth.currentUser.uid;
      const res = await fb.PerfilCollection.add({            
        owner: this.uid,
        Nome: this.user.nome,
        Genero: this.user.genero,
        Data_nasc: this.user.idade,
        Peso: this.user.peso,
        altura: this.user.altura,
        gluten: this.user.gluten,
        Lactose: this.user.lactose,
        Frutos: this.user.frutos
        });
        const idPerfil = res.id
        await fb.PerfilCollection.doc(idPerfil).update({
          idPerfil: idPerfil
        })
      },
    }
};
</script>

<template>
  <main id="main">
    <div class="login-area">
      <h1>login</h1>
      <div class="login-inputs">
        <p>E-mail</p>
        <input
          type="text"
          placeholder="Usuário ou e-mail"
          v-model="this.user.login"
        />
        <div>

          <p>Nome</p>
          <input type="text" placeholder="Nome" v-model="this.user.nome" />
          <p>Sobrenome</p>
        </div>
        <div>

          <input type="text" placeholder="Sobrenome" v-model="this.user.sobrenome" />
          <p>Senha</p>
        </div>
        <input type="text" placeholder="Senha" v-model="this.user.password" />
        <RouterLink to="/">
          <button>Cadastrar</button>
        </RouterLink>
      </div>
      <p>Ou então entre utilizando:</p>
      <section class="login-with">
        <span class="login-with-item">Facebook</span>
        <span class="login-with-item">Google</span>
      </section>
      <v-alert
              transition="scale-transition"
              v-model="userExiste"
              dismissible
              outlined
            >Este email já está em uso.</v-alert>
            <v-alert
              transition="scale-transition"
              v-model="alertInvalidInfo"
              dismissible
              outlined
            >Preencha todos os campos.</v-alert>
    </div>

  </main>
</template>

<style scoped>
#main {
  background-image: url(../assets/registro-bg.jpg);
}
.login-area {
  margin: 5vh;
  padding: 80px 120px;
  cursor: default;

  background-color: rgba(255, 255, 255);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 5px;
  flex-wrap: wrap;
}
input {
  text-align: center;
  color: black;
  padding: 8px;
  border: 0px;
  border-bottom: 2px solid black;
}
.login-inputs {
  display: flex;
  flex-direction: column;
  column-gap: 5px;
}
h1 {
  font-size: 1.8rem;
  font-weight: bolder;
}
p {
  font-size: 1.2rem;
  font-weight: bolder;
}
.login-with {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
}
.login-with-item {
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
}
.login-with-item:hover {
  background-color: rgba(0, 0, 0, 0.6);
  color: red;
}
.redirect-cadastro {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}
.redirect-cadastro:hover {
  color: red;
}
button {
  align-self: center;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  margin-top: 5px;
  
  border: 2px solid black;
  background-color: blue;
  color: white;
}
button:active {
  border-color: yellow;
}
</style>
