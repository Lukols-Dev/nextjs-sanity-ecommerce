import { SortFilterItem } from "@/lib/sanity";
import FilterItemDropdown from "./FilterDropdown";

export type ListItem = SortFilterItem;

export default function FilterButton({
  list,
}: {
  list: ListItem[];
  title?: string;
}) {
  return (
    <nav>
      <ul>
        <FilterItemDropdown list={list} />
      </ul>
    </nav>
  );
}
