<template>
  <div>
    <the-header></the-header>
  </div>
  <div class="controls">
    <input
      type="text"
      placeholder="input github user here!"
      v-model="userinput"
      @keyup.enter="storeResults(userinput)"
    />
    <base-button @click="storeResults(userinput)">submit</base-button>
  </div>
  <base-spinner v-if="isLoading"></base-spinner>
  <section v-if="!confirmeduserinput">
    <base-card>
      <p>no search entry yet.</p>
    </base-card>
  </section>
  <section v-else>
    <p>Showing {{ resultArray.length }} results for {{ confirmeduserinput }}</p>
    <result-item
      v-for="result in resultArray"
      :key="result.id"
      :id="result.id"
      :name="result.name"
      :description="result.description"
      :link="result.link"
    >
    </result-item>
  </section>
</template>

<script>
// @ is an alias to /src
import TheHeader from "../components/layout/TheHeader.vue";
import ResultItem from "../components/results/ResultItem.vue";

export default {
  components: {
    TheHeader,
    ResultItem,
  },
  data() {
    return {
      userinput: "",
      confirmeduserinput: "",
      resultArray: [],
      resultLength: 0,
      error: null,
      isLoading: false,
    };
  },
  methods: {
    async storeResults(userinput) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("storeResults", userinput);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      alert("storing results done!");
      this.loadResults();
    },
    loadResults() {
      this.resultArray = this.$store.getters["results"];
      this.confirmeduserinput = this.userinput;
      this.isLoading = false;
      console.log("resultArray:", this.resultArray);
    },
  },
};
</script>
<style scoped>
.controls {
  display: flex;
  justify-content: center;
}
</style>
