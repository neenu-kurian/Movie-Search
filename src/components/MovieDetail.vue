<template>
  <div>
    <img :src="movie.Poster" alt="movie" />
    <div>{{movie.Title}}</div>
    <div>{{movie.Type}}. {{movie.Year}}</div>
    <div>Rating: {{movie.Ratings[0].Value}}</div>
    <div>{{movie.Genre}}</div>
    <div>Director {{movie.Director}}</div>
    <div>Actors {{movie.Actors}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MovieDetail",
  computed: {
    ...mapGetters(["movie"]),
  },
  mounted() {
    this.fetchMovieDetails();
  },
  methods: {
    fetchMovieDetails() {
      this.$store.dispatch("fetchMovieDetails", this.$route.params.id);
    },
  },
};
</script>