import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useMemo } from "react"
import { Filters } from "../types/filters"

type SortFilterItemProps = {
  label: Filters
  icon: IconDefinition
  selected: boolean
  onClick: () => void
}

export const SortFilterItem: FC<SortFilterItemProps> = ({
  label: labelProp,
  icon,
  selected,
  onClick,
}) => {
  const label = useMemo(() => {
    if (labelProp === Filters.ALPHABETICAL)
      return (
        <p>
          sort <strong>alphabetically</strong>
        </p>
      )

    return (
      <p>
        sort by <strong>{labelProp}</strong>
      </p>
    )
  }, [labelProp])
  return (
    <div
      className={`sort-filter-item ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {label}
      <FontAwesomeIcon
        icon={icon}
        className={`filter-icon ${selected ? "selected" : ""}`}
      />
    </div>
  )
}
