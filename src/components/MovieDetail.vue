<template>
    <div>Movie Detail</div>
</template>

<script>
export default {
    name: "MovieDetail",
    mounted() {
        this.fetchMovieDetails();
    },
    methods: {
        fetchMovieDetails() {
            this.$store.dispatch("fetchMovieDetails",this.$route.params.id);
        }
    }
}
</script>