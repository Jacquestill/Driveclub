<template>
  <div>
    <app-home />
    <app-body-left />
    <app-body-right />
  </div>
</template>

<script>
import AppHome from '../components/AppHome.vue'
import AppBodyLeft from '../components/AppBodyLeft.vue'
import AppBodyRight from '../components/AppBodyRight.vue'
export default {
  name: 'IndexPage',
  components: { AppHome, AppBodyLeft, AppBodyRight },
  layout: 'default-page',
}
</script>
