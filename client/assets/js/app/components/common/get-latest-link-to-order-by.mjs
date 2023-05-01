import getLatestLinkTo from './get-latest-link-to.mjs'

export default (feedType = '', orderBy = '') => `${getLatestLinkTo(feedType)}/${orderBy}`
