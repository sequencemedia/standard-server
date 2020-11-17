import path from 'path'

/*
 *  Server
 */
export const modulePath = process.cwd()
export const clientPath = path.join(modulePath, 'client')
export const serverPath = path.join(modulePath, 'server')
export const publicPath = path.join(modulePath, 'public')

/*
 *  Server (shorthand)
 */
export const assetsPath = path.join(publicPath, 'assets')
