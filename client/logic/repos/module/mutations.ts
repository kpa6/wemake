import { MutationTree } from 'vuex'

import * as reducers from '~/logic/repos/module/reducers'
import { StateType, RawUserType } from '~/logic/repos/types'

export const mutations: MutationTree<StateType> = {
  [reducers.CHECK_AUTH]: (state, user: RawUserType): void => {
    state.user = user
  },
  [reducers.SET_USER]: (
    state,
    { username, avatar, token, reposUrl }
  ): void => {
    state.username = username
    state.avatar = avatar
    state.token = token
    state.reposUrl = reposUrl
  },
  [reducers.SET_REPOS]: (state, payload: object[]): void => {
    state.repos = payload
  },
}
