import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

import './Image.css';

function Image() {
    const images = useSelector(state => state.images);
    const currentImage = useSelector(state => state.currentImage);

    return (
        <div className="Image">
            {(!images.length && <Navigate to="/" />)
                || <div className="Image__container">
                    <img
                        className="Image__image"
                        src={images[currentImage].urls.full}
                        alt=""
                    />
                </div>
            }
        </div>
    );
}

export default Image;
