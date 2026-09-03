function createFeed(title, url) {
  return {
    title,
    url,
    status: 'pending',
  };
}

function getFeedProperty(feed, propertyName) {
  return feed[propertyName];
}

function changeFeedStatus(feed, newStatus) {
  feed.status = newStatus;
  return feed;
}
