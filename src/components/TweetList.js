import React from 'react';
import styles from './TweetList.css';
import SingleTweet from './SingleTweet';

const TweetList = (props) => (
    <div className={styles.tweetList}>
        {
            props.tweets.length === 0 ?
            <p className={styles.noTweets}>There are no tweets available</p> :
            props.tweets.map(tweet => <SingleTweet key={tweet.id} tweet={tweet} />)
        }
    </div>
);

export default TweetList;