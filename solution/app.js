import React from 'react';
import ReactDOM from 'react-dom';

class Twitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
    this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }
  loadTweetsFromServer() {
    // GET updated set of tweets from database
    $.get(this.props.url, (data) => {
        this.setState({ data });
      }
    );
  }
  handleTweetSubmit(author, text) {
    const tweet = { author, text };

    // POST to add tweet to database
    $.post(this.props.url, tweet, (data) => {
        this.setState({ data });
      }
    );
  }
  componentDidMount() {
    // Set this.state.data to most recent set of tweets from database
    this.loadTweetsFromServer();
  }
  render() {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm onTweetSubmit={ this.handleTweetSubmit } />
        <TweetList tweets={ this.state.data } />
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

    // Get new author and text from the input fields
    const author = this.refs.author.value;
    const text = this.refs.text.value;

    // Do nothing if either input field is blank
    if (!text || !author) {
      return;
    }

    // Send new author and text up one level to Twitter component
    // so updated tweets can be passed down again into TweetList component
    this.props.onTweetSubmit(author, text);

    // Set input fields back to empty
    this.refs.author.value = '';
    this.refs.text.value = '';
  }
  render() {
    return (
      <form className="tweetForm" onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="Author Name" ref="author" />
        <input type="text" placeholder="Tweet" ref="text" />
        <button type="submit" className="btn btn-info">Tweet</button>
      </form>
    );
  }
}

class TweetList extends React.Component {
  render() {
    const tweetData = this.props.tweets;
    const tweetNodes = tweetData.map((tweet, idx) => {
      return <Tweet key={ idx } author={ tweet.author } text={ tweet.text } />
    });

    return (
      <div className="tweetList">
        { tweetNodes }
      </div>
    );
  }
}

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <h2>{ this.props.text }</h2>
        <span> - { this.props.author }</span>
      </div>
    );
  }
};

ReactDOM.render(
  <Twitter url="tweets.json" />,
  document.getElementById('tweets')
);
