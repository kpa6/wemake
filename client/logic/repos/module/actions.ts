import { ActionTree } from 'vuex'
import api from '~/logic/repos/services/api'
import * as reducers from '~/logic/repos/module/reducers'
import { UserType, StateType } from '~/logic/repos/types'

export const actions: ActionTree<StateType, StateType> = {

  async checkAuth ({ commit }): Promise<void> {
    const user = await api.checkAuth()
    commit(reducers.CHECK_AUTH, user)
  },

  async login ({ commit, dispatch }): Promise<void> {
    dispatch('general/setLoading', null, { 'root': true })

    const {
      user,
      credential,
      additionalUserInfo,
    } = await api.loadUserProfile() as UserType

    commit(reducers.SET_USER, {
      'username': additionalUserInfo.username,
      'avatar': user.photoURL,
      'token': credential.accessToken,
      'reposUrl': additionalUserInfo.profile.repos_url,
    })
  },

  async loadRepos ({ commit, dispatch }): Promise<void> {
    const { data } = await api.loadRepos.call(this)
    commit(reducers.SET_REPOS, data)
    dispatch('general/clearLoading', null, { 'root': true })
  },
}
