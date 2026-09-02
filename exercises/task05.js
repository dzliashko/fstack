const normalizeFeedTitle = (title) => {
  const result = title.trim();
  if (result === '') {
    return 'Untitled feed';
  }
  return result;
};

const formatRefreshSchedule = (title = 'Untitled feed', intervalMinutes = 30) =>
  `${normalizeFeedTitle(title)}: every ${intervalMinutes} minutes`;

const canStartRefresh = (disabled, isRefreshing) => !disabled && !isRefreshing;
