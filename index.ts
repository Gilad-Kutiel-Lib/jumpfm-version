import { JumpFm } from 'jumpfm-api'

export const load = (jumpFm: JumpFm) => {
    jumpFm.statusBar.info('version', {
        txt: jumpFm.package.version,
        dataTitle: 'JumpFm Version'
    })
}