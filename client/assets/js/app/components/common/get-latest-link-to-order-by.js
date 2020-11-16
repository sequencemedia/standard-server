import getLatestLinkTo from './get-latest-link-to'

export default (feedType = '', orderBy = '') => `${getLatestLinkTo(feedType)}/${orderBy}`
