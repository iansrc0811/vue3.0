import { ref, computed } from 'vue'
export default function searchFunction(repositories) {
    const searchQuery = ref('')
    const repositoriesMatchingSearchQuery = computed(() => {
      return repositories.value.filter(
        repository => repository.name.includes(searchQuery.value)
      )
    })
    return {
      searchQuery,
      repositoriesMatchingSearchQuery
    }
}
