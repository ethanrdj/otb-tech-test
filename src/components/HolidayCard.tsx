import { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Holiday } from "../types/holiday"
import { HolidayDetails } from "./HolidayDetails"

type HolidayCardProps = {
  holiday: Holiday
}

export const HolidayCard: FC<HolidayCardProps> = ({ holiday }) => {
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false)

  return (
    <div className="holiday-card">
      <div className="main-card-view">
        <img src={holiday.hotel.image} className="holiday-image" />
        <div
          className="read-more-toggle"
          onClick={() => setShowMoreInfo(!showMoreInfo)}
          role="button"
          data-testid="read-more-button"
        >
          <p>
            <strong>{showMoreInfo ? "Read less" : "Read more"}</strong> about
            this hotel
          </p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`chevron-icon ${showMoreInfo ? "rotate" : ""}`}
          />
        </div>

        <HolidayDetails holiday={holiday} />
      </div>

      <div className={`hotel-description ${showMoreInfo ? "slide-down" : ""}`}>
        <h3>Overview</h3>
        <p>{holiday.hotel.description}</p>
      </div>
    </div>
  )
}
