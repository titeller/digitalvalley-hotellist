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