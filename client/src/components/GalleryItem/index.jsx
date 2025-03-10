import "./GalleryItem.css";

const GalleryItem = ({ item }) => {
  return (
    <div key={item.id} className="gallery-item" style={{
      gridRowEnd: `span ${Math.ceil(item.height / 100)}`,
    }}>
      <img src={item.media} alt={`gallery-media-${item.id}`} />
    </div>
  );
};

export default GalleryItem;
