function updateRefreshInterval(feed, newIntervalMinutes) {
  return {
    ...feed,
    settings: {
      ...feed.settings,
      refreshIntervalMinutes: newIntervalMinutes,
    },
  };
}
