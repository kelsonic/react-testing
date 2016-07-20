import React, {Component} from 'react';

export default class CommentBox extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };
  }

  render() {
    return (
      <div className="comment-box">
        <textarea 
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} 
        />
        <button>Create</button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }
}