/*
 * monthpicker_options.js
 */

(function($) {

test("setDefaults", function() {
	expect( 3 );
	TestHelpers.monthpicker.init("#inp");
	equal($.monthpicker._defaults.showOn, "focus", "Initial showOn");
	$.monthpicker.setDefaults({showOn: "button"});
	equal($.monthpicker._defaults.showOn, "button", "Change default showOn");
	$.monthpicker.setDefaults({showOn: "focus"});
	equal($.monthpicker._defaults.showOn, "focus", "Restore showOn");
});

test("option", function() {
	expect( 17 );
	var inp = TestHelpers.monthpicker.init("#inp"),
	inst = $.data(inp[0], TestHelpers.monthpicker.PROP_NAME);
	// Set option
	equal(inst.settings.showOn, null, "Initial setting showOn");
	equal($.monthpicker._get(inst, "showOn"), "focus", "Initial instance showOn");
	equal($.monthpicker._defaults.showOn, "focus", "Initial default showOn");
	inp.monthpicker("option", "showOn", "button");
	equal(inst.settings.showOn, "button", "Change setting showOn");
	equal($.monthpicker._get(inst, "showOn"), "button", "Change instance showOn");
	equal($.monthpicker._defaults.showOn, "focus", "Retain default showOn");
	inp.monthpicker("option", {showOn: "both"});
	equal(inst.settings.showOn, "both", "Change setting showOn");
	equal($.monthpicker._get(inst, "showOn"), "both", "Change instance showOn");
	equal($.monthpicker._defaults.showOn, "focus", "Retain default showOn");
	inp.monthpicker("option", "showOn", undefined);
	equal(inst.settings.showOn, null, "Clear setting showOn");
	equal($.monthpicker._get(inst, "showOn"), "focus", "Restore instance showOn");
	equal($.monthpicker._defaults.showOn, "focus", "Retain default showOn");
	// Get option
	inp = TestHelpers.monthpicker.init("#inp");
	equal(inp.monthpicker("option", "showOn"), "focus", "Initial setting showOn");
	inp.monthpicker("option", "showOn", "button");
	equal(inp.monthpicker("option", "showOn"), "button", "Change instance showOn");
	inp.monthpicker("option", "showOn", undefined);
	equal(inp.monthpicker("option", "showOn"), "focus", "Reset instance showOn");
	deepEqual(inp.monthpicker("option", "all"), {showAnim: ""}, "Get instance settings");
	deepEqual(inp.monthpicker("option", "defaults"), $.monthpicker._defaults,
		"Get default settings");
});

test( "disabled", function() {
	expect(8);
	var inp = TestHelpers.monthpicker.init("#inp");
	ok(!inp.monthpicker("isDisabled"), "Initially marked as enabled");
	ok(!inp[0].disabled, "Field initially enabled");
	inp.monthpicker("option", "disabled", true);
	ok(inp.monthpicker("isDisabled"), "Marked as disabled");
	ok(inp[0].disabled, "Field now disabled");
	inp.monthpicker("option", "disabled", false);
	ok(!inp.monthpicker("isDisabled"), "Marked as enabled");
	ok(!inp[0].disabled, "Field now enabled");
	inp.monthpicker("destroy");

	inp = TestHelpers.monthpicker.init("#inp", { disabled: true });
	ok(inp.monthpicker("isDisabled"), "Initially marked as disabled");
	ok(inp[0].disabled, "Field initially disabled");
});

asyncTest( "invocation", function() {
	var button, image,
		isOldIE = $.ui.ie && ( !document.documentMode || document.documentMode < 9 ),
		body = $( "body" );

	expect( isOldIE ? 25 : 29 );

	function step0() {
		var inp = TestHelpers.monthpicker.initNewInput(),
			dp = $( "#ui-monthpicker-div" );

		button = inp.siblings( "button" );
		ok( button.length === 0, "Focus - button absent" );
		image = inp.siblings( "img" );
		ok( image.length === 0, "Focus - image absent" );

		TestHelpers.monthpicker.onFocus( inp, function() {
			ok( dp.is( ":visible" ), "Focus - rendered on focus" );
			inp.simulate( "keydown", { keyCode: $.ui.keyCode.ESCAPE } );
			ok( !dp.is( ":visible" ), "Focus - hidden on exit" );
			step1();
		});
	}

	function step1() {

		var inp = TestHelpers.monthpicker.initNewInput(),
			dp = $( "#ui-monthpicker-div" );

		TestHelpers.monthpicker.onFocus( inp, function() {
			ok( dp.is( ":visible" ), "Focus - rendered on focus" );
			body.simulate( "mousedown", {} );
			ok( !dp.is( ":visible" ), "Focus - hidden on external click" );
			inp.monthpicker( "hide" ).monthpicker( "destroy" );

			step2();
		});
	}

	function step2() {
		var inp = TestHelpers.monthpicker.initNewInput({
				showOn: "button",
				buttonText: "Popup"
			}),
			dp = $( "#ui-monthpicker-div" );

		ok( !dp.is( ":visible" ), "Button - initially hidden" );
		button = inp.siblings( "button" );
		image = inp.siblings( "img" );
		ok( button.length === 1, "Button - button present" );
		ok( image.length === 0, "Button - image absent" );
		equal( button.text(), "Popup", "Button - button text" );

		TestHelpers.monthpicker.onFocus( inp, function() {
			ok( !dp.is( ":visible" ), "Button - not rendered on focus" );
			button.click();
			ok( dp.is( ":visible" ), "Button - rendered on button click" );
			button.click();
			ok( !dp.is( ":visible" ), "Button - hidden on second button click" );
			inp.monthpicker( "hide" ).monthpicker( "destroy" );

			step3();
		});
	}

	function step3() {
		var inp = TestHelpers.monthpicker.initNewInput({
				showOn: "button",
				buttonImageOnly: true,
				buttonImage: "images/calendar.gif",
				buttonText: "Cal"
			}),
			dp = $( "#ui-monthpicker-div" );

		ok( !dp.is( ":visible" ), "Image button - initially hidden" );
		button = inp.siblings( "button" );
		ok( button.length === 0, "Image button - button absent" );
		image = inp.siblings( "img" );
		ok( image.length === 1, "Image button - image present" );
		equal( image.attr( "src" ), "images/calendar.gif", "Image button - image source" );
		equal( image.attr( "title" ), "Cal", "Image button - image text" );

		TestHelpers.monthpicker.onFocus( inp, function() {
			ok( !dp.is( ":visible" ), "Image button - not rendered on focus" );
			image.click();
			ok( dp.is( ":visible" ), "Image button - rendered on image click" );
			image.click();
			ok( !dp.is( ":visible" ), "Image button - hidden on second image click" );
			inp.monthpicker( "hide" ).monthpicker( "destroy" );

			step4();
		});
	}

	function step4() {
		var inp = TestHelpers.monthpicker.initNewInput({
				showOn: "both",
				buttonImage: "images/calendar.gif"
			}),
			dp = $( "#ui-monthpicker-div" );

		ok( !dp.is( ":visible" ), "Both - initially hidden" );
		button = inp.siblings( "button" );
		ok( button.length === 1, "Both - button present" );
		image = inp.siblings( "img" );
		ok( image.length === 0, "Both - image absent" );
		image = button.children( "img" );
		ok( image.length === 1, "Both - button image present" );

		// TODO: occasionally this test flakily fails to focus in IE8 in browserstack
		if ( !isOldIE ) {
			TestHelpers.monthpicker.onFocus( inp, function() {
				ok( dp.is( ":visible" ), "Both - rendered on focus" );
				body.simulate( "mousedown", {} );
				ok( !dp.is( ":visible" ), "Both - hidden on external click" );
				button.click();
				ok( dp.is( ":visible" ), "Both - rendered on button click" );
				button.click();
				ok( !dp.is( ":visible" ), "Both - hidden on second button click" );
				inp.monthpicker( "hide" ).monthpicker( "destroy" );

				start();
			});
		} else {
			start();
		}
	}

	step0();
});

test("defaultDate", function() {
	expect( 12 );
	var inp = TestHelpers.monthpicker.init("#inp"),
		date = new Date();
  date.setDate(1);

	inp.val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date null");

	// Numeric values
	inp.monthpicker("option", {defaultDate: -2}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date.setMonth(date.getMonth() - 2);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date -2");

	date = new Date();
  date.setDate(1);
	inp.monthpicker("option", {defaultDate: 3}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date.setMonth(date.getMonth() + 3);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date 3");

	date = new Date();
  date.setDate(1);
	inp.monthpicker("option", {defaultDate: 1 / "a"}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date NaN");

	// String offset values
	inp.monthpicker("option", {defaultDate: " -1 m "}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date = TestHelpers.monthpicker.addMonths(new Date(), -1);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date -1 m");
	inp.monthpicker("option", {defaultDate: "+2M"}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date = TestHelpers.monthpicker.addMonths(new Date(), 2);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date +2M");
	inp.monthpicker("option", {defaultDate: "-2y"}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date = new Date();
  date.setDate(1);
	date.setFullYear(date.getFullYear() - 2);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date -2y");
	inp.monthpicker("option", {defaultDate: "+1 Y "}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date.setFullYear(date.getFullYear() + 3);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date +1 Y");
	inp.monthpicker("option", {defaultDate: "+1M +2y"}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date = TestHelpers.monthpicker.addMonths(new Date(), 1);
	date.setYear(date.getFullYear() + 2);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date +1M +2y");
	// String date values
	inp.monthpicker("option", {defaultDate: "07/2007"}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date = new Date(2007, 7 - 1, 1);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date 07/2007");
	inp.monthpicker("option", {dateFormat: "yy-mm", defaultDate: "2007-04"}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date = new Date(2007, 4 - 1, 1);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date 2007-04");
	// Date value
	date = new Date(2008, 1 - 1, 1);
	inp.monthpicker("option", {dateFormat: "mm/yy", defaultDate: date}).
		monthpicker("hide").val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date, "Default date 01/2008");
});

test("miscellaneous", function() {
	expect( 19 );
	var curYear, longNames, shortNames, date,
		inp = TestHelpers.monthpicker.init("#inp"),
		dp = $("#ui-monthpicker-div");
	// Year range
	function genRange(start, offset) {
		var i = start,
			range = "";
		for (; i < start + offset; i++) {
			range += i;
		}
		return range;
	}
	curYear = new Date().getFullYear();
	inp.val("04/2008").monthpicker("show");
	equal(dp.find(".ui-datepicker-year").text(), "2008", "Year range - read-only default");
	inp.monthpicker("hide").monthpicker("option", {changeYear: true}).monthpicker("show");
	equal(dp.find(".ui-datepicker-year").text(), genRange(2008 - 10, 21), "Year range - changeable default");
	inp.monthpicker("hide").monthpicker("option", {yearRange: "c-6:c+2", changeYear: true}).monthpicker("show");
	equal(dp.find(".ui-datepicker-year").text(), genRange(2008 - 6, 9), "Year range - c-6:c+2");
	inp.monthpicker("hide").monthpicker("option", {yearRange: "2000:2010", changeYear: true}).monthpicker("show");
	equal(dp.find(".ui-datepicker-year").text(), genRange(2000, 11), "Year range - 2000:2010");
	inp.monthpicker("hide").monthpicker("option", {yearRange: "-5:+3", changeYear: true}).monthpicker("show");
	equal(dp.find(".ui-datepicker-year").text(), genRange(curYear - 5, 9), "Year range - -5:+3");
	inp.monthpicker("hide").monthpicker("option", {yearRange: "2000:-5", changeYear: true}).monthpicker("show");
	equal(dp.find(".ui-datepicker-year").text(), genRange(2000, curYear - 2004), "Year range - 2000:-5");
	inp.monthpicker("hide").monthpicker("option", {yearRange: "", changeYear: true}).monthpicker("show");
	equal(dp.find(".ui-datepicker-year").text(), genRange(curYear, 1), "Year range - -6:+2");

	// Navigation as date format
	inp.monthpicker("option", {showButtonPanel: true});
	equal(dp.find(".ui-datepicker-prev").text(), "Prev", "Navigation prev - default");
	equal(dp.find(".ui-datepicker-current").text(), "Current", "Navigation current - default");
	equal(dp.find(".ui-datepicker-next").text(), "Next", "Navigation next - default");
	inp.monthpicker("hide").monthpicker("option", {navigationAsDateFormat: true, prevText: "< yy", currentText: "yy", nextText: "yy >"}).
		val("04/2008").monthpicker("show");
	longNames = $.monthpicker.regional[""].monthNames;
	shortNames = $.monthpicker.regional[""].monthNamesShort;
	date = new Date(2008, 04, 1);
	equal(dp.find(".ui-datepicker-prev").text(), "< " + (date.getFullYear() - 1), "Navigation prev - as date format");
	equal(dp.find(".ui-datepicker-current").text(),
		(new Date()).getFullYear().toString(), "Navigation current - as date format");
	equal(dp.find(".ui-datepicker-next").text(),
		(date.getFullYear() + 1) + " >", "Navigation next - as date format");

	date = new Date(2008, 04, 1);
  inp.val("04/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN});
	equal(dp.find(".ui-datepicker-prev").text(), "< " + (date.getFullYear()), "Navigation prev - as date format + pgdn");
	equal(dp.find(".ui-datepicker-current").text(), "" + (new Date()).getFullYear(), "Navigation current - as date format + pgdn");
	equal(dp.find(".ui-datepicker-next").text(), (date.getFullYear() + 2) + " >", "Navigation next - as date format + pgdn");

	inp.monthpicker("hide").monthpicker("option", {gotoCurrent: true}).
		val("04/2008").monthpicker("show");
	equal(dp.find(".ui-datepicker-prev").text(),
		"< 2007", "Navigation prev - as date format + goto current");
	equal(dp.find(".ui-datepicker-current").text(),
		"2008", "Navigation current - as date format + goto current");
	equal(dp.find(".ui-datepicker-next").text(),
		"2009 >", "Navigation next - as date format + goto current");
});

test("minMax", function() {
	expect( 25 );
	var date,
		inp = TestHelpers.monthpicker.init("#inp"),
		dp = $("#ui-monthpicker-div"),
		lastYear = new Date(2007, 6 - 1, 1),
		nextYear = new Date(2009, 6 - 1, 1),
		minDate = new Date(2008, 2 - 1, 1),
		maxDate = new Date(2008, 12 - 1, 1);
	inp.val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_UP}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), lastYear,
		"Min/max - null, null - pgup");
	inp.val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), nextYear,
		"Min/max - null, null - pgdn");
	inp.monthpicker("option", {minDate: minDate}).
		monthpicker("hide").val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_UP}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), minDate,
		"Min/max - 02/2008, null - pgup");
	inp.val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), nextYear,
		"Min/max - 02/2008, null - pgdn");
	inp.monthpicker("option", {maxDate: maxDate}).
		datepicker("hide").val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_UP}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), minDate,
		"Min/max - 02/2008, 12/2008 - pgup");
	inp.val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), maxDate,
		"Min/max - 02/2008, 12/2008 - pgdn");
	inp.monthpicker("option", {minDate: null}).
		datepicker("hide").val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_UP}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), lastYear,
		"Min/max - null, 12/2008 - pgup");
	inp.val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), maxDate,
		"Min/max - null, 12/2008 - pgdn");
	
  // Relative dates
	date = new Date();
  date.setDate(1);
	date.setMonth(date.getMonth() - 1);
	inp.monthpicker("option", {minDate: "-1 M", maxDate: "+3 M"}).
		datepicker("hide").val("").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_UP}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date,
		"Min/max - -1 M, +3 M - pgup");

	date.setMonth(new Date().getMonth() + 3);
	inp.val("").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date,
		"Min/max - -1 M, +3 M - pgdn");

	// With existing date
	inp = TestHelpers.monthpicker.init("#inp");

  console.log(inp.monthpicker("getDate"));
	inp.val("06/2008").monthpicker("option", {minDate: minDate});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2008, 6 - 1, 1), "Min/max - setDate > min");
	inp.monthpicker("option", {minDate: null}).val("01/2008").monthpicker("option", {minDate: minDate});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), minDate, "Min/max - setDate < min");
	inp.monthpicker("option", {minDate: null}).val("06/2008").monthpicker("option", {maxDate: maxDate});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2008, 6 - 1, 1), "Min/max - setDate < max");
	inp.monthpicker("option", {maxDate: null}).val("01/2009").monthpicker("option", {maxDate: maxDate});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), maxDate, "Min/max - setDate > max");
	inp.monthpicker("option", {maxDate: null}).val("01/2008").monthpicker("option", {minDate: minDate, maxDate: maxDate});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), minDate, "Min/max - setDate < min");
	inp.monthpicker("option", {maxDate: null}).val("06/2008").monthpicker("option", {minDate: minDate, maxDate: maxDate});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), new Date(2008, 6 - 1, 1), "Min/max - setDate > min, < max");
	inp.monthpicker("option", {maxDate: null}).val("01/2009").monthpicker("option", {minDate: minDate, maxDate: maxDate});
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), maxDate, "Min/max - setDate > max");

	inp.monthpicker("option", {yearRange: "-0:+1"}).val("01/" + new Date().getFullYear());
	ok(dp.find(".ui-datepicker-prev").hasClass("ui-state-disabled"), "Year Range Test - previous button disabled at 1/minYear");
	inp.monthpicker("setDate", "12/" + new Date().getFullYear());
	ok(dp.find(".ui-datepicker-next").hasClass("ui-state-disabled"), "Year Range Test - next button disabled at 12/maxYear");

	inp.monthpicker("option", {
		minDate: new Date(1900, 0, 1),
		maxDate: "-6Y",
		yearRange: "1900:-6"
	}).val( "" );
	ok(dp.find(".ui-datepicker-next").hasClass("ui-state-disabled"), "Year Range Test - next button disabled");
	ok(!dp.find(".ui-datepicker-prev").hasClass("ui-state-disabled"), "Year Range Test - prev button enabled");

	inp.monthpicker("option", {
		minDate: new Date(1900, 0, 1),
		maxDate: new Date(2007, 1 - 1, 25),
		yearRange: "1900:2007"
	}).val( "" );
	ok(dp.find(".ui-datepicker-next").hasClass("ui-state-disabled"), "Year Range Test - next button disabled");
	ok(!dp.find(".ui-datepicker-prev").hasClass("ui-state-disabled"), "Year Range Test - prev button enabled");

	inp.monthpicker("option", {
		minDate: new Date(2008,  3 - 1, 1),
		maxDate: new Date(2008, 10 - 1, 1)
	}).val("06/2008");
	equal(dp.find(".ui-datepicker-unselectable").size(), 4, "Marks unselectable months with .ui-datepicker-unselectable");

	inp.monthpicker("option", {
    yearRange: "2006:2010",
    changeYear: true,
		minDate: new Date(2008,  3 - 1, 1),
		maxDate: new Date(2008, 10 - 1, 1)
	}).val("06/2008");
	equal(dp.find(".ui-datepicker-year option").size(), 1, "Limits year options by minDate/maxDate");
});

