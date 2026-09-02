function findFeedManual(feeds, targetTitle) {
  for (const feed of feeds) {
    if (feed === targetTitle) {
      return feed;
    }
  }
  return undefined;
}

function findFeedWithMethod(feeds, targetTitle) {
  return feeds.find((feed) => feed === targetTitle);
}
