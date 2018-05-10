// React
import React from 'react'

// Internal Components
import Dialog from '../../Components/FullScreenDialog'
import AppLink from '../../Components/MiniDrawer/AppLink'
import { Settings } from 'material-ui-icons'


export default class SettingsDialog extends React.Component {
  render () {
    return (
      <Dialog title='Préférence' starter={<AppLink text='Evénements' starter={<Settings />} />}>
        Préférence
      </Dialog>
    )
  }
}
