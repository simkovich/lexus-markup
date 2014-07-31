$(function(){
  /* catalog selection hover (appear list of model)*/
  $(".ctlg-selection_box_i").hover(
      function(){
        var right = $(this).find(".model-list_ul").width() + 5;/* detecting a width of list block for setting inverse right style */
        $(this).find(".model-list_ul").css("right",-(right)+"px").stop(true,true).fadeIn(500);
      },
      function(){
        $(this).find(".model-list_ul").stop(true,true).fadeOut();
      }
  );
  /* /catalog selection hover*/
});