test("setDate", function() {
	expect( 18 );
	var inl, alt, minDate, maxDate, dateAndTimeToSet, dateAndTimeClone,
		inp = TestHelpers.monthpicker.init("#inp"),
		date1 = new Date(2008, 6 - 1, 1),
		date2 = new Date();
  date2.setDate(1);

	ok(inp.monthpicker("getDate") == null, "Set date - default");
	inp.monthpicker("setDate", date1);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date1, "Set date - 2008-06-01");

	date1 = new Date();
  date1.setDate(1);
  date1.setMonth(date1.getMonth() + 7);
	inp.monthpicker("setDate", +7);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date1, "Set date (months) - +7");

	date2.setFullYear(date2.getFullYear() + 2);
	inp.monthpicker("setDate", "+2y");
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date2, "Set date - +2y");
	inp.monthpicker("setDate", date1, date2);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date1, "Set date - two dates");
	inp.monthpicker("setDate");
	ok(inp.monthpicker("getDate") == null, "Set date - null");

	// Relative to current date
	date1 = new Date();
	date1.setDate(1)
  date1.setMonth(date1.getMonth() + 7);
	inp.monthpicker("setDate", "c +7");
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date1, "Set date - c +7");

  date1.setMonth(date1.getMonth() + 7);
	inp.monthpicker("setDate", "c+7");
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date1, "Set date - c+7");
	date1.setMonth(date1.getMonth() - 3);
	inp.monthpicker("setDate", "c -3 m");
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date1, "Set date - c -3 m");
	// Inline
	//inl = TestHelpers.monthpicker.init("#inl");
	//date1 = new Date(2008, 6 - 1, 4);
	//date2 = new Date();
	//TestHelpers.monthpicker.equalsDate(inl.monthpicker("getDate"), date2, "Set date inline - default");
	//inl.monthpicker("setDate", date1);
	//TestHelpers.monthpicker.equalsDate(inl.monthpicker("getDate"), date1, "Set date inline - 2008-06-04");
	//date1 = new Date();
	//date1.setDate(date1.getDate() + 7);
	//inl.monthpicker("setDate", +7);
	//TestHelpers.monthpicker.equalsDate(inl.monthpicker("getDate"), date1, "Set date inline - +7");
	//date2.setFullYear(date2.getFullYear() + 2);
	//inl.monthpicker("setDate", "+2y");
	//TestHelpers.monthpicker.equalsDate(inl.monthpicker("getDate"), date2, "Set date inline - +2y");
	//inl.monthpicker("setDate", date1, date2);
	//TestHelpers.monthpicker.equalsDate(inl.monthpicker("getDate"), date1, "Set date inline - two dates");
	//inl.monthpicker("setDate");
	//ok(inl.monthpicker("getDate") == null, "Set date inline - null");
	// Alternate field
	alt = $("#alt");
	inp.monthpicker("option", {altField: "#alt", altFormat: "yy-mm"});
	date1 = new Date(2008, 6 - 1, 1);
	inp.monthpicker("setDate", date1);
	equal(inp.val(), "06/2008", "Set date alternate - 06/2008");
	equal(alt.val(), "2008-06", "Set date alternate - 2008-06");
	// With minimum/maximum
	inp = TestHelpers.monthpicker.init("#inp");
	date1 = new Date(2008, 1 - 1, 1);
	date2 = new Date(2008, 6 - 1, 1);
	minDate = new Date(2008, 2 - 1, 1);
	maxDate = new Date(2008, 3 - 1, 1);
	inp.val("").monthpicker("option", {minDate: minDate}).monthpicker("setDate", date2);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date2, "Set date min/max - setDate > min");
	inp.monthpicker("setDate", date1);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), minDate, "Set date min/max - setDate < min");
	inp.val("").monthpicker("option", {maxDate: maxDate, minDate: null}).monthpicker("setDate", date1);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), date1, "Set date min/max - setDate < max");
	inp.monthpicker("setDate", date2);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), maxDate, "Set date min/max - setDate > max");
	inp.val("").monthpicker("option", {minDate: minDate}).monthpicker("setDate", date1);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), minDate, "Set date min/max - setDate < min");
	inp.monthpicker("setDate", date2);
	TestHelpers.monthpicker.equalsDate(inp.monthpicker("getDate"), maxDate, "Set date min/max - setDate > max");
	dateAndTimeToSet = new Date(2008, 3 - 1, 28, 1, 11, 0);
	dateAndTimeClone = new Date(2008, 3 - 1, 28, 1, 11, 0);
	inp.monthpicker("setDate", dateAndTimeToSet);
	equal(dateAndTimeToSet.getTime(), dateAndTimeClone.getTime(), "Date object passed should not be changed by setDate");
});

