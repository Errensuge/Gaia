// React
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

// Internal Components
import MiniDrawer from './Components/MiniDrawer'
import AppLink from './Components/MiniDrawer/AppLink'
import SettingsDialog from './Dialogs/Settings'

// Material Components
import { List, Divider } from 'material-ui'
import { People, Description, Chat, AccessTime } from 'material-ui-icons'

// Material Theme
import { teal, blueGrey } from 'material-ui/colors'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
const theme = createMuiTheme({ palette: {
  primary: teal, accent: blueGrey, },
  mixins: { toolbar: { minHeight: 45, }, },
  shadows: ['','','','','','','','','','','','','','','','','','','','','','','','','']
})

// Pages & Actions
import Contacts from './Pages/Contacts'
import Actions_Contact from './Pages/Contacts/Actions'
import Documents from './Pages/Documents'
import Documents_Contact from './Pages/Documents/Actions'
import Emails from './Pages/Emails'
import Emails_Contact from './Pages/Emails/Actions'
import Events from './Pages/Events'
import Events_Contact from './Pages/Events/Actions'

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <MiniDrawer title='Ovrech' user={ { name: 'NOM Prenom', role: 'Role', picture: 'https://material-ui-next.com/static/images/uxceo-128.jpg' } }>
            <Switch>
              <Route path='/cnt' component={ Contacts } />
              <Route path='/dct' component={ Documents } />
              <Route path='/eml' component={ Emails } />
              <Route path='/cld' component={ Events } />
              <Redirect from="*" to="/cnt"/>
            </Switch>
            <List>
              <AppLink text='Contacts' links='/cnt' starter={<People />} />
              <AppLink text='Documents' links='/dct' starter={<Description />} />
              <AppLink text='Emails' links='/eml' starter={<Chat />} />
              <AppLink text='Evénements' links='/cld' starter={<AccessTime />} />
              <Divider />
              <SettingsDialog />
            </List>
            <Switch>
              <Route path='/cnt' component={ Actions_Contact } />
              <Route path='/dct' component={ Documents_Contact } />
              <Route path='/eml' />
              <Route path='/cld' component={ Events_Contact } />
              <Redirect from="*" to="/cnt"/>
            </Switch>
          </MiniDrawer>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}
