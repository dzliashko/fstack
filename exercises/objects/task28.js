function getFeedDisplayOptions(feed) {
  return {
    refreshIntervalMinutes: feed?.settings?.refreshIntervalMinutes ?? 60,
    notificationsEnabled: feed?.settings?.notificationsEnabled ?? false,
    folder: feed?.folder ?? 'Uncategorized',
  };
}
