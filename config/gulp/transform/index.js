import debug from 'debug'

import glob from 'glob-all'

import {
  readFile,
  writeFile
} from 'fs/promises'

import {
  version
} from '~/package'

const log = debug('@sequencemedia:config:gulp:transform')

log('`@sequencemedia:config:gulp:transform` is awake')

const JAVASCRIPTS = /(assets\/javascripts\/.*-)\d+\.\d+\.\d+(.js)/g
const STYLESHEETS = /(assets\/stylesheets\/.*-)\d+\.\d+\.\d+(.css)/g

const getFileData = async (filePath) => readFile(filePath, 'utf8')
const setFileData = async (filePath, fileData) => writeFile(filePath, fileData, 'utf8')

const getFilePathList = () => new Promise((resolve, reject) => glob(['./server/views/*.html', './server/views/**/*/*.html'], (e, a) => !e ? resolve(a) : reject(e)))
const setFilePathList = (filePathList) => Promise.all(filePathList.map(async (filePath) => setFileData(filePath, (await getFileData(filePath)).replace(JAVASCRIPTS, `$1${version}$2`).replace(STYLESHEETS, `$1${version}$2`))))

export async function transform () {
  log('transform')

  const filePathList = await getFilePathList()

  return setFilePathList(filePathList)
}

export default transform
