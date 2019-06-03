import { MutationTree } from 'vuex'

import * as reducers from '~/logic/general/module/reducers'
import { StateType } from '~/logic/general/types'

export const mutations: MutationTree<StateType> = {
  [reducers.SET_ERROR]: (state, payload: string): void => {
    state.error = payload
  },
  [reducers.SET_LOADING]: (state): void => {
    state.loading = true
  },
  [reducers.CLEAR_LOADING]: (state): void => {
    state.loading = false
  },
}
