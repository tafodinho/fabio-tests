import { react, useEffect} from 'react';
import Image from './Image';

const Thumbnail = ({
    item,
    showThumbnail,
    setShowThumbnail
}) => {
    const handleKeyDown = (event) => {
        console.log(event)
        if(event.keyCode === 27) {
            setShowThumbnail(false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    }, [])

    if(!showThumbnail) return null;

    return (
        <div className="thumbnail" >
            <Image  
                link={item.thumbnail}
                width="80%" 
                height="80%" 
                title={item.title} />
        </div>
    );
};

export default Thumbnail;