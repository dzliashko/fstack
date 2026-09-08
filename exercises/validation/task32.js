const ALLOWED_FEED_STATUSES = ['pending', 'ready', 'retry', 'disabled', 'fatal'];

function isObjectRecord(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidFeedStatus(status) {
  return ALLOWED_FEED_STATUSES.includes(status);
}

function isValidFeed(feed) {
  if (!isObjectRecord(feed)) {
    return false;
  }

  if (!isNonEmptyString(feed.title) || !isNonEmptyString(feed.url)) {
    return false;
  }

  if (!isValidFeedStatus(feed.status)) {
    return false;
  }

  const { description } = feed;
  if (description !== undefined && !isNonEmptyString(description)) {
    return false;
  }

  return true;
}

console.log(
  isValidFeed({
    title: 'JavaScript Weekly',
    url: 'https://example.com/feed.xml',
    status: 'ready',
  }),
);
// true

console.log(
  isValidFeed({
    title: 'JavaScript Weekly',
    url: 'https://example.com/feed.xml',
    status: 'ready',
    description: 'JavaScript news',
  }),
);
// true

console.log(
  isValidFeed({
    title: 'JavaScript Weekly',
    url: 'https://example.com/feed.xml',
    status: 'unknown',
  }),
);
// false

console.log(
  isValidFeed({
    title: 'JavaScript Weekly',
    url: 'https://example.com/feed.xml',
    status: 'ready',
    description: null,
  }),
);
// false
