import path from 'path'

/*
 *  Server
 */
export const modulePath = process.cwd()

const clientPath = path.join(modulePath, 'client')
const publicPath = path.join(modulePath, 'public')

/*
 *  Gulp
 */
export const sourcePath = path.join(clientPath, 'assets')
export const targetPath = path.join(publicPath, 'assets')
