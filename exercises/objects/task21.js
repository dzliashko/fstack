function updateFeedStatus(feed, newStatus) {
  return {
    ...feed,
    status: newStatus,
  };
}
