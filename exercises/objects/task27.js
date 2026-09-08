function getFeedRefreshConfig({
  title = 'Untitled',
  settings: { refreshIntervalMinutes = 60, notificationsEnabled = false } = {},
} = {}) {
  return {
    title,
    refreshIntervalMinutes,
    notificationsEnabled,
  };
}
