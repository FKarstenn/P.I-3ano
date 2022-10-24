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
      <h1>login</h1>
      <div class="login-inputs">
        <p>E-mail</p>
        <input
          type="text"
          placeholder="Usuário ou e-mail"
          v-model="this.user.login"
        />
        <p>senha</p>
        <input type="text" placeholder="Senha" v-model="this.user.password" />
        <RouterLink to="/">
          <button>Login</button>
        </RouterLink>
      </div>
      <p>Ou então entre utilizando:</p>
      <section class="login-with">
        <span class="login-with-item">Facebook</span>
        <span class="login-with-item">Google</span>
      </section>
      <RouterLink to="/cadastro">
        <p class="redirect-cadastro">Não possuo cadastro</p>
      </RouterLink>
    </div>

  </main>
</template>

<style scoped>
#main {
  background-image: url(../assets/login-bg.jpg);
}
.login-area {
  margin: 5vh;
  padding: 80px 70px;
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