test("altField", function() {
	expect( 10 );
	var inp = TestHelpers.monthpicker.init("#inp"),
		alt = $("#alt");
	// No alternate field set
	alt.val("");
	inp.val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	equal(inp.val(), "06/2008", "Alt field - dp - enter");
	equal(alt.val(), "", "Alt field - alt not set");
	// Alternate field set
	alt.val("");
	inp.monthpicker("option", {altField: "#alt", altFormat: "yy-mm"}).
		val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	equal(inp.val(), "06/2008", "Alt field - dp - enter");
	equal(alt.val(), "2008-06", "Alt field - alt - enter");
	// Move from initial date
	alt.val("");
	inp.val("06/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	equal(inp.val(), "06/2009", "Alt field - dp - pgdn");
	equal(alt.val(), "2009-06", "Alt field - alt - pgdn");
	// Alternate field set - closed
	alt.val("");
	inp.val("06/04/2008").monthpicker("show");
	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN}).
		simulate("keydown", {keyCode: $.ui.keyCode.ESCAPE});
	equal(inp.val(), "06/04/2008", "Alt field - dp - pgdn/esc");
	equal(alt.val(), "", "Alt field - alt - pgdn/esc");
	// Clear date and alternate
	alt.val("");
	inp.val("06/04/2008").monthpicker("show");
	inp.simulate("keydown", {ctrlKey: true, keyCode: $.ui.keyCode.END});
	equal(inp.val(), "", "Alt field - dp - ctrl+end");
	equal(alt.val(), "", "Alt field - alt - ctrl+end");
});

