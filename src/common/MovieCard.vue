<template>
  <div class="movie__container">
    <div class="movie__tile" v-for="(movie,index) in movies" :key="index">
      <router-link class="nav-link" :to="`movie/${movie.imdbID}`">
        <img :src="movie.Poster" alt="movie" />
        <div>{{movie.Title}}</div>
        <div>{{movie.Year}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MovieCard",
  computed: {
    ...mapGetters(["movies"]),
  },
};
</script>