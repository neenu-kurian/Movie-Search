<template>
  <div class="movie__container">
    <div class="movie__tile" v-for="(movie,index) in movies" :key="index">
      <img :src="movie.Poster" alt="movie" />
      <div>{{movie.Title}}</div>
      <div>{{movie.Year}}</div>
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