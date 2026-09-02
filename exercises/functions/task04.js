function normalizeFeedTitle(title) {
  const result = title.trim();
  if (result === '') {
    return 'Untitled feed';
  }
  return result;
}

function formatRefreshSchedule(title = 'Untitled feed', intervalMinutes = 30) {
  const normalizedTitle = normalizeFeedTitle(title);
  return `${normalizedTitle}: every ${intervalMinutes} minutes`;
}

console.log(formatRefreshSchedule());
console.log(formatRefreshSchedule('News'));
console.log(formatRefreshSchedule('  Technology  ', 15));
console.log(formatRefreshSchedule(undefined, 10));
console.log(formatRefreshSchedule('News', 0));
