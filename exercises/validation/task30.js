function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidFeed(feed) {
  return (
    typeof feed === 'object' &&
    feed !== null &&
    !Array.isArray(feed) &&
    isNonEmptyString(feed.title) &&
    isNonEmptyString(feed.url)
  );
}

// const a1 = isValidFeed({
//   title: 'JavaScript Weekly',
//   url: 'https://example.com/feed.xml',
// });
// console.log(a1);
// // true

// console.log(
//   isValidFeed({
//     title: '   ',
//     url: 'https://example.com/feed.xml',
//   }),
// );
// // false

// console.log(
//   isValidFeed({
//     title: 'JavaScript Weekly',
//     url: 42,
//   }),
// );
// // false

// console.log(isValidFeed(null));
// // false

// console.log(isValidFeed([]));
// // false

// console.log(isValidFeed('feed'));
// // false
