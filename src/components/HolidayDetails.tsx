import { FC, useCallback, useMemo } from "react"
import { Holiday } from "../types/holiday"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

type HolidayDetailsProps = {
  holiday: Holiday
}

export const HolidayDetails: FC<HolidayDetailsProps> = ({ holiday }) => {
  const {
    adults: adultCount = 0,
    children: childrenCount = 0,
    infants: infantsCount = 0,
  } = useMemo(() => holiday.guests, [holiday])

  const renderStarRating = useCallback((stars: number) => {
    return (
      <div
        style={{
          display: "flex",
          gap: "3px",
          padding: "10px 0px",
        }}
      >
        {Array.from({ length: stars }).map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color="#fedc07" />
        ))}
      </div>
    )
  }, [])

  const renderPlural = useCallback(
    (count: number | undefined, singular: string, plural: string) => {
      if (!count) {
        return null
      }
      const labelText = count === 1 ? singular : plural
      return (
        <>
          <strong>{count}</strong> {labelText}
        </>
      )
    },
    []
  )

  return (
    <div className="holiday-details">
      <h1 className="hotel-name">{holiday.hotel.name}</h1>
      <p className="hotel-location">{holiday.hotel.location}</p>
      {renderStarRating(holiday.hotel.starRating)}
      <div className="info-container">
        <p>
          {renderPlural(adultCount, "Adult", "Adults")},{" "}
          {renderPlural(childrenCount, "Child", "Children")}
          {!!infantsCount && " & "}
          {renderPlural(infantsCount, "Infant", "Infants")}
        </p>
        <p>
          <strong>{holiday.date}</strong> for{" "}
          <strong>{holiday.stayDuration} days</strong>
        </p>
        <p>
          departing from <strong>{holiday.departureAirport}</strong>
        </p>
      </div>
      <button className="book-button">
        <div>
          <h1>Book now</h1>
          <h1>{`£${holiday.price}`}</h1>
        </div>
      </button>
    </div>
  )
}
