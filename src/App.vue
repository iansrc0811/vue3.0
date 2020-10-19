<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <input type="checkbox" value="ian1" v-model="users">
<label for="data1">ian1</label>
<input type="checkbox" value="ian2" v-model="users">
<label for="data2">ian2</label>
<input type="checkbox" value="ian3" v-model="users">
<label for="data3">ian3</label>
  <Ian msg="Welcome to Your Vue.js App" :users="users"/>

</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Ian from "./components/Ian.vue";

export default {
  name: "App",
  components: {
    Ian
  },
  data () {
    return {
      users: ['Onead']
    }
  }
  // components: {
  //   HelloWorld, Ian
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
