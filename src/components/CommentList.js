import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments(){
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    });
  }

  render(){
    return (
      <div>
        <h1>Comment List</h1>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comment
  }
}

export default connect(mapStateToProps)(CommentList);
