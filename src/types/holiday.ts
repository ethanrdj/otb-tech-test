import { Hotel } from "./hotel"

export type Holiday = {
  ID: string
  hotel: Hotel
  guests: {
    adults: number
    children?: number
    infants?: number
  }
  date: string
  stayDuration: number
  departureAirport: string
  price: string
}
