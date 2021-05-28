<template>
  <li>
    <base-card>
      <h3>{{ name }}</h3>
      <div class="actions">
        <base-button mode="outline" link :href="repositoryLink"
          >visit this repository</base-button
        >
        <base-button link :href="repositoryReadMeLink">readme here</base-button>
        <base-button @click="toggleDesc">see description</base-button>
      </div>
      <transition name="desc"><p v-if="descVisibility">{{ description }}</p></transition>
    </base-card>
  </li>
</template>

<script>
export default {
  data() {
    return {
      descVisibility: false,
    };
  },
  props: ["id", "name", "description", "link"],
  computed: {
    repositoryLink() {
      return this.link;
    },
    repositoryReadMeLink() {
      return this.link + "#readme";
    },
  },
  methods: {
    toggleDesc() {
      this.descVisibility = !this.descVisibility;
    },
  }
};
</script>

<style scoped>
li {
  border-radius: 12px;
  list-style: none;
}

h3 {
  font-size: 1.5rem;
  color: black;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: center;
}

.desc-enter-active {
  animation: smooth 0.3s ease-out;
}

.desc-leave-active {
  animation: smooth 0.3s ease-in reverse;
}

@keyframes smooth {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