test("autoSize", function() {
	expect( 15 );
	var inp = TestHelpers.monthpicker.init("#inp");
	equal(inp.prop("size"), 20, "Auto size - default");
	inp.monthpicker("option", "autoSize", true);
	equal(inp.prop("size"), 10, "Auto size - mm/dd/yy");
	inp.monthpicker("option", "dateFormat", "m/d/yy");
	equal(inp.prop("size"), 10, "Auto size - m/d/yy");
	inp.monthpicker("option", "dateFormat", "D M d yy");
	equal(inp.prop("size"), 15, "Auto size - D M d yy");
	inp.monthpicker("option", "dateFormat", "DD, MM dd, yy");
	equal(inp.prop("size"), 29, "Auto size - DD, MM dd, yy");

	// French
	inp.monthpicker("option", $.extend({autoSize: false}, $.monthpicker.regional.fr));
	equal(inp.prop("size"), 29, "Auto size - fr - default");
	inp.monthpicker("option", "autoSize", true);
	equal(inp.prop("size"), 10, "Auto size - fr - dd/mm/yy");
	inp.monthpicker("option", "dateFormat", "m/d/yy");
	equal(inp.prop("size"), 10, "Auto size - fr - m/d/yy");
	inp.monthpicker("option", "dateFormat", "D M d yy");
	equal(inp.prop("size"), 18, "Auto size - fr - D M d yy");
	inp.monthpicker("option", "dateFormat", "DD, MM dd, yy");
	equal(inp.prop("size"), 28, "Auto size - fr - DD, MM dd, yy");

	// Hebrew
	inp.monthpicker("option", $.extend({autoSize: false}, $.monthpicker.regional.he));
	equal(inp.prop("size"), 28, "Auto size - he - default");
	inp.monthpicker("option", "autoSize", true);
	equal(inp.prop("size"), 10, "Auto size - he - dd/mm/yy");
	inp.monthpicker("option", "dateFormat", "m/d/yy");
	equal(inp.prop("size"), 10, "Auto size - he - m/d/yy");
	inp.monthpicker("option", "dateFormat", "D M d yy");
	equal(inp.prop("size"), 16, "Auto size - he - D M d yy");
	inp.monthpicker("option", "dateFormat", "DD, MM dd, yy");
	equal(inp.prop("size"), 23, "Auto size - he - DD, MM dd, yy");
});

