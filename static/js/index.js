document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs-video-group").forEach(function (group) {
    var tabs = group.querySelectorAll(".tabs li");
    var contents = group.querySelectorAll(".video-content");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("is-active"); });
        tab.classList.add("is-active");
        var targetId = tab.getAttribute("data-target");
        contents.forEach(function (c) {
          if (c.id === targetId) {
            c.classList.add("is-active");
            c.querySelectorAll("video").forEach(function (v) {
              var p = v.play();
              if (p && typeof p.catch === "function") p.catch(function () {});
            });
          } else {
            c.classList.remove("is-active");
            c.querySelectorAll("video").forEach(function (v) { v.pause(); });
          }
        });
      });
    });
  });
});
