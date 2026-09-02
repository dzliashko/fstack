function hasText(value) {
  return value.trim() !== '';
}

function hasAvailableSlot(currentCount, maxSubscriptions) {
  if (currentCount < 0 || maxSubscriptions <= 0 || currentCount >= maxSubscriptions) {
    return false;
  }
  return true;
}

function canAddSubscription(feedUrl, alreadySubscribed, currentCount, maxSubscriptions) {
  if (!hasText(feedUrl)) {
    return false;
  }
  if (alreadySubscribed) {
    return false;
  }
  if (!hasAvailableSlot(currentCount, maxSubscriptions)) {
    return false;
  }
  return true;
}
