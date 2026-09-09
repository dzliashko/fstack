function normalizeFeed(feed) {
  const normalized = { ...feed };
  normalized.title = normalized.title.trim();
  normalized.url = normalized.url.trim();
  if (typeof normalized.description === 'string') {
    normalized.description = normalized.description.trim();
  }
  return normalized;
}

const feed = {
  title: '  JavaScript Weekly  ',
  url: '  https://example.com/feed.xml  ',
  status: 'ready',
  description: '  JavaScript news  ',
  articleCount: 12,
};

const normalized = normalizeFeed(feed);

console.log(normalized);
