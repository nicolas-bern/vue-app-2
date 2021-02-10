<template>

  <div id="container" v-if="artiste.title != null">

    <h1> Nom : {{ artiste.title }}</h1>

    <img :src="artiste.cover_image">

    <h2> Description :</h2>

    <p> {{ description }}</p>

    <h2>Discographie :</h2>

    <div class="albums">

      <tr v-for="(album, index) in albums">
        <router-link :to="'album/'+album.id">
          <span v-if="album.type === 'master' && album.role === 'Main'">- {{ album.title }} ({{ album.year }})</span>
        </router-link>
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
