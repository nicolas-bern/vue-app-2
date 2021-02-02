<template>
  <div class="test">
    <h1>Bonjour, bienvenu sur ma page Vue.js</h1>
    <ComponentTest text="Ça va être rigolo"></ComponentTest>
  </div>
</template>

<script>
import ComponentTest from "@/components/ComponentTest";

export default {
  name: "Test",
  components: {
    ComponentTest
  }
}
</script>

<style scoped>

</style>
