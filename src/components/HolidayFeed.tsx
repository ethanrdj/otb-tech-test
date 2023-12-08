import { FC } from "react"
import { holidays } from "../data/holidays"
import { HolidayCard } from "./HolidayCard"

export const HolidayFeed: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      {holidays.map((holiday) => (
        <HolidayCard key={holiday.ID} holiday={holiday} />
      ))}
    </div>
  )
}
