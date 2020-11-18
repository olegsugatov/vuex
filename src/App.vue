<template>
  <div id="app">
      <PostForm/>
      <h1>{{postsCount}}</h1>
      <div class='post' v-for='post in validPosts' :key='post.id'>
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div>
  </div>
</template>

<script>
// helper для упрощения получения getters > mapGetters. 
// Методы, которые позводяют смапить какие-то сущности из Store
import { mapGetters, mapActions } from 'vuex';
import PostForm from './components/PostForm';
export default {
  name: 'App',
  // computed: {
  //   allPosts() {
  //     // специальны объект из Vue: $store
  //     return this.$store.getters.allPosts;
  //   }
  // },

  // вариант работы с Vuex
  computed: mapGetters(['validPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  components: { PostForm },
  async mounted() {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius:  5px;
  margin-bottom: 1rem;
}
</style>
