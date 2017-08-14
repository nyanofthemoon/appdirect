import React from 'react';
import styles from './SingleTweet.css';
import classnames from 'classnames';
import moment from 'moment';
import tt from 'twitter-text';

const getTweetAgo = (tweet) => moment(tweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY').fromNow();
const getTweetUrl = (tweet) => `https://twitter.com/statuses/${tweet.id_str}`;

const SingleTweet = (props) => {
    const {tweet} = props;
    
    const isRetweet = !!tweet.retweeted_status;
    
    const className = classnames({
        [styles.singleTweet]: true,
        [styles.retweet]: isRetweet
    })
    
    return (
        <a href={getTweetUrl(tweet)} className={className}>
            <p className={styles.tweetText} dangerouslySetInnerHTML={{__html: tt.autoLink(tweet.text)}} />
            <p className={styles.tweetTime}>{getTweetAgo(tweet)}</p>
        </a>
    );
};

export default SingleTweet;