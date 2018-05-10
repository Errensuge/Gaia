// React
import React from 'react'

// Material-UI
import { withStyles } from 'material-ui/styles'
import { Grid, Divider, Card } from 'material-ui'
import { CardActions, CardContent, CardMedia } from 'material-ui/Card'

const styles = theme => ({
  card: { maxWidth: 300, minWidth: 215, border: '1px solid rgba(0, 0, 0, 0.12)' },
  media: { height: 200 },
  flex: { flex: '1 1 auto' },
  actions: {
    '& *': { display: 'flex' }
  }
})

class DocumentsPage extends React.Component {
  render () {
    return (
        <Grid item>
          <Card className={ this.props.classes.card }>
            <CardMedia className={ this.props.classes.media } image={ this.props.src } />
            <CardContent>
              { this.props.children[0] }
            </CardContent>
            <Divider />
            <CardActions style={ {background: this.props.color} } className={ this.props.classes.actions }>
              <div className={ this.props.classes.flex } />
              { this.props.children[1] }
            </CardActions>
          </Card>
        </Grid>
    )
  }
}

export default withStyles(styles) (DocumentsPage)
