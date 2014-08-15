$(function(){
  /* activating tooltips */
  $('.header-mobile_actions a').tooltip();
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

  /* add-remove vin table rows */
  function countRowNumber() {
    var count = 0;
    var rows = $(".form-table").find("tr");
    rows.each(function(){
      $(this).children("td:eq(0)").text(count++);
    });
  }

  $(".add_row").on("click",function(ev){
    ev.preventDefault();
    $(this).parent().parent().parent().append(
       "<tr>" +
          "<td>&nbsp;</td>"+
          "<td><input class=\"form-control mini\" type=\"text\" value=\"\"/></td>" +
          "<td><input class=\"form-control mini\" type=\"text\" value=\"\"/></td>" +
          "<td><input class=\"form-control mini\" type=\"number\" value=\"1\"></td>" +
          "<td><input class=\"form-control mini\" type=\"text\"/></td>" +
          "<td class=\"text-center\"><a class=\"rem_row\" href=\"#\"><img src=\"images/icons/rem.png\" alt=\"\"/></a></td>" +
        "</tr>"
    );
    countRowNumber();
  });

  $(".rem_row").on("click",function(ev){
    ev.preventDefault();
    $(this).parent().parent().remove();
    countRowNumber();
  });
  /* /add-remove vin table rows */

  /* show-hide submenu in catalog filter*/
  $(".ctlg-sidebar_cat_li").on("click", function(ev){
    ev.preventDefault();
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
    $(this).find("ul").addClass("open").fadeIn();
  });

  $(document).on("click", ".subcat_li", function(ev) {
    ev.preventDefault();
    $(this).parent("ul").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  /* /show-hide submenu in catalog filter*/

    var Page = (function() {

      var $navArrows = $( '#nav-arrows' ),
          $nav = $( '#nav-dots > span' ),
          slitslider = $( '#slider' ).slitslider( {
            onBeforeChange : function( slide, pos ) {

              $nav.removeClass( 'nav-dot-current' );
              $nav.eq( pos ).addClass( 'nav-dot-current' );

            }
          } ),

          init = function() {

            initEvents();

          },
          initEvents = function() {

            // add navigation events
            $navArrows.children( ':last' ).on( 'click', function() {

              slitslider.next();
              return false;

            } );

            $navArrows.children( ':first' ).on( 'click', function() {

              slitslider.previous();
              return false;

            } );

            $nav.each( function( i ) {

              $( this ).on( 'click', function( event ) {

                var $dot = $( this );

                if( !slitslider.isActive() ) {

                  $nav.removeClass( 'nav-dot-current' );
                  $dot.addClass( 'nav-dot-current' );

                }

                slitslider.jump( i + 1 );
                return false;

              } );

            } );

          };

      return { init : init };

    })();

    Page.init();
});
