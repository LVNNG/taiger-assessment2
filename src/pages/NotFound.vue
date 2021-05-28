<template>
<div>
    <the-header></the-header>
  </div>
  <section>
    <base-card>
      <h2>page not found.</h2>
        <router-link to="/results">back to home</router-link>
    </base-card>
  </section>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";

export default {
    components: {
        TheHeader
    }
}
</script>