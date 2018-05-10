// React
import React from 'react'

// Material Components
import { IconButton } from 'material-ui'

// Internal Components
import Dialog from '../../Components/FullScreenDialog'
import { Edit } from 'material-ui-icons'


export default class EditDialog extends React.Component {
  render () {
    return (
      <Dialog title='Editer un Document' starter={<IconButton color="contrast"> <Edit /> </IconButton>}>
        Edit Document
      </Dialog>
    )
  }
}
