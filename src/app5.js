var ReactDOM = require('react-dom');
var React = require('react');
var $=require("jquery");
class CommentBox extends React.Component{

  constructor(){
    super();
    this.state={
      showComments:false,
      comments:[
        {id:1,author:"Morgan McCircuit from array",body:"Great picture!"},
        {id:2,author:"Bending Bender",body:"Excellent stuff"}
      ]
    };
  }


  _fetchComments(){
    /*
    $.ajax({
      method:"GET",
      url:"/api/comments",
      success:(comments)=>{
        this.setState({comments})
      }
    })*/
  }
  //This method is called before the render event is called.
  componentWillMount(){
    _fetchComments();
  }

  //This method is called after the render methid is called
  componentDidMount(){
    this._timer=setInterval(()=>this._fetchComments(),5000);
  }

  componenttWillUnmount(){
    clearInterval(this._timer);
  }

  _deleteComment(comment){
    /*
    $.ajax({
    method:"DELETE",
    url:"/api/comments/"+comment.id
  })
  */

  const comments=[...this.state.comments];
  const commentIndex=comments.indexOf(comments);
  comments.splice(commentIndex,1);
  this.setState({comments});
}

_getComments(){
  return this.state.comments.map((comment)=>{
    return (<Comment key={comment.id} comment={comment} onDelete={this._deleteComment.bind(this)}/>)
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
_handleClick(){
  this.setState({showComments:!this.state.showComments})
}

_addComment(author, body){

  const comment={
    id:this.state.comments.length+1,
    author,
    body
  }
  this.setState({comments:this.state.comments.concat([comment])});

  /*
  const comment={author,body};
  $.ajax({
  method:"POS",
  url:"/api/comments"
  data:{comment:comment}
}).success(newComment=>{
})
this.setState({comments:this.state.comments.concat([newComment])})
*/
};
render(){
  const comments=this._getComments();
  let commentNodes;
  if(this.state.showComments){
    commentNodes= <div className="comment-list">{comments}</div>
  }
  let buttonText;
  if(this.state.showComments){
    buttonText="Hide comments";
  }else{
    buttonText="Show comments";
  }
  return(
    <div className="comment-box">
    <CommentForm addComment={this._addComment.bind(this)} />
    <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
    <h3>Comments</h3>
    <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
    {commentNodes}
    </div>
  )
}
}


class CommentForm extends React.Component{
  render(){
    return(
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
      <label>Join the discussion</label>
      <div className="comment-form-fields">
      <input placeholder="Name:" ref={(input)=>this._author=input}/>
      <textarea placeholder="Comment:" ref={(textarea)=>this._body=textarea}></textarea>
      </div>
      <div className="comment-form-actions">
      <button type="submit">Post comment</button>
      </div>
      </form>
    )
  }
  _handleSubmit(event){
    event.preventDefault();
    let author=this._author;
    let body=this._body;
    this.props.addComment(author.value,body.value);
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
      <a href="#" className="comment-footer-delete" onClick={this._handleDelete.bind(this)}>Delete comment</a>
      </div>
      </div>
    )
  }

  _handleDelete(event){
    event.preventDefault();
    if(confirm("¿Are you sure?"))
    this.props.onDelete(this.props.comment);
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById("story-app")
);
