import { GetterTree } from 'vuex'
import { StateType } from '~/logic/general/types'

export const getters: GetterTree<StateType, StateType> = {
  error (state): string {
    return state.error
  },
  loading (state): boolean {
    return state.loading
  },
}