var beforeShowThis = null,
	beforeShowInput = null,
	beforeShowInst = null,
	beforeShowDayThis = null,
	beforeShowDayOK = true;


function beforeAll(input, inst) {
	beforeShowThis = this;
	beforeShowInput = input;
	beforeShowInst = inst;
	return {currentText: "Current"};
}

function beforeDay(date) {
	beforeShowDayThis = this;
	beforeShowDayOK &= (date > new Date(2008, 1 - 1, 26) &&
		date < new Date(2008, 3 - 1, 6));
	return [(date.getDate() % 2 === 0), (date.getDate() % 10 === 0 ? "day10" : ""),
		(date.getDate() % 3 === 0 ? "Divisble by 3" : "")];
}

test("callbacks", function() {
	expect( 13 );
	// Before show
	var dp, day20, day21,
		inp = TestHelpers.monthpicker.init("#inp", {beforeShow: beforeAll}),
		inst = $.data(inp[0], "datepicker");
	equal($.monthpicker._get(inst, "currentText"), "Today", "Before show - initial");
	inp.val("02/04/2008").monthpicker("show");
	equal($.monthpicker._get(inst, "currentText"), "Current", "Before show - changed");
	ok(beforeShowThis.id === inp[0].id, "Before show - this OK");
	ok(beforeShowInput.id === inp[0].id, "Before show - input OK");
	deepEqual(beforeShowInst, inst, "Before show - inst OK");
	inp.monthpicker("hide").monthpicker("destroy");
	// Before show day
	inp = TestHelpers.monthpicker.init("#inp", {beforeShowDay: beforeDay});
	dp = $("#ui-monthpicker-div");
	inp.val("02/04/2008").monthpicker("show");
	ok(beforeShowDayThis.id === inp[0].id, "Before show day - this OK");
	ok(beforeShowDayOK, "Before show day - dates OK");
	day20 = dp.find(".ui-datepicker-calendar td:contains('20')");
	day21 = dp.find(".ui-datepicker-calendar td:contains('21')");
	ok(!day20.is(".ui-datepicker-unselectable"), "Before show day - unselectable 20");
	ok(day21.is(".ui-datepicker-unselectable"), "Before show day - unselectable 21");
	ok(day20.is(".day10"), "Before show day - CSS 20");
	ok(!day21.is(".day10"), "Before show day - CSS 21");
	ok(!day20.attr("title"), "Before show day - title 20");
	ok(day21.attr("title") === "Divisble by 3", "Before show day - title 21");
	inp.monthpicker("hide").monthpicker("destroy");
});

