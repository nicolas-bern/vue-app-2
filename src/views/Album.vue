<template>
  <div class="album">

    <router-link :to="'/'">
      <button>RETOUR</button>
    </router-link>

    <h1>{{ album.title }}</h1>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Album",

  data(){
    album: {}
  },

  created() {
    this.getAlbum()
  },

  methods: {
    getAlbum: function (){
      let options = {
        method: 'GET',
        url: 'https://api.discogs.com/masters/' + this.$route.params.id
      };

      console.log(options.url)
      console.log("id : " + this.$route.params.id)
      axios.request(options).then(res =>{
        this.album = res.data
        console.log(this.album)
        console.log(this.album.title)
      })
    }
  }

}


</script>

<style scoped>

</style>
