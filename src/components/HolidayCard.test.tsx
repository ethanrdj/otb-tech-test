import { fireEvent, render, screen } from "@testing-library/react"

import { HolidayCard } from "./HolidayCard"
import { holidays } from "../data/holidays"

const mockHoliday = holidays[0]

describe("HolidayCard", () => {
  it("should render", () => {
    render(<HolidayCard holiday={mockHoliday} />)

    expect(screen.getByText(mockHoliday.hotel.name)).toBeVisible()
    expect(screen.getByText("Read more")).toBeVisible()
  })

  it("should toggle the read more button", () => {
    render(<HolidayCard holiday={mockHoliday} />)

    fireEvent.click(screen.getByTestId("read-more-button"))

    expect(screen.getByText("Read less")).toBeVisible()
  })
})
