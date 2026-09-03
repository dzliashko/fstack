function countUnreadArticles(articles) {
  return articles.reduce((count, article) => {
    return article.isRead === false ? count + 1 : count;
  }, 0);
}

const articles = [
  { title: 'JavaScript Arrays', isRead: true },

  { title: 'Learning reduce', isRead: false },

  { title: 'Node.js Runtime', isRead: false },
];

console.log(countUnreadArticles(articles));
