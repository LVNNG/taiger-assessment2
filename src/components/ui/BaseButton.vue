<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <a v-else-if="link" :class="mode" target="_blank">
    <slot></slot>
  </a>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/results'
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #0c4d8a;
  border: 1px solid #0f2db3;
  color: white;
  cursor: pointer;
  border-radius: 0px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>