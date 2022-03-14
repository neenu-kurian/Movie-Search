<template>
  <div class="error__wrapper">
    <div class="error__image">
         <img src="../assets/images/sad-face.jpeg" alt="sad-face" class="sad-image"/>
    </div>
    <div class="error__text">
      <div v-if="movies.Error==='Movie not found!'">
        <error-text>Sorry, we couldnt find any results. Please try another movie</error-text>
      </div>
      <div v-if="movies.Error==='Too many results.'">
        <error-text>Oops, looks like there are too many results, Please try to refine your search</error-text>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ErrorText from "../common/ErrorText.vue";

export default {
  name: "ResultError",
  computed: {
    ...mapGetters(["movie"]),
    ...mapState(["movies"])
  },
  components: {
      ErrorText
  }
};
</script>