<template>
  <footer class="flex flex-col text-center py-10 font-light">
    <p class="text-xl font-bold mb-5">Showroom Torreon. Coah.</p>
    <p>Plaza Colibrí Local 07 Diagonal Reforma</p>
    <div class="flex justify-center items-center">
      <a href="tel:+528717938424" class="p-2">
        <font-awesome-icon :icon="['fas', 'phone']" class="mr-2" />
        +52 871 793 9424
      </a>
    </div>
    <div class="flex-justify-center items-center mb-2">
      <a href="mailto:ventastrc@ebanoluxuryinwood.com" class="p-2">
        <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
        ventastrc@ebanoluxuryinwood.com
      </a>
    </div>
    <p class="text-sm copy">©2019 by Ebano Luxury in Wood</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #000;
}
.copy {
  color: #ccc;
}
a {
  transition: all 0.35s ease;
}
a:hover {
  background-color: #554b45;
}
</style>
