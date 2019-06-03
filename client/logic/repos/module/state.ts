import { RawUserType } from '~/logic/repos/types'

export const state = (): RawUserType => ({
  'repos': [],
  'avatar': '',
  'reposUrl': '',
  'token': '',
  'username': '',
})
