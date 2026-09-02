function normalizeFeedTitle(title) {
  const result = title.trim();
  if (result === '') {
    return 'Untitled feed';
  }
  return result;
}

function getRefreshStatus(title, disabled, isRefreshing) {
  const normalizedTitle = normalizeFeedTitle(title);
  if (disabled) {
    return `${normalizedTitle}: disabled`;
  }
  if (isRefreshing) {
    return `${normalizedTitle}: refreshing`;
  }
  return `${normalizedTitle}: ready`;
}

console.log(getRefreshStatus('  Technology  ', false, false));
console.log(getRefreshStatus(' News ', false, true));
console.log(getRefreshStatus('   ', true, false));
console.log(getRefreshStatus('News', true, true));
