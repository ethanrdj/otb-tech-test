import { Holiday } from "../types/holiday"
import hotel1 from "../assets/hotel-image-1.png"
import hotel2 from "../assets/hotel-image-2.png"
import hotel3 from "../assets/hotel-image-3.png"

export const holidays: Holiday[] = [
  {
    ID: "1",

    guests: {
      adults: 2,
      children: 2,
      infants: 1,
    },
    date: "3rd July 2019",
    stayDuration: 7,
    departureAirport: "East Midlands",
    price: "1136.50",
    hotel: {
      ID: "1",
      starRating: 5,
      image: hotel1,
      name: "Iberostar Grand Salome",
      location: "Costa Adeje, Tenerife",
      description:
        "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
    },
  },
  {
    ID: "2",
    guests: {
      adults: 2,
      children: 1,
    },
    date: "27th May 2019",
    stayDuration: 7,
    departureAirport: "Liverpool",
    price: "696.80",
    hotel: {
      ID: "2",
      image: hotel2,
      starRating: 4,
      name: "Aquamarina Golf Hotel",
      location: "Costa Adeje, Tenerife",
      description:
        "The Aquamarina Golf Hotel has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
    },
  },
  {
    ID: "3",
    guests: {
      adults: 2,
      children: 2,
    },
    date: "3rd July 2019",
    stayDuration: 7,
    departureAirport: "Manchester",
    price: "499.99",
    hotel: {
      ID: "3",
      image: hotel3,
      starRating: 3,
      name: "Las Piramides Resort",
      location: "Costa Adeje, Tenerife",
      description:
        "The Las Piramides Resort has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
    },
  },
]
