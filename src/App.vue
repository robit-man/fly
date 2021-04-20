<template>
  <div>
    <div id="app" class="overflow-hidden pb-6" style="background:black;">
      <VueLoadingIndicator v-if="settings.loading" class="overlay big" />
      <div v-else>
        <Nav />
        <router-view :key="$route.path" />
      </div>
    </div>
    <div class="background2">
   </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['settings'])
  },
  methods: {
    ...mapActions(['init'])
  },
  async created() {
    this.init();
  }
};
</script>
