function getFeedTitles(feeds) {
  const titles = feeds.map((feed) => feed.title);
  return titles;
}

function getReadyFeeds(feeds) {
  const readyFeeds = feeds.filter((feed) => feed.status === 'ready');
  return readyFeeds;
}
