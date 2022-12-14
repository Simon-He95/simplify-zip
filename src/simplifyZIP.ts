import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { toBase64 } from 'lazy-js-utils'
export async function simplifyZIP(options: Record<string, any>) {
  const zip = await generateZip(options)
  zip.generateAsync({ type: 'blob' }).then((content: Blob) => saveAs(content, 'example.zip'))
}

function generateZip(options: Record<string, any>, zip = new JSZip(), tasks: Promise<any>[] = []) {
  tasks.push(new Promise((resolve) => {
    let count = 0
    Object.keys(options).map(async (key) => {
      const { type, content } = options[key]
      if (type === 'folder')
        generateZip(content, zip.folder(key)!, tasks)
      else if (type === 'image')
        resolve(zip.file(key, (await toBase64(content) as string).split(',')[1], { base64: true }))
      else zip.file(key, content)
      count++
    })
    if (count === Object.keys(options).length)
      resolve(zip)
  }))
  return Promise.all(tasks).then(() => zip)
}

