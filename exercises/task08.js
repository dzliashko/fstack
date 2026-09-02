function calculateTotalRetryDelay(attemptCount, baseDelayMinutes = 5) {
  if (attemptCount <= 0 || baseDelayMinutes <= 0) {
    return 0;
  }

  let totalDelay = 0;

  for (let attemptNumber = 1; attemptNumber <= attemptCount; attemptNumber++) {
    totalDelay += attemptNumber * baseDelayMinutes;
  }

  return totalDelay;
}
