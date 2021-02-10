<template>
  <div id="album">
    <router-link :to="'/'">
      <button class="retour">RETOUR</button>
    </router-link>

    <h1>{{ album.title }} by {{ album.artists['0'].name }}</h1>

    <h2>Tracklist :</h2>

    <table v-for="(track, index) in tracklist">
      <tbody>
        <tr>
          <td>
            {{ index = index+1 }}) {{ track.title }} | {{ track.duration }}
          </td>
        </tr>
      </tbody>
    </table>

    <br>

    <h3>Style(s) :</h3>
    <span id="style" v-for="(style, index) in styles">{{ style }}
      <span id="," v-if="!isLast(index, styles)">, </span>
    </span>


    <h4>Year : {{ album.year }}</h4>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Album",

  data(){
    return{
      album: {},
      tracklist: {},
      styles: {}
    }
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

      axios.request(options).then(res =>{
        this.album = res.data
        this.tracklist = this.album.tracklist
        this.styles = this.album.styles
        console.log(this.album)
      })
    },

    isLast: function (index, list){
      return list.length === index + 1
    }
  }

}


</script>

<style scoped>

</style>
