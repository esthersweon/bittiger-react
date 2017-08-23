import React from 'react';
import ReactDOM from 'react-dom';

const arrOfTweets = [
  {
      "author": "Michael Scott",
      "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
  },
  {
      "author": "Jeff Bezos",
      "text": "In the end, we are our choices."
  }
];

class Twitter extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
    // this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
    // this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }
  // loadTweetsFromServer() {
  //   // GET updated set of tweets from database
  //   $.get(this.props.url, (data) => {
  //       // Set state in step 6 of the exercise!
  //     }
  //   );
  // }
  // handleTweetSubmit(author, text) {
  //   const tweet = { author, text };
  //
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, (data) => {
  //       // Set state in step 10 of the exercise!
  //     }
  //   );
  // }
  // componentDidMount() {
  //   // Set this.state.data to most recent set of tweets from database
  //   this.loadTweetsFromServer();
  // }
  render() {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        {/* Render TweetForm component here */}
        {/* Render TweetList component here */}
      </div>
    );
  }
}

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleSubmit(e) {}
  render() {
    return (
      <form className="tweetForm">
        {/* Render some text here */}
      </form>
    );
  }
}

class TweetList extends React.Component {
  render() {
    return (
      <div className="tweetList">
        {/* Render some text here */}
      </div>
    );
  }
}

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        {/* Render some text here */}
      </div>
    );
  }
}

ReactDOM.render(
  <Twitter />,
  document.getElementById('tweets')
);
