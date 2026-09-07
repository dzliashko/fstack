function formatSubscription(subscription) {
  const { title: feedTitle, folder = 'Uncategorized', unreadCount = 0 } = subscription;
  return `${feedTitle} | ${folder} | ${unreadCount} unread`;
}
