<script>
export default {
  data() {
    return {
      user: [{ login: "", password: "", email: "" }],
    };
  },
};
</script>

<template>
  <main id="main">
    <div class="login-area">
      <h1>Acesse sua conta</h1>
      <div class="login-inputs">
        <input
          type="text"
          placeholder="Usuário ou e-mail"
          v-model="this.user.login"
        />
        <input type="text" placeholder="Senha" v-model="this.user.password" />
        <input type="text" placeholder="Email" v-model="this.user.email" />
        <button>Próximo</button>
      </div>
      <p>Ou então entre utilizando:</p>
      <section class="login-with">
        <span class="login-with-item">Facebook</span>
        <span class="login-with-item">Google</span>
        <span class="login-with-item">Apple</span>
      </section>
      <RouterLink to="/cadastro">
        <p class="redirect-cadastro">Não possuo cadastro</p>
      </RouterLink>
    </div>
    <div class="testing">
      <p style="color: orange">Login: {{ user.login }}</p>
      <p style="color: yellow">Senha: {{ user.password }}</p>
      <p style="color: red">Email: {{ user.email }}</p>
    </div>
  </main>
</template>

<style scoped>
.login-area {
  margin: 5vh;
  padding: 50px 150px;
  cursor: default;

  background-color: rgba(0, 0, 0, 0.6);
  background-image: url(https://i.pinimg.com/550x/98/34/66/983466ddf30a88bf189b1efa13c335f7.jpg);
  border: 5px solid black;
  color: white;
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
  padding: 5px;
  border-radius: 10px;
  border: 2px solid black;
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
  color: white;
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
.testing {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 30px;
}
button {
  align-self: center;
  width: fit-content;
  padding: 5px;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 5px;
}
button:active {
  border-color: yellow;
}
</style>
