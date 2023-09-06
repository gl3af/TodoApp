import {Filter} from "@/types.ts";

export const filters: { name: string, filter: Filter }[] = [
  {
    name: "All",
    filter: ""
  },
  {
    name: "Active",
    filter: "active"
  },
  {
    name: "Completed",
    filter: "completed"
  },
]