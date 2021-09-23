<template>
  <div class="content">
    <Cards />
  </div>
</template>

<script>
import Cards from "./LightCards.vue";

export default {
  components: {
    Cards
  }
};
</script>

<style scoped>
.content {
  border: 1px solid rgb(48, 48, 48);
  border-radius: 4px;
}
</style>
