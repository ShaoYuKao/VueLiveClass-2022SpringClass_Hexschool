<template>
  <FrontNavbar />
  <router-view />
  <!-- loading -->
  <Loading :active="isLoading" :can-cancel="true" :is-full-page="true"></Loading>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import emitter from '@/libs/emitter';
import FrontNavbar from '@/components/FrontNavbar.vue';

export default {
  components: {
    Loading,
    FrontNavbar,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    emitter.on('isLoading', (isLoading) => {
      console.log('emitter.on isLoading', isLoading);
      this.isLoading = isLoading;
    });
  },
};
</script>
