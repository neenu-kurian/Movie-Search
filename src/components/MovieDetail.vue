<template>
  <div class="detail__movie">
    <fade-loader :loading="loading" :color="color" class="movie__spinner"></fade-loader>
    <div class="detail__container" v-if="!loading">
      <div class="left">
        <Button type="text" name="back">Back</Button>
        <img class="detail__image" :src="movie.Poster" alt="movie" />
      </div>
      <div class="right">
        <div class="detail__wrapper">
          <h1 class="detail__title">{{ movie.Title }}</h1>
          <span v-if="movie.Ratings && movie.Ratings.Value">{{ movie.Ratings[0].Value }}</span>
          <div class="detail__year">{{ movie.Type }} | {{ movie.Year }}</div>
          <div class="detail__overview">
            <h2 class="detail__text">OVERVIEW</h2>
            <div class="detail__movie--plot">{{movie.Plot}}</div>
            <movie-list-item>
              <template v-slot:type>Genre:</template>
              <template v-slot:info>{{movie.Genre}}</template>
            </movie-list-item>
             <movie-list-item>
              <template v-slot:type>Created by:</template>
              <template v-slot:info>{{ movie.Director }}</template>
            </movie-list-item>
            <movie-list-item>
              <template v-slot:type>Starring:</template>
              <template v-slot:info> {{ movie.Actors }}</template>
            </movie-list-item>
            <movie-list-item>
              <template v-slot:type>Awards:</template>
              <template v-slot:info> {{ movie.Awards }}</template>
            </movie-list-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
import Button from "../common/Button.vue";
import MovieListItem from "../common/MovieListItem.vue";

export default {
  name: "MovieDetail",
  data: function () {
    return {
      color: "#FFFFFF",
    };
  },
  computed: {
    ...mapGetters(["movie"]),
    ...mapState(["loading"]),
  },
  components: {
    FadeLoader,
    Button,
    MovieListItem,
  },
  mounted() {
    this.fetchMovieDetails();
  },
  beforeDestroy() {
    this.$store.commit("CLEAR_MOVIE_DETAILS");
  },
  methods: {
    fetchMovieDetails() {
      this.$store.dispatch("fetchMovieDetails", this.$route.params.title);
    },
  },
};
</script>
