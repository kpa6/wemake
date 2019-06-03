
export const getters = {
  isAuthenticated (state): boolean {
    return Boolean(state.token)
  },
  reposUrl (state): string {
    return state.reposUrl
  },
  repos (state): object[] {
    return state.repos
  },
  name (state): string {
    return state.username
  },
  avatar (state): string {
    return state.avatar
  },
}
