var ReactDOM = require('react-dom');
var React = require('react');

class StoryBox extends React.Component{
  render(){
    const topicsList=["HTML","Javascript","React"];
    return( <div>
          <ul>
            {topicsList.map(topic=><li>{topic}</li>)}
          </ul>
        </div> );
  }
}


ReactDOM.render(
  <StoryBox />,
  document.getElementById("story-app")
);
