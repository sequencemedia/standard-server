import path from 'node:path'

/*
 *  Server
 */
export const currentDir = process.cwd()
export const clientPath = path.join(currentDir, 'client')
export const serverPath = path.join(currentDir, 'server')
export const publicPath = path.join(currentDir, 'public')

/*
 *  Server (shorthand)
 */
export const assetsPath = path.join(publicPath, 'assets')
