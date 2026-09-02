function getFeedAtIndex(feeds, index) {
  if (index < 0 || index >= feeds.length) {
    return undefined;
  }
  return feeds[index];
}

function getBoundaryFeeds(feeds) {
  const result = [];
  if (feeds.length === 0) {
    return result;
  }
  if (feeds.length === 1) {
    result.push(feeds[0]);
    return result;
  }
  result.push(feeds[0]);
  result.push(feeds[feeds.length - 1]);
  return result;
}
