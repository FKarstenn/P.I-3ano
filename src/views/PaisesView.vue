<script>
export default {
  props: ["nome"],
  data() {
    return {
      paises: [
        { nome: "Brasil", id: 1 },
        { nome: "Argentina", id: 2 },
        { nome: "Portugal", id: 3 },
      ],
    };
  },
  methods: {
    irParaLigas(nome) {
      this.$router.push(`/ligas/${nome}`);
    },
  },
};
</script>

<template>
  <main id="main">
    <div class="content-area">
      <section class="description">
        <h1>Selecione um país da {{ nome }}</h1>
        <p
          v-for="pais in paises"
          :key="pais.id"
          @click="irParaLigas(pais.nome)"
        >
          {{ pais.nome }}
        </p>
      </section>
    </div>
    <p style="font-style: italic">Continente selecionado: {{ nome }}</p>
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
