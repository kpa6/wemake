import * as firebase from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from '~/config/firebaseConfig'
import { StoreType } from '~/logic/repos/types'

const methods = {

  async checkAuth (): Promise<object | null> {
    return firebase.auth().currentUser
  },

  async loadUserProfile (): Promise<object> {
    return firebase.auth().signInWithPopup(firebaseConfig.provider)
  },

  async loadRepos (this: StoreType): Promise<{'data': object[]}> {
    return this.$axios.get(this.getters['repos/reposUrl'])
  },
}

export default methods
