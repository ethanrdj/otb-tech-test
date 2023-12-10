import { FC } from "react"
import { HolidayCard } from "./HolidayCard"
import { SortFilter } from "./SortFilter"
import { useSortHolidayFilters } from "../hooks/useSortHolidayFilters"

export const HolidayFeed: FC = () => {
  const { holidays, filter, onChangeFilter } = useSortHolidayFilters()

  return (
    <div style={{ display: "flex", padding: "2%", gap: "50px" }}>
      <SortFilter selectedFilter={filter} onChangeFilter={onChangeFilter} />
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {holidays.map((holiday) => (
          <HolidayCard key={holiday.ID} holiday={holiday} />
        ))}
      </div>
    </div>
  )
}
