import getLinkTo from './get-link-to'

export default (linkTo = '', orderBy = '') => `${getLinkTo(linkTo)}/${orderBy}`
