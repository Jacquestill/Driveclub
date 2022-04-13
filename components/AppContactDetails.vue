// This component renders all the data from the ContactDetail file.

<template>
  <div class="contact-details">
    <contact-detail
      v-for="info in contactInfo"
      :key="info.id"
      :info-section="info"
    />
  </div>
</template>

<script>
import { contactDetails } from './../assets/data'
import ContactDetail from './ContactDetail.vue'
export default {
  name: 'AppContactDetails',
  components: { ContactDetail },

  data() {
    return {
      contactInfo: contactDetails,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_main.scss';

.contact-details {
  border-top: 2px $secondary-color solid;
  background-color: $dark-body-color;
  padding: 80px 0;
}
</style>
