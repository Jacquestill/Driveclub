<template>
  <div class="contact-container">
    <div class="icon-container">
      <font-awesome-icon class="icon" :icon="infoSection.svg" />
    </div>
    <div class="content">
      <h3>{{ infoSection.name }}</h3>
      <p>{{ infoSection.detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['infoSection'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_main.scss';

.contact-container {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0 30px 100px;
}

.icon-container {
  height: 50px;
  width: 50px;
  border: 3px $tertiary-color solid;
  background: linear-gradient(
        45deg,
        $tertiary-color 20%,
        $transparent-red-color 0
      )
      bottom/160% 100%,
    linear-gradient(45deg, $transparent-red-color 80%, $tertiary-color 0)
      bottom/160% 100%;
  text-align: center;

  .icon {
    font-size: 1.2rem;
    margin-top: 13px;
  }
}

.content {
  margin-left: 30px;

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  p {
    color: $secondary-color;
  }
}

@media (max-width: 991px) {
  .icon-container {
    height: 75px;
    width: 75px;

    .icon {
      font-size: 1.8rem;
      margin-top: 20px;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.3rem;
  }
}
</style>
