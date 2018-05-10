// React
import React from 'react'

// Material-UI
import { Typography,  IconButton } from 'material-ui'
import { Delete } from 'material-ui-icons'

// Internal Components
import Grid from '../../Components/CardContent/Grid'
import Card from '../../Components/CardContent'
import EditDialog from '../../Dialogs/Contacts/Edit'

export default class ContactsPage extends React.Component {
  render () {
    return (
      <Grid>
        <Card src='https://material-ui-next.com/static/images/cards/paella.jpg' color='#D32F2F'>
          <div>
            <Typography type='headline'> Nom Prenom </Typography>
            <Typography type='subheading'> Entreprise (Rôle) </Typography>
            <Typography type='caption'> Email <br /> N° de Téléphone </Typography>
          </div>
          <div>
            <EditDialog />
            <IconButton color='contrast'> <Delete /> </IconButton>
          </div>
        </Card>
      </Grid>
    )
  }
}
