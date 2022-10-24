<script>
export default {
  props: ["nome"],
  data() {
    return {
      atletas: [
        { nome: "Neymar JR", id: 1 },
        { nome: "Cristiano Ronaldo", id: 2 },
        { nome: "Messi", id: 3 },
      ],
    };
  },
  methods: {
    irParaDetalhes(nome) {
      this.$router.push(`/detalhes/${nome}`);
    },
  },
};
</script>

<template>
  <main id="main">
    <div class="content-area">
      <section class="description">
        <div class="player-image">
          <img
            src="https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/7/1647694277.jpeg"
            alt=""
          />
        </div>
        <div class="player-about">
          <p>Nome: {{ nome }}</p>
          <p>Altura: 1,85</p>
          <p>Idade de início de carreira: 19 anos</p>
          <p>Tempo de carreira: 6 anos</p>
        </div>
      </section>
    </div>
    <div class="content-area">
      <h1>Títulos conquistados</h1>
      <ul>
        <li>Copa do Brasil</li>
        <li>Primeira liga</li>
        <li>Recopa sul Americana</li>
        <li>Campeonato Brasileiro</li>
        <li>Campeonato Carioca</li>
        <li>Supercopa do Brasil</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.content-area {
  margin: 2vh;
  padding: 5vh;
  font-size: 1.3rem;

  background-color: rgba(0, 0, 0, 0.3);

  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
}
.content-area h1 {
  font-weight: bolder;
}
.description {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 7vw;
}
img {
  height: 100%;
}
.player-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}
</style>
