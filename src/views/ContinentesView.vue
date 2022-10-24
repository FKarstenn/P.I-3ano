<script>
export default {
  data() {
    return {
      continentes: [
        { nome: "América", id: 1 },
        { nome: "Europa", id: 2 },
        { nome: "Ásia", id: 3 },
        { nome: "Oceania", id: 4 },
        { nome: "África", id: 5 },
      ],
    };
  },
  methods: {
    irParaPaises(nome) {
      this.$router.push(`/paises/${nome}`);
    },
  },
};
</script>

<template>
  <main id="main">
    <div class="content-area">
      <section class="description">
        <h1>Selecione um continente</h1>
        <p
          v-for="continente in continentes"
          :key="continente.id"
          @click="irParaPaises(continente.nome)"
        >
          {{ continente.nome }}
        </p>
      </section>
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
