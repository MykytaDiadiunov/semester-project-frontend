import { useRouter } from 'vue-router'

export const useRouting = () => {
  const router = useRouter()

  function back(): void {
    router.back()
  }

  function toHome(): void {
    router.push({ name: 'Home' })
  }

  function toInstructions(): void {
    router.push({ name: 'Instructions' })
  }

  function toLicenses(): void {
    router.push({ name: 'Licenses' })
  }

  return {
    back,
    toHome,
    toInstructions,
    toLicenses,
  }
}
