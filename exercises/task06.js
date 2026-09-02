function normalizeFeedTitle(title = 'Untitled feed') {
  const normalizedTitle = title.trim();
  if (normalizedTitle === '') {
    return 'Untitled feed';
  }
  return normalizedTitle;
}

const hasRetryAttempts = (failedAttempts, maxAttempts = 3) =>
  failedAttempts >= 0 && maxAttempts > 0 && failedAttempts < maxAttempts;

function getRefreshDecision(title, disabled, isRefreshing, failedAttempts, maxAttempts = 3) {
  const normalizedTitle = normalizeFeedTitle(title);
  if (disabled) {
    return `${normalizedTitle}: disabled`;
  }
  if (isRefreshing) {
    return `${normalizedTitle}: already refreshing`;
  }
  if (!hasRetryAttempts(failedAttempts, maxAttempts)) {
    return `${normalizedTitle}: retry limit reached`;
  }
  return `${normalizedTitle}: ready`;
}

const displayRefreshDecision = (title, disabled, isRefreshing, failedAttempts, maxAttempts) => {
  console.log(getRefreshDecision(title, disabled, isRefreshing, failedAttempts, maxAttempts));
};
