;(function(exports) {
  function Runner(coquette) {
    this.coquette = coquette;
    this.runs = [];
  };

  Runner.prototype = {
    update: function() {
      this.run();
    },

    run: function() {
      while(this.runs.length > 0) {
        var run = this.runs.shift();
        run.fn(run.obj);
      }
    },

    add: function(obj, fn) {
      this.runs.push({
        obj: obj,
        fn: fn
      });
    }
  };

  exports.Runner = Runner;
})(typeof exports === 'undefined' ? this.Coquette : exports);
