function getReadyFeedTitles(feeds) {
  const titles = feeds.filter((feed) => feed.status === 'ready').map((feed) => feed.title);
  return titles;
}
