(function($) {

  //test("initialization - Reinitialization after body had been emptied.", function() {
  //  expect( 1 );
  //  var bodyContent = $("body").children(), inp = $("#inp");
  //  $("#inp").monthpicker();
  //  $("body").empty().append(inp);
  //  $("#inp").monthpicker();
  //  ok( $("#"+$.monthpicker._mainDivId).length===1, "Monthpicker container added" );
  //  $("body").empty().append(bodyContent); // Returning to initial state for later tests
  //});

  window.TestHelpers = {};

  TestHelpers.onFocus = function( element, onFocus ) {
    var fn = function( event ){
      if( !event.originalEvent ) {
        return;
      }
      element.unbind( "focus", fn );
      onFocus();
    };

    element.bind( "focus", fn )[ 0 ].focus();
  };

  TestHelpers.monthpicker = {
    addMonths: function(date, offset) {
        var maxDay = 32 - new Date(date.getFullYear(), date.getMonth() + offset, 32).getDate();
        date.setDate(Math.min(date.getDate(), maxDay));
        date.setMonth(date.getMonth() + offset);
        return date;
    },
    equalsDate: function(d1, d2, message) {
      if (!d1 || !d2) {
        ok(false, message + " - missing date");
        return;
      }
      d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
      d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
      equal(d1.toString(), d2.toString(), message);
    },
    init: function( id, options ) {
      //$.monthpicker.setDefaults( $.monthpicker.regional[ "" ] );
      return $( id ).monthpicker( $.extend( { showAnim: "" }, options || {} ) );
    },
    initNewInput: function( options ) {
      var id = $( "<input>" ).appendTo( "#qunit-fixture" );
      return TestHelpers.monthpicker.init( id, options );
    },
    onFocus: TestHelpers.onFocus,
    PROP_NAME: "monthpicker"
  };

  asyncTest( "baseStructure", function() {
    expect( 17 );
    var header, title, table, thead, week, panel, inl, child,
    inp = TestHelpers.monthpicker.initNewInput(),
    mp = $( "#ui-monthpicker-div" );

    function step1() {
      TestHelpers.monthpicker.onFocus( inp, function() {
        ok( mp.is( ":visible" ), "Structure - monthpicker visible" );
        ok( !mp.is( ".ui-monthpicker-rtl" ), "Structure - not right-to-left" );
        ok( !mp.is( ".ui-monthpicker-multi" ), "Structure - not multi-month" );
        equal( mp.children().length, 2, "Structure - child count" );

        header = mp.children( ":first" );
        ok( header.is( "div.ui-datepicker-header" ), "Structure - header division" );
        equal( header.children().length, 3, "Structure - header child count" );
        ok( header.children( ":first" ).is( "a.ui-datepicker-prev" ) && header.children( ":first" ).html() !== "", "Structure - prev link" );
        ok( header.children( ":eq(1)" ).is( "a.ui-datepicker-next" ) && header.children( ":eq(1)" ).html() !== "", "Structure - next link" );

        title = header.children( ":last" );
        ok( title.is( "div.ui-datepicker-title" ) && title.html() !== "","Structure - title division" );
        equal( title.children().length, 1, "Structure - title child count" );
        ok( title.children( ":last" ).is( "span.ui-datepicker-year" ) && title.children( ":last" ).text() !== "", "Structure - year text" );

        table = mp.children( ":eq(1)" );
        ok( table.is( "table.ui-datepicker-calendar" ), "Structure - year table" );

        ok( table.children( ":first" ).is( "tbody" ), "Structure - year table body" );
        ok( table.children( ":first" ).children( "tr" ).length >= 4, "Structure - year table quarter count" );

        week = table.children( ":first" ).children( ":first" );
        ok( week.is( "tr" ), "Structure - quarter table quarter row" );
        equal( week.children().length, 3, "Structure - quarter child count" );

        inp.monthpicker( "hide" ).monthpicker( "destroy" );
        step2();
      });
    }

    function step2() {
      // Editable year and button panel
      // TODO: button panel
      inp = TestHelpers.monthpicker.initNewInput({
        changeYear: true,
        showButtonPanel: true
      });

      TestHelpers.monthpicker.onFocus( inp, function() {
        title = mp.find( "div.ui-datepicker-title" );
        ok( title.children( ":last" ).is( "select.ui-datepicker-year" ), "Structure - year selector" );

        panel = mp.children( ":last" );
        //ok( panel.is( "div.ui-datepicker-buttonpane" ), "Structure - button panel division" );
        //equal( panel.children().length, 2, "Structure - button panel child count" );
        //ok( panel.children( ":first" ).is( "button.ui-datepicker-current" ), "Structure - today button" );
        //ok( panel.children( ":last" ).is( "button.ui-datepicker-close" ), "Structure - close button" );

        inp.monthpicker( "hide" ).monthpicker( "destroy" );
        start();
      });
    }

    step1();
  });

  asyncTest( "customStructure", function() {
    expect( 2 );
    var header, panel, title, thead,
      inp = TestHelpers.monthpicker.initNewInput( $.monthpicker.regional.he ),
      mp = $( "#ui-monthpicker-div" );

    function step1() {
      // TODO: Implement RTL reading direction.
      //inp.monthpicker( "option", "showButtonPanel", true );

      TestHelpers.monthpicker.onFocus( inp, function() {
        //ok( mp.is( ".ui-datepicker-rtl" ), "Structure RTL - right-to-left" );

        header = mp.children( ":first" );
        ok( header.is( "div.ui-datepicker-header" ), "Structure RTL - header division" );
        equal( header.children().length, 3, "Structure RTL - header child count" );
        //ok( header.children( ":first" ).is( "a.ui-datepicker-next" ), "Structure RTL - prev link" );
        //ok( header.children( ":eq(1)" ).is( "a.ui-datepicker-prev" ), "Structure RTL - next link" );

        panel = mp.children( ":last" );
        //ok( panel.is( "div.ui-datepicker-buttonpane" ), "Structure RTL - button division" );
        //equal( panel.children().length, 2, "Structure RTL - button panel child count" );
        //ok( panel.children( ":first" ).is( "button.ui-datepicker-close" ), "Structure RTL - close button" );
        //ok( panel.children( ":last" ).is( "button.ui-datepicker-current" ), "Structure RTL - today button" );

        inp.monthpicker( "hide" ).monthpicker( "destroy" );
        step2();
      });
    }

    // Hide prev/next
    function step2() {
      // TODO: Implement min/max dates.
      inp = TestHelpers.monthpicker.initNewInput({
        hideIfNoPrevNext: true,
        minDate: new Date( 2008, 2 - 1, 4 ),
        maxDate: new Date( 2008, 2 - 1, 14 )
      });
      inp.val( "02/10/2008" );

      TestHelpers.monthpicker.onFocus( inp, function() {
        header = mp.children( ":first" );
        //ok( header.is( "div.ui-datepicker-header" ), "Structure hide prev/next - header division" );
        //equal( header.children().length, 1, "Structure hide prev/next - links child count" );
        //ok( header.children( ":first" ).is( "div.ui-datepicker-title" ), "Structure hide prev/next - title division" );

        inp.monthpicker( "hide" ).monthpicker( "destroy" );
        //step3();
        start();
      });
    }

    step1();
  });

  test("mouse", function() {
    expect( 8 );
    var inl,
      inp = TestHelpers.monthpicker.init("#inp"),
      mp = $("#ui-monthpicker-div"),
      date = new Date();

    date.setDate(1);

    inp.val("").monthpicker("show");
    $(".ui-datepicker-calendar tbody a:contains(Oct)", mp).simulate("click", {});
    date.setMonth(9);
    TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Mouse click");

    inp.val("04/2008").monthpicker("show");
    $(".ui-datepicker-calendar tbody a:contains(Feb)", mp).simulate("click", {});
    TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2008, 2 - 1, 1),
      "Mouse click - preset");

    inp.val("").monthpicker("show");
    $("button.ui-datepicker-close", mp).simulate("click", {});
    ok(inp.monthpicker("getDate") == null, "Mouse click - close");

    inp.val("04/2008").monthpicker("option", {showButtonPanel: true}).monthpicker("show");
    $("button.ui-datepicker-close", mp).simulate("click", {});
    TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2008, 4 - 1, 1),
      "Mouse click - close + preset");

    inp.val("04/2008").monthpicker("option", {showButtonPanel: true}).monthpicker("show");
    $("a.ui-datepicker-prev", mp).simulate("click", {});
    $("button.ui-datepicker-close", mp).simulate("click", {});
    TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2008, 4 - 1, 1),
      "Mouse click - abandoned");

    // Current/previous/next
    inp.val("04/2008").monthpicker("show");
    $(".ui-datepicker-current", mp).simulate("click", {});
    date.setMonth(new Date().getMonth());
    TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Mouse click - current");

    inp.val("04/2008").monthpicker("show");
    $(".ui-datepicker-prev", mp).simulate("click");
    $(".ui-datepicker-calendar tbody a:contains(Oct)", mp).simulate("click");
    TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2007, 10 - 1, 1),
      "Mouse click - previous");

    inp.val("04/2008").monthpicker("show");
    $(".ui-datepicker-next", mp).simulate("click");
    $(".ui-datepicker-calendar tbody a:contains(Mar)", mp).simulate("click");
    TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2009, 3 - 1, 1),
      "Mouse click - next");

    // TODO: Previous/next with minimum/maximum
    //inp.monthpicker("option", {minDate: new Date(2008, 2 - 1, 2),
    //  maxDate: new Date(2008, 2 - 1, 26)}).val("02/04/2008").monthpicker("show");
    //$(".ui-datepicker-prev", mp).simulate("click");
    //$(".ui-datepicker-calendar tbody a:contains(16)", mp).simulate("click");
    //TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2008, 2 - 1, 1),
    //  "Mouse click - previous + min/max");
    //inp.val("02/04/2008").monthpicker("show");
    //$(".ui-datepicker-next", mp).simulate("click");
    //$(".ui-datepicker-calendar tbody a:contains(18)", mp).simulate("click");
    //TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2008, 2 - 1, 1),
    //  "Mouse click - next + min/max");
  });

})(jQuery);
