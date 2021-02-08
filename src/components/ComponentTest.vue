<template>
  <div class="test">
    <h1> Nom : {{ artiste.title }}</h1>
    <img :src="artiste.cover_image">
    <h2> Description :</h2>
    <p> {{ description }}</p>
    <h2>Discographie :</h2>
    <tr v-for="(album, index) in albums">
      <p v-if="album.type === 'master'">- {{ album.title }} ({{ album.year }})</p>
    </tr>

  </div>
</template>

<script>
export default {
  name: "ComponentTest",
  props: {
    artiste: {},
    description : "",
    albums : []
  }
}
</script>

<style scoped>

</style>
