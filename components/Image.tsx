import React, { useState, FC } from 'react'
import NextImage from 'next/image'

import { IImage } from '../@types/image'

const Image: FC<IImage> = ({
  src,
  alt,
  layout = "fill",
  objectFit = "inherit",
  className,
  quality = 100,
  srcError
}) => {
  const [imageSrc, setImage] = useState(src)

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
      className={className}
      quality={quality}
      placeholder="blur"
      blurDataURL={imageSrc}
      onError={() => {
        if (srcError) {
          setImage(srcError)
        }
      }}
    />
  )
}

export default Image