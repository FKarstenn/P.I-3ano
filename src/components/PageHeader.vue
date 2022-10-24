<template>
  <header id="header">
    <nav class="header-navbar">
      <RouterLink class="navbar-item" to="/"
        ><img src="../components/icons/logo.png" alt="Logo"
      /></RouterLink>
      <div class="navbar-items">
        <RouterLink class="navbar-item" to="/">Home</RouterLink>
        <RouterLink class="navbar-item" to="continentes">Análises</RouterLink>
      </div>
      <div class="navbar-items">
        <RouterLink class="navbar-item" to="/login">Login</RouterLink>
        <RouterLink class="navbar-item" to="/cadastro">Cadastro</RouterLink>
      </div>
    </nav>
  </header>
</template>
<style>
img {
  height: 25px;
}
.header-navbar {
  padding: 5px 15px;
  font-size: 1.05rem;

  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.navbar-items {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.navbar-item:hover {
  border-bottom: 2px groove white;
  margin-bottom: -2px;
}
</style>
