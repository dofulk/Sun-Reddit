import React, { useEffect } from 'react';
import './Surface.css';
import CommentList from '../CommentList/CommentList';
import { Divider, TextField, Paper, Box, Button } from '@material-ui/core/';
import { connect } from 'react-redux';
import { addComment } from '../../redux//actions/actions'

export class Surface extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }


  handleChange = (event) => { this.setState({ value: event.target.value }); }

  submit = (comment) => {
    this.props.addComment(comment)
      this.state.value = ''

  }
  render() {
    return (

      <Paper className="Surface">
        <h1>{this.props.title}</h1>
        <Box className="Body">
          {this.props.body}

        </Box>
        <Box className="Divider">
          <Divider />
        </Box>

        <Box className="Comments">
          <CommentList className="CommentList" comments={this.props.comments || []} />
        </Box>
        <Box className="Submit">
          <TextField variant="filled" value={this.state.value} onChange={this.handleChange} className="TextField"/>
          {/* <Button
            variant="contained"
            color="secondary"

            onClick={() => this.submit({
              key: 2,
              comment: this.state.value
            })}

          >Submit</Button> */}
        </Box>
      </Paper>
    )
  }
}

const mapDispatchToProps = {
  addComment
};


export default connect(null, mapDispatchToProps)(Surface)