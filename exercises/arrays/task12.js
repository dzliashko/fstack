function hasBlockedFeed(statuses) {
  return (
    statuses.some((status) => status === 'disabled') ||
    statuses.some((status) => status === 'fatal')
  );
}

function areAllFeedsReady(statuses) {
  return statuses.every((status) => status === 'ready');
}

function canRefreshAll(statuses) {
  return statuses.length > 0 && areAllFeedsReady(statuses);
}
