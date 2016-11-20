var ReactDOM = require('react-dom');
var React = require('react');

class StoryBox extends React.Component{
  render(){
    return( <div>Storybox</div> );
  }
}

ReactDOM.render(
  <StoryBox />,
  document.getElementById("story-app")
);
