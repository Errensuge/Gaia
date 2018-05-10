// React
import React from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'

// Material Components
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import { IconButton } from 'material-ui'

// Internal Components
import Dialog from '../../Components/FullScreenDialog'
import { RemoveRedEye } from 'material-ui-icons'

const styles = (theme) => ({
  pdf: { width: '100%', overflow: 'scroll', paddingTop: '20px' },
  page: { padding: '0px 0px 20px 0px', '& > *': { margin: '0px auto' } },
})

class EditDialog extends React.Component {
  state = { numPages: null, pageNumber: 1, }
  onDocumentLoad = ({ numPages }) => { this.setState({ numPages }); }
  render () {
    const { pageNumber, numPages } = this.state;
    const file = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
    return (
      <Dialog title='Afficher un Document' starter={<IconButton color="contrast"> <RemoveRedEye /> </IconButton>}>
        <div className={ this.props.classes.pdf }>
          <Document file={ file } loading='' onLoadSuccess={ this.onDocumentLoad }>
            {
                Array.from(
                  new Array(numPages),
                  (el, index) => ( <Page key={`page_${index + 1}`} pageNumber={index + 1} className={ this.props.classes.page }/> ),
                )
              }
          </Document>
        </div>
      </Dialog>
    )
  }
}

export default withStyles(styles, { withTheme: true })(EditDialog)
