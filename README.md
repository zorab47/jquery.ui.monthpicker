# Monthpicker for [jQuery UI][]

![jquery.ui.monthpicker][jquery.ui.monthpicker-image]

View a working [JSFiddle demo](http://jsfiddle.net/eHLAw/3/)!

Looking for simple Rails integration? Try the [jquery-monthpicker-rails](https://github.com/zorab47/jquery-monthpicker-rails) gem.

## jQuery Support

jQuery 1.9+ and 2.X are supported.

## Available settings

Settings show their current defaults.

### General

```js
showOn: 'focus',    // 'focus' for popup on focus,
                    // 'button' for trigger button, or 'both' for either
showAnim: 'fadeIn', // Name of jQuery animation for popup
buttonText: '...',  // Text for trigger button
buttonImage: '',    // URL for trigger button image
changeYear: false,  // True if year can be selected directly, false if only prev/next
yearRange: 'c-10:c+10', // Range of years to display in drop-down,
                        // either relative to today's year (-nn:+nn), relative to currently displayed year
                        // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
beforeShow: null,   // Function that takes an input field and
                    // returns a set of custom settings for the date picker
onSelect: null,     // Define a callback function when a date is selected
onChangeYear: null, // Define a callback function when the year is changed
onClose: null,      // Define a callback function when the monthpicker is closed
stepYears: 1,       // Number of months to step back/forward
altField: '',       // Selector for an alternate field to store selected dates into
altFormat: '',      // The date format to use for the alternate field
disabled: false     // The initial disabled state
```

### Localization

```js
dateFormat: 'mm/yy',
yearSuffix: ''      // Additional text to append to the year in the month headers
prevText: 'Prev',   // Display text for previous month link
nextText: 'Next',   // Display text for next month link
monthNames: ['January','February','March','April','May','June', 'July','August','September','October', 'November','December'], // Names of months for drop-down and formatting
monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
```

#### Date Formatting

The format can be combinations of the following:

- `m`  - month of year (no leading zero)
- `mm` - month of year (two digit)
- `M`  - month name short
- `MM` - month name long
- `y`  - year (two digit)
- `yy` - year (four digit)
- `@` - Unix timestamp (ms since 01/01/1970)
- `!` - Windows ticks (100ns since 01/01/0001)
- `'...'` - literal text
- `''` - single quote

## Why?

You might be using [jQuery UI Datepicker][] and are looking for a similar Monthpicker widget. Unfortunately, this is not part of the Datepicker widget. After some searching you will realize two things: you are not alone in wanting a Monthpicker, and most solutions rely on dirty hacks of the original jQuery UI Datepicker widget.

Be relieved, you have now found a customizable Monthpicker implementation. Monthpicker is largely based on jQuery UI Datepicker. You will notice that the design is very similar to Datepicker, as it uses the same CSS. Hence it is fully compatible with your usual jQuery UI themes!


## Alternative Monthpickers

[Luciano Costa][] has developed his own implementation of a Monthpicker from scratch.

[jQuery UI]: http://jqueryui.com
[jQuery UI Datepicker]: http://jqueryui.com/demos/datepicker/
[jquery.ui.monthpicker-image]: http://i.imgur.com/wWCel0I.png
[Luciano Costa]: https://github.com/lucianocosta/jquery.mtz.monthpicker
