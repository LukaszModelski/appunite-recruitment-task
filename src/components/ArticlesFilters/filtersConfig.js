import { getTodayDate, getLastWeekDate, getLastMonthDate } from "../../utils/date";

export const filters = {
  topic: [
    {
      searchParam: 'technology',
      label: 'Tech'
    },
    {
      searchParam: 'travel',
      label: 'Travel'
    },
    {
      searchParam: 'politics',
      label: 'Politics'
    },
    {
      searchParam: 'sports',
      label: 'Sports'
    }
  ],
  time: [
    {
      searchParam: getTodayDate(),
      label: 'Today'
    },
    {
      searchParam: getLastWeekDate(),
      label: 'This week'
    },
    {
      searchParam: getLastMonthDate(),
      label: 'This month'
    }
  ],
  sortBy: [
    {
      searchParam: 'popularity',
      label: 'Most popular'
    },
    {
      searchParam: 'publishedAt',
      label: 'Newest'
    },
  ]
}
