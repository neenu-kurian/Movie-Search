<template>
  <div>
    <input type="text" v-model="search" name="search" placeholder="Search movies..." />
    <button @click="searchMovies">Search</button>
    <div>
        <movie-card></movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from '../common/MovieCard.vue';
export default {
  name: "SearchPage",
  data: function () {
    return {
      search: "",
    };
  },
  components: {MovieCard},
  methods: {
    searchMovies(){
      this.$store.dispatch("fetchMovies",this.search);
    },
  },
};
</script>