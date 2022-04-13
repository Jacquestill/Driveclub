<template>
  <img
    class="logo"
    :src="require(`./../assets/svg/${logoDetail.url}`)"
    :alt="logoDetail.name"
  />
</template>

<script>
export default {
  props: ['logoDetail'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_main.scss';

.logo {
  margin-right: 20px;

  &:hover {
    filter: brightness(0) saturate(100%) invert(10%) sepia(86%) saturate(6423%)
      hue-rotate(336deg) brightness(114%) contrast(105%);
  }
}

@media (max-width: 991px) {
  .logo {
    height: 30px;
  }
}
</style>
