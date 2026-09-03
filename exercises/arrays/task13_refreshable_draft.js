// Preserved draft from the earlier Exercise 013 before the exercise was replaced.
function markRefreshable(statuses) {
  const result = [];
  for (const status of statuses) {
    if (status === 'ready' || status === 'retry') result.push(true);
  }
  result.push(false);
  return result;
}

function getRefreshableStatuses(statuses) {
}
