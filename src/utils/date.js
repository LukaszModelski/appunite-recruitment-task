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
