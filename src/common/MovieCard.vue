<template>
  <div class="movie__container">
    <div class="movie__wrapper" v-if="!loading">
      <div v-if="error==='False' && searchText">
        <result-error></result-error>
      </div>
      <div v-else class="movie__tile" v-for="({Title,Poster,Awards,Plot,Year},index) in movies" :key="index">
        <router-link class="movie__link" :to="`/movie/${Title}`">
          <img class="movie__img" v-if="Poster!=='N/A'" :src="Poster" alt="movie" />
          <img class="movie__img" src="../assets/images/default.jpeg" v-else alt="fallback" />
          <h2 class="movie__title">{{Title}}</h2>
          <div class="movie__year">{{Year}}</div>
          <div class="movie__awards" v-if="type==='featured'">{{Awards}}</div>
          <div class="movie__plot" v-if="type==='featured'">{{Plot}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ResultError from "./ResultError.vue";

export default {
  name: "MovieCard",
  computed: {
    ...mapState(["loading"]),
    ...mapGetters(["error","searchText"]),
  },
  components: {
    ResultError,
  },
  props: ["movies", "type"]
};
</script>