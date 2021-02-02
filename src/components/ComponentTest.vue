<template>
  <div class="test">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ComponentTest",
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>
