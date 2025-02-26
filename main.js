$(document).ready(() => {
  $("#collapseButton2").on("click", () => {
    $("#collapseButton2").hide();
  });

  $("#collapseButton1").on("click", () => {
    $("#collapseButton1").hide();
  });

  $("#aboutmeItem").on("click", () => {
    $("#navbarSupportedContent").collapse("hide");
  });
  $("#collapse-part1").on("click", () => {
    $("#nav-tabContent-1").css("display", "block");
    $("#nav-tabContent-2").css("display", "none");
  });
  $("#collapse-part2").on("click", () => {
    $("#nav-tabContent-1").css("display", "none");
    $("#nav-tabContent-2").css("display", "block");
  });
});
