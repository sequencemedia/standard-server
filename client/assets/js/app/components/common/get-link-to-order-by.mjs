import getLinkTo from './get-link-to.mjs'

export default (feedType = '', orderBy = '') => `${getLinkTo(feedType)}/${orderBy}`
