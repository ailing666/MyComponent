<template>
  <div class="my-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-container'
}
</script>

<style>
.my-container {
  padding: 10px;
  background-color: orange;
}
</style>
