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
});
