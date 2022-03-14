<template>
  <div class="navbar-container flex flex-col justify-center items-center">
    <router-link to="/" class="logo-container my-5">
      <img src="/logo.webp" alt="" />
    </router-link>
    <nav>
      <ul class="flex flex-col sm:flex-row uppercase text-sm text-center">
        <li class="link py-2">
          <router-link to="/" class="px-5"> inicio </router-link>
        </li>
        <li class="link py-2">
          <a href="#" class="px-5"> nosotros </a>
        </li>
        <li class="link py-2">
          <a href="#" class="px-5"> servicios </a>
        </li>
        <li class="link py-2">
          <a href="#" class="px-5"> proyectos </a>
        </li>
        <li class="link py-2">
          <a href="#" class="px-5"> contacto </a>
        </li>
        <li class="link py-2">
          <a href="#" class="px-5"> testimonios </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-container {
  background-color: #100e0d55;
}

.logo-container img {
  width: 100%;
  height: auto;
}

.link {
  transition: all 0.35s ease;
}
.link:hover {
  background-color: #eee2;
}
</style>