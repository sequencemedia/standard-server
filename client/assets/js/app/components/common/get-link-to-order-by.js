import getLinkTo from './get-link-to'

export default (feedType = '', orderBy = '') => `${getLinkTo(feedType)}/${orderBy}`
