<template>
  <div class="test">
    <h1>Recherche d'un artiste :</h1>
    <div class="textSearch">
      <textarea placeholder="Search an artist" v-model="search" name="search"></textarea>
      <button type="submit" v-on:click="searchArtist()">OK</button>
    </div>
    <!-- <pre>{{ artist }} </pre> -->
    <ComponentTest :artiste="artist" :description="description" :albums="albums"></ComponentTest>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.5/vue.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import ComponentTest from "@/components/ComponentTest";
import axios from "axios"

export default {
  name: "Test",
  components: {
    ComponentTest
  },

  data() {
    return{
      token: "rHNoNhqOUpWXwoCKodlgJEdKYabcJnqRPIfmKUjj",
      search: "",
      artist: {},
      id: "",
      description: "",
      albums: []
    }
  },

  created() {
    //this.getApi()
  },

  methods: {
    searchArtist: function (){

      let options = {
        method: 'GET',
        url: 'https://api.discogs.com/database/search?q='+this.search+'&token='+this.token,
      };

      axios.request(options).then(response => {
        const results = response.data.results

        this.artist = results.find(i => i.type === "artist")
        this.id = this.artist['id']
        console.log(this.id)

        this.getDetail(this.id)
      }).catch(function (error) {
        console.error(error);
      });
    },

    getDetail: function (id){
      let options = {
        method: 'GET',
        url: 'https://api.discogs.com/artists/'+id
      };

      axios.request(options).then(res => {
        console.log(res.data['profile'])
        this.description = res.data['profile']

        this.getDisco(id)
      })
    },

    getDisco: function (id){
      let options = {
        method: 'GET',
        url: 'https://api.discogs.com/artists/'+id+'/releases?page=1&per_page=100'
      };

      axios.request(options).then(res => {
        this.albums = res.data['releases']
        console.log(this.albums)
      })
    }
  }
}


</script>

<style scoped>

</style>
