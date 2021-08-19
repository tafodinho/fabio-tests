
import * as React from 'react';
import PropType from 'prop-type';

const Image = ({link, title}) => {
    return (
        <div className="image">
            
        </div>
    );
};

Image.propType = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Image