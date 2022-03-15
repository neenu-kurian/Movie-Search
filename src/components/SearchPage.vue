<template>
  <div class="search__container">
    <form class="search__wrapper" @submit.prevent="searchMovies">
      <input
        type="text"
        v-model="search"
        name="search"
        placeholder="Search movies or series..."
        class="search__bar"
      />
      <Button type="submit">Search</Button>
    </form>
    <fade-loader
      :loading="loading"
      :color="color"
      class="movie__spinner"
    ></fade-loader>
    <div v-if="showFeatured" class="featured">
      <h1 class="featured-text">FEATURED</h1>
      <movie-card :movies="featuredMovies" type="featured"></movie-card>
    </div>
    <div v-else>
      <movie-card :movies="movies" type="movies"></movie-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import MovieCard from "../common/MovieCard.vue";
import Button from "../common/Button.vue";
import FadeLoader from "vue-spinner/src/FadeLoader.vue";

export default {
  name: "SearchPage",
  data: function () {
    return {
      search: "",
      showFeatured: true,
      color: "#FFFFFF",
      featured: ["tt0372784", "tt4154796"],
    };
  },
  computed: {
    ...mapState(["featuredMovies", "loading"]),
    ...mapGetters(["movies", "error", "searchText"]),
  },
  mounted() {
    this.search = this.searchText;

    if (this.searchText) {
      this.showFeatured = false;
    } else {
      this.showFeatured = true;
      this.fetchfeaturedMovies();
    }
  },
  components: { MovieCard, Button, FadeLoader },
  methods: {
    searchMovies() {
      this.$store.commit("SET_SEARCH", this.search);
      
      if (!this.search) {
        this.showFeatured = true;
      } else {
        this.showFeatured = false;
        this.fetchMovies();
        this.$router.push(`/search/${this.search}`);
      }
    },
    fetchfeaturedMovies() {
      this.$store.dispatch("fetchfeaturedMovies", this.featured);
    },
    fetchMovies() {
      this.$store.dispatch("fetchMovies", this.search);
    },
  },
};
</script>
