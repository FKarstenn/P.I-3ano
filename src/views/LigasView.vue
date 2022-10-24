<script>
export default {
  props: ["nome"],
  data() {
    return {
      times: [
        { nome: "Flamengo", id: 1 },
        { nome: "Vasco", id: 2 },
        { nome: "Palmeiras", id: 3 },
      ],
    };
  },
  methods: {
    irParaJogadores(nome) {
      this.$router.push(`/jogadores/${nome}`);
    },
  },
};
</script>

<template>
  <main id="main">
    <div class="content-area">
      <section class="description">
        <h1>Selecione um dos times</h1>
        <p
          v-for="time in times"
          :key="time.id"
          @click="irParaJogadores(time.nome)"
        >
          {{ time.nome }}
        </p>
      </section>
    </div>
    <p style="font-style: italic">País selecionado: {{ nome }}</p>
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
