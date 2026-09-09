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

function normalizeFeed(feed) {
  const normalized = { ...feed };
  if (typeof normalized.title === 'string') {
    normalized.title = normalized.title.trim();
  }
  if (typeof normalized.url === 'string') {
    normalized.url = normalized.url.trim();
  }
  if (typeof normalized.description === 'string') {
    normalized.description = normalized.description.trim();
  }
  return normalized;
}

function prepareFeed(candidate) {
  if (!isValidFeed(candidate)) {
    return {
      ok: false,
      error: 'Invalid feed',
    };
  }
  const normalizedFeed = normalizeFeed(candidate);
  return {
    ok: true,
    value: normalizedFeed,
  };
}

console.log(
  prepareFeed({
    title: '  JavaScript Weekly  ',
    url: '  https://example.com/feed.xml  ',
    status: 'ready',
    description: '  JavaScript news  ',
  }),
);
console.log(
  prepareFeed({
    title: 42,
    url: 'https://example.com/feed.xml',
    status: 'ready',
  }),
);
console.log(prepareFeed(null));
console.log(prepareFeed(undefined));
console.log(prepareFeed([]));
console.log(prepareFeed('feed'));
