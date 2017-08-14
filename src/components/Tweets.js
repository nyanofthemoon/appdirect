import React from 'react';
import styles from './Tweets.css';
import getTweets from '../tweets';
import LoadingSpinner from './LoadingSpinner';
import ErrorBox from './ErrorBox';
import TweetList from './TweetList';

export default class Tweets extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        this.setState({loading: true});
        
        getTweets(this.props.name)
        .then(tweets => this.setState({tweets: tweets}))
        .catch(err => this.setState({error: err}))
        .then(() => this.setState({loading: false})); // "finally"
    }
    render() {
        const {loading, tweets, error} = this.state;
        
        if (!loading && !tweets && !error) {
            return null;
        }
        
        return (
            <section className={styles.tweets}>
                <h1 className={styles.title}>{this.props.name}</h1>
                {
                    loading ? <LoadingSpinner /> :
                    error ? <ErrorBox message="Could not load tweets. Try again later" /> :
                    tweets ? <TweetList tweets={tweets} /> :
                    null
                }
            </section>
        );

    }
}