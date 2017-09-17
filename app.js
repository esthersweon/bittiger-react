import React from 'react';
import ReactDOM from 'react-dom';

class Twitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweets: [] };
    this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
    // this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }
  loadTweetsFromServer() {
    // GET updated set of tweets from database
    $.get(this.props.url, (fetchedTweets) => {
        // Set state in step 6 of the exercise!
        this.setState({ tweets: fetchedTweets })
      }
    );
  }
  // handleTweetSubmit(author, text) {
  //   const tweet = { author, text };
  //
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, (data) => {
  //       // Set state in step 10 of the exercise!
  //     }
  //   );
  // }
  componentDidMount() {
    // Set this.state.data to most recent set of tweets from database
    this.loadTweetsFromServer();
  }
  render() {
    return (
      <div className="twitter">
        <h1>These are my tweets!</h1>
        <TweetForm/>
        <TweetList data={ this.state.tweets } />
      </div>
    );
  }
}

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const authorInput = this.refs.author.value;
    const tweetInput = this.refs.tweet.value;
    alert("You submitted the form! " + authorInput + " " + tweetInput);
  }
  render() {
    return (
      <form className="tweetForm" onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="Author Name" ref="author"/>
        <input type="text" placeholder="Tweet" ref="tweet"/>
        <button className="btn btn-info">Add Tweet</button>
      </form>
    );
  }
}

class TweetList extends React.Component {
  render() {
    const tweets = this.props.data.map(function(datum) {
      // first datum: {
      //     "author": "Michael Scott",
      //     "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
      // }

      // second datum: {
      //     "author": "Jeff Bezos",
      //     "text": "In the end, we are our choices."
      // }
      return <Tweet author={ datum.author } text={ datum.text }/>;
    });

    // ES6
    // const tweets = this.props.data.map(datum => <Tweet/>);

    return (
      <div className="tweetList">
        { tweets }
      </div>
    );
  }
}

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <h1>{ this.props.text }</h1>
        <p>- { this.props.author }</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Twitter url="tweets.json" />,
  document.getElementById('tweets')
);
