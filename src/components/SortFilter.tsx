import { FC, useCallback } from "react"
import { SortFilterItem } from "./SortFilterItem"
import {
  faArrowDownAZ,
  faSterlingSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import { Filters } from "../types/filters"

type SortFilterProps = {
  selectedFilter: Filters
  onChangeFilter: (filter: Filters) => void
}

export const SortFilter: FC<SortFilterProps> = ({
  selectedFilter,
  onChangeFilter,
}) => {
  const isSelected = useCallback(
    (filter: Filters) => selectedFilter === filter,
    [selectedFilter]
  )
  return (
    <div>
      <SortFilterItem
        label={Filters.ALPHABETICAL}
        icon={faArrowDownAZ}
        selected={isSelected(Filters.ALPHABETICAL)}
        onClick={() => onChangeFilter(Filters.ALPHABETICAL)}
      />
      <SortFilterItem
        label={Filters.PRICE}
        icon={faSterlingSign}
        selected={isSelected(Filters.PRICE)}
        onClick={() => onChangeFilter(Filters.PRICE)}
      />
      <SortFilterItem
        label={Filters.STAR}
        icon={faStar}
        selected={isSelected(Filters.STAR)}
        onClick={() => onChangeFilter(Filters.STAR)}
      />
    </div>
  )
}
