import GalleryItem from "../GalleryItem";
import "./Gallery.css"

const items = [
  {
    id: 1,
    media: '/pins/pin1.jpeg',
    width: 260,
    height: 200
  },
  {
    id: 2,
    media: "/pins/pin2.jpeg",
    width: 360,
    height: 400
  },
  { 
    id: 3, 
    media: "/pins/pin3.jpeg",
    width: 460,
    height: 300,
  },
  {
    id: 4,
    media: '/pins/pin4.jpeg',
    width: 360,
    height: 280
  },
  {
    id: 5,
    media: '/pins/pin5.jpeg',
    width: 380,
    height: 220
  },
  {
    id: 6,
    media: '/pins/pin6.jpeg',
    width: 324,
    height: 268
  },
  {
    id: 7,
    media: '/pins/pin7.jpeg',
    width: 420,
    height: 280
  },
  {
    id: 8,
    media: '/pins/pin8.jpeg',
    width: 366,
    height: 368
  },
  {
    id: 9,
    media: '/pins/pin9.jpeg',
    width: 500,
    height: 400
  },
  {
    id: 10,
    media: '/pins/pin10.jpeg',
    width: 340,
    height: 290
  },
  {
    id: 11,
    media: '/pins/pin11.jpeg',
    width: 380,
    height: 300
  },
  {
    id: 12,
    media: '/pins/pin12.jpeg',
    width: 560,
    height: 440
  },
  {
    id: 13,
    media: '/pins/pin13.jpeg',
    width: 640,
    height: 660
  },
  {
    id: 14,
    media: '/pins/pin14.jpeg',
    width: 448,
    height: 336
  },
  {
    id: 15,
    media: '/pins/pin15.jpeg',
    width: 466,
    height: 324
  },
  {
    id: 16,
    media: '/pins/pin16.jpeg',
    width: 480,
    height: 250
  },
  {
    id: 17,
    media: '/pins/pin17.jpeg',
    width: 380,
    height: 424
  },
  {
    id: 18,
    media: '/pins/pin18.jpeg',
    width: 600,
    height: 450
  },
  {
    id: 19,
    media: '/pins/pin19.jpeg',
    width: 180,
    height: 150
  },
  {
    id: 20,
    media: '/pins/pin20.jpeg',
    width: 224,
    height: 176
  },
  {
    id: 21,
    media: '/pins/pin21.jpeg',
    width: 240,
    height: 180
  },
  {
    id: 22,
    media: '/pins/pin22.jpeg',
    width: 260,
    height: 140
  },
  {
    id: 23,
    media: '/pins/pin23.jpeg',
    width: 200,
    height: 145
  },
  {
    id: 24,
    media: '/pins/pin24.jpeg',
    width: 480,
    height: 350
  },
  {
    id: 25,
    media: '/pins/pin25.jpeg',
    width: 680,
    height: 500
  }
];

const Gallery = () => {
  return (
    <div className="gallery">
      {
        items.map(item => (
          <GalleryItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}
export default Gallery