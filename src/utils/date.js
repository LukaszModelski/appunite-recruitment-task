const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  if(day && month && year) {
    return `${monthNames[month]} ${day}, ${year}`;
  }
  return false;
}

export const validateDateString = (dateString) => {
  const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/;
  return dateRegex.test(dateString);
}

// Date format for API calls. Example: '2021-04-24'
export const getTodayDate = () => new Date().toISOString().slice(0, 10);

export const getLastWeekDate = () => {
  const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  return date.toISOString().slice(0, 10);
};

export const getLastMonthDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.toISOString().slice(0, 10);
};
