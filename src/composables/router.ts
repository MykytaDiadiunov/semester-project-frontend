import { useRouter } from "vue-router"

export const useRouting = () => {
  const router = useRouter()

  function back(): void {
    router.back()
  } 

  function toHome(): void {
    router.push({name: "Home"})
  }

  return {
    back,
    toHome,
  }
}