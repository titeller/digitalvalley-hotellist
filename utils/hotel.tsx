import { get } from './xhr'
import { apiHotelEndPoint } from '../constants/api'

export const getAllHotels = async (offset: number, limit: number) => {
  const url = `${apiHotelEndPoint}/hotel?offset=${offset}&limit=${limit}`
  const response = await get(url)
  return response
}

export const getHotelsCount = async () => {
  const url = `${apiHotelEndPoint}/hotel/count`
  const response = await get(url)
  return response
}

export const getHotelScoreFormat = (score: number) => {
  return score.toFixed(1)
}

export const getHotelPriceFormat = (price: number) => {
  const thbCurrency = Intl.NumberFormat('th-TH', {
    style: "currency",
    currency: "THB",
  })
  return thbCurrency.format(price)
}

export const getHotelStarsFromScore = (score: number) => {
  const N = Number(score) / 2
  const stars = Array.from({
    length: N + 1
  }, (_, index) => index)
  return stars
}