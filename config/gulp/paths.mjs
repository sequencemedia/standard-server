import path from 'node:path'

/*
 *  Gulp
 */
export const currentDir = process.cwd()
export const sourcePath = path.join(currentDir, 'client/assets')
export const targetPath = path.join(currentDir, 'public/assets')
