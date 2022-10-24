<script></script>

<template>
  <main id="main">
    <img
      class="home-image"
      src="../components/icons/lovepik-silhouette-particles-of-creative-football-match-background-image_400182238.jpg"
      alt=""
    />
    <div class="content-area">
      <section class="description">
        <h1>Futanalises</h1>
        <p style="font-style: italic">
          "O melhor lugar para se buscar informações sobre jogadores do mundo
          inteiro e ficar ligado no mundo do futebol" <br />
          Acompanhe tudo em nosso site.
        </p>
      </section>
    </div>
    <div class="content-area">
      <RouterLink
        to="continentes"
        class="analise-redirect"
        style="font-size: 1.1rem; font-weight: bolder"
        >Clique aqui para começar</RouterLink
      >
    </div>
  </main>
</template>

<style scoped>
.home-image {
  width: 100%;
  height: 92vh;
}
.content-area {
  padding: 1vh;
  height: fit-content;
  font-size: 1.2rem;

  background-color: rgba(0, 0, 0, 0.3);

  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.description {
  text-align: center;
}
.analise-redirect {
  padding: 2vh;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 1px solid black;
}
.analise-redirect:hover {
  border-radius: 50px;
  color: rgb(200, 200, 200);
}
</style>
