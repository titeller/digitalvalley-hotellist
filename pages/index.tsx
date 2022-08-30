import React, { useState, useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import axios from 'axios'

import Hotel from '../components/Hotel'
import Loader from '../components/Loader'

import { IHotel } from '../@types/hotel'
import { apiHotelEndPoint } from '../constants/api'

interface HomeProps {
  hotels: IHotel[];
  hotelsCount: number;
  offset: number;
  limit: number;
}

const fetchHotels = async (offset: number, limit: number) => {
  const url = `${apiHotelEndPoint}/hotel?offset=${offset}&limit=${limit}`
  const response = await axios.get(url)
  return response
}

const fetchHotelsCount = async () => {
  const url = `${apiHotelEndPoint}/hotel/count`
  const response = await axios.get(url)
  return response
}

const Home: NextPage<HomeProps> = (props) => {
  const { limit, hotelsCount } = props
  const [hotels, setHotels] = useState(props.hotels)
  const [offset, setOffset] = useState(props.offset)
  const [isLoading, setIsLoading] = useState(false)
  const [isFecthEmpty, setIsFecthEmpty] = useState(false)

  const handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom === docHeight && isFecthEmpty === false) {

      setIsLoading(true)

      setTimeout(async () => {
        const newOffset = offset + limit
        const response = await fetchHotels(newOffset, newOffset + limit)
        if (response?.data.length > 0) {
          setOffset(newOffset)
          const newHotels = [
            ...hotels,
            ...response.data
          ]
          setHotels(newHotels)
        } else {
          setIsFecthEmpty(true)
        }
        setIsLoading(false)

      }, 2000)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
  }, [offset, hotels, isLoading, isFecthEmpty])

  return (
    <>
      <div>
        <div className="m-3">
          <div className="flex justify-end">
            <div className="text-sky font-bold text-xs bg-white border rounded-xl px-2 py-1">{`${hotelsCount} hotels`}</div>
          </div>

          <div className="flex flex-col">
            {hotels.map((hotel) => (
              <Hotel
                hotel={hotel}
                key={hotel.id}
              />
            ))}
          </div>

          {isLoading && (
            <div className="text-center my-10">
              <Loader />
            </div>
          )}
          
          {isFecthEmpty && (
            <div className="text-center my-10">
              <span className="text-lg text-sky">No additional information.</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const offset = 0
  const limit = 50
  const responseHotels = await fetchHotels(offset, limit)
  const responseHotelsCount = await fetchHotelsCount()
  return {
    props: {
      hotels: responseHotels.data,
      hotelsCount: responseHotelsCount.data,
      offset,
      limit
    }
  }
}

export default Home
