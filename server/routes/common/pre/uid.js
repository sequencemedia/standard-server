import Boom from '@hapi/boom'

import {
  v4
} from 'uuid'

/*
 *  Ordinarily this would be externalised
 *
 *  And we're not running HTTPS so `isSecure` is false
 */
const UID = {
  ttl: 2419200000,
  isSecure: false, // true,
  isHttpOnly: true,
  clearInvalid: true,
  strictHeader: true,
  path: '/'
}
const BEARERTOKEN = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
const getBearerToken = (value = '') => (value.match(BEARERTOKEN) || []).shift()

export default {
  assign: 'uid',
  async method ({ state = {}, headers: { authorization } }, h) {
    let {
      uid = getBearerToken(authorization)
    } = state

    try {
      h.state('uid', uid || (uid = v4()), UID)

      return uid
    } catch (e) {
      throw Boom.badImplementation('Server error', e)
    }
  }
}
