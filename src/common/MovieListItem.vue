<template>
  <div class="movie__listitems">
    <span class="movie__item">
      <slot name="type">Genre:</slot>
    </span>
    <slot name="info">Sample Info</slot>
  </div>
</template>

<script>
export default {
  name: "MovieListItem",
};
</script>