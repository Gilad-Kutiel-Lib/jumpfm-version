import { JumpFm } from 'jumpfm-api'

export const load = (jumpFm: JumpFm) =>
    jumpFm.statusBar.msg('version')
        .setType('info')
        .setText(jumpFm.package.version)
        .setTooltip('JumpFm Version')