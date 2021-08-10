/**
 * moment.js seems too much for these dates manipulations
 */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const TODAY = new Date();

export const getMonthOfTheYear = (date) => MONTHS[date.getMonth()];

export const getDateLabel = (date) => {
  if (date.getFullYear() === TODAY.getFullYear() && date.getMonth() === TODAY.getMonth() && date.getDate() === TODAY.getDate()) {
    return 'Today';
  }

  return `${date.getDate()} ${getMonthOfTheYear(date)}`;
};
