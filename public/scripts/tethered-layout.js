// Generated by CoffeeScript 1.8.0
var delayed, run;

run = function() {
  var fixed, prefixes, scrollHandler;
  fixed = document.querySelectorAll(".fixed")[0];
  prefixes = ["-moz-", "", "-webkit-"];
  scrollHandler = function(e) {
    var prefix, scrolled, _i, _len, _results;
    scrolled = document.body.scrollTop;
    _results = [];
    for (_i = 0, _len = prefixes.length; _i < _len; _i++) {
      prefix = prefixes[_i];
      _results.push(fixed.style["" + prefix + "transform"] = "translateY(" + scrolled + "px)");
    }
    return _results;
  };
  if (window.innerWidth >= 540) {
    return window.addEventListener("scroll", scrollHandler);
  }
};

delayed = function() {
  var i, items, loader, _i, _ref, _results;
  items = document.querySelectorAll("[data-src]");
  if (items.length === 0) {
    return;
  }
  console.log(items);
  loader = document.querySelectorAll(".delayed-load");
  _results = [];
  for (i = _i = 0, _ref = items.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
    _results.push((function(i) {
      var el, src;
      el = items[i];
      src = el.getAttribute("data-src");
      el.setAttribute("src", src);
      window.setTimeout(function() {
        return el.parentElement.classList.remove("delayed-load");
      }, 350);
    })(i));
  }
  return _results;
};

document.onreadystatechange = function() {
  if (document.readyState === "interactive") {
    run();
  }
  if (document.readyState === "complete") {
    return delayed();
  }
};
