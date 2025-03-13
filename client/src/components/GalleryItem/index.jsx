import { Link } from "react-router";
import "./GalleryItem.css";
import Image from "../Image";


const GalleryItem = ({ item }) => {

  const optimizedHeight = (372 * item?.height) / item?.width;

  return (
    <div
      key={item?.id}
      className="gallery-item"
      style={{
        gridRowEnd: `span ${Math.ceil(item?.height / 100)}`,
      }}
    >
      <Image 
          width={372}
          height={optimizedHeight}
          quality={100}
          path={item?.media}
        />
      <Link to={`/pin/${item?.id}`} className="overlay" />
      <button className="save-btn">Save</button>
      <div className="overlay-btns">
        <button className="">
          <Image path="/general/share.svg" alt="share-icon" />
        </button>
        <button className="">
          <Image path="/general/more.svg" alt="share-icon" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
