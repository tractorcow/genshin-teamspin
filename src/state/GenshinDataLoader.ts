import genshindb, { genshinDbType } from '../lib/genshindb'
import type { Language } from 'genshin-db'
import { useEffect, useState } from 'react'
import axios from 'axios'
import pako from 'pako'

const files = [
  'https://cdn.jsdelivr.net/gh/theBowja/genshin-db-dist@main/data/gzips/english-characters.min.json.gzip',
]

const loadFile = async (url: string) => {
  try {
    // Download the gzip file
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    })

    if (response.status !== 200) {
      console.error(`Failed to download file, status code: ${response.status}`)
      return
    }

    // Unzip the downloaded file using pako
    const unzippedArrayBuffer = pako.inflate(new Uint8Array(response.data))
    const textString = new TextDecoder().decode(unzippedArrayBuffer)

    // Parse JSON content to a JavaScript object
    const jsonObj = JSON.parse(textString)
    genshindb.addData(jsonObj)
    return jsonObj
  } catch (error) {
    console.error(`An error occurred: ${error}`)
  }
}

export interface UseGetshinDataLoaderHook {
  genshindb: genshinDbType
  loading: boolean
}

const useGenshinDataLoader = (): UseGetshinDataLoaderHook => {
  const [loading, setLoading] = useState(true)
  genshindb.setOptions({ queryLanguages: ['English' as Language.English] })

  // Load all the files
  useEffect(() => {
    Promise.all(files.map((file) => loadFile(file))).then(() =>
      setLoading(false)
    )
  }, [])

  return { genshindb, loading }
}

export default useGenshinDataLoader
