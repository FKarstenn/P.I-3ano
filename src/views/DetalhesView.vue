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
            src="https://a.espncdn.com/media/motion/2022/1021/Hu_221021_BR_futebol_premier_league_chelsea_x_manchester_united_cristiano_ronaldo_fim_plother_highlight/Hu_221021_BR_futebol_premier_league_chelsea_x_manchester_united_cristiano_ronaldo_fim_plother_highlight.jpg"
            alt=""
          />
        </div>
        <div class="player-about">
          <p>Nome: {{ nome }}</p>
          <p>Altura: 1,70</p>
          <p>Idade de início de carreira: 12 anos</p>
          <p>Tempo de carreira: 13 anos</p>
        </div>
      </section>
    </div>
    <div class="content-area">
      <h1>Títulos conquistados</h1>
      <ul>
        <li>TAÇA DOS CAMPEÕES</li>
        <li>TAÇA MUNDIAL DE CLUBES</li>
        <li>SUPERTAÇA EUROPEIA</li>
        <li>TAÇA UEFA</li>
        <li>TAÇA DO REI</li>
        <li>TAÇA DA LIGA 1984-85</li>
        <li>MUNDIALITO OU MINI-COPA DO MUNDO</li>
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
