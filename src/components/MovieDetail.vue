<template>
  <div class="detail__container">
    <div class="left">
      <button class="detail__backbtn" @click="goToHome()">Back</button>
      <img class="detail__image" :src="movie.Poster" alt="movie" />
    </div>
    <div class="right">
      <div class="detail__wrapper">
        <h1 class="detail__title">{{ movie.Title }}</h1>
        <span>{{ movie.Ratings[0].Value }}</span>
        <div class="detail__year">{{ movie.Type }} | {{ movie.Year }}</div>
        <div class="detail__overview">
          <h2 class="detail__text">OVERVIEW</h2>
          <div class="detail__movie--plot">{{movie.Plot}}</div>
          <div class="detail__cast">
            <span class="detail__movie--text">Genre:</span>
            {{ movie.Genre }}
          </div>
          <div class="detail__cast">
            <span class="detail__movie--text">Created by:</span>
            {{ movie.Director }}
          </div>
          <div class="detail__cast">
            <span class="detail__movie--text">Starring:</span>
            {{ movie.Actors }}
          </div>
        </div>
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
      this.$store.dispatch("fetchMovieDetails", this.$route.params.title);
    },
  },
};
</script>
