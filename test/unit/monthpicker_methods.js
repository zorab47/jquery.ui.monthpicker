/*
 * datepicker_methods.js
 */
(function($) {

test("destroy", function() {
	expect( 25 );
	var inl,
		inp = TestHelpers.monthpicker.init("#inp");
	ok(inp.is(".hasMonthpicker"), "Default - marker class set");
	ok($.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Default - instance present");
	ok(inp.next().is("#alt"), "Default - button absent");
	inp.monthpicker("destroy");
	inp = $("#inp");
	ok(!inp.is(".hasMonthpicker"), "Default - marker class cleared");
	ok(!$.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Default - instance absent");
	ok(inp.next().is("#alt"), "Default - button absent");
	// With button
	inp= TestHelpers.monthpicker.init("#inp", {showOn: "both"});
	ok(inp.is(".hasMonthpicker"), "Button - marker class set");
	ok($.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Button - instance present");
	ok(inp.next().text() === "...", "Button - button added");
	inp.monthpicker("destroy");
	inp = $("#inp");
	ok(!inp.is(".hasMonthpicker"), "Button - marker class cleared");
	ok(!$.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Button - instance absent");
	ok(inp.next().is("#alt"), "Button - button removed");
	// With append text
	inp = TestHelpers.monthpicker.init("#inp", {appendText: "Testing"});
	ok(inp.is(".hasMonthpicker"), "Append - marker class set");
	ok($.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Append - instance present");
	ok(inp.next().text() === "Testing", "Append - append text added");
	inp.monthpicker("destroy");
	inp = $("#inp");
	ok(!inp.is(".hasMonthpicker"), "Append - marker class cleared");
	ok(!$.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Append - instance absent");
	ok(inp.next().is("#alt"), "Append - append text removed");
	// With both
	inp= TestHelpers.monthpicker.init("#inp", {showOn: "both", buttonImageOnly: true,
		buttonImage: "images/calendar.gif", appendText: "Testing"});
	ok(inp.is(".hasMonthpicker"), "Both - marker class set");
	ok($.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Both - instance present");
	ok(inp.next()[0].nodeName.toLowerCase() === "img", "Both - button added");
	ok(inp.next().next().text() === "Testing", "Both - append text added");
	inp.monthpicker("destroy");
	inp = $("#inp");
	ok(!inp.is(".hasMonthpicker"), "Both - marker class cleared");
	ok(!$.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Both - instance absent");
	ok(inp.next().is("#alt"), "Both - button and append text absent");
	// Inline
	//inl = TestHelpers.monthpicker.init("#inl");
	//ok(inl.is(".hasMonthpicker"), "Inline - marker class set");
	//ok(inl.html() !== "", "Inline - datepicker present");
	//ok($.data(inl[0], TestHelpers.monthpicker.PROP_NAME), "Inline - instance present");
	//ok(inl.next().length === 0 || inl.next().is("p"), "Inline - button absent");
	//inl.monthpicker("destroy");
	//inl = $("#inl");
	//ok(!inl.is(".hasMonthpicker"), "Inline - marker class cleared");
	//ok(inl.html() === "", "Inline - datepicker absent");
	//ok(!$.data(inl[0], TestHelpers.monthpicker.PROP_NAME), "Inline - instance absent");
	//ok(inl.next().length === 0 || inl.next().is("p"), "Inline - button absent");
});

test("enableDisable", function() {
	expect( 24 );
	var inl, dp,
		inp = TestHelpers.monthpicker.init("#inp");
	ok(!inp.monthpicker("isDisabled"), "Enable/disable - initially marked as enabled");
	ok(!inp[0].disabled, "Enable/disable - field initially enabled");
	inp.monthpicker("disable");
	ok(inp.monthpicker("isDisabled"), "Enable/disable - now marked as disabled");
	ok(inp[0].disabled, "Enable/disable - field now disabled");
	inp.monthpicker("enable");
	ok(!inp.monthpicker("isDisabled"), "Enable/disable - now marked as enabled");
	ok(!inp[0].disabled, "Enable/disable - field now enabled");
	inp.monthpicker("destroy");
	// With a button
	inp = TestHelpers.monthpicker.init("#inp", {showOn: "button"});
	ok(!inp.monthpicker("isDisabled"), "Enable/disable button - initially marked as enabled");
	ok(!inp[0].disabled, "Enable/disable button - field initially enabled");
	ok(!inp.next("button")[0].disabled, "Enable/disable button - button initially enabled");
	inp.monthpicker("disable");
	ok(inp.monthpicker("isDisabled"), "Enable/disable button - now marked as disabled");
	ok(inp[0].disabled, "Enable/disable button - field now disabled");
	ok(inp.next("button")[0].disabled, "Enable/disable button - button now disabled");
	inp.monthpicker("enable");
	ok(!inp.monthpicker("isDisabled"), "Enable/disable button - now marked as enabled");
	ok(!inp[0].disabled, "Enable/disable button - field now enabled");
	ok(!inp.next("button")[0].disabled, "Enable/disable button - button now enabled");
	inp.monthpicker("destroy");
	// With an image button
	inp = TestHelpers.monthpicker.init("#inp", {showOn: "button", buttonImageOnly: true,
		buttonImage: "images/calendar.gif"});
	ok(!inp.monthpicker("isDisabled"), "Enable/disable image - initially marked as enabled");
	ok(!inp[0].disabled, "Enable/disable image - field initially enabled");
	ok(parseFloat(inp.next("img").css("opacity")) === 1, "Enable/disable image - image initially enabled");
	inp.monthpicker("disable");
	ok(inp.monthpicker("isDisabled"), "Enable/disable image - now marked as disabled");
	ok(inp[0].disabled, "Enable/disable image - field now disabled");
	ok(parseFloat(inp.next("img").css("opacity")) !== 1, "Enable/disable image - image now disabled");
	inp.monthpicker("enable");
	ok(!inp.monthpicker("isDisabled"), "Enable/disable image - now marked as enabled");
	ok(!inp[0].disabled, "Enable/disable image - field now enabled");
	ok(parseFloat(inp.next("img").css("opacity")) === 1, "Enable/disable image - image now enabled");
	inp.monthpicker("destroy");
	// Inline
	// inl = TestHelpers.monthpicker.init("#inl", {changeYear: true});
	// dp = $(".ui-datepicker-inline", inl);
	// ok(!inl.monthpicker("isDisabled"), "Enable/disable inline - initially marked as enabled");
	// ok(!dp.children().is(".ui-state-disabled"), "Enable/disable inline - not visually disabled initially");
	// ok(!dp.find("select").prop("disabled"), "Enable/disable inline - form element enabled initially");
	// inl.monthpicker("disable");
	// ok(inl.monthpicker("isDisabled"), "Enable/disable inline - now marked as disabled");
	// ok(dp.children().is(".ui-state-disabled"), "Enable/disable inline - visually disabled");
	// ok(dp.find("select").prop("disabled"), "Enable/disable inline - form element disabled");
	// inl.monthpicker("enable");
	// ok(!inl.monthpicker("isDisabled"), "Enable/disable inline - now marked as enabled");
	// ok(!dp.children().is(".ui-state-disabled"), "Enable/disable inline - not visiually disabled");
	// ok(!dp.find("select").prop("disabled"), "Enable/disable inline - form element enabled");
	// inl.monthpicker("destroy");
});

})(jQuery);
