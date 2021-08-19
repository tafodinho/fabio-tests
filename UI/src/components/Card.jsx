import PropTypes from 'prop-types';

const Card = ({item}) => {
    return (
        <div 
            className="card"
        >
            <h1>{item.title}</h1>
            <img src={item.thumbnail} width={"80%"} height={"70%"}></img>
        </div>
    );
};

// Card.propTypes = {
//     thumbnail: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// };

export default Card;