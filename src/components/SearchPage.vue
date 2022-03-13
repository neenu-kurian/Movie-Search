<template>
  <div class="search__container">
    <form class="search__wrapper" @submit="searchMovies">
      <input
        type="text"
        v-model="search"
        name="search"
        placeholder="Search movies or series..."
        class="search__bar"
      />
      <Button type="submit">Search</Button>
    </form>
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
import "../assets/scss/main.scss";
import MovieCard from "../common/MovieCard.vue";
import Button from "../common/Button.vue";

export default {
  name: "SearchPage",
  data: function () {
    return {
      search: "",
      showFeatured: true,
    };
  },
  computed: {
    ...mapState(["featured", "featuredMovies"]),
    ...mapGetters(["movies"]),
  },
  mounted() {
      this.fetchfeaturedMovies();
  },
  components: { MovieCard,Button },
  methods: {
    searchMovies(e) {
      e.preventDefault();

      if (!this.search) {
        this.showFeatured = true;
        this.fetchfeaturedMovies();
      } else {
        this.showFeatured = false;
        this.$store.dispatch("fetchMovies", this.search);
      }
    },
    fetchfeaturedMovies() {
      this.$store.dispatch("fetchfeaturedMovies", this.featured);
    },
  },
};
</script>