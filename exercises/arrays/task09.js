function addFeedMutable(feeds, title) {
  feeds.push(title);
  return feeds;
}

function addFeedImmutable(feeds, title) {
  const result = [...feeds, title];
  return result;
}
