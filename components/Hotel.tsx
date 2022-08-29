import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

import { getHotelScoreFormat, getHotelPriceFormat, getHotelStarsFromScore } from '../utils/hotel'
import { IHotel } from '../@types/hotel'

import { imageHotelDefault } from '../constants/hotel'

interface HotelProps {
  hotel: IHotel;
}

const Hotel: React.FC<HotelProps> = ({ hotel, index }) => {
  const score = getHotelScoreFormat(hotel.score)
  const price = getHotelPriceFormat(hotel.price)
  const stars = getHotelStarsFromScore(hotel.score)
  const [imageHotel, setImageHotel] = useState(hotel.main_photo)

  return (
    <div className="flex flex-1 bg-white mt-3 p-3 rounded-xl shadow-sm">
      <Image
          className="rounded-xl"
          src={imageHotel}
          alt={hotel.name}
          width="112"
          height="112"
          placeholder="blur"
          blurDataURL={hotel.main_photo}
          onError={() => {
            setImageHotel(imageHotelDefault)
          }}
        />
      <div className="flex-1 px-3">
        <div className="text-xs mb-1">{hotel.name}</div>
        <div className="flex mb-1">
          {stars.map((star) => <AiFillStar key={star} className="text-yellow" />)}
        </div>
        <div className="text-xs mb-1 font-bold">{`${score}/10`}</div>
        <div className="mb-1">
          <span className="text-sky text-xs font-bold">{`${price} THB`}</span>
          <span className="text-[10px] ml-1">/ room</span>
          <span className="text-[10px] ml-1">/ night</span>
        </div>
        <div className="flex mb-1">
          {hotel.policy.breakfast_included && <div className="bg-white text-green border text-[10px] px-[4px] py-[2px] rounded-xl mr-2">Breakfast</div>}
          {hotel.policy.free_cancellation && <div className="bg-white text-green border text-[10px] px-[4px] py-[2px] rounded-xl mr-2">Free Cancellation</div>}
        </div>
      </div>
    </div>
  )
}

export default Hotel
