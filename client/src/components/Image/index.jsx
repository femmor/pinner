import { IKImage } from "imagekitio-react"

const Image = ({ path, width, height, quality, alt, className }) => {
  return (
    <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_URLENDPOINT}
        transformation={[
          {
            width: width,
            height: height,
            quality: quality,
          },
        ]}
        path={path}
        lqip={{ active: true, quality: 20 }}
        loading="lazy"
        alt={alt}
        className={className}
      />
  )
}
export default Image