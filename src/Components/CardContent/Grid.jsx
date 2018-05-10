// React
import React from 'react'

// Material-UI
import { withStyles } from 'material-ui/styles'
import { Grid } from 'material-ui'

const styles = theme => ({ grid: { padding: 24 } })

class DocumentsPage extends React.Component {
  render () {
    return (
      <Grid className={ this.props.classes.grid } container alignItems='flex-start' direction='row' justify='flex-start'>
        { this.props.children }
      </Grid>
    )
  }
}

export default withStyles(styles) (DocumentsPage)
