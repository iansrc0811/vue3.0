import { fetchUserRepositories } from '@/api/ian-api'
import { ref, onMounted, watch, computed } from 'vue'
export default function getUsers(users) {
  const repositories = ref('')
  const getUserRepositories = async () => {
    console.log("users: ", users)
    // update `props.user` to `user.value` to access the Reference value
    // !!!  一定要用 users.value ~~~ 不能用 users !!!
    repositories.value = await fetchUserRepositories(users.value)
  }
  const userNames = computed(() => {
    if (!repositories.value) return []
    let names = repositories.value.map(r => r.name)
    return names
  })
  onMounted(getUserRepositories)

  // set a watcher on the Reactive Reference to user prop
  watch(users, getUserRepositories)
  return {
    repositories,
    getUserRepositories,
    userNames
  }
}