test("beforeShowDay - tooltips with quotes", function() {
	expect( 1 );
	var inp, dp;
	inp = TestHelpers.monthpicker.init("#inp", {
		beforeShowDay: function() {
			return [ true, "", "'" ];
		}
	});
	dp = $("#ui-monthpicker-div");

	inp.monthpicker("show");
	equal( dp.find( ".ui-datepicker-calendar td:contains('9')").attr( "title" ), "'" );
	inp.monthpicker("hide").monthpicker("destroy");
});

test("localisation", function() {
	expect( 24 );
	var dp, month, day, date,
		inp = TestHelpers.monthpicker.init("#inp", $.monthpicker.regional.fr);
	inp.monthpicker("option", {dateFormat: "DD, d MM yy", showButtonPanel:true, changeMonth:true, changeYear:true}).val("").monthpicker("show");
	dp = $("#ui-monthpicker-div");
	equal($(".ui-datepicker-close", dp).text(), "Fermer", "Localisation - close");
	$(".ui-datepicker-close", dp).simulate("mouseover");
	equal($(".ui-datepicker-prev", dp).text(), "Précédent", "Localisation - previous");
	equal($(".ui-datepicker-current", dp).text(), "Aujourd'hui", "Localisation - current");
	equal($(".ui-datepicker-next", dp).text(), "Suivant", "Localisation - next");
	month = 0;
	$(".ui-datepicker-month option", dp).each(function() {
		equal($(this).text(), $.monthpicker.regional.fr.monthNamesShort[month],
			"Localisation - month " + month);
		month++;
	});
	day = 1;
	$(".ui-datepicker-calendar th", dp).each(function() {
		equal($(this).text(), $.monthpicker.regional.fr.dayNamesMin[day],
			"Localisation - day " + day);
		day = (day + 1) % 7;
	});
	inp.simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date = new Date();
	equal(inp.val(), $.monthpicker.regional.fr.dayNames[date.getDay()] + ", " +
		date.getDate() + " " + $.monthpicker.regional.fr.monthNames[date.getMonth()] +
		" " + date.getFullYear(), "Localisation - formatting");
});

test("noWeekends", function() {
	expect( 31 );
	var i, date;
	for (i = 1; i <= 31; i++) {
		date = new Date(2001, 1 - 1, i);
		deepEqual($.monthpicker.noWeekends(date), [(i + 1) % 7 >= 2, ""],
			"No weekends " + date);
	}
});

test("iso8601Week", function() {
	expect( 12 );
	var date = new Date(2000, 12 - 1, 31);
	equal($.monthpicker.iso8601Week(date), 52, "ISO 8601 week " + date);
	date = new Date(2001, 1 - 1, 1);
	equal($.monthpicker.iso8601Week(date), 1, "ISO 8601 week " + date);
	date = new Date(2001, 1 - 1, 7);
	equal($.monthpicker.iso8601Week(date), 1, "ISO 8601 week " + date);
	date = new Date(2001, 1 - 1, 8);
	equal($.monthpicker.iso8601Week(date), 2, "ISO 8601 week " + date);
	date = new Date(2003, 12 - 1, 28);
	equal($.monthpicker.iso8601Week(date), 52, "ISO 8601 week " + date);
	date = new Date(2003, 12 - 1, 29);
	equal($.monthpicker.iso8601Week(date), 1, "ISO 8601 week " + date);
	date = new Date(2004, 1 - 1, 4);
	equal($.monthpicker.iso8601Week(date), 1, "ISO 8601 week " + date);
	date = new Date(2004, 1 - 1, 5);
	equal($.monthpicker.iso8601Week(date), 2, "ISO 8601 week " + date);
	date = new Date(2009, 12 - 1, 28);
	equal($.monthpicker.iso8601Week(date), 53, "ISO 8601 week " + date);
	date = new Date(2010, 1 - 1, 3);
	equal($.monthpicker.iso8601Week(date), 53, "ISO 8601 week " + date);
	date = new Date(2010, 1 - 1, 4);
	equal($.monthpicker.iso8601Week(date), 1, "ISO 8601 week " + date);
	date = new Date(2010, 1 - 1, 10);
	equal($.monthpicker.iso8601Week(date), 1, "ISO 8601 week " + date);
});

