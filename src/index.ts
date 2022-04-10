
import type { Plugin, ResolvedConfig } from 'vite'
import { rm, readdir } from 'fs/promises'
import { resolve } from 'path'

export function IgnorePublicPlugin(): Plugin {
  let config: ResolvedConfig

  return {
    name: 'vite-plugin-ignore-public',
    configResolved(_config) {
      config = _config
    },
    buildEnd() {
      readdir(resolve(__dirname, config.publicDir)).then(
        files => {
          for (const file of files) {
            rm(
              resolve(`${config.build.outDir}/${file}`),
              { recursive: true }
            )
          }
        }
      )
    }
  }
}
