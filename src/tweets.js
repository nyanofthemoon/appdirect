import axios from 'axios';
const API_URL = 'http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=';

export default function getTweets(name) {
    const url = API_URL + encodeURIComponent(name);
    return (
        axios({
            url
        })
        .then(resp => resp.data)
    );
}