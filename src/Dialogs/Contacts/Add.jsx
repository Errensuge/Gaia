// React
import React from 'react'

// Material Components
import { withStyles } from 'material-ui/styles'
import { Add, Edit, Delete, FileUpload } from 'material-ui-icons'
import { IconButton, Typography, TextField, Button } from 'material-ui'

// Internal Components
import Dialog from '../../Components/FullScreenDialog'
import Card from '../../Components/CardContent'

//External Components
import classNames from 'classnames'

const styles = (theme) => ({
  divs: { height: 'calc(100% - 30px)', width: '100%', padding: '10px 20px', margin: 5, backgroundColor: '#FFF',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    '@media (max-width: 640px)': { height: '100%', width: 'calc(100% - 30px)', padding: '20px 10px', borderTop: '1px solid rgba(0, 0, 0, 0.12)' }, }
  })

  class AddDialog extends React.Component {
    render () {
      return (
        <Dialog title='Ajouter un Contact' starter={<IconButton color="contrast"> <Add /> </IconButton>}>
          <div className={ this.props.classes.divs }>
            <Card  src='https://material-ui-next.com/static/images/cards/paella.jpg' color='#D32F2F'>
              <div>
                <Typography type='headline'> Nom Prenom </Typography>
                <Typography type='subheading'> Entreprise (Rôle) </Typography>
                <Typography type='caption'> Email <br /> N° de Téléphone </Typography>
              </div>
              <div>
                <IconButton color='contrast'> <Edit /> </IconButton>
                <IconButton color='contrast'> <Delete /> </IconButton>
              </div>
            </Card>
          </div>
          <div className={ this.props.classes.divs }>
            <div>
              <TextField margin="dense" label="Nom Prénom" type="email" fullWidth />
              <TextField margin="dense" label="Entreprise" type="email" fullWidth />
              <TextField margin="dense" label="Rôle" type="email" fullWidth />
              <TextField margin="dense" label="Email" type="email" fullWidth />
              <TextField margin="dense" label="Téléphone" type="email" fullWidth />
            </div>
          </div>
        </Dialog>
      )
    }
  }

  export default withStyles(styles, { withTheme: true })(AddDialog)
