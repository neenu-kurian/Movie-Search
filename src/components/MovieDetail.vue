<template>
  <div class="detail__container">
    <div class="left">
      <button class="detail__backbtn" @click="goToHome()">Back</button>
      <img class="detail__image" :src="movie.Poster" alt="movie" />
    </div>
    <div class="right">
      <div class="detail__wrapper">
        <h1 class="detail__title">{{ movie.Title }}</h1>
        <div class="detail__year">{{ movie.Type }}. {{ movie.Year }}</div>
        <div>Rating: {{ movie.Ratings[0].Value }}</div>
        <div>{{ movie.Genre }}</div>
        <div>Director {{ movie.Director }}</div>
        <div>Actors {{ movie.Actors }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "../assets/scss/main.scss";

export default {
  name: "MovieDetail",
  computed: {
    ...mapGetters(["movie"]),
  },
  mounted() {
    this.fetchMovieDetails();
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    fetchMovieDetails() {
      this.$store.dispatch("fetchMovieDetails", this.$route.params.id);
    },
  },
};
</script>
