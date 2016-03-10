var objectAssign = require('object-assign');

function DescribeResponse() {
  this._value = null;
}

objectAssign(DescribeResponse.prototype, {
  addChunk: function(chunk) {
    this._value = chunk;
  },

  isDone: function() {
    return !!this._value;
  },

  error: function() {
    return null;
  },

  value: function() {
    return this._value;
  }
});

module.exports = DescribeResponse;
