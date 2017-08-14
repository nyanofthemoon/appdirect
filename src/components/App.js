import React from 'react';
import styles from './App.css';
import Tweets from './Tweets';

const names = ['AppDirect', 'laughingsquid', 'techcrunch'];

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className={styles.title}>AppDirect Twitter Challenge</h1>
                <div className={styles.boxes}>
                    {
                        names.map(name => <Tweets name={name} key={name} />)
                    }
                </div>
            </div>
        );
    }
}