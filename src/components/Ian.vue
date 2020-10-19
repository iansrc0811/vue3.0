<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Hello, {{ userNames }}
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
  import { fetchUserRepositories } from '@/api/ian-api'
  import { ref, onMounted, watch, toRefs, computed } from 'vue'
export default {

  name: "Ian",
  props: {
    msg: String,
    users: { type: Array }
  },
  setup (props) {
    // using `toRefs` to create a Reactive Reference to the `user` property of props
    const { users } = toRefs(props)

    const repositories = ref('')
    const getUserRepositories = async () => {
      console.log("users: ", users)
      // update `props.user` to `user.value` to access the Reference value
      // !!!  一定要用 users.value ~~~ 不能用 users !!!
      repositories.value = await fetchUserRepositories(users.value)
    }

    onMounted(getUserRepositories)

    // set a watcher on the Reactive Reference to user prop
    watch(users, getUserRepositories)
    const userNames = computed(() => {
      if (!repositories.value) return []
      let names = repositories.value.map(r => r.name)
      return names
    })
    const searchQuery = ref('')
    const repositoriesMatchingSearchQuery = computed(() => {
      return repositories.value.filter(
        repository => repository.name.includes(searchQuery.value)
      )
    })

    return {
      repositories,
      getUserRepositories,
      searchQuery,
      userNames
      // repositoriesMatchingSearchQuery
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
