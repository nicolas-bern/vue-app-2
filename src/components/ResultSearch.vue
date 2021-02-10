<template>
  <div id="container">
    <h1 v-if="artiste.title != null"> Nom : {{ artiste.title }}</h1>
    <img :src="artiste.cover_image">
    <h2 v-if="artiste.title != null"> Description :</h2>
    <p> {{ description }}</p>
    <h2 v-if="artiste.title != null">Discographie :</h2>
    <div class="albums">
      <tr v-for="(album, index) in albums">
        <a :href="album.resource_url">
          <span v-if="album.type === 'master' && album.role === 'Main'">- {{ album.title }} ({{ album.year }})</span>
        </a>
      </tr>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResultSearch",
  props: {
    artiste: {},
    description : "",
    albums : []
  },

  methods: {
    getAlbum: function (urlAlbum){
      let options = {
        method: 'GET',
        url: urlAlbum
      };

      axios.request(options).then(res => {
        console.log(res.data.body)
      })
    }
  }
}
</script>

<style scoped>

</style>