test("parseDate", function() {
	expect( 26 );
	TestHelpers.monthpicker.init("#inp");
	var currentYear, gmtDate, fr, settings, zh;
	ok($.monthpicker.parseDate("d m y", "") == null, "Parse date empty");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("d m y", "3 2 01"),
		new Date(2001, 2 - 1, 3), "Parse date d m y");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("dd mm yy", "03 02 2001"),
		new Date(2001, 2 - 1, 3), "Parse date dd mm yy");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("d m y", "13 12 01"),
		new Date(2001, 12 - 1, 13), "Parse date d m y");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("dd mm yy", "13 12 2001"),
		new Date(2001, 12 - 1, 13), "Parse date dd mm yy");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("y-o", "01-34"),
		new Date(2001, 2 - 1, 3), "Parse date y-o");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("yy-oo", "2001-347"),
		new Date(2001, 12 - 1, 13), "Parse date yy-oo");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("oo yy", "348 2004"),
		new Date(2004, 12 - 1, 13), "Parse date oo yy");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("D d M y", "Sat 3 Feb 01"),
		new Date(2001, 2 - 1, 3), "Parse date D d M y");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("d MM DD yy", "3 February Saturday 2001"),
		new Date(2001, 2 - 1, 3), "Parse date dd MM DD yy");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("DD, MM d, yy", "Saturday, February 3, 2001"),
		new Date(2001, 2 - 1, 3), "Parse date DD, MM d, yy");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("'day' d 'of' MM (''DD''), yy",
		"day 3 of February ('Saturday'), 2001"), new Date(2001, 2 - 1, 3),
		"Parse date 'day' d 'of' MM (''DD''), yy");
	currentYear = new Date().getFullYear();
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("y-m-d", (currentYear - 2000) + "-02-03"),
			new Date(currentYear, 2 - 1, 3), "Parse date y-m-d - default cutuff");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("y-m-d", (currentYear - 2000 + 10) + "-02-03"),
			new Date(currentYear+10, 2 - 1, 3), "Parse date y-m-d - default cutuff");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("y-m-d", (currentYear - 2000 + 11) + "-02-03"),
			new Date(currentYear-89, 2 - 1, 3), "Parse date y-m-d - default cutuff");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("y-m-d", "80-02-03", {shortYearCutoff: 80}),
		new Date(2080, 2 - 1, 3), "Parse date y-m-d - cutoff 80");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("y-m-d", "81-02-03", {shortYearCutoff: 80}),
		new Date(1981, 2 - 1, 3), "Parse date y-m-d - cutoff 80");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("y-m-d", (currentYear - 2000 + 60) + "-02-03", {shortYearCutoff: "+60"}),
			new Date(currentYear + 60, 2 - 1, 3), "Parse date y-m-d - cutoff +60");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("y-m-d", (currentYear - 2000 + 61) + "-02-03", {shortYearCutoff: "+60"}),
			new Date(currentYear - 39, 2 - 1, 3), "Parse date y-m-d - cutoff +60");
	gmtDate = new Date(2001, 2 - 1, 3);
	gmtDate.setMinutes(gmtDate.getMinutes() - gmtDate.getTimezoneOffset());
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("@", "981158400000"), gmtDate, "Parse date @");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("!", "631167552000000000"), gmtDate, "Parse date !");

	fr = $.monthpicker.regional.fr;
	settings = {dayNamesShort: fr.dayNamesShort, dayNames: fr.dayNames,
		monthNamesShort: fr.monthNamesShort, monthNames: fr.monthNames};
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("D d M y", "Lun. 9 Avril 01", settings),
		new Date(2001, 4 - 1, 9), "Parse date D M y with settings");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("d MM DD yy", "9 Avril Lundi 2001", settings),
		new Date(2001, 4 - 1, 9), "Parse date d MM DD yy with settings");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("DD, MM d, yy", "Lundi, Avril 9, 2001", settings),
		new Date(2001, 4 - 1, 9), "Parse date DD, MM d, yy with settings");
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("'jour' d 'de' MM (''DD''), yy", "jour 9 de Avril ('Lundi'), 2001", settings),
		new Date(2001, 4 - 1, 9), "Parse date 'jour' d 'de' MM (''DD''), yy with settings");

	zh = $.monthpicker.regional["zh-CN"];
	TestHelpers.monthpicker.equalsDate($.monthpicker.parseDate("yy M d", "2011 十一月 22", zh),
		new Date(2011, 11 - 1, 22), "Parse date yy M d with zh-CN");
});

test("parseDateErrors", function() {
	expect( 17 );
	TestHelpers.monthpicker.init("#inp");
	var fr, settings;
	function expectError(expr, value, error) {
		try {
			expr();
			ok(false, "Parsed error " + value);
		}
		catch (e) {
			equal(e, error, "Parsed error " + value);
		}
	}
	expectError(function() { $.monthpicker.parseDate(null, "Sat 2 01"); },
		"Sat 2 01", "Invalid arguments");
	expectError(function() { $.monthpicker.parseDate("d m y", null); },
		"null", "Invalid arguments");
	expectError(function() { $.monthpicker.parseDate("d m y", "Sat 2 01"); },
		"Sat 2 01 - d m y", "Missing number at position 0");
	expectError(function() { $.monthpicker.parseDate("dd mm yy", "Sat 2 01"); },
		"Sat 2 01 - dd mm yy", "Missing number at position 0");
	expectError(function() { $.monthpicker.parseDate("d m y", "3 Feb 01"); },
		"3 Feb 01 - d m y", "Missing number at position 2");
	expectError(function() { $.monthpicker.parseDate("dd mm yy", "3 Feb 01"); },
		"3 Feb 01 - dd mm yy", "Missing number at position 2");
	expectError(function() { $.monthpicker.parseDate("d m y", "3 2 AD01"); },
		"3 2 AD01 - d m y", "Missing number at position 4");
	expectError(function() { $.monthpicker.parseDate("d m yy", "3 2 AD01"); },
		"3 2 AD01 - dd mm yy", "Missing number at position 4");
	expectError(function() { $.monthpicker.parseDate("y-o", "01-D01"); },
		"2001-D01 - y-o", "Missing number at position 3");
	expectError(function() { $.monthpicker.parseDate("yy-oo", "2001-D01"); },
		"2001-D01 - yy-oo", "Missing number at position 5");
	expectError(function() { $.monthpicker.parseDate("D d M y", "D7 3 Feb 01"); },
		"D7 3 Feb 01 - D d M y", "Unknown name at position 0");
	expectError(function() { $.monthpicker.parseDate("D d M y", "Sat 3 M2 01"); },
		"Sat 3 M2 01 - D d M y", "Unknown name at position 6");
	expectError(function() { $.monthpicker.parseDate("DD, MM d, yy", "Saturday- Feb 3, 2001"); },
		"Saturday- Feb 3, 2001 - DD, MM d, yy", "Unexpected literal at position 8");
	expectError(function() { $.monthpicker.parseDate("'day' d 'of' MM (''DD''), yy",
		"day 3 of February (\"Saturday\"), 2001"); },
		"day 3 of Mon2 ('Day7'), 2001", "Unexpected literal at position 19");
	expectError(function() { $.monthpicker.parseDate("d m y", "29 2 01"); },
		"29 2 01 - d m y", "Invalid date");
	fr = $.monthpicker.regional.fr;
	settings = {dayNamesShort: fr.dayNamesShort, dayNames: fr.dayNames,
		monthNamesShort: fr.monthNamesShort, monthNames: fr.monthNames};
	expectError(function() { $.monthpicker.parseDate("D d M y", "Mon 9 Avr 01", settings); },
		"Mon 9 Avr 01 - D d M y", "Unknown name at position 0");
	expectError(function() { $.monthpicker.parseDate("D d M y", "Lun. 9 Apr 01", settings); },
		"Lun. 9 Apr 01 - D d M y", "Unknown name at position 7");
});

