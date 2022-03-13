<template>
  <div class="movie__container" v-if="!loading">
    <div class="movie__tile" v-for="(movie,index) in movies" :key="index" >
      <router-link class="movie__link" :to="`movie/${movie.Title}`">
        <img :src="movie.Poster" alt="movie" />
        <h2 class="movie__title">{{movie.Title}}</h2>
        <div class="movie__year">{{movie.Year}}</div>
        <div class="movie__awards" v-if="type==='featured'">{{movie.Awards}}</div>
        <div class="movie__plot" v-if="type==='featured'">{{movie.Plot}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import "../assets/scss/main.scss";
import { mapState } from "vuex";

export default {
  name: "MovieCard",
  computed: {
    ...mapState(["loading"])
  },
  props:['movies','type'],
  mounted() {
    console.log("movies", this.movies);
  },
};
</script>