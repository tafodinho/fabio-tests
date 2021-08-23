import * as React from 'react';
import spinner from '../assets/images/spinner.gif';

const Loading = ({}) => {
    return (
        <div className="loading">
            {spinner}
        </div>
    );
};

export default Loading;