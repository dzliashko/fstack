function getUnreadArticleTitles(articles) {
  const unRead = articles.filter((article) => article?.state?.isRead === false);
  return unRead.map((article) => article.title);
}

// const articles = [
//   { id: 1, title: 'A', state: { isRead: false } },
//   { id: 2, title: 'B', state: { isRead: true } },
//   { id: 3, title: 'C' },
//   { id: 4, title: 'D', state: null },
// ];

// const unreadArticles = getUnreadArticleTitles(articles);

// console.log(unreadArticles);
// ['A']

function starArticleById(articles, targetId) {
  return articles.map((article) => {
    if (article.id !== targetId) {
      return article;
    }
    return {
      ...article,
      state: {
        ...(article?.state ?? {}),
        isStarred: true,
      },
    };
  });
}

// const articles = [
//   {
//     id: 1,
//     title: 'A',
//     state: {
//       isRead: false,
//       isStarred: false,
//     },
//   },
//   {
//     id: 2,
//     title: 'B',
//     state: {
//       isRead: true,
//       isStarred: false,
//     },
//   },
// ];

// const updated = starArticleById(articles, 1);

// console.log(updated !== articles);
// // true

// console.log(updated[0] !== articles[0]);
// // true

// console.log(updated[0].state !== articles[0].state);
// // true

// console.log(updated[1] === articles[1]);
// // true
