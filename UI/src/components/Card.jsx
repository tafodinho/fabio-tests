import PropTypes from 'prop-types';
import Image from './Image';

const Card = ({ 
    item,
    setThumbnail,
    setShowThumbnail
}) => {
    return (
        <div 
            className="card" 
            onClick={() => {
                setShowThumbnail(true);
                setThumbnail(item);
            }} 
        >
            <h1>{item.title}</h1>
            <Image link={item.thumbnail} width="80%" height="70%" title={item.title} />
        </div>
    );
};

// Card.propTypes = {
//     thumbnail: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// };

export default Card;