import { render, screen } from "@testing-library/react"

import { HolidayDetails } from "./HolidayDetails"
import { holidays } from "../data/holidays"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const mockHoliday = holidays[0]

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn(),
}))

describe("HolidayDetails", () => {
  it("should render", () => {
    render(<HolidayDetails holiday={mockHoliday} />)

    expect(screen.getByText(mockHoliday.hotel.name)).toBeInTheDocument()
  })

  it("should render the star rating", () => {
    render(<HolidayDetails holiday={mockHoliday} />)

    expect(FontAwesomeIcon).toHaveBeenCalledTimes(mockHoliday.hotel.starRating)
  })

  it("handles missing childrenCount", () => {
    render(<HolidayDetails holiday={holidays[2]} />)

    expect(screen.queryByText("children")).toBeNull()
    expect(screen.queryByText("child")).toBeNull()
  })

  it("handles missing infantsCount", () => {
    render(<HolidayDetails holiday={holidays[2]} />)

    expect(screen.queryByText("infants")).toBeNull()
    expect(screen.queryByText("infant")).toBeNull()
  })
})
