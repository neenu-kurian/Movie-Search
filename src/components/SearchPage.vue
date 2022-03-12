<template>
  <div class="search__container">
    <div class="search__wrapper">
      <input
        type="text"
        v-model="search"
        name="search"
        placeholder="Search movies..."
        class="search__bar"
      />
      <button class="search__btn" @click="searchMovies">Search</button>
    </div>
    <div v-if="showFeatured">
      <h1>Featured</h1>
      <movie-card :movies="featuredMovies"></movie-card>
    </div>
    <div v-else>
      <movie-card :movies="movies"></movie-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import "../assets/scss/main.scss";
import MovieCard from "../common/MovieCard.vue";

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
    ...mapGetters(["movies"])
  },
  mounted() {
    this.fetchfeaturedMovies();
  },
  components: { MovieCard },
  methods: {
    searchMovies() {
      this.showFeatured = false;
      this.$store.dispatch("fetchMovies", this.search);
    },
    fetchfeaturedMovies() {
      this.$store.dispatch("fetchfeaturedMovies", this.featured);
    },
  },
};
</script>