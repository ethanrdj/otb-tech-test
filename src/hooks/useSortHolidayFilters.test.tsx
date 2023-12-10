import { act, renderHook } from "@testing-library/react"
import { useSortHolidayFilters } from "./useSortHolidayFilters"
import { Filters } from "../types/filters"

describe("useSortHolidayFilters", () => {
  it("should sort the holidays by price", async () => {
    const { result } = renderHook(useSortHolidayFilters)

    act(() => {
      result.current.onChangeFilter(Filters.STAR)
    })

    expect(result.current.filter).toEqual(Filters.STAR)
  })

  it("should sort the holidays alphabetically", async () => {
    const { result } = renderHook(useSortHolidayFilters)

    act(() => {
      result.current.onChangeFilter(Filters.ALPHABETICAL)
    })

    expect(result.current.filter).toEqual(Filters.ALPHABETICAL)
  })

  it("should sort the holidays by price", async () => {
    const { result } = renderHook(useSortHolidayFilters)

    act(() => {
      result.current.onChangeFilter(Filters.ALPHABETICAL)
    })

    expect(result.current.filter).toEqual(Filters.ALPHABETICAL)

    act(() => {
      result.current.onChangeFilter(Filters.PRICE)
    })

    expect(result.current.filter).toEqual(Filters.PRICE)
  })
})
