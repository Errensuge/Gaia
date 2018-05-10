// React
import React from 'react'

// Material-UI
import { IconButton, Typography } from 'material-ui'
import { Delete } from 'material-ui-icons'

// Internal Components
import Grid from '../../Components/CardContent/Grid'
import Card from '../../Components/CardContent'
import EditDialog from '../../Dialogs/Documents/Edit'
import DisplayDialog from '../../Dialogs/Documents/Display'

export default class DocumentsPage extends React.Component {
  render () {
    return (
      <Grid>
          <Card src='https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg' color='#1565C0'>
            <div>
              <Typography type='headline'> Titre </Typography>
              <Typography type='caption'> Description </Typography>
            </div>
            <div>
              <DisplayDialog />
              <EditDialog />
              <IconButton color='contrast'> <Delete /> </IconButton>
            </div>
          </Card>
      </Grid>
    )
  }
}
