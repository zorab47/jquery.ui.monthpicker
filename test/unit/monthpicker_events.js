/*
 * monthpicker_events.js
 */
(function($) {

var selectedThis = null,
    selectedDate = null,
    selectedInst = null;

function callback(date, inst) {
	selectedThis = this;
	selectedDate = date;
	selectedInst = inst;
}

function callback2(year, inst) {
	selectedThis = this;
	selectedDate = year;
	selectedInst = inst;
}

test("events", function() {
	expect( 24 );
	var dateStr, newMonthYear, inp2,
		inp = TestHelpers.monthpicker.init("#inp", {onSelect: callback}),
	date = new Date();
	// onSelect
	inp.val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	equal(selectedThis, inp[0], "Callback selected this");
	equal(selectedInst, $.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Callback selected inst");
	equal(selectedDate, $.monthpicker.formatDate("mm/yy", date),
		"Callback selected date");
	inp.val("").monthpicker("show").
		simulate("keydown", {ctrlKey: true, keyCode: $.ui.keyCode.DOWN}).
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	date.setMonth(date.getMonth() + 3);
	equal(selectedDate, $.monthpicker.formatDate("mm/yy", date),
		"Callback selected date - ctrl+down");
	inp.val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ESCAPE});
	equal(selectedDate, $.monthpicker.formatDate("mm/yy", date),
		"Callback selected date - esc");
    dateStr = "04/2008";
    inp.val(dateStr).monthpicker("show").
        simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
    equal(dateStr, selectedDate,
        "onSelect is called after enter keydown");

	// onChangeYear
	inp.monthpicker("option", {onChangeYear: callback2, onSelect: null}).
		val("").monthpicker("show");
	newMonthYear = function(date) {
		return date.getFullYear();
	};
	date = new Date();
	date.setDate(1);

	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_UP});
	date.setYear(date.getFullYear() - 1);
	equal(selectedThis, inp[0], "Callback change year this");
	equal(selectedInst, $.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Callback change year inst");
	equal(selectedDate, newMonthYear(date),
		"Callback change year date - pgup");

	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN});
	date.setYear(date.getFullYear() + 1);
	equal(selectedDate, newMonthYear(date),
		"Callback change year date - pgdn");

	inp.simulate("keydown", {ctrlKey: true, keyCode: $.ui.keyCode.PAGE_UP});
	date.setFullYear(date.getFullYear() - 3);
	equal(selectedDate, newMonthYear(date),
		"Callback change year date - ctrl+pgup");

	inp.simulate("keydown", {ctrlKey: true, keyCode: $.ui.keyCode.HOME});
	equal(selectedDate, newMonthYear(new Date()),
		"Callback change year date - ctrl+home");

	inp.simulate("keydown", {ctrlKey: true, keyCode: $.ui.keyCode.PAGE_DOWN});
	date.setFullYear(new Date().getFullYear() + 3);
	equal(selectedDate, newMonthYear(date),
		"Callback change year date - ctrl+pgdn");

	inp.monthpicker("setDate", new Date(2007, 2 - 1, 1));
	equal(selectedDate, "2007", "Callback change year date - setDate");
	selectedDate = null;
	inp.monthpicker("setDate", new Date(2007, 2 - 1, 1));
	ok(selectedDate == null, "Callback change month/year date - setDate no change");

	// onChangeYear step by 2
	inp.monthpicker("option", {stepYears: 2}).
		monthpicker("hide").val("04/2008").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.PAGE_UP});
	date.setYear(2006);
	equal(selectedDate, newMonthYear(date),
		"Callback change month/year by 2 date - pgup");

	inp.simulate("keydown", {keyCode: $.ui.keyCode.PAGE_DOWN});
	date.setYear(date.getFullYear() + 2);
	equal(selectedDate, newMonthYear(date),
		"Callback change month/year by 2 date - pgdn");

	// onClose
	inp.monthpicker("option", {onClose: callback, onChangeYear: null, stepMonths: 1}).
		val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ESCAPE});
	equal(selectedThis, inp[0], "Callback close this");
	equal(selectedInst, $.data(inp[0], TestHelpers.monthpicker.PROP_NAME), "Callback close inst");
	equal(selectedDate, "", "Callback close date - esc");
	inp.val("").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ENTER});
	equal(selectedDate, $.monthpicker.formatDate("mm/yy", new Date()),
		"Callback close date - enter");
	inp.val("02/04/2008").monthpicker("show").
		simulate("keydown", {keyCode: $.ui.keyCode.ESCAPE});
	equal(selectedDate, "02/04/2008", "Callback close date - preset");
	inp.val("02/04/2008").monthpicker("show").
		simulate("keydown", {ctrlKey: true, keyCode: $.ui.keyCode.END});
	equal(selectedDate, "", "Callback close date - ctrl+end");

	inp2 = TestHelpers.monthpicker.init("#inp2");
	inp2.monthpicker().monthpicker("option", {onClose: callback}).monthpicker("show");
	inp2.monthpicker("hide");
	equal(selectedThis, inp2[0], "Callback close this");
});

})(jQuery);
