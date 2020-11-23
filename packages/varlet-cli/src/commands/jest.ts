import { runCLI } from 'jest'
import { resolve } from 'path'
import { CWD, JEST_CONFIG, SRC_DIR } from '../shared/constant'

export async function jest(cmd: { component?: string }) {
  const rootDir = cmd.component ? resolve(SRC_DIR, cmd.component) : CWD

  const config = {
    rootDir,
    config: JEST_CONFIG,
  }
  await runCLI(config as any, [CWD])
}