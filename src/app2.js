var ReactDOM = require('react-dom');
var React = require('react');
class CommentBox extends React.Component{
  _getComments(){
    const commentList=[
      {id:1,author:"Morgan McCircuit from array",body:"Great picture!"},
      {id:2,author:"Bending Bender",body:"Excellent stuff"}
    ];

    return commentList.map((comment)=>{
        return (<Comment author={comment.author} body={comment.body} key={comment.id}/>)
    })
  }
  _getCommentsTitle(commentCount){
    if(commentCount==0){
      return "Not comment yet";
    }else if(commentCount==1){
      return "1 comment";
    }else{
      return commentCount+' comments'
    }
  }
  render(){
    const comments=this._getComments();
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    )
  }
}

class Comment extends React.Component{
  render(){
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">Delete comment</a>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById("story-app")
);
