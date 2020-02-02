import React from 'react';

const MovieDetail = (props) => { 
    const log = () => {
        console.log(props.greet);
    };

    return (
        <div>
            <button onClick={log}>Match</button>
        </div>
    );
}

export default MovieDetail;