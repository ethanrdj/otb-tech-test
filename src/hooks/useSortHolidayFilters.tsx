import { useCallback, useMemo, useState } from "react"
import { Holiday } from "../types/holiday"
import { Filters } from "../types/filters"
import { holidays } from "../data/holidays"

export const useSortHolidayFilters = () => {
  const [filter, setFilter] = useState<Filters>(Filters.PRICE)
  const [ascendingOrder, setAscendingOrder] = useState(true)

  const toggleOrder = useCallback(() => {
    setAscendingOrder((prevOrder) => !prevOrder)
  }, [])

  const onChangeFilter = useCallback(
    (filter: Filters) => {
      setFilter(filter)
      toggleOrder()
    },
    [setFilter, toggleOrder]
  )

  const sortAlphabetically = useCallback(
    (a: Holiday, b: Holiday) =>
      (ascendingOrder ? 1 : -1) *
      a.hotel.name.localeCompare(b.hotel.name, "en", {
        sensitivity: "base",
      }),
    [ascendingOrder]
  )

  const sortByPrice = useCallback(
    (a: Holiday, b: Holiday) =>
      (ascendingOrder ? 1 : -1) * (parseInt(a.price) - parseInt(b.price)),
    [ascendingOrder]
  )

  const sortByStarRating = useCallback(
    (a: Holiday, b: Holiday) =>
      (ascendingOrder ? 1 : -1) * (b.hotel.starRating - a.hotel.starRating),
    [ascendingOrder]
  )
  const sortedHolidays = useMemo(() => {
    switch (filter) {
      case Filters.ALPHABETICAL:
        return holidays.sort(sortAlphabetically)
      case Filters.STAR:
        return holidays.sort(sortByStarRating)
      default:
        return holidays.sort(sortByPrice)
    }
  }, [filter, sortAlphabetically, sortByPrice, sortByStarRating])

  return { holidays: sortedHolidays, filter, onChangeFilter }
}
