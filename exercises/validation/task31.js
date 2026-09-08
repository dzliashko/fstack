const ALLOWED_FEED_STATUSES = ['pending', 'ready', 'retry', 'disabled', 'fatal'];

function isValidFeedStatus(status) {
  return ALLOWED_FEED_STATUSES.includes(status);
}

function areAllFeedStatusesValid(statuses) {
  if (!Array.isArray(statuses)) {
    return false;
  }
  return statuses.every(isValidFeedStatus);
}

console.log(isValidFeedStatus('ready'));
// true

console.log(isValidFeedStatus('READY'));
// false

console.log(areAllFeedStatusesValid(['pending', 'ready', 'fatal']));
// true

console.log(areAllFeedStatusesValid(['ready', 'unknown']));
// false

console.log(areAllFeedStatusesValid([]));
// true

console.log(areAllFeedStatusesValid('ready'));
// false;
