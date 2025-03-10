import { Link } from "react-router";
import "./GalleryItem.css";

const GalleryItem = ({ item }) => {
  return (
    <div key={item.id} className="gallery-item" style={{
      gridRowEnd: `span ${Math.ceil(item.height / 100)}`,
    }}>
      <img src={item.media} alt={`gallery-media-${item.id}`} />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="save-btn">Save</button>
      <div className="overlay-btns">
        <button className="">
          <img src="/general/share.svg" alt="share-icon"/>
        </button>
        <button className="">
          <img src="/general/more.svg" alt="share-icon"/>
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
