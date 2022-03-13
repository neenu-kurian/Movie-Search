<template>
  <div class="error__wrapper">
    <div class="error__image">
         <img src="../assets/images/sad-face.jpeg" alt="sad-face" class="sad-image"/>
    </div>
    <div class="error__text">
      <div v-if="movies.Error==='Movie not found!'">
        <p class="error__message">Sorry, we couldnt find any results. Please try another movie</p>
      </div>
      <div v-if="movies.Error==='Too many results.'">
        <p class="error__message">Oops, looks like there are too many results, Please try to refine your search</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import "../assets/scss/main.scss";

export default {
  name: "ResultError",
  computed: {
    ...mapGetters(["movie"]),
    ...mapState(["movies"])
  },
};
</script>