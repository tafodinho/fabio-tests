
import * as React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({
    link, 
    title,
    width,
    height
}) => {
    return (
        <div className="image">
            <LazyLoadImage
                alt={title}
                height={height}
                src={link}
                width={width} 
                effect="blur" 
                placeholder={<Loading />} />
        </div>
    );
};

// Image.propTypes = {
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// };

export default Image;