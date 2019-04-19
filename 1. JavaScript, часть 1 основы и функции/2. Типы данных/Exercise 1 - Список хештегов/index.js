/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

    return tweet.split(" ")
  .filter(function(word) {
    return word.startsWith('#');
  })
  .map(function(tag) {
    return tag.substring(1);
  });
};
