function countProcessableFeeds(statuses) {
  let counter = 0;
  for (const status of statuses) {
    if (status === 'fatal') {
      break;
    }
    if (status === 'disabled') {
      continue;
    }
    counter++;
  }
  return counter;
}
