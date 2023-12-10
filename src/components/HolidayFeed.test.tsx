import { render, screen } from "@testing-library/react"
import { HolidayFeed } from "./HolidayFeed"
import { holidays } from "../data/holidays"

describe("HolidayFeed", () => {
  it("should render", () => {
    render(<HolidayFeed />)

    expect(screen.getByText(holidays[0].hotel.name)).toBeVisible()
  })
})
