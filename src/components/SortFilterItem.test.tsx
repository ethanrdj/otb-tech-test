import { fireEvent, render, screen } from "@testing-library/react"
import { SortFilterItem } from "./SortFilterItem"
import { Filters } from "../types/filters"

const mockOnClick = jest.fn()

describe("SortFilterItem", () => {
  it("should render", () => {
    render(
      <SortFilterItem
        label={Filters.ALPHABETICAL}
        onClick={mockOnClick}
        icon={(<></>) as any}
        selected={false}
      />
    )

    expect(screen.getByText(Filters.ALPHABETICAL)).toBeVisible()
  })

  it("should call onClick to change the filter", () => {
    render(
      <SortFilterItem
        label={Filters.PRICE}
        onClick={mockOnClick}
        icon={(<></>) as any}
        selected
      />
    )

    fireEvent.click(screen.getByText(Filters.PRICE))

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
