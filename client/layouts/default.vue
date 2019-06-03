<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
// Note that this component is not `scoped` or `module`.
// Here you can import or define any other styles that are required for this
// particular layout. This styles will be considered global.
// So, please be resposible!
@import '~/scss/variables';

html {
  height: 100%;
}

body {
  font-family: $font-arial;
  font-size: $font-size;
  background:
    radial-gradient(
      ellipse at center,
      rgb(255, 255, 255) 0%,
      rgb(229, 229, 229) 47%,
      rgb(209, 209, 209) 100%
    );
  height: 100%;
}
</style>
