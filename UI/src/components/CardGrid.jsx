
import { react } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { ListManager } from "react-beautiful-dnd-grid";

const CardGrid = ({
    cats,
    setCats
}) => {

    const handleOnDragEnd = (source, destination) => {
        if(!destination) return;

        const items = [...cats];
        const [reoderedItems] = items.splice(source, 1);
        items.splice(destination, 0, reoderedItems);

        setCats(items)
    }

    return (
        <div className="card-grid">
            <ListManager
                items={cats}
                direction="horizontal"
                maxItems={3}
                render={item => <Card item={item} />}
                onDragEnd={handleOnDragEnd}
            />
        </div>
    );
};

CardGrid.propTypes = {
    cats: PropTypes.array.isRequired,
};

export default CardGrid;