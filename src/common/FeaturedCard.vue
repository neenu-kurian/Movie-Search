<template>
  <div class="featured__container">
    <div class="featured__tile" v-for="(movie,index) in featuredMovies" :key="index">
      <router-link class="featured__link" :to="`movie/${movie.data.Title}`">
        <img class="featured__poster" :src="movie.data.Poster" alt="movie" />
        <h2 class="featured__title">{{movie.data.Title}}</h2>
        <div class="featured__year">{{movie.data.Year}}</div>
         <div class="featured__plot">{{movie.data.Plot}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import "../assets/scss/main.scss";

export default {
    name:"FeaturedCard",
    computed: {
        ...mapState(["featuredMovies"])
    }
}
</script>