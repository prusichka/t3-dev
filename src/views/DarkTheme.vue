<template>
  <div class="content">
    <Cards />
  </div>
</template>

<script>
import Cards from "./DarkCards.vue";

export default {
  components: {
    Cards
  }
};
</script>

<style scoped>
.content {
  border: 1px solid whitesmoke;
  border-radius: 4px;
}
</style>
