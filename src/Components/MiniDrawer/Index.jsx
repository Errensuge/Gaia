// React
import React from 'react'

// Material Components
import { withStyles } from 'material-ui/styles'
import { AppBar, Drawer, Toolbar, List, Divider, IconButton, Avatar, Typography } from 'material-ui'
import { Menu, ChevronRight, ChevronLeft } from 'material-ui-icons'
import { CardHeader } from 'material-ui/Card';

// External Components
import classNames from 'classnames'


const styles = (theme) => ({
  root: { position: 'absolute', width: '100%', height: '100%', zIndex: 1, overflow: 'hidden' },
  appFrame: { position: 'relative', display: 'flex', width: '100%', height: '100%' },
   // AppBar
  appBar: { position: 'absolute', zIndex: theme.zIndex.navDrawer + 1, transition: theme.transitions.create(['width', 'margin'], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen }) },
  appBarShift: { marginLeft: 200, width: `calc(100% - ${200}px)`, transition: theme.transitions.create(['width', 'margin'], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.enteringScreen }) },
  menuButton: { marginLeft: 12, marginRight: 36 },
  appBarTitle: { flex: 1 }, appBarAction: { marginRight: 10 },
   // Drawer
  drawerPaper: { position: 'relative', height: '100%', width: 200, transition: theme.transitions.create('width', { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.enteringScreen }) },
  drawerPaperClose: { width: 60, overflowX: 'hidden', transition: theme.transitions.create('width', { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen }) },
  drawerInner: { width: 240 },
  drawerHeader: { display: 'flex', alignItems: 'center', padding: '0 8px', ...theme.mixins.toolbar },
  drawerHeaderCard: { flex: 1, padding: 0, '& > div > span': { lineHeight: '1em' },  '& > div > span:first-child': { marginTop: 5 } },
   // Content
  content: { width: '100%', flexGrow: 1, backgroundColor: theme.palette.background.default, height: 'calc(100% - 45px)', marginTop: 45 }
})

class MiniDrawer extends React.Component {
  // State
  state = { open: false }
  handleDrawer = () => { (this.state.open == false) ? this.setState({ open: true }) : this.setState({ open: false }) }
  // Render
  render () { return (
    <div className={ this.props.classes.root }>
      <div className={ this.props.classes.appFrame }>
        <AppBar className={ classNames(this.props.classes.appBar, this.state.open && this.props.classes.appBarShift) }>
          <Toolbar disableGutters={ !this.state.open }>
            <IconButton color="contrast" aria-label="Open Drawer" onClick={ this.handleDrawer } className={ classNames(this.props.classes.menuButton, this.state.open && this.props.classes.hide) }>
              <Menu />
            </IconButton>
            <Typography className={ this.props.classes.appBarTitle } type="title" color="inherit" noWrap>
              { this.props.title }
            </Typography>
            <div className={ this.props.classes.appBarAction }> { this.props.children[2] } </div>
          </Toolbar>
        </AppBar>
        <Drawer type="permanent" classes={{ paper: classNames(this.props.classes.drawerPaper, !this.state.open && this.props.classes.drawerPaperClose) }} open={ this.state.open }>
          <div className={ this.props.classes.drawerInner }>
            <div className={ this.props.classes.drawerHeader }>
              { this.props.user && <CardHeader avatar={ <Avatar alt="Utilisateur" src={ this.props.user.picture } /> } title={ this.props.user.name } subheader={ this.props.user.role } className={ this.props.classes.drawerHeaderCard } /> }
              { !this.props.user && <div className={ this.props.classes.drawerHeaderCard }></div> }
              <IconButton onClick={ this.handleDrawer }>
                { this.props.theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft /> }
              </IconButton>
            </div>
            <Divider />
            <List className={ this.props.classes.list }>
              { this.props.children[1] }
            </List>
          </div>
        </Drawer>
        <main className={ this.props.classes.content }>
          { this.props.children[0] }
        </main>
      </div>
    </div>
  )}
}

export default withStyles(styles, { withTheme: true })(MiniDrawer)
