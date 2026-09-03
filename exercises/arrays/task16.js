function countArticlesByReadState(articles) {
  return articles.reduce(
    (acc, article) => {
      if (article.isRead === true) {
        acc.read++;
      } else if (article.isRead === false) {
        acc.unread++;
      }
      return acc;
    },
    { read: 0, unread: 0 },
  );
}
