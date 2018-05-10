// React
import React from 'react'

// Material-UI
import { withStyles } from 'material-ui/styles'
import { Grid, List, IconButton, Paper, Avatar } from 'material-ui'
import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import { ChevronRight, ChevronLeft, Edit, Done, Attachment } from 'material-ui-icons'

// Internal Component
import AddDialog from '../../Dialogs/Emails/Add'

// External Components
import classNames from 'classnames'

const styles = (theme) => ({
  global: { height: '100%', display: 'inline-flex' },
  contacts: { height: '100%', width: 150, backgroundColor: '#EEEEEE', borderRight: '1px solid rgba(0, 0, 0, 0.12)',  display: 'flex', flexDirection: 'column',
    '@media (max-width: 1011px)' : { minWidth: 'auto', maxWidth: 60 },
    '& > ul > li': { borderTop: '1px solid rgba(0, 0, 0, 0.12)', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', backgroundColor: '#F5F5F5', marginBottom: 5 }, },
  mails: { display: 'flex', flexDirection: 'column', height: '100%', zIndex: 2, backgroundColor: '#FAFAFA', },
  chevron: { display: 'flex', justifyContent: 'right', '@media (max-width: 1011px)' : { justifyContent: 'center' } },
  add: { display: 'flex', justifyContent: 'center' },
  mini: {
      '@media (min-width: 1011px)' : { '& > ul > li > div > h3, & > ul > li > div > p': { display: 'none' }, minWidth: 'auto', maxWidth: 60, '& > ul > li': { paddingLeft: 12 } },
      '@media (max-width: 1011px)' : { '& > ul > li': { display: 'none' }, minWidth: 'auto', maxWidth: 30, } },
  lists: { height: '100%', overflow: 'scroll' },
  mail: { margin: '15px 45px 15px 10px', border: '1px solid rgba(0, 0, 0, 0.12)', width: '80%' },
  left: { marginLeft: '10%' },
  mailContent: { padding: 10, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' },
  mailAttr: { padding: 2, paddingRight: 5, paddingLeft: 5, textAlign: 'right' },
  edit: { height: 228, width: 'calc(100% - 10px)', zIndex: 3, padding: 5, borderTop: '1px solid rgba(0, 0, 0, 0.12)', backgroundColor: '#FFF', display: 'none',
        '& > textarea': { width: 'calc(100% - 15px)', height: 'calc(100% - 15px)', resize: 'none', border: '1px solid rgba(0, 0, 0, 0.12)', padding: 5 } },
  actived: { display: 'inherit' },
  editIcon: { position: 'fixed', width: 32, height: 32, margin: '8px 5px', right: 0, borderRadius: 0, backgroundColor: '#FFFF', border: '1px solid rgba(0, 0, 0, 0.12)' },
  sendIcon: { position: 'absolute', width: 48, height: 48, right: 5, bottom: 0, border: 'none' },
  fileIcon: { position: 'absolute', width: 48, height: 48, right: 45, bottom: 0, border: 'none' } })

      class EmailsPage extends React.Component {
        state = { minified: false, actived: false }
        handleList = () => { (this.state.minified == false) ? this.setState({ minified: true }) : this.setState({ minified: false }) }
        handleEdit = () => { (this.state.actived == false) ? this.setState({ actived: true }) : this.setState({ actived: false }) }
        render () {
          return (
            <div className={ this.props.classes.global }>
              <div className={ classNames(this.props.classes.contacts, this.state.minified && this.props.classes.mini) }>
                <div className={ this.props.classes.chevron }> <IconButton onClick={ this.handleList } > { this.state.minified ? <ChevronRight /> : <ChevronLeft /> } </IconButton> </div>
                <List dense={ true }>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="E" src="https://material-ui-next.com/static/images/remy.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary='Subject' secondary='Sender' />
                  </ListItem>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="E" src="https://material-ui-next.com/static/images/remy.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary='Subject' secondary='Sender' />
                  </ListItem>
                </List>
                <div className={ this.props.classes.add }> <AddDialog /> </div>
              </div>
              <div className={ this.props.classes.mails }>
                <IconButton className={ this.props.classes.editIcon } onClick={ this.handleEdit } >
                  <Edit />
                </IconButton>
                <div className={ this.props.classes.lists }>
                  <Paper className={ this.props.classes.mail } elevation={0}>
                    <div className={ this.props.classes.mailContent }> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vulputate lacus. Phasellus interdum viverra diam vel placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus libero libero, scelerisque non lectus consectetur, finibus congue velit. Praesent ut euismod ex. Etiam at gravida nisl. Sed aliquam ipsum non libero congue, vitae vestibulum lectus ultrices. Integer et nunc purus. Donec egestas aliquam sodales.Etiam pulvinar suscipit rutrum. Quisque malesuada felis a massa rhoncus dignissim. Pellentesque eget euismod arcu. Sed condimentum, elit ac volutpat sollicitudin, tellus metus faucibus lorem, id tempus dolor sem et purus. Phasellus pharetra, libero quis laoreet fermentum, quam felis sagittis nunc, sit amet varius orci eros sit amet nisl. Donec mollis dolor at dolor lacinia ultricies. Integer ornare nibh a tempus interdum. Cras orci lacus, finibus a ipsum ut, ultrices gravida risus. </div>
                    <div className={ this.props.classes.mailAttr }> Aucun fichier associé - 12/07/2014 </div>
                  </Paper>
                  <Paper className={ classNames(this.props.classes.mail, this.props.classes.left) } elevation={0}>
                    <div className={ this.props.classes.mailContent }> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vulputate lacus. Phasellus interdum viverra diam vel placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus libero libero, scelerisque non lectus consectetur, finibus congue velit. Praesent ut euismod ex. Etiam at gravida nisl. Sed aliquam ipsum non libero congue, vitae vestibulum lectus ultrices. Integer et nunc purus. Donec egestas aliquam sodales.Etiam pulvinar suscipit rutrum. Quisque malesuada felis a massa rhoncus dignissim. Pellentesque eget euismod arcu. Sed condimentum, elit ac volutpat sollicitudin, tellus metus faucibus lorem, id tempus dolor sem et purus. Phasellus pharetra, libero quis laoreet fermentum, quam felis sagittis nunc, sit amet varius orci eros sit amet nisl. Donec mollis dolor at dolor lacinia ultricies. Integer ornare nibh a tempus interdum. Cras orci lacus, finibus a ipsum ut, ultrices gravida risus. </div>
                    <div className={ this.props.classes.mailAttr }> Aucun fichier associé - 12/07/2014 </div>
                  </Paper>
                </div>
                <div className={ classNames(this.props.classes.edit, this.state.actived && this.props.classes.actived) }>
                  <textarea />
                  <IconButton className={ this.props.classes.sendIcon }>
                    <Done />
                  </IconButton>
                  <IconButton className={ this.props.classes.fileIcon }>
                    <Attachment />
                  </IconButton>
                </div>
              </div>
            </div>
          )
        }
      }

      export default withStyles(styles, { withTheme: true })(EmailsPage)
