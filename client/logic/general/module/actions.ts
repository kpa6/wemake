import { ActionTree } from 'vuex'

import { StateType } from '~/logic/repos/types'
import * as reducers from '~/logic/general/module/reducers'

export const actions: ActionTree<StateType, StateType> = {
  setError ({ commit }, error: string): void {
    commit(reducers.SET_ERROR, error)
  },
  clearError ({ commit }): void {
    commit(reducers.CLEAR_ERROR)
  },
  setLoading ({ commit }): void {
    commit(reducers.SET_LOADING)
  },
  clearLoading ({ commit }): void {
    commit(reducers.CLEAR_LOADING)
  },
}
