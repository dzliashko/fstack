function formatArticle({ title: articleTitle, author = 'Unknown author', readingTimeMinutes = 0 }) {
  return `${articleTitle} | ${author} | ${readingTimeMinutes} min`;
}
