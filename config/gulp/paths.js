import path from 'path'

/*
 *  Server
 */
export const modulePath = process.cwd()

const clientPath = path.resolve(modulePath, 'client')
const publicPath = path.resolve(modulePath, 'public')

/*
 *  Gulp
 */
export const sourcePath = path.resolve(clientPath, 'assets')
export const targetPath = path.resolve(publicPath, 'assets')
