/**
 *  Old Module Version
 */

function helloFunction() {
  console.log(" hello node.js");
}

function byeFunction() {
  console.log(" bye node.js");
}

module.exports = {
  hello: helloFunction,
  bye: byeFunction,
};
