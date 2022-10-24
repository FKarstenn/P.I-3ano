<script>
export default {
  props: ["nome"],
  data() {
    return {
      atletas: [
        { nome: "Pedro", id: 1 },
        { nome: "Gabigol", id: 2 },
        { nome: "Arrascaeta", id: 3 },
        { nome: "Santos", id: 4 },
        { nome: "Filipe luis", id: 5 },
        { nome: "Rodinei", id: 6 },
        { nome: "João Pedro", id: 7 },
        { nome: "matheusinho", id: 8 },
        { nome: "vitor hugo", id: 9 },
        { nome: "Arrascaeta", id: 10 },
        { nome: "Fabricio Bruno", id: 11 },
        { nome: "Bruno Henrique", id: 12 },
        { nome: "Marinho", id: 13 },
        { nome: "E. Cebolinha", id: 14 },
        { nome: "Matheusão", id: 15 },
        { nome: "Ayrton Lucas", id: 16 },
        { nome: "Hugo Neneca", id: 17 },
        { nome: "Diego Alves", id: 18 },
        { nome: "A. Vidal", id: 19 },
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
        <h1>Selecione um dos jogadores</h1>
        <p
          v-for="atleta in atletas"
          :key="atleta.id"
          @click="irParaDetalhes(atleta.nome)"
        >
          {{ atleta.nome }}
        </p>
      </section>
    </div>
    <p style="font-style: italic">Time selecionado: {{ nome }}</p>
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
}
.content-area h1 {
  font-weight: bolder;
}
.content-area p:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 200, 0.1);
}
.description {
  text-align: center;
}
</style>
