import path from 'path'

/*
 *  Server
 */
export const modulePath = process.cwd()
export const clientPath = path.resolve(modulePath, 'client')
export const serverPath = path.resolve(modulePath, 'server')
export const publicPath = path.resolve(modulePath, 'public')

/*
 *  Server (shorthand)
 */
export const assetsPath = path.resolve(publicPath, 'assets')
