function calculateNextUnreadCount(unreadCount) {
  return unreadCount <= 0 ? 0 : unreadCount - 1;
}

function normalizeFeedTitle(title) {
  const result = title.trim();
  if (result === '') {
    return 'Untitled feed';
  }
  return result;
}

function formatUnreadMessage(feedTitle, unreadCount) {
  return `${normalizeFeedTitle(feedTitle)}: ${unreadCount} unread`;
}

function displayUnreadMessage(feedTitle, unreadCount) {
  console.log(formatUnreadMessage(feedTitle, unreadCount));
}
