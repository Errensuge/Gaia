// React
import React from 'react'
import { Link } from 'react-router-dom'

// Material Components
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

export default class ContactsPage extends React.Component {
  render () {
    if ( this.props.links ) {return (
      <ListItem component={props => <Link {...props} to={ this.props.links } />} button>
        <ListItemIcon>
          { this.props.starter }
        </ListItemIcon>
        <ListItemText inset primary={ this.props.text } />
      </ListItem>
    ) }else{ return (
      <ListItem button>
        <ListItemIcon>
          { this.props.starter }
        </ListItemIcon>
        <ListItemText inset primary={ this.props.text } />
      </ListItem>
    ) }
  }
}
