function summarizeFeeds(feeds) {
  return feeds.reduce(
    (acc, feed) => {
      if (feed.status === 'ready' || feed.status === 'retry') {
        acc.refreshableTitles.push(feed.title);
      } else if (feed.status === 'disabled' || feed.status === 'fatal') {
        acc.blockedCount++;
      }
      return acc;
    },
    {
      refreshableTitles: [],
      blockedCount: 0,
    },
  );
}
