// React
import React from 'react'

// Material Components
import { withStyles } from 'material-ui/styles'
import { Dialog, AppBar, Toolbar, Typography, IconButton } from 'material-ui'
import { Close } from 'material-ui-icons'

const styles = (theme) => ({
  appBar: { position: 'relative' }, flex: { flex: 1 },
  content: { width: '100%', height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'row', backgroundColor: '#00635A', overflow: 'scroll',
             '@media (max-width: 640px)': { flexDirection: 'column' } }
})

class FullScreenDialog extends React.Component {
  state = { open: false }
  handleClick = () => { ( this.state.open == false ) ? this.setState({ open: true }) : this.setState({ open: false }); }
  render () {
    return (
      <main>
        <div onClick={ this.handleClick }>
          { this.props.starter }
        </div>
        <Dialog fullScreen open={ this.state.open } onClose={ this.handleClick } >
          <AppBar className={ this.props.classes.appBar }>
            <Toolbar>
              <IconButton color="contrast" onClick={ this.handleClick } aria-label="Close"> <Close /> </IconButton>
              <Typography type="title" color="inherit" className={ this.props.classes.flex }> { this.props.title } </Typography>
            </Toolbar>
          </AppBar>
          <div className={ this.props.classes.content }>
            { this.props.children }
          </div>
        </Dialog>
      </main>
    )
  }
}

export default withStyles(styles)(FullScreenDialog);