test("Ticket #7244: date parser does not fail when too many numbers are passed into the date function", function() {
	expect( 4 );
	var date;
	try{
		date = $.monthpicker.parseDate("dd/mm/yy", "18/04/19881");
		ok(false, "Did not properly detect an invalid date");
	}catch(e){
		ok("invalid date detected");
	}

	try {
		date = $.monthpicker.parseDate("dd/mm/yy", "18/04/1988 @ 2:43 pm");
		equal(date.getDate(), 18);
		equal(date.getMonth(), 3);
		equal(date.getFullYear(), 1988);
	} catch(e) {
		ok(false, "Did not properly parse date with extra text separated by whitespace");
	}
});

test("formatDate", function() {
	expect( 16 );
	TestHelpers.monthpicker.init("#inp");
	var gmtDate, fr, settings;
	equal($.monthpicker.formatDate("d m y", new Date(2001, 2 - 1, 3)),
		"3 2 01", "Format date d m y");
	equal($.monthpicker.formatDate("dd mm yy", new Date(2001, 2 - 1, 3)),
		"03 02 2001", "Format date dd mm yy");
	equal($.monthpicker.formatDate("d m y", new Date(2001, 12 - 1, 13)),
		"13 12 01", "Format date d m y");
	equal($.monthpicker.formatDate("dd mm yy", new Date(2001, 12 - 1, 13)),
		"13 12 2001", "Format date dd mm yy");
	equal($.monthpicker.formatDate("yy-o", new Date(2001, 2 - 1, 3)),
		"2001-34", "Format date yy-o");
	equal($.monthpicker.formatDate("yy-oo", new Date(2001, 2 - 1, 3)),
		"2001-034", "Format date yy-oo");
	equal($.monthpicker.formatDate("D M y", new Date(2001, 2 - 1, 3)),
		"Sat Feb 01", "Format date D M y");
	equal($.monthpicker.formatDate("DD MM yy", new Date(2001, 2 - 1, 3)),
		"Saturday February 2001", "Format date DD MM yy");
	equal($.monthpicker.formatDate("DD, MM d, yy", new Date(2001, 2 - 1, 3)),
		"Saturday, February 3, 2001", "Format date DD, MM d, yy");
	equal($.monthpicker.formatDate("'day' d 'of' MM (''DD''), yy",
		new Date(2001, 2 - 1, 3)), "day 3 of February ('Saturday'), 2001",
		"Format date 'day' d 'of' MM ('DD'), yy");
	gmtDate = new Date(2001, 2 - 1, 3);
	gmtDate.setMinutes(gmtDate.getMinutes() - gmtDate.getTimezoneOffset());
	equal($.monthpicker.formatDate("@", gmtDate), "981158400000", "Format date @");
	equal($.monthpicker.formatDate("!", gmtDate), "631167552000000000", "Format date !");
	fr = $.monthpicker.regional.fr;
	settings = {dayNamesShort: fr.dayNamesShort, dayNames: fr.dayNames,
		monthNamesShort: fr.monthNamesShort, monthNames: fr.monthNames};
	equal($.monthpicker.formatDate("D M y", new Date(2001, 4 - 1, 9), settings),
		"lun. avril 01", "Format date D M y with settings");
	equal($.monthpicker.formatDate("DD MM yy", new Date(2001, 4 - 1, 9), settings),
		"lundi avril 2001", "Format date DD MM yy with settings");
	equal($.monthpicker.formatDate("DD, MM d, yy", new Date(2001, 4 - 1, 9), settings),
		"lundi, avril 9, 2001", "Format date DD, MM d, yy with settings");
	equal($.monthpicker.formatDate("'jour' d 'de' MM (''DD''), yy",
		new Date(2001, 4 - 1, 9), settings), "jour 9 de avril ('lundi'), 2001",
		"Format date 'jour' d 'de' MM (''DD''), yy with settings");
});

// TODO: Fix this test so it isn't mysteriously flaky in Browserstack on certain OS/Browser combos
// test("Ticket 6827: formatDate day of year calculation is wrong during day lights savings time", function(){
// 	expect( 1 );
// 	var time = $.monthpicker.formatDate("oo", new Date("2010/03/30 12:00:00 CDT"));
// 	equal(time, "089");
// });

test( "Ticket 7602: Stop datepicker from appearing with beforeShow event handler", function() {
	expect( 3 );

	var inp, dp;

	inp = TestHelpers.monthpicker.init( "#inp", {
		beforeShow: function() {
		}
	});
	dp = $( "#ui-monthpicker-div" );
	inp.monthpicker( "show" );
	equal( dp.css( "display" ), "block", "beforeShow returns nothing" );
	inp.monthpicker( "hide" ).monthpicker( "destroy" );

	inp = TestHelpers.monthpicker.init( "#inp", {
		beforeShow: function() {
			return true;
		}
	});
	dp = $( "#ui-monthpicker-div" );
	inp.monthpicker( "show" );
	equal( dp.css( "display" ), "block", "beforeShow returns true" );
	inp.monthpicker( "hide" );
	inp.monthpicker( "destroy" );

	inp = TestHelpers.monthpicker.init( "#inp", {
		beforeShow: function() {
			return false;
		}
	});
	dp = $( "#ui-monthpicker-div" );
	inp.monthpicker( "show" );
	equal( dp.css( "display" ), "none","beforeShow returns false" );
	inp.monthpicker( "destroy" );
});

})(jQuery);
