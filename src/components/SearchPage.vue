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
   
    <movie-card></movie-card>
  </div>
</template>

<script>
import "../assets/scss/main.scss";
import MovieCard from "../common/MovieCard.vue";
export default {
  name: "SearchPage",
  data: function () {
    return {
      search: "",
    };
  },
  components: { MovieCard },
  methods: {
    searchMovies() {
      this.$store.dispatch("fetchMovies", this.search);
    },
  },
};
</script>