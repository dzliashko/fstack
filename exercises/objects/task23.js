function formatFeedLabel(feed) {
  const { title, status } = feed;
  return `${title} [${status}]`;
}

function getFeedSettings(feed) {
  const { settings } = feed;
  return settings;
}
