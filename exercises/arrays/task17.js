function getTotalUnreadReadingTime(articles) {
  return articles.reduce((acc, article) => {
    if (article.isRead === false) {
      acc += article.readingTimeMinutes;
    }
    return acc;
  }, 0);
}
