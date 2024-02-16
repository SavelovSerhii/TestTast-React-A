import {useDispatch, useSelector} from "react-redux";
import { chooseImages, updateImages } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import './ImageList.css';

function ImageList() {
    const dispatch = useDispatch();
    const images = useSelector(state => state.images);
    const navigate = useNavigate();

    const getImages = async () => {
        const response = await fetch(
          `https://api.unsplash.com/photos?page=1&client_id=Uyl1-SGxvwD0T4HrpZypY-jRTahxbuBnbD4nwxQjVNM`
        )
        const json = await response.json();
        dispatch(updateImages(json))
    };

    return (
        <div className="ImageList">
            <ul className="ImageList__list">
                {!images.length &&
                    <button className="ImageList__button" onClick={getImages}>
                        Load Images
                    </button>
                }

                {images.map((image, index) => (
                    <li
                        className="ImageList__item"
                        key={image.id}
                        onClick={() => {
                            dispatch(chooseImages(index));
                            navigate(`/image`);
                        }}
                    >
                        <div className="ImageList__container">
                            <img
                                className="ImageList__image"
                                src={image.urls.small}
                                alt=""
                            />

                            <h3>
                                {`${image.alt_description[0].toUpperCase()}${image.alt_description.slice(1)}`}
                            </h3>

                            <h2 className="ImageList__author">
                                {image.user.name}
                            </h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImageList;
