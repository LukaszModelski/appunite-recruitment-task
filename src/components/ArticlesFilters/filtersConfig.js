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
      label: 'today'
    },
    {
      searchParam: getLastWeekDate(),
      label: 'this week'
    },
    {
      searchParam: getLastMonthDate(),
      label: 'this month'
    }
  ]
}
