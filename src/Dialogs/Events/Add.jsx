// React
import React from 'react'

// Material Components
import { IconButton } from 'material-ui'

// Internal Components
import Dialog from '../../Components/FullScreenDialog'
import { Add } from 'material-ui-icons'


export default class AddDialog extends React.Component {
  render () {
    return (
      <Dialog title='Ajouter un Evénement' starter={<IconButton color="contrast"> <Add /> </IconButton>}>
        Add Event
      </Dialog>
    )
  }
}
