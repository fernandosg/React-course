var ReactDOM = require('react-dom');
var React = require('react');

class StoryBox extends React.Component{
  render(){
    const now=new Date();
    return( <div>
        <h3>Storybox</h3>
        <p className="lead">
          {now.toTimeString()}
        </p>
        </div> );
  }
}

ReactDOM.render(
  <StoryBox />,
  document.getElementById("story-app")
);
