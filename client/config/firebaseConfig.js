import * as firebase from 'firebase/app'
import 'firebase/auth'

// You should put firebase credentials here

const config = {
  'apiKey': '',
  'authDomain': '',
  'databaseURL': '',
  'projectId': '',
  'storageBucket': '',
  'messagingSenderId': '',
  'appId': '',
}

const provider = new firebase.auth.GithubAuthProvider()
provider.addScope('public_repo,read:user')

export default {
  provider,
  config,
}
