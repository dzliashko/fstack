function findFeedByUrl(feeds, targetUrl) {
  return feeds.find((feed) => feed.url === targetUrl);
}

function hasBlockedFeed(feeds) {
  return feeds.some((feed) => feed.status === 'disabled' || feed.status === 'fatal');
}

function getUnreadArticleTitles(articles) {
  return articles.filter((article) => article.isRead === false).map((article) => article.title);
}

function canRefreshAllFeeds(feeds) {
  return feeds.length > 0 && feeds.every((feed) => feed.status === 'ready');
}
