<script>
export default {
  props: ["nome"],
  data() {
    return {
      atletas: [
        { nome: "Pedro", id: 1 },
        { nome: "Gabigol", id: 2 },
        { nome: "Arrascaeta", id: 3 },
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
