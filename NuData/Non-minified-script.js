//Script found on Singapore Air found on 15th May
//https://www.singaporeair.com/en_UK/ca/home#/book/bookflight
/**
 * IPR Config key in Page Mode Data
 * @type {string}
 */
var ndovPageModeIPRConfigDataId = 'ic';

/**
 * Event category for JS focus and blur events
 * @type {string}
 */
var NDS_LISTEN_FOCUS = 'fc';

/**
 * Event category for JS touch events
 * @type {string}
 */
var NDS_LISTEN_TOUCH = 'to';

/**
 * Event category for JS keyboard events
 * @type {string}
 */
var NDS_LISTEN_KEYBOARD = 'kb';

/**
 * Event category for JS device motion events
 * @type {string}
 */
var NDS_LISTEN_DEVICE_MOTION_SENSORS = 'dm';

/**
 * Event category for JS mouse events
 * @type {string}
 */
var NDS_LISTEN_MOUSE = 'mo';

/**
 * Event category for JS form events
 * @type {string}
 */
var NDS_LISTEN_FORM = 'fr';

/**
 * Special category for all categories enabled. Internal use only.
 * @type {string}
 */
var NDS_LISTEN_ALL = 'de';

/**
 * Special category for no categories enabled. Internal use only.
 * @type {string}
 */
var NDS_LISTEN_NONE = 'no';

/**
 * Constants for JavaScript events
 * @type {string}
 */
var ndovFocusEvent = 'focus';
var ndovBlurEvent = 'blur';
var ndovTouchStartEvent = 'touchstart';
var ndovKeyDownEvent = 'keydown';
var ndovKeyUpEvent = 'keyup';
var ndovDeviceMotionEvent = 'devicemotion';
var ndovDeviceOrientationEvent = 'deviceorientation';
var ndovMouseMoveEvent = 'mousemove';
var ndovClickEvent = 'click';
var ndovSubmitEvent = 'submit';
var ndovChangeEvent = 'change';
var ndovInputEvent = 'input';

/**
 * All event categories - JS events mapping. For example:
 * {
 * 		fo:['focus', 'blur'], // focus category
 * 		mo:['mousemove', 'click'] // touch category
 * }
 * @type {Object}
 */
var ndovAllEventCategoriesMap = {};
ndovAllEventCategoriesMap[NDS_LISTEN_FOCUS] = [ndovFocusEvent, ndovBlurEvent];
ndovAllEventCategoriesMap[NDS_LISTEN_TOUCH] = [ndovTouchStartEvent];
ndovAllEventCategoriesMap[NDS_LISTEN_KEYBOARD] = [ndovKeyDownEvent, ndovKeyUpEvent];
ndovAllEventCategoriesMap[NDS_LISTEN_DEVICE_MOTION_SENSORS] = [ndovDeviceMotionEvent, ndovDeviceOrientationEvent];
ndovAllEventCategoriesMap[NDS_LISTEN_MOUSE] = [ndovMouseMoveEvent, ndovClickEvent];
ndovAllEventCategoriesMap[NDS_LISTEN_FORM] = [ndovSubmitEvent, ndovChangeEvent, ndovInputEvent];


/**
 * Gets the events and their sampling rates based on the list of enabled event categories.
 * Example:
 * {
 *     focus: 100,
 *     devicemotion: 200,
 *     keydown: 500
 * }
 * @returns {Object}
 */
function getEnabledEvents() {
	if (null !== ndovEnabledEvents) {
		return ndovEnabledEvents;
	}

	var eventCategories = nds.getListeners();
	ndovEnabledEvents = {};
	if (NDS_LISTEN_NONE in eventCategories) {
		return ndovEnabledEvents;
	}
	var allEnabled = eventCategories.hasOwnProperty(NDS_LISTEN_ALL);
	for (var category in ndovAllEventCategoriesMap) {
		if (allEnabled || eventCategories.hasOwnProperty(category)) {
			var samplingRate = (true === allEnabled) ? eventCategories[NDS_LISTEN_ALL] : eventCategories[category];
			var events = ndovAllEventCategoriesMap[category];
			for (var i = 0; i < events.length; i++) {
				ndovEnabledEvents[events[i]] = samplingRate;
			}
		}
	}
	return ndovEnabledEvents;
}

/**
 * Attaches event listener to DOM element and if event is supported, add it to unsubcriber's callback
 * @param {EventTarget} element - DOM element
 * @param {string} eventType
 * @param {function} eventListener
 * @param {function} unsubscriberCb
 */
function attachEventListener(element, eventType, eventListener, unsubscriberCb) {
	// return call back function to remove the event handler later on
	var callback = nds.common.addEventListener(element, eventType, eventListener, getEnabledEvents());
	if (callback === null) {
		return;
	}
	unsubscriberCb(callback);
}

/**
 * Gets the current time in unix format.
 *
 * @return {number} The time in unix format.
 */
function ndoGetUnixTime()
{
	var mydate = new Date; // Generic JS date object
	return parseInt(mydate.getTime() / 1000, 10);
}

/**
 * Is the supplied value an array?
 * @param value
 * @returns {boolean}
 */
function ndoIsArray(value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
}

/**
 * Is the supplied value an object (and not null or an array?)
 * @param value
 * @returns {boolean}
 */
function ndoIsObject(value) {
	return 'object' === typeof value && null !== value && !ndoIsArray(value);
}

/**
 * Is the supplied value a NodeList or HTMLCollection?
 * @param value
 * @returns {boolean}
 */
function ndoIsNodeList(value) {
	return (null !== value
	&& ('object' === typeof value || 'function' === typeof value)
	&& typeof value.length === 'number'
	&& typeof value.item !== 'undefined')
}

/**
 * Check whether the pressed key is included in key values or key codes
 * @param e
 * @param keyValues
 * @param keyCodes
 * @returns {boolean}
 */
var ndoIsKeyIncluded = function (e, keyValues, keyCodes) {
	// since e.keyCode is deprecated and it's recommended to use e.key, check e.key first
	if (-1 !== keyValues.indexOf(e.key) || -1 !== keyCodes.indexOf(e.keyCode)) {
		return true;
	}
	return false;
};

/**
 * Whether or not the pressed key is a modifier key.
 * Modifier keys are Shift, Control, Command (on Mac), Alt and Caps lock
 * @param e
 * @returns {boolean}
 */
var ndoIsModifierKey = function (e) {
	var modifierKeys = [
		'Shift',
		'Control',
		'Meta', // for Mac
		'Alt',
		'CapsLock'
	];
	var modifierKeyCodes = [16, 17, 91, 93, 18, 20];
	return ndoIsKeyIncluded(e, modifierKeys, modifierKeyCodes);
};

/**
 * Whether or not the pressed key is a navigation key.
 * Navigation keys are arrows, home, end, page up, page down and tab
 * @param e
 * @returns {boolean}
 */
var ndoIsNavigationKey = function (e) {
	var navigationKeys = [
		'Tab',
		'PageUp',
		'PageDown',
		'End',
		'Home',
		'ArrowLeft',
		'Left', // for IE, Edge <=16, FF<=36 compatible
		'ArrowUp',
		'Up',
		'ArrowRight',
		'Right',
		'ArrowDown',
		'Down'
	];
	var navigationKeyCodes = [9, 33, 34, 35, 36, 37, 38, 39, 40];
	return ndoIsKeyIncluded(e, navigationKeys, navigationKeyCodes);
};

/**
 * Whether or not the pressed key is a editing key.
 * Editing keys are insert, delete and backspace
 * @param e
 * @returns {boolean}
 */
var ndoIsEditingKey = function (e) {
	var editingKeys = [
		'Insert',
		'Delete',
		'Backspace',
		'Del' // for Delete key compatibility on IE <=9 and FF
	];
	var editingKeyCodes = [45, 46, 8];
	return ndoIsKeyIncluded(e, editingKeys, editingKeyCodes);
};

/**
 * Keyboard locations
 * @type {{NUMPAD: number, LEFT: number, RIGHT: number, STANDARD: number}}
 */
var KEYBOARD_LOCATION = {
	STANDARD: 0,
	LEFT: 1,
	RIGHT: 2,
	NUMPAD: 3,
};
/**
 * Key type and location combination
 * Note: values from 0-16 are preserved for existing key type and location combinations.
 * @type {{NAVIGATION_STANDARD: number, MODIFIER_STANDARD: number, EDITING_STANDARD: number, NORMAL_STANDARD: number}}
 */
var KEY_TYPE_AND_LOCATION = {
	NORMAL_STANDARD: 0,
	MODIFIER_STANDARD: 4,
	NAVIGATION_STANDARD: 8,
	EDITING_STANDARD: 12,
};

/**
 * Get valid keyboard location
 * @param e
 * @returns {number|*}
 */
var ndoGetKeyboardLocation = function (e) {
	var location = e.location;
	// for IE as Object.values is not supported
	var locationValues = Object.keys(KEYBOARD_LOCATION).map(function(item) {
		return KEYBOARD_LOCATION[item];
	});
	if (typeof location === 'undefined' || -1 === locationValues.indexOf(location)) {
		return KEYBOARD_LOCATION.STANDARD;
	}
	return location;
};

/**
 * Get keyboard location and key type indicator
 * @param e
 * @returns {*}
 */
var ndoGetKeyTypeAndLocationIndicator = function (e) {
	var location = ndoGetKeyboardLocation(e);
	if (true === ndoIsModifierKey(e)) {
		return KEY_TYPE_AND_LOCATION.MODIFIER_STANDARD + location;
	}

	if (true === ndoIsNavigationKey(e)) {
		return KEY_TYPE_AND_LOCATION.NAVIGATION_STANDARD + location;
	}

	if (true === ndoIsEditingKey(e)) {
		return KEY_TYPE_AND_LOCATION.EDITING_STANDARD + location;
	}
	return KEY_TYPE_AND_LOCATION.NORMAL_STANDARD + location;
};

/**
 * forEach iterates over a collection (array/object)
 * Modelled on Array.prototype.forEach (callback takes the same args)
 * @param {!Object<string,T>|Array<T>} collection
 * @param {function(T, (string|number)=, (!Object<string,T>|Array<T>)=)} callback
 * @template T
 * @example <caption>array</caption>
 *  var vegetables = [ { name: 'beet', colour: 'red' }, { name: 'leek', colour: 'green' } ];
 *  ndoForEach(vegetables, function(vegetable) {
 *      console.log(vegetable.name, vegetable.colour);
 *  });
 * @example <caption>object</caption>
 *  var fruits = { apple: { ripe: true, colour: 'red' }, pear: { ripe: false, colour: 'green' } };
 *  ndoForEach(fruits, function(fruit, key) {
 *      console.log(key, fruit.ripe, fruit.colour);
 *  });
 * @example <caption>full callback args</caption>
 *  ndoForEach(arrayOrObj, function(value, key, arrayOrObj) {});
 */
function ndoForEach(collection, callback) {
	var i, key;

	// collection is an array?
	if (ndoIsArray(collection) || ndoIsNodeList(collection)) {
		for (i = 0; i < collection.length; i += 1) {
			callback(collection[i], i, collection);
		}
	}

	// collection is an object?
	else if (ndoIsObject(collection)) {
		for (key in collection) {
			if (Object.prototype.hasOwnProperty.call(collection, key)) { // skip properties not in object (i.e. which are in prototype)
				callback(collection[key], key, collection);
			}
		}
		// support ie8 quirk: enumerable properties which shadow non-enumerable properties are mistakenly non-enumerable, so enumerate those explicitly
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
		var extraEnums = ndoForEach.ie8extraEnums;
		for (i = 0; i < extraEnums.length; i += 1) {
			key = extraEnums[i]
			if (Object.prototype.hasOwnProperty.call(collection, key)) { // skip properties not in object (i.e. which are in prototype)
				callback(collection[key], key, collection);
			}
		}
	}
}
// see note in ndoForEach
ndoForEach.ie8extraEnums = (function() {
	var hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString');
	if (hasDontEnumBug) {
		return 'toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor'.split(',');
	}
	return [];
}());

/**
 * map iterates over a collection (array/object), accumulating a collection (of the same type,) using a transform callback
 * Modelled on Array.prototype.map (callback takes the same args)
 * @param {!Object<string,T>|Array<T>} collection
 * @param {function(T, (string|number)=, (!Object<string,T>|Array<T>)=):U} callback
 * @returns {(!Object<string,U>|Array<U>|undefined)}
 * @template T,U
 * @example <caption>simple array map</caption>
 *  function square(n) { return n * n; }
 *  var squares = ndoMap([ 4, 8 ], square); // [16, 64]
 * @example <caption>object map using "property shorthand"</caption>
 *  var fruits = { apple: { ripe: true, colour: 'red' }, pear: { ripe: false, colour: 'green' } };
 *  var colours = ndoMap(fruits, 'colour'); // { apple: 'red', pear: 'green' }
 * @example <caption>full callback args</caption>
 *  var result = ndoMap(arrayOrObj, function(value, key, arrayOrObj) { return 1; });
 */
function ndoMap(collection, callback) {

	// support optional "property shorthand" feature
	if ('string' === typeof callback) {
		var property = callback;
		callback = function(/** !Object */ value) { return value[property]; };
	}

	// match the type of our result to the type of input (i.e. array vs object)
	var mapResult = ndoIsArray(collection) ? [] : ndoIsObject(collection) ? {} : undefined;

	// iterate using ndoForEach, calling our supplied callback and adding its return values to our mapResult
	ndoForEach(collection, function(value, key) {
		mapResult[key] = callback(value, key, collection);
	});

	return mapResult;
}

/**
 * reduce (aka foldl) iterates over a collection (array/object), accumulating a single value, using a combining callback
 * Modelled on Array.prototype.reduce (callback takes the same args)
 * @param {!Object<string,T>|Array<T>} collection
 * @param {function(U, T, (string|number)=, (!Object<string,T>|Array<T>)=):U} callback
 * @param {U=} acc
 * @returns {U} acc
 * @template T,U
 * @example
 *  function adder(acc, value, key) { return acc + value; }
 *  var sum = ndoReduce([ 1, 2, 3 ], adder, 0); // 6
 * @example
 *  function max(acc, value, key) { return acc > value ? acc : value; }
 *  var highest = ndoReduce([ 1, 2, 3 ], max, 0); // 3
 * @example <caption>full callback args</caption>
 *  var result = ndoReduce(arrayOrObj, function(acc, value, key, arrayOrObj) { return acc; }, 0);
 */
function ndoReduce(collection, callback, acc) {

	// iterate using ndoForEach, calling our supplied callback to transform our accumulator
	ndoForEach(collection, function(value, key) {
		acc = callback(acc, value, key, collection);
	});

	return acc;
}

/**
 * From {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys}
 * @function
 */
var ndoGetObjectKeys = (function()
{
	var hasOwnProperty = Object.prototype.hasOwnProperty,
		hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
		dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		],
		dontEnumsLength = dontEnums.length;

	return function (obj) {
		if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
			throw new TypeError('ndoGetObjectKeys called on non-object');
		}

		var result = [], prop, i;

		for (prop in obj) {
			if (hasOwnProperty.call(obj, prop)) {
				result.push(prop);
			}
		}

		if (hasDontEnumBug) {
			for (i = 0; i < dontEnumsLength; i++) {
				if (hasOwnProperty.call(obj, dontEnums[i])) {
					result.push(dontEnums[i]);
				}
			}
		}
		return result;
	};
}());

/**
 *
 * @param obj
 * @returns {number}
 */
function ndoGetObjectSize(obj)
{
	var size = 0;

	// Check if array
	if (obj instanceof Array) {
		size = obj.length;
	} else {
		var key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				size++;
			}
		}
	}

	return size;
}

/**
 * Return only unique elements from an array
 * @param {Array} arr
 * @returns {Array}
 */
function ndoArrayUnique(arr) {
	var n = [];
	for(var i = 0; i < arr.length; i++) {
		if (-1 === n.indexOf(arr[i])) {
			n.push(arr[i]);
		}
	}
	return n;
}

/**
 * rot13 the provided string
 * @param {string} s
 */
function ndoRot13(s) {
	return s.replace(/[A-Za-z]/g, function(c) {
		return String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= "M" ? 13 : -13));
	});
}

/**
 * Encipher / decipher string
 * @param {string} input
 * @returns {string}
 */
function ndoNDXCipher(input) {
    // constants
    var cipherPrefix = 'NDX:';
    var cipherKey = [41,8,49,48,51,44,63,0,19,61,43,63,57,15,34,6,42,59,41,19,10,45,54,0,44,34,57,36,48]; // 0..63

    // variables
    var output = '';    // build up the return value
    var isDecipherMode; // are we deciphering or enciphering

    // check input string for cipherPrefix to determine if we should be enciphering or deciphering
    if (input.substring(0, cipherPrefix.length) === cipherPrefix) {
        isDecipherMode = true;
        input = input.substring(cipherPrefix.length); // skip prefix in the input
    }
    else {
        isDecipherMode = false;
        output = cipherPrefix; // start the output with the prefix
    }

    // translate the input string to output, one character at a time
	var counter = 0;
    for (var n = 0; n < input.length; n += 1) {
        var i = input.charCodeAt(n) - 32;

        // if the input character is "safe ascii", modify it (otherwise, leave it alone)
        if (i >= 0 && i < 94) {

            // when enciphering: rot-then-xor; when deciphering: xor-then-rot

            // partial XOR step (same as below, but done first when deciphering)
            if (isDecipherMode && i < 64) {
                i = i ^ cipherKey[counter % cipherKey.length];
            }

            // ROT step (47 + 31n)
            i += 47 + (isDecipherMode ? -1 : 1) * counter * 31;
            i = ((i % 94) + 94) % 94; // modulus, respecting (some) negative numbers

            // partial XOR step (same as above, but done last when enciphering)
            if (!isDecipherMode && i < 64) {
                i = i ^ cipherKey[counter % cipherKey.length];
            }
			// only increment if enciphered char due to variance in handling multibyte chars between coding languages
			counter++;
        }
        output += String.fromCharCode(i + 32);
    }
    return output;
}

/**
 * Enciphers/deciphers string via Rot13 or NDX depending on site config
 * @param {string} input
 * @returns {string} ciphered/deciphered string
 */
function ndoEncipherDecipherInput (input) {
	return (true === ndovConfigOptions["useNdx"]) ? ndoNDXCipher(input) : ndoRot13(input);
}

/**
 * Process the autobind config array JSON and return one array of elements
 * @param {Object} autobindSpecifierArray
 * @returns {Array.<HTMLElement>} Array of matching HTML elements
 */
function ndovGetElementsByIdOrQuery(autobindSpecifierArray)
{
    var elementArray = [];
    for (var specifierindex in autobindSpecifierArray) {
    	if (autobindSpecifierArray.hasOwnProperty(specifierindex)) {
            var specifier = autobindSpecifierArray[specifierindex];
            if (typeof specifier === 'string' && document.getElementById(specifier)) {
                // simple string - this is an id
                elementArray.push(document.getElementById(specifier));
            } else {
                if (specifier.hasOwnProperty("type") && specifier.hasOwnProperty("value")) {
                    switch (specifier.type) {
                        case "selector":
                            var matchingElements = [];
                            // this is a CSS selector
                            try {
                                matchingElements = nds.common.querySelectorAll(specifier.value); // returns a NodeList, not an array
                            } catch (e) {
                                //Fail silently
                            }
                            if (matchingElements.length > 0) {
                                // optionally specify only one element
                                if (specifier.hasOwnProperty("index")) {
                                    matchingElements = [matchingElements[specifier.index]];
                                }
                                // push (NodeList|array) elements onto array
                                for (var i = 0; i < matchingElements.length; i += 1) {
                                    if (matchingElements[i]) {
                                        elementArray.push(matchingElements[i]);
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    return elementArray;
}

/*
 * Determine if browser is unsupported (e.g. IE7) and disable widget to avoid causing errors.
 * n.b. defer stubbing most things until nds.load is called to make this feature independent of its position
 * relative to assignments to nds.
 */
/**
 * True if browser version is not supported by widget
 * @type {boolean}
 */
var ndovBrowserUnsupported = false;
if (!document.querySelector) { ndovBrowserUnsupported = true; }
/** Static widget version
 * @type {string} */
var ndjsStaticVersion = "{@VERSION@}";

/** Config data for each module
 * @type {Object} */
var ndovModuleData = {};
/** Key-value pairs collected and sent in complete or page mode data
 * @type {Object} */
var ndovInputList = {};
/** @type {boolean} */
var ndovWidgetKeyOn;
/** @type {number} */
var ndovWidgetInitTime = -1;
/** @type {number} */
var ndovWidgetStartTime = -1;
/** @type {Object} */
var ndovModules = {};
/** @type {Object} */
var ndovConfigOptions = {};
/** @type {Object} */
var ndovModuleList = {};
/** @type {Object} */
var ndovModuleMap = {};
/** @type {Object} */
var ndovFields = {};
/** Array of form fields which will trigger deferred init
 * @type {Array|Object}
 * @see nds.setInitTargets
 */
var ndovInitTargets = [];
/** Current status of init/complete cycle
 * @type {boolean} */
var ndovInitFired = false;
/** @type {string} */
var ndovWidgetMode = 'default';

/**
 * Enabled event categories to listen to, defaults to all (de).
 * The format of this data structure is:
 * {
 *     category_code_1 : sampling_rate_1,
 *     category_code_2 : sampling_rate_2,
 *     ...
 * ]
 * For sampling rate, the value will be a positive integer (milliseconds) or null.
 * Null should be treated as 'use the default' sampling rate
 * @type {Object}
 */
var ndovEnabledCategories = null;

/**
 * Enabled events that we listen to and their sampling rates
 * Example:
 * {
 *     focus: 100,
 *     devicemotion: 200,
 *     keydown: 500
 * }
 * @type {Object|null}
 */
var ndovEnabledEvents = null;

/**
 * External widget API.
 * @type {{
 * 		config: Object, common: Object, bindNewFields: Function, clear: Function, doNotTrack: Function,
 * 		getApiBaseUrl: Function, getInputList: Function, getQueryArray: Function, init: Function, load: Function,
 * 		loadScript: Function, ndwtr: Function, send: Function, start3DS: Function, sendOnEvent: Function, sendOnSubmit: Function,
 * 		setApiBaseUrl: Function, setCspNonceForInit: Function, setForceIP: Function, setForceUA: Function,
 * 		setFormFieldData: Function, setInitTargets: Function, setPageModeFields: Function, setPlacement: Function,
 * 		setPlacementPage: Function, setSessionId: Function, setSessionIdFromCookie: Function,
 * 		setSessionIdFromDOM: Function, setSessionIdFromJS: Function, setSessionIdFromSessionStorage: Function,
 * 		setSessionIdFromURL: Function, setTimeout: Function, callApi: Function, competeAndCallApi: Function,
 * 		stop: Function, reinit: Function, configure3DS: Function, addInitCallback: Function,
 * 		removeAllInitCallbacks: Function
 * 		}}
 * @namespace
 * @global
 * @property {Object} config These config properties should be set using their respective setters
 * @property {?string} config.sessionId The session ID {@link nds.setSessionId}
 * @property {string} config.forceIP The IP to force {@link nds.setForceIP}
 * @property {string} config.forceUA The user agent to force {@link nds.setForceUA}
 * @property {boolean} config.doNotTrack Is Do Not Track enabled? {@link nds.doNotTrack}
 * @property {string} config.placement Current placement {@link nds.setPlacement}
 * @property {number} config.placementPage Current placement page {@link nds.setPlacementPage}
 * @property {Array} config.initCallbackList callback functions to be called when init completes {@link nds.addInitCallback}
 * @property {Object} common Common utility functions shared with 2.1 widget
 * @example <caption>Usage</caption>
 * let nds = window.ndsapi;
 *
 * */
var nds = window.ndsapi || (window.ndsapi = {});

/**
 * Locally-created session ID
 * @type {?string}
 */
var ndovTempSessionId = null;

/**
 * Number of active complete queries
 * @type {number}
 * */
var numQueries = 0;
/**
 * Complete queries
 * @type {Array.<boolean>}
 * */
var returned = [];

// nd_build_js.php will replace the string literal "{@VERSION@}" assigned to ndjsStaticVersion.
// we want to provide a reasonable fallback (i.e. "null") for version when running this script without obfuscation.
// note that a naive comparison test (e.g. "{@VERSION@}" !== ndjsStaticVersion) would fail because nd_build_js.php would replace that string literal too!
/**
 * Widget version
 * @type {string}
 * */
var version = "null";
if ("{@VER:SION@}".replace(':', '') !== ndjsStaticVersion) { // replace() seems sufficient to trick nd_build_js.php / Google Closure
	version = ndjsStaticVersion;
}

//TODO to be populated by the pipeline once widget decoupling project is completed (see https://jira.intra.nudatasecurity.com/browse/ECHO-1648)
var ndsWidgetVersion = '2.3.1';

/**
 * Base URL for NDAPI
 * @type {string}
 */
var ndovApiBaseUrl;

/**
 * Cookiename for standalone custom widget
 * @type {string}
 */
var ndovStandaloneCookieName = 'NDSASESS';
/**
 * Expiration in seconds for standalone custom widget
 * @type {string}
 */
var ndovCookieExpiry = '3600';

/**
 * Unique ID for the init script tag
 * @type {string}
 */
var ndovInitFieldId = 'ndsi' + ndjsStaticVersion;

/**
 * Name of Managed Session Id cookie/form field
 * @type {string}
 */
var ndovManagedSessionIdName = 'ndsid';

/**
 * Name of DOM element(s) which contain page mode data
 * @type {string}
 */
var ndovPageModeInputFieldName = 'nds-pmd';
/**
 * Key for page mode data in widget data
 * @type {string}
 */
var ndovPageModeWidgetDataId = 'widgetData';
/**
 * Array of form fields which contain page mode data
 * @type {Array}
 */
var ndovPageModeFormFields = [];

/**
 * Unsubscriber object to remove Deferred Init event listeners.
 * Stubbed out until nds.common available
 * @type {{addCallback: Function, callAllCallbacks: Function}}
 */
var ndovDeferredInitUnsubscriber = {addCallback: function(){}, callAllCallbacks: function (){}};

/**
 * Stub for Standalone function
 * @param {*} a
 * @param {*} b
 */
var ndovNuDetectClientHelper = function(a,b){};

/**
 * Generate a pseudorandom session ID
 * @readonly
 * @returns {string}
 */
var ndovGenerateSessionId = function() {
	var d = new Date();
	return "ndsa" + Math.random().toString(36).substr(2,16) + d.getTime().toString(36);
};

/**
 * Loop through parts of a full hostname and attempt to set a cookie on that domain.
 * @returns {string} Domain name
 */
var ndovMainDomain = function() {
	var i = 0;
	var domain = document.domain;
	var fragments = domain.split('.');
	var tempCookie = '_temp' + (new Date()).getTime();
	while (i < (fragments.length-1) &&
			document.cookie.indexOf(tempCookie + '=' + tempCookie) === -1)
	{
		domain = fragments.slice(-1-(++i)).join('.');
		document.cookie = tempCookie + "=" + tempCookie + ";domain=" + domain + ";";
	}
	document.cookie = tempCookie + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + domain + ";";
	return domain;
};

/**
 * Get a value from a cookie with the specified name
 * @param {string} a key
 * @param {?Array=} b (optional)
 * @returns {?string}
 */
function ndovGetCookieValue(a, b)
{
	b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : null;
};

/**
 * Generates Session Id and stores it in Cookie (Session Storage fallback) if
 * running in standalone or managed session modes.
 * Cookie is set using predefined expiry and domain
 * @param {string} name
 * @return {string|null}
 */
function ndovCreateSessionIdCookie(name)
{
    var si = ndovGenerateSessionId();
    if (false === validateSessionIdCookie(si))
	{
		return null;
	}
	// if standalone mode or managed session with client side cookie, store session id immediately
	if ('undefined' !== typeof window['ndovStandaloneWidget'] || true === ndovConfigOptions['clientSideCookie'])
	{
		var secureEnabled = 'object' === typeof(ndovConfigOptions['ndsidConfig']) && 'boolean' === typeof(ndovConfigOptions['ndsidConfig']['secure']) ?
			ndovConfigOptions['ndsidConfig']['secure'] : false;
		if (null === ndovGetCookieValue(name))
		{
			var cookieString = name + "=" + si + ";max-age=" + ndovCookieExpiry + "; domain= ." + ndovMainDomain() + " ; path=/";
			if (true === secureEnabled)
			{
				cookieString += '; secure; SameSite=None';
			}
			document.cookie = cookieString;
		}
		//fallback to session storage if cookie was rejected by browser
		if (null === ndovGetCookieValue(name))
		{
			ndovSetStoredValue(name, si);
		}
	}
	return si;
};

/**
 * Checks if Session Id has a valid value
 * @param value
 * @return {boolean}
 */
function validateSessionIdCookie(value)
{
    if ('string' !== typeof value)
    {
        return false;
    }
	var invalidChars = ['=', ':', '\r', '\n'];
    for (var i = 0; i < invalidChars.length; i++)
	{
		if (-1 !== value.indexOf(invalidChars[i]))
		{
			return false;
		}
	}
    return true;
}

/**
 * Store a value in sessionStorage
 * @param {string} key
 * @param {string} value
 */
function ndovSetStoredValue(key, value) {
	//Let us attempt to use sessionStorage
	try {
		window.sessionStorage.setItem(key, value);
	} catch (e) {
		//in Safari private browsing mode and Firefox with cookies off,
		//setItem throws an exception - not much we can actually do about it though
	}
};

 /**
  * Returns the current client-side session id or creates a new one
  * Looks for key in this order: nds.config.sessionId, cookie, sessionStorage
  * @param {string} key - cookie or session storage key to look for
  * @returns {string}
  */
function ndovClientSideSessionId(key) {
	if (null == nds.config.sessionId) {
		var si = ndovGetCookieValue(key);
		if (null == si) {
			//No cookie - check sessionStorage
			try {
				si = window.sessionStorage.getItem(key);
			} catch(e){
				si = null;
			}
			if (null == si) {
				// Nope, not in sessionStorage either. Generate a new one.
			    si = ndovCreateSessionIdCookie(key);
			}
		}
		return si;
	}
	else {
		return nds.config.sessionId;
	}
};

/**
 * Replace object's member functions with no-op functions, allowing callers to continue to call them without causing errors
 * @param {Object} obj The object to be modified
 */
function ndoStubMethods(obj) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			var member = obj[key];
			var isFunction = member && member.call && member.apply;
			if (isFunction) {
				obj[key] = function() {};
			}
		}
	}
}

if (ndovBrowserUnsupported) {
	// for now, stub out ndwts, which will be called at the end of this script's execution
	ndwts = function() {};
}

/**
 * Load the initial widget state
 * @param {string} apiRoot URL containing the NDAPI root
 */
nds.load = function(apiRoot) {

    // if we don't support this browser, stub out all public API methods and return without doing anything
    if (ndovBrowserUnsupported) {
        ndoStubMethods(nds);
        ndoStubMethods(nds.common);
        ndoStubMethods(nds.common.util);
        // as a special case, callers of nds.send expect their callback to get called, so replace nds.send with a callback-caller
        nds.send = function(cb) {
            if (typeof cb === 'function') {
                cb();
            }
        };
        return;
    }

    /**
     * Parse a URI query string into an object
     * @memberOf module:widget
     * @param {string} queryString
     * @returns {Object} Key-value pairs from query string
     */
    var parseQueryString = function(queryString) {
        var params = {}, queries, temp, i, l;

        // Split into key/value pairs
        queries = queryString.split('&');

        // Convert the array of strings into an object
        for (i = 0, l = queries.length; i < l; i++ ) {
            temp = queries[i].split('=');
            params[temp[0]] = decodeURIComponent(temp[1]);
        }

        return params;
    };

    var url = apiRoot.split('?');
    nds.config.queryParams = url.length > 1 ? parseQueryString(url[1]) : {};

    if ('undefined' === typeof(ndovApiBaseUrl)) {
        url = url[0].replace(/\/sync\/js\/?$/, '');
        ndovApiBaseUrl = url;
    }

    url = ndovApiBaseUrl;

    /**
     * Create a query string from widget data
     * @param {string} call
     * @returns {string}
     */
    var getQueryString = function(call) {

        var kwargs = ndovBuildInputQuery(call);

        for (var k1 in kwargs) {
            // Delete empty
            if (kwargs.hasOwnProperty(k1) && !kwargs[k1]) {
                delete kwargs[k1];
            }
        }
        var result = ndovJSON.stringify(kwargs);
        var value = ndoEncipherDecipherInput(result);
        return 'q=' + encodeURIComponent(value);
    };

    /**
     *
     * @param {function(...?)|null} cb
     * @returns {boolean}
     */
    var evaluateSendCondition = function(cb){
        if (returned.length === numQueries || returned.indexOf(false) > -1)
        {
            if (typeof cb === 'function') {
                cb();
                if (returned.indexOf(false) < 0)
                {
                    returned = [];
                }
                return true;
            }
        }
        return false;
    };

    /**
     *
     * @param {string} queryType
     * @returns {Array}
     */
    nds.getQueryArray = function(queryType) {
        var queries = [];
        if (typeof queryType === 'string' && queryType !== '')
        {
            queries = ndovGetMultiQueryString(queryType);
        }
        var numQueries = queries.length;
        var queryArray = [];

        for (var x = 0; x < numQueries; x++)
        {
            var query = queries[x];
            var value = ndoEncipherDecipherInput(query);
            queryArray.push(value);
        }

        return queryArray;
    };

    /** @member {number} */
    nds.config.sendTimeout = 5000;

    /**
     * Send complete request(s) to NDAPI<br>
     * <br>
     * Three ways to send a complete request:<ul>
     *     <li> Call nds.send() directly
     *     <li> Use {@link nds.sendOnEvent} to set an event trigger
     *     <li> Use {@link nds.sendOnSubmit} to set form submit triggers
     * </ul>
     * @public
     * @param {function(...?)|null} cb Function to call after all requests sent
     */
    nds.send = function(cb) {

        ndoFireModuleEvent('precomplete');

        if (true === ndovConfigOptions['eventModeEnabled']) {
            returned = [];
            if (false === ndovInitFired) {
                setTimeout(nds.init, 0);
            }
            if (true === ndovConfigOptions['ndsidConfig']['enable']) {
                ndovRetainSID();
            }
            var queries = nds.getQueryArray('c');
            numQueries = queries.length;
            for (var x = 0; x < numQueries; x++) {
                (function () {
                    var queryString = 'q=' + encodeURIComponent(queries[x]);
                    var img = new Image();
                    var timerId = null;

                    img.onerror = function () {
                        returned.push(false);
                        if (true === evaluateSendCondition(cb)) {
                            cb = null;
                        }
                    };

                    img.onload = function () {
                        if (timerId) {
                            clearTimeout(timerId);
                        }
                        returned.push(true);
                        if (true === evaluateSendCondition(cb)) {
                            cb = null;
                        }
                    };

                    if (nds.config.sendTimeout) {
                        timerId = setTimeout(img.onerror, nds.config.sendTimeout);
                    }
                    img.src = url + '/complete/gif/?' + queryString;
                }());
            }
        } else {
            // Reinit modules and fire off the callback function
            if (typeof cb === 'function') {
                cb();
            }
        }

        // give modules an opportunity to "reinit" now that their data has been sent (so they can avoid sending redundant data, if desired)
        nds.ndwtr();
    };

    /**
     * Insert a script tag into the page for the given URL
     * @param {string} url URL of script to load
     * @param {string} id Unique id to identify this script
     * @param {function(...?)|null} cb Function to call to use script object
     */
    nds.loadScript = function(url, id, cb) {
        // id must have a value, but not break anything? verify with Integrations that no customers use loadScript
        var existingScript = document.getElementById(id);
        if (existingScript) {
            existingScript.parentNode.removeChild(existingScript);
        }
        var scriptObj = document.createElement('script');
        scriptObj.setAttribute("type", "text/javascript");
        scriptObj.setAttribute("src", url);
        scriptObj.setAttribute("id", id);
        if (nds.config.hasOwnProperty("cspNonce") && nds.config.cspNonce.length > 0) {
            scriptObj.setAttribute("nonce", nds.config.cspNonce);
        }
        var fjs = document.getElementsByTagName('script')[0];
        fjs.parentNode.insertBefore(scriptObj, fjs);
        if (typeof cb === 'function') {
            cb(scriptObj);
        }
    };

	nds.config.sessionId = null;
	ndoInvokeCallbacks(nds.config.q);

	// If we are in standalone widget, the nds.config.ready function may not have set the sessionId
	// to be picked up by the previous loop. So we will fake one out now.
 	//
	// Also fake out sessionId if using managed session ids, so if init is missing or does not
	// return in time, we still have a session id in the form field.
	if (null === nds.config.sessionId)
	{
		if ('undefined' !== typeof window['ndovStandaloneWidget'])
		{
			nds.config.sessionId = ndovClientSideSessionId(ndovStandaloneCookieName);
		}
		else if (true === ndovConfigOptions['ndsidConfig']['enable'])
		{
			ndovTempSessionId = ndovClientSideSessionId(ndovManagedSessionIdName);
 			// initialise hidden form field
			ndovSetSIDInForm(ndovTempSessionId);
		}
	}

    /**
	 * Make an init request to NDAPI
     */
	nds.init = function() {

		// remove deferred init listeners so init will only fire once
        ndovDeferredInitUnsubscriber.callAllCallbacks();

        // make init request
		if (ndovWidgetMode === 'application/json') {
			try {
				var connection = null;

				// TODO: IE 8 & 9 solution is to use XDomainRequest using POST requests without any headers
				if ( null != XMLHttpRequest ) {
					connection = new XMLHttpRequest();
				}

				if (true === ndovConfigOptions['ndsidConfig']['enable']) {
					ndovRetainSID();
				}

				connection.open("GET", url +'/init/js/?' + getQueryString('i'));
				connection.setRequestHeader("Cache-Control", "max-age=0");
				connection.setRequestHeader("Content-Type", "application/json");
				connection.send();

				connection.onreadystatechange = function() {
					if (connection.readyState === 4 && connection.status === 200) {
						try {
							var parsed = JSON.parse(connection.response);
							ndwti(parsed);
						} catch(e) {}
					}
				};
			} catch (e) {}
		} else {
			if (true === ndovConfigOptions['ndsidConfig']['enable']) {
				ndovRetainSID();
			}
			nds.loadScript(url +'/init/js/?' + getQueryString('i'), ndovInitFieldId);
		}
        ndovInitFired = true;

		// call init callbacks
		if (true === ndoIsArray(nds.config.initCallbackList)) {
			ndoForEach(nds.config.initCallbackList, function(initCallbacks) {
				initCallbacks();
			});
		}
	};

    /**
	 * Reinitialize the widget without reloading the javascript.
	 * Optional arguments will only overwrite
     * @param {string=} placement	The current placement
     * @param {number=} placementPage	The current placement page
     * @param {(Array|Object)=} inputElements	Elements to bind event listeners to
     */
	nds.reinit = function(placement, placementPage, inputElements) {
		// loose equality used to disqualify null/undefined arguments while allowing empty string
		if (null != placement) nds.setPlacement(placement);
		if (placementPage) nds.setPlacementPage(placementPage);
        if (inputElements) ndovModuleData['ipr']['fm'] = inputElements;

		ndoInvokeBeforeInitCallbacks();
		ndoFireModuleEvent('init');

		// assume page mode fields may have been destroyed
        ndoPageModeWriteToForm([]);

		if (!ndovInitTargets || 0 === ndovInitTargets.length) {
            nds.init();
		}
		else {
			attachInitTargets(ndovInitTargets);
		}
	};

	//Possibly dead code?  Need to investigate further CDEV-2444.
	if (ndovModuleMap.hasOwnProperty('id') && ndoGetObjectSize(ndovModuleMap['id']) > 0)
	{
		returned = [];
		if (true === ndovConfigOptions['ndsidConfig']['enable']) {
			ndovRetainSID();
		}
		var queries = ndovGetMultiQueryString('id');
		var timerId = null;
		var numQueries = queries.length;
		for (var x = 0; x < numQueries; x++)
		{
			var query = queries[x];
			var value = ndoEncipherDecipherInput(query);
			var queryString = 'rr=something&q=' + encodeURIComponent(value);
			var img = new Image();

			img.onerror = function(){
				returned.push(false);
				if (true === evaluateSendCondition(cb)) {
					cb = null;
				}
			};

			img.onload = function(){
				if (timerId) {
					clearTimeout(timerId);
				}
				returned.push(true);
				if (true === evaluateSendCondition(cb)) {
					cb = null;
				}
			};

			if (nds.config.sendTimeout) {
				timerId = setTimeout(img.onerror, nds.config.sendTimeout);
			}
			img.src = url + '/init/gif/?' + queryString;
		}
	}

    /**
	 * Attach event listeners to deferred init targets
     * @param {Array|Object} targets
     */
	var attachInitTargets = function(targets) {
		// unsubscribe from existing targets, if any
		ndovDeferredInitUnsubscriber.callAllCallbacks();
        // ensure unsubscriber is properly initialized
        ndovDeferredInitUnsubscriber = nds.common.createCallbackList();

        var j, initTarget, called;
        called = -1;
        var elementObjects = ndovGetElementsByIdOrQuery(targets);
        for(j=0;j<elementObjects.length;j++) {
            try {
                initTarget = elementObjects[j];
                var callback = nds.common.addEventListener(initTarget, "focus", nds.init);
                ndovDeferredInitUnsubscriber.addCallback(callback);
                called++;
            } catch (err) {
                //if we fail on this dom ID, do nothing, move on.
            }
        }
        // also add autofill check interval
        if (called > -1) {
            ndovStartFieldValueIntervalWatcher(elementObjects, nds.init);
        }

        // if we didn't successfully add any focus events, fallback to calling nds.init right now
        if (called === -1) {
            nds.init();
        }
	};

	// call nds.init, or defer it until after a focus event if we have inittargets set
	if ((null == ndovInitTargets) || (0 === ndovInitTargets.length)) {
		nds.init();
	} else {
		attachInitTargets(ndovInitTargets);
	}

};

/**
 * Exporting ndovInputList to be accessible outside of the module
 * @readonly
 * @returns {Object} Associative array of active widget data fields and their values
 */
nds.getInputList = function() {
	return ndovInputList;
};

/**
 * Call nds.send when specified event fires
 * @param domId ID of element to attach listener to
 * @param eventName Event which should trigger nds.send
 * @see nds.send
 */
nds.sendOnEvent = function(domId, eventName) {
	var el = document.getElementById(domId);
	nds.common.addEventListener(el, eventName, nds.send);
};

/**
 * Call nds.send when any form is submitted
 * @see nds.send
 */
nds.sendOnSubmit = function() {
	var forms = document.getElementsByTagName('form');
	for (var j = 0; j < forms.length; ++j) {
		nds.common.addEventListener(forms[j], "submit", nds.send);
	}
};

/**
 * Sets the event categories (and their sampling rates) that we will be listening to.
 * @param {?Array|?null|?undefined} eventCategories     Null, no argument (undefined), object, or primitive values - no event categories will be enabled
 *                                                      - or -
 *                                                      A Javascript array containing these elements:
 *                                                          - a string for an event category code, and/or
 *                                                          - an object containing 'event_category_code : positive_integer' properties.
 *
 *                                                      The value for each property will be the new sampling rate, in milliseconds. Any non-positive-integer
 *                                                      values will be converted to null, indicating to use the default sampling rate.
 *
 *                                                      Example:
 * 	                                                        nds.registerListeners([
 * 	                                                            'kb',
 * 	                                                            { fc: 10 },
 * 	                                                            { mo: null, to: '' }, // can also have multiple properties
 * 	                                                            'dm'
 *                                                          ]);
 */
nds.registerListeners = function (eventCategories) {
    ndovEnabledCategories = {};
    ndovEnabledEvents = null;

    function addEventCategory(categoryCode, samplingRate) {
        if (false === ndovAllEventCategoriesMap.hasOwnProperty(categoryCode)) {
            console.warn("Invalid event category used: '" + categoryCode + "'. Will be ignored.");
        } else {
            if (null !== samplingRate && (!(samplingRate = parseInt(samplingRate)) || 0 >= samplingRate)) {
                console.warn("Invalid sampling rate used for event category: '" + categoryCode + "'. Default will be used.");
                samplingRate = null;
            }
            if (true === ndovEnabledCategories.hasOwnProperty(categoryCode)) {
                console.warn("Duplicate event category encountered: '" + categoryCode + "'.");
            }
            ndovEnabledCategories[categoryCode] = samplingRate;
        }
    }

    if (true === ndoIsArray(eventCategories)) {
        ndoForEach(eventCategories, function(categoryCode, index) {
            // if an element in the eventCategories array is an object
            if (true === ndoIsObject(categoryCode)) {
                // this object might have more than one category_code:sample_rate properties
                ndoForEach(categoryCode, function (samplingRate, categoryCode) {
                    addEventCategory(categoryCode, samplingRate);
                });
            } else {
                addEventCategory(categoryCode, null);
            }
        });

    // show warning for invalid argument type - we allow null or no argument (undefined)
    } else if (null !== eventCategories && undefined !== eventCategories) {
        console.warn("Invalid event category argument used. No categories will be enabled.");
    }

    // if no categories are added, default to all disabled
    if (0 === Object.keys(ndovEnabledCategories).length) {
        ndovEnabledCategories[NDS_LISTEN_NONE] = null;
    }
}

/**
 * Resets the event categories that we were listening to back to defaults
 */
nds.resetListeners = function() {
	ndovEnabledCategories = {};
	ndovEnabledCategories[NDS_LISTEN_ALL] = null;
	ndovEnabledEvents = null;
}

/**
 * Gets the event categories that currently enabled
 * @returns {Object}
 */
nds.getListeners = function() {
    if (null === ndovEnabledCategories) {
        nds.resetListeners();
    }
    return ndovEnabledCategories;
}

/**
 * Fires a rebind event that all modules are listening to
 */
nds.rebindListeners = function() {
    // tell all our modules that did any binding to unbind what they have
    ndoFireModuleEvent('rebind');
}

/**
 *
 * @param call
 * @param kwargs
 */
function ndovAddModulesToQuery(call, kwargs)
{
	if(ndovModuleMap.hasOwnProperty(call))
	{
		for (var moduleName in ndovModuleMap[call])
		{
			if (ndovModuleMap[call].hasOwnProperty(moduleName) && ndovInputList.hasOwnProperty(moduleName) && ndovInputList[moduleName]) {
				kwargs[moduleName] = ndovInputList[moduleName];
			}
		}
	}
}

/**
 * Stub out HashUtil in default widget. Overridden in standalone widget.
 * @namespace
 * @constructor
 */
function HashUtil(){}
/**
 * Stub out HashUtil function in default widget. Overridden in standalone widget.
 * @param value
 * @returns {string}
 */
HashUtil.ndovGrabFields = function(value)
{
	return 'ndovGrabFields not initialized in default mode';
};

 /**
  * Use this function to create/update session id in hidden form field
  * for managed session IDs
  * @param {string} sid - session id to set as field value
  */
function ndovSetSIDInForm(sid)
{
	ndovInputList.sid = sid;

	if (true === ndovConfigOptions['ndsidConfig']['enable'] && null != sid)
	{
		var forms = [];

		// Placement configuration defined form bindings
		if (ndovConfigOptions['ndsidConfig']['options'].hasOwnProperty('formbind') && ndovConfigOptions["ndsidConfig"]["options"]["formbind"]) {
			forms = ndovGetElementsByIdOrQuery(ndovConfigOptions["ndsidConfig"]["options"]["formbind"]);
		} else {
			forms = document.getElementsByTagName('form');
		}

		ndovUpdateHiddenFormInputs(forms, ndovManagedSessionIdName, sid);
	}
}

/**
 * Initialize page mode data based on configuration options
 */
function ndoPageModeInit() {
	// initialize page mode
	if (ndovConfigOptions.hasOwnProperty("pageModeConfig") && true === ndovConfigOptions["pageModeConfig"]["enable"]) {
		var pageModeConfig = ndovConfigOptions.pageModeConfig;

		// Set the name of the hidden form field
		if (pageModeConfig.hasOwnProperty("inputFieldName") && pageModeConfig["inputFieldName"].length > 0) {
			ndovPageModeInputFieldName = pageModeConfig["inputFieldName"];
		}

		if (true === ndovConfigOptions['ndsidConfig']['enable']) {
			ndovRetainSID();
		}

		// We are expected to have a pmd property when building the input query
		if (false === ndovModuleMap.hasOwnProperty("pmd")) {
			ndovModuleMap["pmd"] = {"pmdModuleMissing":true};
		}

	}
}

/**
 * Write page mode data to form fields
 * @param {Array.<Object>=} forms - Forms to add page mode field to. Will be merged with page mode options.
 */
function ndoPageModeWriteToForm(forms) {

	if (ndovConfigOptions.hasOwnProperty("pageModeConfig") && true === ndovConfigOptions["pageModeConfig"]["enable"]) {
		var pageModeConfig = ndovConfigOptions.pageModeConfig;
		var pageModeOptions = {};

		// Get options set for page mode
		if (pageModeConfig.hasOwnProperty("options")) {
			pageModeOptions = pageModeConfig["options"];

			if (forms !== null && ndoIsArray(forms) && forms.length > 0) {
                if (pageModeOptions && false === pageModeOptions.hasOwnProperty("formbind")) {
                    pageModeOptions["formbind"] = [];
                }
                pageModeOptions["formbind"] = Array.prototype.concat.call(pageModeOptions["formbind"], forms);
            }
		}

		// Rebuild the query
		var kwargs = ndovBuildInputQuery("pmd");
		var pageModeData = ndovBuildPageModeObject(kwargs);
		ndovSetInputQueryForm(pageModeData, pageModeOptions);
	}
}

/**
 * Get a list of all forms or other DOM elements page mode data should be bound to.
 * Combines website config settings with placement-specific values from pageModeOptions
 * @readonly
 * @param {Object} pageModeOptions - Configuration options containing form bind
 * @returns {Array}
 */
function ndovGetPageModeFormbind(pageModeOptions) {
	var forms = [];

	// Website configuration defined form bindings - get the list of forms we will bind the hidden form fields to
	if (ndovConfigOptions.hasOwnProperty("pageModeConfig") && ndovConfigOptions["pageModeConfig"]["formbind"].length > 0) {
		// Turn nodes into array and concatenate to forms array
		forms = Array.prototype.concat.call(forms, ndovGetElementsByIdOrQuery(ndovConfigOptions["pageModeConfig"]["formbind"]));
	}

	// Placement configuration defined form bindings
	if (pageModeOptions && pageModeOptions.hasOwnProperty("formbind") && pageModeOptions["formbind"]) {
		forms = Array.prototype.concat.call(forms, ndovGetElementsByIdOrQuery(pageModeOptions["formbind"]));
	}

	return forms;
}

/**
 * Set which HTML elements will be updated with widget data
 * @param {Object} pageModeOptions - placement-specific page mode options
 */
function ndovSetPageModeFormFields(pageModeOptions) {
	ndovPageModeFormFields = ndovGetElementsByIdOrQuery([{"type":"selector","value":"input[name=\""+ndovPageModeInputFieldName+"\"]"}]);
}

/**
 * If page mode data exists, update hidden form fields
 * Use this function to add page mode data to hidden form field
 * @param {Object} pageModeData - page mode data to set as field value
 * @param {Object} pageModeOptions - placement specific page mode options
 */
function ndovSetInputQueryForm(pageModeData, pageModeOptions) {

	var pageModeDataSize = ndoGetObjectSize(pageModeData);

	if (pageModeDataSize > 0) {

		var forms = ndovGetPageModeFormbind(pageModeOptions);

		// If nothing bound, fall back on binding on all forms
		if (ndoGetObjectSize(forms) === 0) {
			forms = document.getElementsByTagName('form');
		}

		// Check if sid property is undefined in page mode object and set to empty string
		if (pageModeData.hasOwnProperty("sid") && null == pageModeData["sid"]) {
			pageModeData["sid"] = "";
		}

		var pmData = ndovJSON.stringify(pageModeData);

		if (ndovConfigOptions.hasOwnProperty("pageModeConfig") && true === ndovConfigOptions["pageModeConfig"]["encodeData"]) {
			pmData = ndoEncipherDecipherInput(pmData);
		}

		ndovUpdateHiddenFormInputs(forms, ndovPageModeInputFieldName, pmData);
		ndovSetPageModeFormFields(pageModeOptions);
	}
}

/**
 * Updates value in hidden form fields.
 * If matching fields do not exist, append a hidden input to each provided form.
 * Use this function to create hidden form inputs.
 * @param {Object} forms - NodeList of form elements to add hidden input to
 * @param {string} inputName - The name of the hidden input
 * @param {string} inputValue - The value of the hidden input
 */
function ndovUpdateHiddenFormInputs(forms, inputName, inputValue) {

    // Check if the page mode data input name already exists on the page and fill it with page mode data
    var ndsElement = ndovGetElementsByIdOrQuery([{"type":"selector","value":"input[name=\""+inputName+"\"]"}]);

    if (ndsElement.length > 0) {
        for (var k = 0; k < ndsElement.length; k++) {
            ndsElement[k].value = inputValue;
        }
    } else if (forms.length > 0) {
        for (var j = 0; j < forms.length; ++j) {
            ndsElement = forms[j].querySelector('input[name=' + inputName + ']');
            // if field doesn't exist, create it
            if (null === ndsElement) {
                ndsElement = document.createElement("input");
                ndsElement.setAttribute("name", inputName);
                ndsElement.setAttribute("type", "hidden");
                forms[j].appendChild(ndsElement);
            }
            ndsElement.setAttribute("value", inputValue);
        }
    }
}

/**
 * Optionally set target DOM elements for which to run init on focus
 * @param {Array.<string>|Object} targets
 */
nds.setInitTargets = function(targets) {
	ndovInitTargets = targets;
};

/**
 * Add a callback to be called after the init completes
 * @param {function(...?)} cb Callback to add to list of callbacks fired after init
 */
nds.addInitCallback = function(cb) {

	if (false === ndoIsArray(nds.config.initCallbackList)) {
		nds.config.initCallbackList = [];
	}

	if (typeof cb === 'function' && -1 === nds.config.initCallbackList.indexOf(cb)) {
		nds.config.initCallbackList.push(cb);
	}
}

/**
 * Removes all init callbacks.  They will no longer be called if init is called.
 * This does NOT undo anything already done by previous invocation of those callbacks.
 */
nds.removeAllInitCallbacks = function() {
	nds.config.initCallbackList = [];
}

/**
 * Set session ID
 * <p>
 * Six ways to set session id
 * <ul>
 *     <li>based on cookie value {@link nds.setSessionIdFromCookie}
 *     <li>based on session storage value {@link nds.setSessionIdFromSessionStorage}
 *     <li>based on current url query parameter {@link nds.setSessionIdFromURL}
 *     <li>based on DOM element value {@link nds.setSessionIdFromDOM}
 *     <li>based on JS variable (scalar value or callback) {@link nds.setSessionIdFromJS}
 *     <li>based on direct call nds.setSessionId(id)
 * </ul>
 * </p>
 * @param {?string} id - Session ID to use
 */
nds.setSessionId = function(id) {
	nds.config.sessionId = id;
};

/**
 * Set session ID to value from named cookie
 * @param {string} cookieName Name of cookie to get value from
 * @see nds.setSessionId
 */
nds.setSessionIdFromCookie = function(cookieName) {
    try{
        nds.setSessionId(ndovGetCookieValue(cookieName));
    } catch (e) {
        nds.setSessionId(null);
    }
};

/**
 * Set session ID to value from named session storage key.<br>
 * Sets session ID to null if key not found.
 * @param {string} storageKey SessionStorage key to retrieve value from
 */
nds.setSessionIdFromSessionStorage = function(storageKey) {
    try {
		nds.setSessionId(window.sessionStorage.getItem(storageKey));
    } catch (e) {
 		nds.setSessionId(null);
    }
};

/**
 * Set session ID to value from named query parameter.<br>
 * Sets session ID to null if key not found.
 * @param {string} param Query string key to retrieve value from
 */
nds.setSessionIdFromURL = function(param) {
    if (typeof nds.config.queryParams !== 'undefined' &&
        param in nds.config.queryParams) {
        var val = nds.config.queryParams[param];
        nds.setSessionId(val ? val : null);
    } else {
        nds.setSessionId(null);
    }
};

/**
 * Set session ID to value of HTML element with specified ID.<br>
 * Sets session ID to null if element not found.
 * @param {string} domId DOM ID of element to retrieve value from
 */
nds.setSessionIdFromDOM = function(domId) {
	try {
		nds.setSessionId(document.getElementById(domId).value);
	} catch (e) {
		nds.setSessionId(null);
	}
};

/**
 * Set session ID to return value of JS function or variable.<br>
 * Sets session ID to null if return value is falsy.
 * @param {string} jsName Name of javascript variable in window namespace
 */
nds.setSessionIdFromJS = function(jsName) {
    if (jsName in window) {
        var js = window[jsName], val = js;
        if (typeof js === 'function') {
            val = js();
        }
        nds.setSessionId(val ? val : null);
    } else {
        nds.setSessionId(null);
  }
};

/**
 * Set forceIP value in widget data to specified IP
 * @param {string} ip
 */
nds.setForceIP = function(ip) {
	nds.config.forceIP = ip;
};

/**
 * Set placement name
 * @param {string} placement
 */
nds.setPlacement = function(placement) {
	nds.config.placement = placement;
};

/**
 * Set placement page
 * @param {number} placementPage
 */
nds.setPlacementPage = function(placementPage) {
	nds.config.placementPage = placementPage;
};

/**
 * Set timeout for complete request
 * @param {number} timeout
 */
nds.setTimeout = function(timeout) {
    if (isNaN(timeout)) {
        nds.config.sendTimeout = null;
    } else {
        nds.config.sendTimeout = +timeout;
    }
};

/**
 * Set user agent in widget data
 * @param {string} ua
 */
nds.setForceUA = function(ua) {
	nds.config.forceUA = ua;
};

/**
 * Set CSP nonce to be used when creating script tags
 * @param {string} nonce
 */
nds.setCspNonceForInit = function(nonce) {
    nds.config.cspNonce = nonce;
};

/**
 * Set Do Not Track flag to true
 */
nds.doNotTrack = function() {
	nds.config.doNotTrack = true;
};

/**
 * Rebind IPR event handlers
 * @param {?Array} fields - Array of form fields to bind. If null rebinds all in document
 * @example <caption>Bind all form fields on page</caption>
 * nds.bindNewFields();
 * @example <caption>Bind only fields with the specified IDs</caption>
 * ...new form dynamically loaded...
 * nds.bindNewFields(['username','password']);
 * @example <caption>Bind only fields found in the provided NodeList</caption>
 * ...new form dynamically loaded...
 * nds.bindNewFields(document.getElementsByClassName('inputs'));
 *
 */
nds.bindNewFields = function(fields) {
	// give all modules an opportunity to deal with new fields
	ndoFireModuleEvent('bind', fields);

	// assume the form may have been destroyed, so write pagemode data to available form(s)
	ndoPageModeWriteToForm([]);
};

/**
 * Bind page mode data to fields defined in array and merge with website configured fields, otherwise, bind to all fields
 * @param {Array} forms - Array of forms to bind page mode data to
 */
nds.setPageModeFields = function(forms) {
	if (forms !== null && ndoIsArray(forms) && forms.length > 0) {
        // Remove all page mode data input elements and rebind to specified forms
		for (var i=0;i<ndovPageModeFormFields.length;i++) {
            ndovPageModeFormFields[i].parentNode.removeChild(ndovPageModeFormFields[i]);
		}
        ndovPageModeFormFields = [];
    	ndoPageModeWriteToForm(forms);
    }
};

/**
 * Clear NuDetect widget data.
 * Can be used for clearing ipr from page mode data in single page apps
 */
nds.clear = function() {
	// give all modules an opportunity to clear data
	ndoFireModuleEvent('clear');
};

/**
 * Stop NuDetect monitoring.
 *
 * This function removes all registered event handlers and timers which are used in tracking user information.
 * It should be called in single page apps when a placement is complete and NuDetect monitoring is no longer
 * required.
 *
 * Data which has already been collected is not cleared. Use {@link nds.clear} to remove existing data.
 */
nds.stop = function() {
    // give all modules an opportunity to stop monitoring
    ndoFireModuleEvent('stop');
    ndovDeferredInitUnsubscriber.callAllCallbacks();
};

/**
 * Refresh/rebind the NuDetect widget
 */
nds.ndwtr = function() {
	// give all modules an opportunity to reinitialize after nds.send, now that their data has been sent
	ndoFireModuleEvent('reinit');
};

/**
 * Entry point from the sync response
 * @param {{
 * 			ml:Object,
 * 			co: {
 * 				ndsidConfig:Object,
 * 				initBindings:Array,
 * 				pageModeConfig:Object
 * 			},
 * 			wmd:{
 *				ipr: Object,
 *				wk: Object,
 *				di: Object,
 *				af: Object
 * 			},
 * 			pm:boolean,
 * 			wc:string,
 * 			fd:Object
 * 		   }} data Data returned in sync response
 */
function ndwts(data)
{
	ndovModuleMap = data.ml;
	ndovConfigOptions = data.co;
	ndovModuleData = data.wmd;
	ndovInputList = data.fd;
	ndovWidgetKeyOn = true;
	ndovWidgetMode = data.wc;

	if (ndovConfigOptions.initId) {
		ndovInitFieldId = ndovConfigOptions.initId
	}

	ndoInvokeBeforeInitCallbacks();
	// give all modules an opportunity to deal with sync response
	ndoFireModuleEvent('init');

	if ('undefined' != typeof(ndovConfigOptions.initBindings)) {
		nds.setInitTargets(ndovConfigOptions.initBindings);
	}

	// set the apiBaseUrl
	if ('undefined' !== typeof(ndovConfigOptions.apiBaseUrl) && ndovConfigOptions.apiBaseUrl) {
		nds.setApiBaseUrl(ndovConfigOptions.apiBaseUrl);
	}

	ndoPageModeInit();
	ndoPageModeWriteToForm([]);
}

/**
 * For managed session IDs -
 * Check cookie, sessionStorage, and tempSessionId in that order
 * If neither cookie nor sessionStorage is set, save temp value
 * to sessionStorage so we don't lose it.
 */
function ndovRetainSID()
{
	if (null == nds.config.sessionId) {
		nds.setSessionIdFromCookie(ndovManagedSessionIdName);
	}

	if (null == nds.config.sessionId) {
		nds.setSessionIdFromSessionStorage(ndovManagedSessionIdName);
	}

	if (null == nds.config.sessionId && null !== ndovTempSessionId) {
 		nds.setSessionId(ndovTempSessionId);
		ndovSetStoredValue(ndovManagedSessionIdName, ndovTempSessionId);
	}
}

/**
 * Start an interval to watch for elements' values being set (i.e. without focus events)
 * @param {Array.<Element>} elements Elements to watch for autofilled values
 * @param {function()} oneTimeCallback Function to call if autofill detected
 */
function ndovStartFieldValueIntervalWatcher(elements, oneTimeCallback) {
	var remainingExecutions = 10;
	var intervalMS = 250;
	var autofillInterval = setInterval(function()
	{
		// loop through the elements
		for ( var j = 0; j < elements.length; j += 1 )
		{
			try
			{

				var element = elements[j];

				// if the initTarget's value is different from the defaultValue
				if (element && element.value && element.value !== element.defaultValue)
				{
					// call the callback
					oneTimeCallback();

					// stop the interval and stop processing any more elements
					clearInterval(autofillInterval);
					return;
				}

			}
			catch(e) {}
		}

		// prevent executing more than N times
		remainingExecutions -= 1;
		if (remainingExecutions < 1)
		{
			clearInterval(autofillInterval);
		}

	}, intervalMS);

	ndovDeferredInitUnsubscriber.addCallback( function() { clearInterval(autofillInterval); } );
}

/**
 *
 * @param {string} call Call type to assemble widget data for
 * @returns {{
 *			r: number,
 *			sid: (?string),
 *			p: string,
 *			bd: string,
 *			forceIP: ?string,
 *			dtrk: boolean,
 *			jsv: string,
 *		    wt: string,
 *		    ic: string
 *			}} kwargs - Widget data for the given query
 */
function ndovBuildInputQuery(call) {

    var kwargs = {
        'r': Math.floor(Math.random() * 1000000) + 1000,
        'sid': nds.config.sessionId,
        'p': ndovGetProbe(),
        'bd': ndovGetBrowserDimensions(),
        'forceIP': nds.config.forceIP,
        'dtrk': nds.config.doNotTrack,
        'jsv': version,
        'wt': '',
        'wv': ndsWidgetVersion
    };

    // if defined (and true), pass through co.gzrq value from ndwts, originally from nudetect.configuration.gzipRequests
    if (ndovConfigOptions.gzrq) {
        kwargs.gzrq = 1;
    }

    switch (call) {
        case 'i':
            //process ndcd from localStorage data, if present, into request
            kwargs['ls'] = {};
            try {
                var lsndcd = window.localStorage.getItem('ndcd');
                if (null != lsndcd) {
                    kwargs['ls']['ndcd'] = lsndcd;
                }
            } catch (e) {
                // do nothing
            }
            break;
        case 'c':
            // Widget token needs to be in all of the complete requests; The widget token used here is generated in the wInit request
            if (ndovInputList.hasOwnProperty('wt')) {
                kwargs['wt'] = ndovInputList['wt'];
            }
            break;
        case 'pmd':
            // Put the managed session id in the top level of the page mode object
            if (ndovInputList.hasOwnProperty('sid')) {
                kwargs['sid'] = ndovInputList['sid'];
            }

            // Keep the wComplete widget token separate from the pmd widget token
            if (ndovConfigOptions.hasOwnProperty('pageModeConfig') && ndovConfigOptions.pageModeConfig.hasOwnProperty('wt')) {
                kwargs['wt'] = ndovConfigOptions.pageModeConfig.wt;
            }
    }

    // Send either HREF or Placement
    if (nds.config.placement) {
        kwargs['wp'] = nds.config.placement;
        kwargs['wpp'] = nds.config.placementPage;
    } else {
        kwargs['href'] = window.location.href;
    }

    // include encrypted blob
    if(nds.ndeb) {
        kwargs['eb'] = nds.ndeb;
    }

    //Get the module data for the specific call
    ndovAddModulesToQuery(call, kwargs);

    //Only runs during standalone complete calls.
    if('undefined' !== typeof window['ndovStandaloneWidget'] && (call === 'c' || call === 'pmd')) {
        kwargs['gf'] = HashUtil.ndovGrabFields(ndovFields);
    }

    return kwargs;
}

/**
 *
 * @param {string} call - Type of widget call
 * @returns {Array} queries - Array of query strings containing widget data
 */
function ndovGetMultiQueryString(call) {
	var kwargs = ndovBuildInputQuery(call);

	var queries = [];
	var currentLength = 0;
	var maxLength = 2000;

	var query = {
		"r":kwargs["r"],
		"sid":kwargs["sid"],
		"wt":kwargs["wt"]
	};

	for (var kw in kwargs) {
		// Delete empty
		if (kwargs.hasOwnProperty(kw)) {
			if (!kwargs[kw]) {
				delete kwargs[kw];
			} else {
                var keyLength = kw.length;
                var value = kwargs[kw];

                var valueLength = value.toString().length;
                var elementLength = keyLength + valueLength;

                if (elementLength > maxLength) {
                    var bigquery = {
                        "r":kwargs["r"],
                        "sid":kwargs["sid"],
                        "wt":kwargs["wt"]
                    };
                    bigquery[kw] = value;
                    queries.push(ndovJSON.stringify(bigquery));
                } else if ((elementLength + currentLength) > maxLength) {
                    queries.push(ndovJSON.stringify(query));
                    query = {
                        "r":kwargs["r"],
                        "sid":kwargs["sid"],
                        "wt":kwargs["wt"]
                    };
                    query[kw] = value;
                    currentLength = elementLength;
                } else {
                    query[kw] = value;
                    currentLength = currentLength + elementLength;
                }
			}
		}
	}

	if (currentLength > 0) {
		queries.push(ndovJSON.stringify(query));
	}

	return queries;
}

/**
 * Collect widget data into a page mode object
 * @param kwargs
 * @returns {Object} pageModeObject
 */
function ndovBuildPageModeObject(kwargs) {
    var pageModeObject = {};
    pageModeObject[ndovPageModeWidgetDataId] = {};
    var dataVal = "";

    for (var key in kwargs) {
        if (kwargs.hasOwnProperty(key)) {
            dataVal = kwargs[key];

            // Session ID and widget token should be at the root level of the object, gzrq too (but it's optional)
            if (("sid" === key && (key in ndovModuleMap["pmd"])) || "wt" === key || "gzrq" === key) {
                pageModeObject[key] = dataVal;
            // Widget data
            } else if (key in ndovModuleMap["pmd"]) {
                pageModeObject[ndovPageModeWidgetDataId][key] = dataVal;
            }
        }
    }

    // Used for older clientlibs to test the existence of page mode data
    if (ndovModuleMap.hasOwnProperty("pmd") && ("fmid" in ndovModuleMap["pmd"])) {
        pageModeObject["fmid"] = "nds-pmd";
    }

    return pageModeObject;
}

/**
 * Main entry point for the NuDetect Widget - from the init response
 * @param {{
 *		 wmd:Object,
 *		 fd:Object,
 *		 cwd:({cp:Object, ecw:boolean, pr:Object}),
 *		 wab:Object,
 *		 ls:Object,
 *		 wi:string,
 *		 gf:Object
 *		 ,pm:boolean
 *		 }|*} ed
 */
function ndwti(ed)
{
	// Track start time
	ndovWidgetInitTime = ndoGetUnixTime();
	ndovWidgetStartTime = ndoGetUnixTime();
	ndovInputList['wt'] = ed.fd.wt;
	if (ndovConfigOptions.hasOwnProperty('pageModeConfig') &&
		ndovConfigOptions.pageModeConfig.hasOwnProperty('wt') &&
		0 === ndovConfigOptions.pageModeConfig.wt.length &&
		ndovConfigOptions.pageModeConfig.hasOwnProperty("requireWidgetToken") &&
		true === ndovConfigOptions.pageModeConfig.requireWidgetToken) {
		ndovConfigOptions.pageModeConfig.wt = ndovInputList['wt'];
		ndoPageModeWriteToForm([]);
	}
	ndovFields = ed.gf;

	if (null != ed.wab)
	{
		// website config has specified DOM elements in this placement to autobind
		var autobindings = ed.wab;
		var elementObjects, eventType;
		elementObjects = ndovGetElementsByIdOrQuery(autobindings);
		for (var elementindex in elementObjects)
		{
			var elementObject = elementObjects[elementindex];
			if (null != elementObject) {
				eventType = ((elementObject.tagName === 'FORM') ? 'submit' : 'click');
				nds.common.addEventListener(elementObject, eventType, nds.send);
			}
		}
	}

	if (null != ed.ls) {
		// init response has sent data to set in localStorage
		var localStorageData = ed.ls;
		var lsDataKeys = ndoGetObjectKeys(localStorageData);
		var lsDataSize = ndoGetObjectSize(localStorageData);
		if (lsDataSize > 0) {
			for (var i=0; i<lsDataSize; i++) {
				window.localStorage.setItem(lsDataKeys[i], localStorageData[lsDataKeys[i]]);
			}
		}
	}

	// Process custom widget data using standalone widgets
	if (null != ed.cwd) {
		// detect if IE8 or lower and exit - Standalone not supported.
		if ('undefined' == typeof document.addEventListener)
		{
			return null;
		}

		ed.cwd.websiteId = ed.wi;

		var widgetData = ed.cwd;

		if ((null != widgetData.pr) && (null == widgetData.cp)) {
			//There is non-URL-driven placement configuration specified for this website.
			if (nds.config.placement && nds.config.placementPage) {
				var placementDesc = nds.config.placement + '.' + nds.config.placementPage;
				var placements = widgetData.pr;
				if (placements[placementDesc]) {
					widgetData.cp = placements[placementDesc];
					widgetData.cp.placement = nds.config.placement;
					widgetData.cp.page = nds.config.placementPage;
				}
			}
		}

		// Placement data defined in config
		if (null != widgetData.cp) {

			if (null != widgetData.cp.bindmethod && 'manual' == widgetData.cp.bindmethod) {
			// customer will be explicitly calling complete / push at appropriate point in their workflow for this placement
			// so we externalize methods with which they can do that.
                /**
				 * Standalone widget only. Make a push request to NDAPI
				 * @public
                 * @param cb
                 */
				nds.callApi = function(cb) {
					ndovNuDetectClientHelper(widgetData, cb);
				};

                /**
				 * Standalone widget only. Send widget data, then call callApi
				 * @public
                 * @param cb
                 */
                nds.completeAndCallApi = function(cb) {
                    nds.send(function() {
                        nds.callApi(cb);
                    });
                };
			} else {
				// Standalone will bind complete and api call either to explicitly set autobinding configuration, or
				// if no autobinding configuration specified - bind to submit event of any form by default
				var autobindings = (null == widgetData.cp.autobind) ?
						document.getElementsByTagName('form') : ndovGetElementsByIdOrQuery(widgetData.cp.autobind);

				for (var i = 0; i < autobindings.length; i++) {
					// build the callback for the client helper,
					// to unbind the event listener and run the deferred event after the API call
					var elementObject = autobindings[i];

					var eventType;

					if (null != elementObject) {
						// Check for an onsubmit event listener - if so, we want to pre-empt it with ours, then call it in our API callback.
						var isOnSubmit = (typeof elementObject.onsubmit === 'function');
						var oldSubmitHandler = isOnSubmit ? elementObject.onsubmit : function () { return true; };
						eventType = ((elementObject.tagName === 'FORM') ? 'submit' : 'click');

						//event listener function needs to defer default event while the api call runs
                        /**
						 * @function
                         */
                        (function(elementObject,oldSubmitHandler,isOnSubmit,eventType) {
                            /**
							 *
                             * @param e
                             */
                            var listener = function(e) {

                                var evt = e || window.event;

                                if (evt.preventDefault) {
                                    evt.preventDefault();
                                } else {
                                    evt.returnValue = false;
                                }

                                /**
								 * @function
                                 */
                                ndovNuDetectClientHelper(widgetData, function (response, success) {
                                    //api call done, now unbind the event handler and initiate the deferred default action
                                    if (true == isOnSubmit) {
                                        // special case - let's remove our own onsubmit, and explicitly execute the originally installed handler.
                                        elementObject.onsubmit = function () {
                                        };
                                        try {
                                            oldSubmitHandler(evt);
                                        }
                                        catch (e) {
                                        }
                                    } else {
                                        nds.common.removeEventListener(elementObject, eventType, listener);
                                    }

                                    if (elementObject.submit) {
                                        try {
                                            elementObject.submit();
                                        } catch (ex) {
                                            elementObject.constructor.prototype.submit.call(elementObject);
                                        }
                                    } else {
                                        elementObject.click();
                                    }
                                });
                            };

                            if (true === isOnSubmit) {
                                elementObject.onsubmit = listener(eventType);
                            } else {
                                nds.common.addEventListener(elementObject, eventType, listener);
                            }
                        }(elementObject,oldSubmitHandler,isOnSubmit,eventType));
					}
				}
			}
		}
	}

 	if (true === ndovConfigOptions['ndsidConfig']['enable'])
 	{
		var value = ndovGetCookieValue(ndovManagedSessionIdName);
 		if (null !== value)
 		{
 			nds.setSessionIdFromCookie(ndovManagedSessionIdName);
			// set session storage but not client-side cookie
 			ndovSetStoredValue(ndovManagedSessionIdName, value);
		}
 		ndovSetSIDInForm(ndovClientSideSessionId(ndovManagedSessionIdName));
 	}

 }

/**
 * Set a key-value pair in the widget data
 * @param {string} k Key to set
 * @param {*} v Value to set
 */
nds.setFormFieldData = function(k, v)
{
	ndovInputList[k] = v;
};

/**
 * Sets the NDAPI base URL
 * @param url
 */
nds.setApiBaseUrl = function(url)
{
	ndovApiBaseUrl = url;
};

/**
 * Get the NDAPI base URL
 * @readonly
 * @returns {string}
 */
nds.getApiBaseUrl = function()
{
	return ndovApiBaseUrl;
};

/**
 * Register a widget module and its event callbacks
 * @param {string} name Module name
 * @param {Object.<string, function()>} callbacks Functions to be called via ndoFireModuleEvent
 */
function ndoRegisterModule(name, callbacks)
{
	ndovModules[name] = callbacks;
}

/**
 * Allow each module to perform actions for the specified event
 * @param {string} eventName
 * @param {*=} callbackArg (optional)
 */
function ndoFireModuleEvent(eventName, callbackArg)
{
	for (var moduleKey in ndovModules)
	{
		if (ndovModules.hasOwnProperty(moduleKey))
		{
			var module = ndovModules[moduleKey];
			if (module.hasOwnProperty(eventName))
			{
				var moduleCallback = module[eventName];

				var moduleData = ndovModuleData[moduleKey];

				moduleCallback(moduleData, callbackArg);
			}
		}
	}
}

/**
 * Invokes customer registered before init callbacks
 */
function ndoInvokeBeforeInitCallbacks()
{
	if (nds.config.hasOwnProperty('beforeInitQ'))
	{
		ndoInvokeCallbacks(nds.config.beforeInitQ)
	}
}

/**
 * Invokes an array of callbacks in the order they were defined
 * @param {Array.<function>} cbs
 */
function ndoInvokeCallbacks(cbs)
{
	for (var i = 0; i < cbs.length; ++i) {
		var cb = cbs[i];
		if (typeof cb === 'function') {
			cb();
		}
	}
}

/**
 * Get inner width of browser window
 * @readonly
 * @returns {number|null}
 */
function ndovGetInnerWidth() {
	if(window.innerWidth)
	{
		return window.innerWidth;
	}
	else
	{
		if(document.documentElement && document.documentElement.clientWidth)
		{
			return document.documentElement.clientWidth;
		}
		if(document.body && document.body.clientWidth)
		{
			return document.body.clientWidth;
		}
	}

	return null;
}

/**
 * Get inner height of browser window
 * @readonly
 * @returns {number|null}
 */
function ndovGetInnerHeight() {
	if(window.innerWidth)
	{
		return window.innerHeight;
	}
	else
	{
		if(document.documentElement && document.documentElement.clientHeight)
		{
			return document.documentElement.clientHeight;
		}
		if(document.body && document.body.clientHeight)
		{
			return document.body.clientHeight;
		}
	}

	return null;
}

/**
 * Get any detected automation technologies
 * @readonly
 * @returns {string}
 */
function ndovGetProbe() {
	var probe = '';
	//  phantomjs (casperobject) 'p'
	if (window["_phantom"] || window["callPhantom"] || window["__phantomas"]) {
		probe += 'p';
	}
	// nodejs 'n'
	if (window.Buffer) {
		probe += 'n';
	}
	// couchjs 'c'
	if (window.emit) {
		probe += 'c'
	}
	// rhino 'r'
	if (window.spawn) {
		probe += 'r';
	}
	// seleniumjs 's' (not an app using the Selenium library or the SeleniumIDE)
	if (window.webdriver) {
		probe += 's';
	}
	// BrowserStack (chromium based automation) 'b'
	if (window["domAutomation"] || window["domAutomationController"]) {
		probe += 'b';
	}

	return probe;
}

/**
 * Get browser window and screen dimensions
 * @returns {string}
 */
function ndovGetBrowserDimensions() {
	// For generic headless browser detection signals and server side did/dfp
	return ndovGetInnerWidth() + ':' +
		ndovGetInnerHeight() + ':' +
		window.outerWidth + ':' +
		window.outerHeight + ':' +
		screen.availWidth + ':' +
		screen.availHeight;
}
(function() {
    var nds = window.ndsapi || (window.ndsapi = {});
    var widget = null;
    var requiredProperties = null;
    var missingConfig = null;

    /**
     * Configures the 3DS widget
     * @param {*} threeDSConfig
     */
    nds.configure3DS = function(threeDSConfig)
    {
        nds.config = nds.config || {};
        nds.config.threeDSConfig = nds.config.threeDSConfig || {};
        nds.ThreeDS = {};

        ndoForEach(threeDSConfig, function(value, key)
        {
            if (false === Object.prototype.hasOwnProperty.call(nds.config.threeDSConfig, key)) {
                nds.config.threeDSConfig[key] = {};
            }
            nds.config.threeDSConfig[key] = threeDSConfig[key];
        });
    };

    /**
     * Load the 3DS JS widget, configure it, and start it immediately
     * @param {?SupportedVersionsResponse} supportedVersionsResponse
     * @public
     */
    nds.start3DS = function(supportedVersionsResponse) {
        if (isThreeDSConfigSet()) {
            var threeDSConfig = nds.config.threeDSConfig;
            processConfig(threeDSConfig);

            var executeErrorCallback = function(description, detail, requiredCallbacks) {
                var error;
                var cb;
                if (typeof ThreeDS.ThreeDS2Widget !== "undefined") {
                    error = create3DS2Error(description, detail);
                    cb = "transaction.error";
                } else if (typeof ThreeDS.ThreeDS1Widget !== "undefined") {
                    var errorInformation = new ThreeDS.ErrorInformation();
                    errorInformation.setCause(ThreeDS.ErrorCause.INVALID_REQUEST);
                    errorInformation.setExplanation(description + ": " + detail);
                    error = new ThreeDS.ThreeDSError();
                    error.setError(errorInformation);
                    error.setResult(ThreeDS.ErrorResult.ERROR);
                    cb = ThreeDS.Flow.THREE_DS1_TRANSACTION_ERROR;
                }
                executeCallback(cb, [error], requiredCallbacks);
            };

            if (typeof ThreeDS !== "undefined") {
                nds.ThreeDS = ThreeDS;
                nds.ThreeDS.Error = ThreeDS.ThreeDSError;

                if (missingConfig.length !== 0) {
                    executeErrorCallback("Missing Configuration", missingConfig.join(","), requiredProperties["callbacks"]);
                    return;
                }

                var interdictionType = getInterdictionType(threeDSConfig);
                var missingWidget = validateInterdictionRequiredWidget(interdictionType);

                if (missingWidget.length !== 0) {
                    executeErrorCallback("Missing 3DS Widget", missingWidget.join(","), requiredProperties["callbacks"]);
                    return;
                }

                var widget = createWidget(interdictionType, requiredProperties["notificationUrl"]);
                //todo change below to widget !== null when there's testcases to test it
                if (widget) {
                    widget.start({
                        iframeElement: getIframeElementValue(requiredProperties["iframeElement"]),
                        callbacks: requiredProperties["callbacks"],
                        threeDSMethodNotificationURL: threeDSConfig.threeDSMethodNotificationURL,
                        authPayload: threeDSConfig.authPayload,
                        supportedVersionsResponse: supportedVersionsResponse,
                        enableIDCIMode: threeDSConfig.enableIDCIMode
                    });

                    removeWidgetsByInterdiction(interdictionType);
                }

            }
        }
    };

    /**
     * Load the 3DS JS widget, configure it, and makes a get3dsAuthenticationParameters call
     * @public
     */
    nds.get3dsAuthenticationParameters = function(svResponse) {
        if (isThreeDSConfigSet()) {
            var threeDSConfig = nds.config.threeDSConfig;
            processConfig(threeDSConfig);

            if (typeof ThreeDS !== "undefined") {
                nds.ThreeDS = ThreeDS;
                nds.ThreeDS.Error = ThreeDS.ThreeDSError;

                if(!areRequirementsFor3ds2ManualFlowMet()) {
                    return;
                }

                widget = new ThreeDS.ThreeDS2Widget(requiredProperties["notificationUrl"]);
                var authenticationParameters = widget.getAuthenticationParameters(svResponse, {
                    iframeElement: getIframeElementValue(requiredProperties["iframeElement"]),
                    callbacks: requiredProperties["callbacks"],
                    threeDSMethodNotificationURL: threeDSConfig.threeDSMethodNotificationURL,
                    authPayload: threeDSConfig.authPayload,
                });

                return authenticationParameters;
            }
        }
    };

    /**
     * Load the 3DS JS widget (if it doesn't exist already), configure it, and makes a performChallenge call
     * @public
     */
    nds.perform3dsChallenge = function(authResponse) {
        if (isThreeDSConfigSet()) {
            var threeDSConfig = nds.config.threeDSConfig;
            processConfig(threeDSConfig);

            if (typeof ThreeDS !== "undefined") {
                nds.ThreeDS = ThreeDS;
                nds.ThreeDS.Error = ThreeDS.ThreeDSError;

                if(!areRequirementsFor3ds2ManualFlowMet()) {
                    return;
                }

                if(widget === null) {
                    widget = new ThreeDS.ThreeDS2Widget(requiredProperties["notificationUrl"]);
                }
                var challengeOutcomeResponse = widget.performChallenge(authResponse, {
                    iframeElement: getIframeElementValue(requiredProperties["iframeElement"]),
                    callbacks: requiredProperties["callbacks"],
                    threeDSMethodNotificationURL: threeDSConfig.threeDSMethodNotificationURL,
                    authPayload: threeDSConfig.authPayload,
                });

                return challengeOutcomeResponse;
            }
        }
    };

    var isThreeDSConfigSet = function() {
        return Object.prototype.hasOwnProperty.call(nds, "config")
            && Object.prototype.hasOwnProperty.call(nds.config, "threeDSConfig")
            && ndoGetObjectSize(nds.config.threeDSConfig) > 0;
    };

    var processConfig = function(threeDSConfig) {
        requiredProperties = {
            "iframeElement": null,
            "callbacks": null,
            "notificationUrl": null
        };

        missingConfig = [];
        ndoForEach(requiredProperties, function(value, key)
        {
            if (Object.prototype.hasOwnProperty.call(threeDSConfig, key))
            {
                requiredProperties[key] = threeDSConfig[key];
            } else {
                missingConfig.push(key);
            }
        });
    };

    var executeCallback = function(callbackName, args, requiredCallbacks)
    {
        var errorCallback = getErrorCallback(
            requiredCallbacks,
            callbackName
        );

        if (errorCallback)
        {
            errorCallback.apply(this, args);
        }
    };

    var executeErrorCallback3DS2Only = function(description, detail, requiredCallbacks) {
        var error;
        var cb;
        if (typeof ThreeDS.ThreeDS2Widget !== "undefined") {
            error = create3DS2Error(description, detail);
            cb = "transaction.error";
        }
        executeCallback(cb, [error], requiredCallbacks);
    };

    var create3DS2Error = function(description, detail) {
        var error = new ThreeDS.ThreeDSError();
        error.setErrorDescription(description);
        error.setErrorDetail(detail);
        error.setMessageType(ThreeDS.MsgType.ERRO);
        error.setErrorCode(ThreeDS.ErrorCode.PERMANENT_SYSTEM_FAILURE);
        error.setErrorComponent(ThreeDS.ErrorComponent.THREEDS_SDK);
        return error;
    };

    var getInterdictionType = function(threeDSConfig) {
        var interdictionType = "None";
        if (Object.prototype.hasOwnProperty.call(threeDSConfig, "interdictionType")) {
            interdictionType = threeDSConfig["interdictionType"];
        }
        return interdictionType;
    }

    var validateInterdictionRequiredWidget = function(interdictionType) {
        var missingWidget = [];
        var requiredWidgets = {
            "3ds1": ["ThreeDS1Widget"],
            "3ds2": ["ThreeDS2Widget"],
            "3ds2First": ["ThreeDS1Widget", "ThreeDS2Widget"]
        };
        ndoForEach(requiredWidgets[interdictionType], function(value) {
            if (typeof ThreeDS[value] === "undefined") {
                missingWidget.push(value);
            }
        });

        return missingWidget;
    };

    var areRequirementsFor3ds2ManualFlowMet = function() {
        if (missingConfig.length !== 0) {
            executeErrorCallback3DS2Only("Missing Configuration", missingConfig.join(","), requiredProperties["callbacks"]);
            return false;
        }

        if (typeof ThreeDS["ThreeDS2Widget"] === "undefined") {
            return false;
        }

        return true;
    };

    var removeWidgetsByInterdiction = function(interdictionType) {
        var widgetsToRemove = {
            "3ds1": ["ThreeDSWidget", "ThreeDS2Widget"],
            "3ds2": ["ThreeDSWidget", "ThreeDS1Widget"],
            "3ds2First": ["ThreeDSWidget"]
        };
        ndoForEach(widgetsToRemove[interdictionType], function(value) {
            delete ThreeDS[value];
        });
    };

    var createWidget = function(interdictionType, notificationUrl) {
        if (interdictionType === "3ds1") {
            return new ThreeDS.ThreeDS1Widget(notificationUrl);
        } else if (interdictionType === "3ds2" || interdictionType === "3ds2First") {
            return new ThreeDS.ThreeDS2Widget(notificationUrl);
        } else if (typeof ThreeDS !== "undefined") {
            return new ThreeDS.ThreeDSWidget(notificationUrl);
        }
        return null;
    };

    var getIframeElementValue = function(iframeElementName) {
        var iframeElementValue = iframeElementName;
        if (typeof iframeElementName === 'string' || iframeElementName instanceof String) {
            iframeElementValue = ndovGetElementsByIdOrQuery([iframeElementName]);
            iframeElementValue = (iframeElementValue.length > 0) ? iframeElementValue[0] : null;
        }
        return iframeElementValue;
    }

    var getErrorCallback = function(allCallbacks, callback) {
        if (typeof allCallbacks !== 'object') {
            return false;
        }

        if (typeof callback === 'string') {
            var names = callback.split('.');
            var len = names.length;

            for (var i = 0; i < len; i++) {
                var property = names[i];

                if (Object.prototype.hasOwnProperty.call(allCallbacks, property)) {
                    if (i === len - 1) {
                        return typeof allCallbacks[property] === "function" ? allCallbacks[property] : false;
                    } else {
                        allCallbacks = allCallbacks[property];
                    }
                } else {
                    return false;
                }
            }
        } else {
            return Object.prototype.hasOwnProperty.call(allCallbacks, callback) && typeof allCallbacks[callback] === "function" ? allCallbacks[callback] : false;
        }
    };



    /**
     * Load the nds initial widget state for 3ds only mode
     */
    if (typeof nds.load !== "function") {
        nds.load = function() {
            if (ndovBrowserUnsupported) {
                nds.configure3DS = function() {};
                nds.start3DS = function() {};
                return;
            }

            var allCallbacks = nds.config.q;
            for (var i = 0; i < allCallbacks.length; ++i) {
                var cb = allCallbacks[i];
                if (typeof cb === 'function') {
                    cb();
                }
            }
        };


    }
}());
(function() {
	var FNAME_DEVICEFP = 'dfp';
	/**
	 * @param {{rt:number,ut:number}} moduleData
	 */
	function ndoDeviceIdInit(moduleData) {
		nds = window.ndsapi || (window.ndsapi = {});
		var did = '';

		if (!nds.config.doNotTrack)
		{
			did = ndoCalculateDeviceId(moduleData);
			for(var k in did)
			{
				if (did.hasOwnProperty(k))
				{
					nds.setFormFieldData(k, did[k]);
				}
			}
		}
		else
		{
			nds.setFormFieldData('dnt', true);
		}

		nds.setFormFieldData('bi', ndoGetBrowserInfo(moduleData));
	}
	ndoRegisterModule('di', { init: ndoDeviceIdInit });

	/**
	 * @param {{ac:boolean}} moduleData
	 */
	function ndoCalculateDeviceIdStr(moduleData)
	{
		var metrics = {};

		// TBD:
		// - Has Flash Installed
		// - Enumerate HTML5 codes (h264 etc)
		// - Get video card from web GL? http://www.browserleaks.com/webgl
		// - Get a list of system fonts

		// Get the user agent, with minor revision numbers stripped
		metrics['ua'] = (ndoGetDeviceIdUA());

		// Get the screen resolution and depth
		metrics['sr'] = (nds.common.bi.getScreenFingerprint());

		// Get the user timezone
		metrics['didtz'] = (nds.common.bi.getDeviceTimezone().toString());

		// Get a hashed string of the browser plugins
		var browserPlugins = nds.common.bi.getPlugins();
		metrics['bp'] = (nds.common.util.quickHash(browserPlugins));

        // Get a unhashed string of the browser plugins
        metrics['rbp'] = browserPlugins;

		// Flash Flag
		metrics['flv'] = (nds.common.bi.isFlashInstalled().toString());

		// HTML5 Video
		metrics['fv'] = (nds.common.bi.getHTML5SupportedVideo());

		// HTML5 Audio
		metrics['fa'] = (nds.common.bi.getHTML5SupportedAudio());

		// HTML5 Canvas
		metrics['hf'] = (nds.common.util.quickHash(nds.common.bi.getHTML5CanvasSignature()));

		// Platform
		metrics['pl'] = (nds.common.bi.getPlatform());

        // Vendor
        metrics['ve'] = (nds.common.bi.getVendor());

        // Device Touch
		metrics['ft'] = (ndovJSON.stringify(nds.common.bi.getDeviceTouchSettings()));

		// Cookies enabled
		var allowCookieCreation = moduleData.ac;
		metrics['fc'] = (ndovJSON.stringify(nds.common.bi.getCookiesEnabled(allowCookieCreation)));

        // HTML5 Local Storage
		metrics['fs'] = (nds.common.bi.getHTML5LocalStorage().toString());

		// WebGL Fingerprint
		metrics['wg'] = (nds.common.util.quickHash(ndovJSON.stringify(nds.common.bi.getWebGLInfo())));

		// Font Metrics
		metrics['fm'] = nds.common.util.quickHash(nds.common.bi.getFontMetrics().join(','));

		return metrics;
	}

	/**
	 * @param {{rt:number,ut:number}} moduleData
	 */
	function ndoGetBrowserInfo(moduleData)
	{
		//
		// NOTE: If you modify this, you need to increment the version number 'b1'
		// and modify WidgetCycle::parseDeviceBrowserInfo
		//

		var metrics = [];

		// Get the screen resolution and depth
		metrics.push(nds.common.bi.getScreenInfo());

		// Get the user timezone
		metrics.push(nds.common.bi.getDeviceTimezone());

		// Get the user language
		metrics.push(nds.common.bi.getDeviceLanguage());

        // Browser Plugin Signature
        metrics.push('bp1-' + nds.common.util.quickHash(nds.common.bi.getPlugins()));

        // Flash Flag
        metrics.push(nds.common.bi.isFlashInstalled().toString());

        // Referrer
        var referrerTruncLength = moduleData.rt || 128;
        metrics.push(nds.common.util.truncTo(document.referrer.replace(/\|/g,""), referrerTruncLength));

        // UA
        var uaTruncLength = moduleData.ut || 512;
        metrics.push(nds.common.util.truncTo(navigator.userAgent.replace(/\|/g,""), uaTruncLength));

        // WebGL Signature
        var glInfo = nds.common.bi.getWebGLInfo();
        if (glInfo === null) {
            metrics.push('Not Supported');
        }
        else {
            metrics.push('wg1-' + nds.common.util.quickHash(ndovJSON.stringify(glInfo)));
        }

		var str = 'b2';
		for (var i = 0; i < metrics.length; i++)
		{
			str += '|' + metrics[i];
		}
		return str;
	}

	function ndoCalculateDeviceId(moduleData)
	{
		return ndoCalculateDeviceIdStr(moduleData);
	}

	function ndoGetDeviceIdUA()
	{
		var ua = 'NotAvail';
		if (typeof(navigator) !== 'undefined' && typeof(navigator.userAgent) !== 'undefined') {
			ua = navigator.userAgent;
		}
		var nds = window.ndsapi || (window.ndsapi = {});
		if (nds.config && nds.config.forceUA) {
			ua = nds.config.forceUA;
		}
		// strip out minor revisons
		ua = ua.replace(/([0-9]+\.[0-9]+)\.[0-9]+\.[0-9]+/g, '$1').replace(/([0-9]+\.[0-9]+)\.[0-9]+/g, '$1');
		ua = ua.replace(/([0-9]+_[0-9]+)_[0-9]+_[0-9]+/g, '$1').replace(/([0-9]+_[0-9]+)_[0-9]+/g, '$1');
		return ua;
	}
}());
/**
 * @module iprofile
 */

(function() {

    /**
     * @memberOf module:iprofile
	 * @type {number}
     */
	var ndovNextMouseMove = 0;
    /**
     * @memberOf module:iprofile
     * @type {boolean}
     */
	var ndovBindToHiddenInputs = false;
    /**
	 *
     * @memberOf module:iprofile
     * @type {boolean}
     */
	var ndovUpdatePageModeOnFlush = true;

    /**
	 *
     * @memberOf module:iprofile
     * @type {?Array}
     */
	var ndovInputElements = null;
    /**
	 * Form input types for which ipr data should be recorded
     * @memberOf module:iprofile
     * @type {RegExp}
     */
	var ndovRegexInputType = /^(text|password|email|url|search|tel)$/i;

    /**
	 *
     * @memberOf module:iprofile
     * @type {number}
     */
	var ndovPixels2ScreenHeight = 1 / window.screen.height;
    /**
	 *
     * @memberOf module:iprofile
     * @type {number}
     */
	var ndovPixels2ScreenWidth = 1 / window.screen.width;

    /**
	 * Unsubscriber object to remove ipr event listeners.
     * Stubbed out until nds.common available
	 * @memberOf module:iprofile
     * @type {{addCallback: Function, callAllCallbacks: Function}}
     * @private
     */
	var _eventUnsubscriber = {addCallback: function(){}, callAllCallbacks: function (){}};

    /**
	 * True if iprofile sampling was turned off by the stop function
     * @type {boolean}
     * @private
     */
	var _stopped = false;

	/**
	 * @memberOf module:iprofile
	 * @type {number}
	 * @private
	 */
	var _nextKeyIndex = 0;

	/**
	 * @memberOf module:iprofile
	 * @type {object}
	 * @private
	 */
	var _keyEventMap = {};

    /**
     *
     * @memberOf module:iprofile
     * @type {number}
     */
	var ndovTruncateLength = 0;

    /**
     * @memberOf module:iprofile
     * @type {number}
     */
    var ndovIPRConfigTruncateLength = 25;

    /**
	 * Initialize member variables
     * @private
     */
	function _initialize()
	{
		ndovNextMouseMove = 0;
        ndovInputElements = null;
		ndovPixels2ScreenHeight = 1 / window.screen.height;
        ndovPixels2ScreenWidth = 1 / window.screen.width;
        ndovUpdatePageModeOnFlush = true;

        _nextKeyIndex = 0;
        _keyEventMap = {};

        _eventUnsubscriber.callAllCallbacks();
        _eventUnsubscriber = nds.common.createCallbackList();
	}

	/**
	 * Extracts key from keyevent.
	 * Returns NOP - if not identified
	 * @param keyEvent
	 * @return {string}
	 */
	function getKey(keyEvent)
	{
		var key = keyEvent.key;
		if ('undefined' !== typeof key && 'Unidentified' !== key && null !== key)
		{
			return key;
		}
		//229 in keycode is set on Android devices and means the same as Unidentified key
		if (229 !== keyEvent.keyCode)
		{
			return String.fromCharCode(keyEvent.keyCode);
		}
		return 'NOP';
	}

	/**
	 * Gets key index from event map
	 * @param keyEvent
	 * @return {null|number}
	 */
	function retrieveKeyIndex(keyEvent)
	{
		var key = getKey(keyEvent);
		if ('NOP' === key)
		{
			return key;
		}

		if (true === _keyEventMap.hasOwnProperty(key))
		{
			var index = _keyEventMap[key];
			delete _keyEventMap[key];
			if (_nextKeyIndex > 0)
			{
				_nextKeyIndex--;
			}
			return index;
		}
		return null;
	}

	/**
	 * Insert key into event map
	 * @param keyEvent
	 * @return {number}
	 */
	function insertKeyToMap(keyEvent)
	{
		var key = getKey(keyEvent);
		if ('NOP' === key)
		{
			//return one character to put in IPR to keep IPR string size at minimum
			return 'N';
		}
		if (false === _keyEventMap.hasOwnProperty(key))
		{
			_keyEventMap[key] = _nextKeyIndex++;
		}
		return _keyEventMap[key];
	}

    /**
	 * Pass false to shiftBack if you want the rounded number as a positive integer, keep in mind to shift back in your own logic though.
     * @memberOf module:iprofile
     * @param {number} num
     * @param {number} dec
     * @param {number|boolean} shiftBack
	 * @returns {number}
     */
	function ndoDecRound(num, dec, shiftBack)
	{
		var rounded = Math.round(num * Math.pow(10, dec));
		if (typeof shiftBack === 'undefined' || shiftBack === true)
		{
			rounded /= Math.pow(10, dec);
		}
		return rounded;
	}

    /**
     * Bind event listeners and initialize ipr data
     * @memberOf module:iprofile
     * @param {{fm:Array,bh:boolean,tl:number}} moduleData
     */
    function ndoInputProfileInit(moduleData)
    {
        var nds = window.ndsapi || (window.ndsapi = {});

        var fields = moduleData.hasOwnProperty('fm') ? moduleData.fm : null;
        ndovBindToHiddenInputs = moduleData.hasOwnProperty('bh') ? moduleData.bh : false;
        ndovTruncateLength = moduleData.hasOwnProperty('tl') ? moduleData.tl : ndovTruncateLength;
        ndovIPRConfigTruncateLength = moduleData.il || ndovIPRConfigTruncateLength;

        _initialize();
        ndoInitializeMouseMovementSamples(); // mouse variables kept separate to permit future config settings

        ndoInputProfileAutobind(fields, ndovBindToHiddenInputs);

        nds.setFormFieldData('ipr','');
        nds.setFormFieldData(ndovPageModeIPRConfigDataId, '');
        ndoInputProfileClear();

        // log initial form field states
        ndoLogFormState();
        ndoRecordActiveElement();

        // log initial IPR Config
        ndoLogIPRConfig();
    }

    /**
     * Bind supplied fields without clearing existing ipr data
     * @memberOf module:iprofile
     * @param {{fm:Array,bh:boolean}} moduleData
     * @param {Array} fields
     */
    function ndoInputProfileBind(moduleData, fields)
    {
        // bind provided fields, using default BindToHiddenInputs value
        ndoInputProfileAutobind(fields, ndovBindToHiddenInputs);

        ndoLogFormState();
    }

    /**
     * Unbinds (removes) existing event listeners and adds a new set of listeners based on
     * the enabled event categories. Will also log the IPR Config change to Page Mode Data
     * @memberOf module:iprofile
     * @param {{fm:Array,bh:boolean}} moduleData
     * @param {Array} fields
     */
    function ndoInputProfileRebind(moduleData, fields)
    {
        // unbind all event handlers
        _eventUnsubscriber.callAllCallbacks();

        // bind provided fields, using default BindToHiddenInputs value
        ndoInputProfileAutobind(fields, ndovBindToHiddenInputs);

        ndoLogFormState();
        ndoLogIPRConfig();
    }

    /**
	 * Update page mode data and clear previous data
     * @memberOf module:iprofile
     */
	function ndoInputProfileReinit() {
		updatePageModeData(true);
		// In cases where nds.send is called on a SPA, we depend on this reinit to signal a page mode update
        if (true === ndovConfigOptions['eventModeEnabled']) {
            ndovUpdatePageModeOnFlush = false;
        }
		
		ndoInputProfileClear();
	}

    /**
     * Clear input event and IPR config data
     * @memberOf module:iprofile
     */
    function ndoInputProfileClear() {
        ndovInputEventCache = '';
        ndovInputEventData = '';
        ndovTruncatedInputEventData = '';
        ndovInputEventLastTime = null;

        ndovIPRConfigData = '';
        ndovIPRConfigLastTime = ndoGetTimeMS();

        // if last event was a stop event, record it in new ipr
        if(_stopped) {
            ndoLogStopEvent();
            _stopped = false;
        }
    }

    /**
	 * Stop recording ipr data
	 * @memberOf module:iprofile
     */
	function ndoInputProfileStop() {
		_eventUnsubscriber.callAllCallbacks();
		ndoLogStopEvent();
        _stopped = true;
	}

    ndoRegisterModule('ipr', {
        init: ndoInputProfileInit,
        reinit: ndoInputProfileReinit,
        bind: ndoInputProfileBind,
        rebind: ndoInputProfileRebind,
        clear: ndoInputProfileClear,
        stop: ndoInputProfileStop
    });

    /**
	 * Register an event listener on a specific event
     * @memberOf module:iprofile
     * @param {HTMLElement|HTMLDocument} element
     * @param {string} eventType
     * @param {function(?)} listener
     */
	function ndoInputProfileRegisterEventHandler(element, eventType, listener)
	{
		attachEventListener(element, eventType, listener, _eventUnsubscriber.addCallback);
	}

    /**
	 * Log current state of all tracked form fields
     * @memberOf module:iprofile
     */
	function ndoLogFormState()
	{
		var state = ndoGetFormState();
		ndoLogInputEvent(ndovInputEventFormState, [state]);
	}

    /**
	 *
     * @memberOf module:iprofile
     * @returns {string}
     */
	function ndoGetFormState()
	{
		var state = [];
		for (var i = 0; i < ndovInputElements.length; i++)
		{
			var el = ndovInputElements[i];
			if (el.type && el.type.match(ndovRegexInputType))
			{
				state.push(el.id);
				state.push(el.value.length);
			}
		}
		return state.join(',');
	}

    function ndoLogStopEvent()
    {
        ndoLogInputEvent(ndovInputEventStop,[])
    }

    /**
     * Log focused element without waiting for a focus event
     * @memberOf module:iprofile
     */
    function ndoRecordActiveElement()
    {
        var focused = document.activeElement;
        if (focused && ndovInputElements.indexOf(focused) > -1) {
            var context = {};
            context[ndovLogInputCBEventTarget] = focused;
            ndoLogInputEvent(
                ndovInputEventFormFieldFocus, [
                    ndoInputProfileIdFromContext(context)
                ]);

        }
    }

    var ndovLogInputCBEventEvent = 'a';
    var ndovLogInputCBEventTarget = 'b';
    var ndovLogInputCBEventRightClick = 'c';
    var ndovLogInputCBEventKeyCode = 'd';
    var ndovLogInputCBEventMouseX = 'e';
    var ndovLogInputCBEventMouseY = 'f';

    /**
	 * Cross-browser event interpretation
     * See http://www.quirksmode.org/js/events_properties.html
     * @memberOf module:iprofile
     * @param e
     * @returns {Object} res
     */
	function ndoLogInputCBEvent(e)
	{
		if (!e) e = window.event;
		var targ = null;
		if (e.target) targ = e.target;
		else if (e.srcElement) targ = e.srcElement;
		if (targ.nodeType == 3) // defeat Safari bug
			targ = targ.parentNode;

		var code;
		if (e.keyCode) code = e.keyCode;
		else if (e.which) code = e.which;

		var rightclick = false;
		if (e.which) rightclick = (e.which == 3);
		else if (e.button) rightclick = (e.button == 2);

		var mousePosition = ndoGetMousePosition(e);

		// NOTE: this is done intentionally for obfuscation
		var res = {};
		res[ndovLogInputCBEventEvent] = e;
		res[ndovLogInputCBEventTarget] = targ;
		res[ndovLogInputCBEventRightClick] = rightclick;
		res[ndovLogInputCBEventKeyCode] = code;
		res[ndovLogInputCBEventMouseX] = mousePosition.x;
		res[ndovLogInputCBEventMouseY] = mousePosition.y;
		return res;
	}

    /**
	 *
     * @memberOf module:iprofile
     * @param e
     * @returns {{x: number, y: number}}
     */
	function ndoGetMousePosition(e)
	{
		var posx = 0;
		var posy = 0;

		if (e.pageX || e.pageY)
		{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY)
		{
			posx = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		}

		return {x:posx, y:posy};
	}

    /**
	 *
     * @memberOf module:iprofile
     * @param {Object} context
     * @returns {?string}
     */
	function ndoInputProfileIdFromContext(context)
	{
		if (!(ndovLogInputCBEventTarget in context))
		{
			return null;
		}
		
		var contextIdentifier = "";
		
		if (typeof context[ndovLogInputCBEventTarget].id === 'string' && context[ndovLogInputCBEventTarget].id !== "") {
			contextIdentifier = context[ndovLogInputCBEventTarget].id;
		} else if (typeof context[ndovLogInputCBEventTarget].name === 'string' && context[ndovLogInputCBEventTarget].name !== "") {
			contextIdentifier = context[ndovLogInputCBEventTarget].name;
		} else { // Create an identifier based on the index of the current input
			// Cast the collection of inputs into an array
			var inputList = Array.prototype.slice.call(ndovInputElements);
			// Find the index of the current input from the array
			var inputIndex = inputList.indexOf(context[ndovLogInputCBEventTarget]);
			if (inputIndex >= 0) {
				contextIdentifier = "ndiprinput" +  inputIndex;
			} else {
				contextIdentifier = "";
			}
		}

		return contextIdentifier;	
	}


	// Anonymous functions shouldn't be used for the reused event handling
	// due to a memory leak and inability to correctly attach multiple times

    /**
	 * Event listener for keydown events
	 * @memberOf module:iprofile
     * @param e
     */
    var ndoInputProfileKeydownHandler = function (e) {
		ndoLogInputCBEvent(e);
		var keyTypeLocation = ndoGetKeyTypeAndLocationIndicator(e);
		var data = [insertKeyToMap(e)];
		if (0 !== keyTypeLocation) {
			data.push(keyTypeLocation);
		}
		ndoLogInputEvent(ndovInputEventKeyDown, data);
    };

	/**
	 * Event listener for keyup events
	 * @memberOf module:iprofile
	 * @param e
	 */
	var ndoInputProfileKeyupHandler = function(e) {
		ndoLogInputCBEvent(e);
		var index = retrieveKeyIndex(e);
		var data = [];
		if (null !== index && 'NOP' !== index) {
			data.push(index);
		}
		ndoLogInputEvent(ndovInputEventKeyUp, data);
	};

    /**
	 * Event listener for form field focus events
     * @memberOf module:iprofile
     * @private
     * @param e
     */
	var ndoInputProfileFocusHandler = function(e) {
		var context = ndoLogInputCBEvent(e);
		var len = (ndovLogInputCBEventTarget in context && typeof context[ndovLogInputCBEventTarget].value !== 'undefined') ? context[ndovLogInputCBEventTarget].value.length : null;

		ndoLogInputEvent(
			ndovInputEventTotalKeys, [
				len,
				ndoInputProfileIdFromContext(context)
			]);
		
		ndoLogInputEvent(
			ndovInputEventFormFieldFocus, [
				ndoInputProfileIdFromContext(context)
			]);
	};

    /**
	 *
     * @memberOf module:iprofile
     * @private
     * @param e
     */
	var ndoInputProfileBlurHandler = function(e) {
		var context = ndoLogInputCBEvent(e);
		ndoLogInputEvent(
			ndovInputEventFormFieldBlur, [
				ndoInputProfileIdFromContext(context)
			]);
	};

    /**
	 *
     * @memberOf module:iprofile
     * @param e
     */
	var ndoInputProfileDocumentClickHandler = function(e) {
		var context = ndoLogInputCBEvent(e);
		ndoLogInputEvent(ndovInputEventMouseClick, [
			context[ndovLogInputCBEventMouseX],
			context[ndovLogInputCBEventMouseY],
			ndoInputProfileIdFromContext(context)
		]);
	};

	/**
	 * Returns true if timeMs time has passed since last time sensor data was logged
	 * @param key
	 * @param timeMs
	 * @return {boolean}
	 */
	function ndoThrottleSensorLog(key, timeMs) {
		var previousCall = ndovSensorThrottlingCallMap[key];
		var now = Date.now();
		if ((now - previousCall) > timeMs) {
			ndovSensorThrottlingCallMap[key] = now;
			return true;
		}
		return false;
	}

	/**
	 * DeviceOrientation event handler
	 * @memberOf module:iprofile
	 * @param e
	 */
	var ndoInputProfileDeviceOrientationHandler = function (e) {
		var roundUp = 1000;
		var data = [
			e.alpha * roundUp,
			e.beta * roundUp,
			e.gamma * roundUp
		];
		if (true === ndoThrottleSensorLog(ndovInputEventDeviceOrientation, 200)
			&& true === shouldLogSensorData(data)) {
			if (true === e.absolute) {
				data.push(1);
			}
			ndoLogInputEvent(ndovInputEventDeviceOrientation, data);
		}
	}

	/**
	 * DeviceMotionEvent handler
	 * @memberOf module:iprofile
	 * @param e
	 */
	var ndoInputProfileDeviceMotionHandler = function (e) {
		var roundUp = 1000;
		if (true === ndoThrottleSensorLog(ndovInputEventRotationRate, 200)
			&& null !== e.rotationRate)
		{
			var rotationRateData = [
				e.rotationRate.beta * roundUp,
				e.rotationRate.gamma * roundUp,
				e.rotationRate.alpha * roundUp
			];
			if (true === shouldLogSensorData(rotationRateData)) {
				ndoLogInputEvent(ndovInputEventRotationRate, rotationRateData);
			}
		}

		if (true === ndoThrottleSensorLog(ndovInputEventAccelerationWithGravity, 50)
			&& null !== e.accelerationIncludingGravity) {
			var accelerationWithGravityData = [
				e.accelerationIncludingGravity.x * roundUp,
				e.accelerationIncludingGravity.y * roundUp,
				e.accelerationIncludingGravity.z * roundUp
			];
			if (true === shouldLogSensorData(accelerationWithGravityData)) {
				ndoLogInputEvent(ndovInputEventAccelerationWithGravity, accelerationWithGravityData);
			}
		}

		if (true === ndoThrottleSensorLog(ndovInputEventAcceleration, 50)
			&& null !== e.acceleration) {
			var accelerationData = [
				e.acceleration.x * roundUp,
				e.acceleration.y * roundUp,
				e.acceleration.z * roundUp
			];
			if (true === shouldLogSensorData(accelerationData)) {
				ndoLogInputEvent(ndovInputEventAcceleration, accelerationData);
			}
		}
	};

	/**
	 * Returns true if none zero value are present in data
	 * @param {Array} data
	 * @return {boolean}
	 */
	function shouldLogSensorData(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i] !== 0) {
				return true;
			}
		}
		return false;
	}

    /**
	 *
     * @memberOf module:iprofile
     * @param e
     */
    var ndoInputProfileTouchHandler = function(e) {
        var context = ndoLogInputCBEvent(e);
        if (context[ndovLogInputCBEventEvent] &&
			context[ndovLogInputCBEventEvent].touches &&
			context[ndovLogInputCBEventEvent].touches[0] &&
			typeof(context[ndovLogInputCBEventEvent].touches[0].pageX) !== 'undefined'
		) {
            ndoLogInputEvent(ndovInputEventTouchEvent, [
                context[ndovLogInputCBEventEvent].touches[0].pageX,
                context[ndovLogInputCBEventEvent].touches[0].pageY,
                ndoInputProfileIdFromContext(context)
            ]);
        } else {
            ndoLogInputEvent(ndovInputEventTouchEvent, [
                -1,
                -1,
                ndoInputProfileIdFromContext(context)
            ]);
        }
    };

    /**
	 *
     * @memberOf module:iprofile
     * @param e
     */
	var ndoInputProfileMouseMoveHandler = function(e) {
		// Keep the mouse position up to date so timers can examine it on given intervals
		ndovMousePosition = ndoGetMousePosition(e);

		// If this is the first mouse move event of the page session, need to start sampling mouse movement data
		if (null === ndovMMSTimer) // n.b. ndovMMSTimer can also be set to 0
		{
			ndovMMSIndex = -1;
			ndoMouseMovementSubSamplerStart();
		}

		if (ndoGetUnixTime() < ndovNextMouseMove) {
			return false;
		}
		ndovNextMouseMove = ndoGetUnixTime() + 5; // every 5 secs

		var context = ndoLogInputCBEvent(e);
		ndoLogInputEvent(ndovInputEventMouseMove, [
			context[ndovLogInputCBEventMouseX],
			context[ndovLogInputCBEventMouseY],
			ndoInputProfileIdFromContext(context)
		]);
	};

    /**
	 *
     * @memberOf module:iprofile
     * @param e
     */
	var ndoInputProfileSubmitHandler = function(e) {
		var context = ndoLogInputCBEvent(e);
		ndoLogInputEvent(ndovInputEventFormSubmit, [
			context[ndovLogInputCBEventMouseX],
			context[ndovLogInputCBEventMouseY]
		]);
	};

	/**
	 * Autobind event handlers to supplied input elements
	 * If supplied with bad inputs, errs on the side of adding more event listeners so we still get ipr data
     * @memberOf module:iprofile
	 * @param {Array|Object} inputDomIds
	 * @param {boolean} bindToHidden
     */
	function ndoInputProfileAutobind(inputDomIds, bindToHidden)
	{
		var formElement = null, i;
		var possibleInputs = [];
		// if supplied list of dom ids/elements is null, undefined, or an empty array, traverse dom to find possible inputs
		if (null === inputDomIds || 'undefined' === typeof inputDomIds || 0 === inputDomIds.length) {
			possibleInputs = document.documentElement.getElementsByTagName('input');
		}
		else if (('object' === typeof inputDomIds || 'function' === typeof inputDomIds)
			&& 'number' === typeof inputDomIds.length) {
			// otherwise, iterate through supplied array
			// uses very general type check so will work if supplied a NodeList or other collection as well
			for (i = 0; i < inputDomIds.length; i++) {
				var input = inputDomIds[i];
				// accept either string dom IDs or html elements
				if ('string' === typeof input) {
					var e = document.getElementById(input);
					// if dom ID exists, add element to array, otherwise ignore
					if ('undefined' !== typeof e && null !== e) {
						possibleInputs.push(e);
					}
				}
				else if ('object' === typeof input && null !== input) {
					possibleInputs.push(input);
				}
			}
            // keep existing input elements, if any
            if (null !== ndovInputElements) {
                possibleInputs = possibleInputs.concat(ndovInputElements);
            }
		}

		var activeElements = [];
		for (i = 0; i < possibleInputs.length; i++) {
			var objInput = possibleInputs[i];
			// Verify the type and visibility (jQuery-like check)
			var isApplicable = objInput.type && objInput.type.match(ndovRegexInputType)
				&& ((bindToHidden) || !(objInput.offsetWidth === 0 && objInput.offsetHeight === 0));
			if (isApplicable) {
                activeElements.push(objInput);
				ndoInputProfileRegisterEventHandler(objInput, ndovKeyDownEvent, ndoInputProfileKeydownHandler);
				ndoInputProfileRegisterEventHandler(objInput, ndovKeyUpEvent, ndoInputProfileKeyupHandler);
				ndoInputProfileRegisterEventHandler(objInput, ndovFocusEvent, ndoInputProfileFocusHandler);
				ndoInputProfileRegisterEventHandler(objInput, ndovBlurEvent, ndoInputProfileBlurHandler);
			}
		}

		// store element array as a global, so we can periodically track field lengths as part of the ipr
		ndovInputElements = ndoArrayUnique(activeElements);

		ndoInputProfileRegisterEventHandler(document, ndovClickEvent, ndoInputProfileDocumentClickHandler);
		ndoInputProfileRegisterEventHandler(document, ndovTouchStartEvent, ndoInputProfileTouchHandler);
		ndoInputProfileRegisterEventHandler(document, ndovMouseMoveEvent, ndoInputProfileMouseMoveHandler);
		ndoInputProfileRegisterEventHandler(window, ndovDeviceMotionEvent, ndoInputProfileDeviceMotionHandler);
		ndoInputProfileRegisterEventHandler(window, ndovDeviceOrientationEvent, ndoInputProfileDeviceOrientationHandler);
		if (null !== formElement) {
			ndoInputProfileRegisterEventHandler(formElement, ndovSubmitEvent, ndoInputProfileSubmitHandler);
		}
	}


	var ndovMousePosition = null;			// used to store the last known mouse position from mouse move events
	var ndovMMSTimer = null;				// store a reference to the Interval timer so we can cancel it when necessary
	var ndovMMSIndex = false; 				// false = never used, null = used and completed, integer = in use at given index
	var ndovMMSLastSubSample = false;		// stores the mouse position from the last sub sample
	var ndovMMSSubSamplesTaken = 0;			// counter for number of sub samples taken
	var ndovMMSSubSampleIntervals = [100, 200, 2000];
	var ndovMMSSubSampleLimit = [100, 300, 150];
	var ndovMMSSubSamplesPerSample = [10, 50, 30];
	var ndovMMSLastFullSampleTime = 0;
	var ndovMMSvelocityMin = null;			// min velocity for this batch of sub samples
	var ndovMMSvelocityMinMag = null;		// need to keep track of the magnitude so results are accurate
	var ndovMMSvelocityMax = null;			// max velocity for this batch of sub samples
	var ndovMMSvelocityMaxMag = null;		// need to keep track of the magnitude so results are accurate
	var ndovMMSvelocityAvg = 0;				// average velocity for this batch of sub samples, used to sum up velocities until full sampling is done
	var ndovMMStotalDistance = 0;			// total distance mouse moved across this batch of sub samples
	var ndovMMSvelocityLastMag = null;		// need to keep track of the previous velocity magnitude to compare against current, to detect min/max accel
	var ndovMMSaccelMinMag = null;
	var ndovMMSaccelMaxMag = null;
	var ndovMMSaccelAvg = 0;

    /**
	 * Initialize mouse movement sample data and configuration
	 *
     * @param {{si:Array,sl:Array,ss:Array}=} samplingConfig Custom sample intervals, sample limits, and sub sample counts
     */
	function ndoInitializeMouseMovementSamples(samplingConfig)
	{
		// set default sampling intervals/limits/count
		var config = {'si':[100, 200, 2000],'sl':[100, 300, 150],'ss':[10, 50, 30]};
		if (samplingConfig) {
			for (var id in config) {
				if (samplingConfig.hasOwnProperty(id)) {
					config[id] = samplingConfig[id];
				}
			}
		}
		ndovMousePosition = null;
		ndovMMSTimer = null;
		ndovMMSIndex = false;
		ndovMMSLastSubSample = false;
		ndovMMSSubSamplesTaken = 0;
		ndovMMSSubSampleIntervals = config.si;
		ndovMMSSubSampleLimit = config.sl;
		ndovMMSSubSamplesPerSample = config.ss;
		ndovMMSLastFullSampleTime = 0;
		ndovMMSvelocityMin = null;
		ndovMMSvelocityMinMag = null;
		ndovMMSvelocityMax = null;
		ndovMMSvelocityMaxMag = null;
		ndovMMSvelocityAvg = 0;
		ndovMMStotalDistance = 0;
		ndovMMSvelocityLastMag = null;
		ndovMMSaccelMinMag = null;
		ndovMMSaccelMaxMag = null;
		ndovMMSaccelAvg = 0;
	}

    /**
	 *
     * @memberOf module:iprofile
     */
	function ndoMouseMovementSubSample()
	{
		var timeNow = ndoGetTimeMS();

		// This shouldn't be false, as the very first call to start the sampler should take a sub-sample, but just to be safe let's check it...
		if (false !== ndovMMSLastSubSample)
		{
			// compare against last sample
			var posDeltaX = Math.abs(ndovMousePosition.x - ndovMMSLastSubSample.pos.x) * ndovPixels2ScreenWidth;		// distance as screen units
			var posDeltaY = Math.abs(ndovMousePosition.y - ndovMMSLastSubSample.pos.y) * ndovPixels2ScreenHeight;		// distance as screen units
			var timeDelta = (timeNow - ndovMMSLastSubSample.time) / 1000;												// time in seconds

			var velocityX = ndoDecRound(posDeltaX / timeDelta, 4, true);
			var velocityY = ndoDecRound(posDeltaY / timeDelta, 4, true);
			var magnitudeOfDistance = Math.sqrt(Math.pow(posDeltaX, 2) + Math.pow(posDeltaY, 2));
			var magnitudeOfVelocity = ndoDecRound(magnitudeOfDistance / timeDelta, 4, true);

			// min velocity
			if ((null === ndovMMSvelocityMinMag || magnitudeOfVelocity < ndovMMSvelocityMinMag) && 0 !== magnitudeOfVelocity)
			{
				ndovMMSvelocityMin = [velocityX, velocityY];
				ndovMMSvelocityMinMag = magnitudeOfVelocity;
			}

			// max velocity
			if ((null === ndovMMSvelocityMaxMag || magnitudeOfVelocity > ndovMMSvelocityMaxMag) && 0 !== magnitudeOfVelocity)
			{
				ndovMMSvelocityMax = [velocityX, velocityY];
				ndovMMSvelocityMaxMag = magnitudeOfVelocity;
			}

			// avg velocity, add the magnitudes up here, divide by # of sub-samples when generating the log
			ndovMMSvelocityAvg += magnitudeOfVelocity;

			// total distance during this set of sub samples
			ndovMMStotalDistance += magnitudeOfDistance;


			// For any acceleration calcs we need at least two velocities
			if (null !== ndovMMSvelocityLastMag)
			{
				var magnitudeOfAcceleration = (magnitudeOfVelocity - ndovMMSvelocityLastMag) / timeDelta;

				// min acceleration
				if ((null === ndovMMSaccelMinMag || magnitudeOfAcceleration < ndovMMSaccelMinMag) && 0 !== magnitudeOfAcceleration)
				{
					ndovMMSaccelMinMag = magnitudeOfAcceleration;
				}

				// max acceleration
				if ((null === ndovMMSaccelMaxMag || magnitudeOfAcceleration > ndovMMSaccelMaxMag) && 0 !== magnitudeOfAcceleration)
				{
					ndovMMSaccelMaxMag = magnitudeOfAcceleration;
				}

				// avg acceleration
				ndovMMSaccelAvg += magnitudeOfAcceleration;
			}

			// record this after acceleration calculations are done
			ndovMMSvelocityLastMag = magnitudeOfVelocity;
		}

		// Take a full sample
		if (0 !== ndovMMSSubSamplesTaken && 0 === ndovMMSSubSamplesTaken % ndovMMSSubSamplesPerSample[ndovMMSIndex])
		{
			var timeSinceLastSample = (0 === ndovMMSLastFullSampleTime) ? 0 : (timeNow - ndovMMSLastFullSampleTime);

			// Fetch the actual average now, as this should store the sum of all current sub-samples
			ndovMMSvelocityAvg = ndoDecRound(ndovMMSvelocityAvg / ndovMMSSubSamplesPerSample[ndovMMSIndex], 4, false);
			ndovMMStotalDistance = ndoDecRound(ndovMMStotalDistance, 4, false);

			// The very first full sample will only have N-1 sub-samples of acceleration data, since acceleration requires 2 velocities.
			var fixSubSampleCount = 0;
			if (0 === timeSinceLastSample)
			{
				fixSubSampleCount = -1;
			}
			ndovMMSaccelAvg = ndoDecRound(ndovMMSaccelAvg / (ndovMMSSubSamplesPerSample[ndovMMSIndex] + fixSubSampleCount), 4, false);

			// Detect a NOP Sample, which is a full sample that had no movement across all sub-samples
			if (null === ndovMMSvelocityMin && null === ndovMMSvelocityMax && 0 === ndovMMSvelocityAvg && 0 === ndovMMStotalDistance)
			{
				ndoLogInputEvent(ndovInputEventMouseMoveSample, [
					timeSinceLastSample,
					ndovMMSSubSamplesPerSample[ndovMMSIndex],
					'NOP'
				]);
			}
			else
			{
				ndovMMSvelocityMin[0] = ndoDecRound(ndovMMSvelocityMin[0], 4, false).toString(16);
				ndovMMSvelocityMin[1] = ndoDecRound(ndovMMSvelocityMin[1], 4, false).toString(16);
				ndovMMSvelocityMax[0] = ndoDecRound(ndovMMSvelocityMax[0], 4, false).toString(16);
				ndovMMSvelocityMax[1] = ndoDecRound(ndovMMSvelocityMax[1], 4, false).toString(16);
				ndovMMSaccelMinMag = (null !== ndovMMSaccelMinMag ? ndoDecRound(ndovMMSaccelMinMag, 4, false) : 0);
				ndovMMSaccelMaxMag = (null !== ndovMMSaccelMaxMag ? ndoDecRound(ndovMMSaccelMaxMag, 4, false) : 0);

				ndoLogInputEvent(ndovInputEventMouseMoveSample, [
					timeSinceLastSample,
					ndovMMSSubSamplesPerSample[ndovMMSIndex],
					ndovMMSvelocityMin[0] + ' ' + ndovMMSvelocityMin[1],
					ndovMMSvelocityMax[0] + ' ' + ndovMMSvelocityMax[1],
					ndovMMSvelocityAvg,
					ndovMMStotalDistance,
					ndovMMSaccelMinMag,
					ndovMMSaccelMaxMag,
					ndovMMSaccelAvg
				]);
			}

			// reset tracking variables for next batch of sub samples
			ndovMMSvelocityMin = null;
			ndovMMSvelocityMinMag = null;
			ndovMMSvelocityMax = null;
			ndovMMSvelocityMaxMag = null;
			ndovMMSvelocityAvg = 0;
			ndovMMStotalDistance = 0;
			ndovMMSaccelMinMag = null;
			ndovMMSaccelMaxMag = null;
			ndovMMSaccelAvg = 0;
			ndovMMSLastFullSampleTime = timeNow;
		}

		ndovMMSLastSubSample = {
			pos: ndovMousePosition,
			time: timeNow
		};

		if (ndovMMSSubSamplesTaken >= ndovMMSSubSampleLimit[ndovMMSIndex])
		{
			ndoMouseMovementSubSamplerStart();
		}

		ndovMMSSubSamplesTaken++;
	}

    /**
	 * Start mouse movement sampler
     * @memberOf module:iprofile
     */
	function ndoMouseMovementSubSamplerStart()
	{
		if (null !== ndovMMSTimer)
		{
			clearInterval(ndovMMSTimer);
			ndovMMSTimer = 0; // clear timer handle. Use 0 instead of null so conditional in ndoInputProfileMouseMoveHandler works as before
		}

		if (null !== ndovMMSIndex && 'undefined' !== typeof ndovMMSSubSampleIntervals[ndovMMSIndex + 1])
		{
			ndovMMSIndex++;
			ndovMMSTimer = setInterval(ndoMouseMovementSubSample, ndovMMSSubSampleIntervals[ndovMMSIndex]);
			_eventUnsubscriber.addCallback( function() { clearInterval(ndovMMSTimer)} );

			// If this is the first time this is called, ever, treat it as the initial sub-sample
			if (false === ndovMMSLastSubSample)
			{
				ndovMMSSubSamplesTaken = 1;
				ndovMMSLastSubSample = {
					pos: ndovMousePosition,
					time: ndoGetTimeMS()
				};
			}
			else
			{
				// reset this each time we start a new timer
				ndovMMSSubSamplesTaken = 0;
			}
		}
	}


	/**
	 * FormFieldFocus	 id		Sent when a user focus any type of HTML input field on the form.
	 * FormFieldBlur	 id		Send when a user blurs (leaves focus) any type of HTML input field on the form.
	 * Keydown	 key, id		Sent whenever a key down occurs. See http://www.w3schools.com/jsref/event_onkeydown.asp
	 * Keyup	 key, id		Sent whenever a key up occurs. See http://www.w3schools.com/jsref/event_onkeyup.asp
	 * MouseMove	 x, y		Sent at some frequency, providing mouse position
	 * MouseClick	 x, y, id	 Sent whenever the mouse is clicked on the page.
	 * TouchEvent	 x, y, id	 Sent whenever the mouse is clicked on the page.
	 * Accelerometer	 x, y, z	 For handheld devices with accelerometer data
	 * TotalKeys	x		A pseudo event that is triggered to record the 
	 * FormSubmit	 x, y		A special event that is called before the post back occurs. Called for both 'Enter' pressed and button click. Passes in the mouse position at the time of event.
	 * ScrollPosition	 sx, sy, sxmax, symax	 Sent at some frequency, providing the scroll position of the view
	 */

	// TODO: once this is working, replace these with enums
	var ndovInputEventFormFieldFocus = 'ff';
	var ndovInputEventFormFieldBlur = 'fb';
	var ndovInputEventKeyDown = 'kd';
	var ndovInputEventKeyUp = 'ku';
	var ndovInputEventMouseMove = 'mm';
	var ndovInputEventMouseClick = 'mc';
	var ndovInputEventAccelerometer = 'ac';
	var ndovInputEventTouchEvent = 'te';
	var ndovInputEventFormSubmit = 'fs';
	var ndovInputEventScrollPosition = 'sp';
	var ndovInputEventTotalKeys = 'kk';
	var ndovInputEventFormState = 'st';
	var ndovInputEventMouseMoveSample = 'mms';
	var ndovInputEventStop = 'so';
    var ndovInputEventTruncate = 'tr';
    var ndovInputEventAccelerationWithGravity = 'ac';
    var ndovInputEventRotationRate = 'gy';
    var ndovInputEventAcceleration = 'lac';
    var ndovInputEventDeviceOrientation = 'or';

	var ndovInputEventVersion = 2;
	var ndovInputEventResolutionMS = 1;

	var ndovInputEventInitTime = null;
	var ndovInputEventLastTime = null;
	var ndovInputEventFlushTime = null;
	var ndovInputEventSyncTime = null;

	var ndovInputEventCache = '';
	var ndovInputEventData = '';
	var ndovTruncatedInputEventData = '';

    var ndovIPRConfigLastTime = ndoGetTimeMS();
    var ndovIPRConfigData = '';

	/**
	 * Stores times of last time sensor handler called
	 */
	var ndovSensorThrottlingCallMap = {};
	ndovSensorThrottlingCallMap[ndovInputEventAccelerationWithGravity] = 0;
	ndovSensorThrottlingCallMap[ndovInputEventRotationRate] = 0;
	ndovSensorThrottlingCallMap[ndovInputEventAcceleration] = 0;
	ndovSensorThrottlingCallMap[ndovInputEventDeviceOrientation] = 0;

	/**
	 * Returns the current time in milliseconds
     * @memberOf module:iprofile
	 * @readonly
	 * @return {number} The time in unix format ms.
	 */
	function ndoGetTimeMS()
	{
		var mydate = new Date; // Generic JS date object
		return parseInt(mydate.getTime(),10);
	}

    /**
	 *
     * @memberOf module:iprofile
     * @param {string} event
     * @param {Array} data
     */
	function ndoLogInputEvent(event, data)
	{
		var ms = ndoGetTimeMS();
		if (ndovInputEventLastTime == null)
		{
			// start with the unix time stamp
			ndovInputEventInitTime = ms;
			ndovInputEventLastTime = ndovInputEventInitTime;
			ndovInputEventSyncTime = ndovInputEventInitTime;
			ndoLogInputData( 'ncip', ms, [ndoGetUnixTime(), ndovInputEventVersion, ndovInputEventResolutionMS] );
		}

		// log the actual event
		ndoLogInputData(event, ms, data);

		// log a sync event every 15 seconds
		if ((ms - ndovInputEventSyncTime) >= 15000)
		{
			ndoLogInputData( 'ts', ms, [ms - ndovInputEventInitTime] );
			ndovInputEventSyncTime = ms;
		}

		// flush the write cache
		switch(event)
		{
			// some events force a flush
			case ndovInputEventFormFieldBlur:
			case ndovInputEventMouseClick:
			case ndovInputEventFormSubmit:
			case ndovInputEventStop:
			case ndovInputEventMouseMoveSample:
				ndoLogInputFlush(ms);
				break;
			// other flush at some interval
			default:
				if ((ms - ndovInputEventFlushTime) > 2000)
				{
					ndoLogInputFlush(ms);
				}
				break;
		}
	}

    /**
	 *
     * @memberOf module:iprofile
     * @param ms
     */
	function ndoLogInputFlush(ms)
	{
		ndovInputEventFlushTime = ms;

		if (ndovInputEventCache)
		{
			var nds = window.ndsapi || (window.ndsapi = {});
			ndovInputEventData += ndovInputEventCache;

            ndovTruncatedInputEventData = getTruncatedValue(ndovInputEventData);

			if (true === ndovUpdatePageModeOnFlush) {
				updatePageModeData(false);
			}

			ndovInputEventCache = '';

			if (ndovTruncatedInputEventData.length > 0)
			{
                nds.setFormFieldData('ipr', ndovTruncatedInputEventData);
            } else {
                nds.setFormFieldData('ipr', ndovInputEventData);
			}
		}
	}

    /**
     *
     * @memberOf module:iprofile
     * @param ipr
     */
    function getTruncatedValue(ipr)
    {
    	var ms = ndoGetTimeMS();

        var truncateEventValue = createInputEventData(ndovInputEventTruncate, ms, [ndovInputEventData.length]);

        if (ndovTruncateLength === 0 || (ipr.length+truncateEventValue.length) <= ndovTruncateLength)
		{
			return '';
        }

        //Truncate the IPR up to the last separator
		ipr = ipr.substring(0, ndovTruncateLength-truncateEventValue.length);

        var lastSeparatorPosition = ipr.lastIndexOf(';');

        // Invalid IPR
        if (lastSeparatorPosition < 0)
        {
            return '';
        }

        ndovInputEventLastTime = ms;

        return ipr.substring(0, lastSeparatorPosition + 1) + truncateEventValue + ';';
    }

    /**
     *
     * @memberOf module:iprofile
     * @param {Array} data
     */
    function ndoConvertEvent(data)
	{
        var converted = [];
        for (var i = 0; i < data.length; i++)
        {
            // convert all numbers to ints and store as base 16 for compactness
            if (typeof(data[i]) === 'number')
            {
                converted.push(Math.round(data[i]).toString(16));
            }
            else if ( null != data[i] )
            {
                converted.push(data[i].toString());
            }
        }

        return converted.join(',');
	}

	function createInputEventData(eventid, ms, data)
	{
        var dms = ms - ndovInputEventLastTime;
        if (ndovInputEventResolutionMS > 1)
        {
            dms = Math.round(dms / ndovInputEventResolutionMS);
        }

        var newdata = eventid + ',' + dms.toString(16);
        if (data != null && data.length > 0)
        {
            newdata = newdata + ',' + ndoConvertEvent(data);
        }

        return newdata;
	}

    /**
	 *
     * @memberOf module:iprofile
     * @param {string} eventid
     * @param {number} ms
     * @param {Array} data
     */
	function ndoLogInputData( eventid, ms, data )
	{
        ndovInputEventCache = ndovInputEventCache + createInputEventData( eventid, ms, data ) + ';';

		// delta compression
		// id table
		// event limits

		// resolution
		// buffered writing
		// all numbers in base 16

		// slow typing = 10wpm = 50char per m = approx 1 char secton = 1000ms between keys
		// fast typing = 120wpm = 2wps = 10characters per second = 100ms between keys
		ndovInputEventLastTime = ms;
	}

    /**
     * Log an IPR config change
     * @memberOf module:iprofile
     */
    function ndoLogIPRConfig() {
        var ms = ndoGetTimeMS();
        ndoLogIPRConfigData(ms, ndoProcessIPRConfig());
        nds.setFormFieldData(ndovPageModeIPRConfigDataId, ndovIPRConfigData);
        updatePageModeData(false);
    }

    /**
     * Gets the enabled listeners object, and construct a config string for logging
     * @memberOf module:iprofile
     * @returns {string}
     */
    function ndoProcessIPRConfig() {
        var configOutput = '';
        var currentConfig = nds.getListeners();
        for (var eventCategory in currentConfig) {
            configOutput += eventCategory + (currentConfig[eventCategory] || '');
        }
        return configOutput;
    }

    /**
     * Append new IPR Config change, truncating if necessary
     * @param ms
     * @param data
     */
    function ndoLogIPRConfigData(ms, data) {
        // obtain the time delta (in seconds) between the last IPR Config change to now
        var dms = Math.floor((ms - ndovIPRConfigLastTime) / 1000);

        // truncate IPR Config data
        if (ndovIPRConfigTruncateLength > 0 && ndovIPRConfigData.length > ndovIPRConfigTruncateLength) {
            ndovIPRConfigData = dms.toString(16) + ',' + ndovInputEventTruncate + ';'
                + '0,' + data + ';';

        } else {
            ndovIPRConfigData += dms.toString(16) + ',' + data + ';';
        }
        ndovIPRConfigLastTime = ms;
    }

    /**
     * If page mode is enabled, update ipr and sid if sid not set yet
     * @memberOf module:iprofile
     * @param {boolean} moduleReinit
     */
    function updatePageModeData(moduleReinit) {
        if (ndovPageModeFormFields.length > 0 && ndovPageModeFormFields[0].value) {
            var pageModeFieldData = ndovPageModeFormFields[0].value;
            var formValue = '';
            var pageModeData = '';
            var key = '';
            var value = '';

            if (ndovConfigOptions.hasOwnProperty("pageModeConfig") && true === ndovConfigOptions["pageModeConfig"]["encodeData"]) {
                pageModeFieldData = ndoEncipherDecipherInput(pageModeFieldData);
            }

            try {
                pageModeData = ndovJSON.parse(pageModeFieldData);

                if (!pageModeData[ndovPageModeWidgetDataId]) {
                    pageModeData[ndovPageModeWidgetDataId] = {};
                }

                // Check to see if nds.send had been called multiple times. Do not wipe the IPR data right away if the module has been reinitialized.
                var iprData = (ndovTruncatedInputEventData.length > 0) ? ndovTruncatedInputEventData : ndovInputEventData.toString();
                var pageModeIprData = pageModeData[ndovPageModeWidgetDataId].hasOwnProperty("ipr") ? pageModeData[ndovPageModeWidgetDataId]["ipr"] : "";
                var iprConfigData = ndovIPRConfigData;

                if (true === moduleReinit) {
                    if (iprData.length !== pageModeIprData.length) {
                        iprData = pageModeIprData;
                    }

                    if (pageModeData[ndovPageModeWidgetDataId].hasOwnProperty(ndovPageModeIPRConfigDataId)
                        && iprConfigData.length !== pageModeData[ndovPageModeWidgetDataId][ndovPageModeIPRConfigDataId].length) {
                        iprConfigData = pageModeData[ndovPageModeWidgetDataId][ndovPageModeIPRConfigDataId];
                    }
                }

                // dispatch complete data into either widget and non-widget data, based on module map complete
                var configCompleteData = {
                    'ipr': iprData,
                    'forceIP': nds.config.forceIP,
                    'wp': nds.config.placement,
                    'wpp': nds.config.placementPage,
                    'dtrk': nds.config.doNotTrack
                };
                configCompleteData[ndovPageModeIPRConfigDataId] = iprConfigData;

                // Set sid at the root level of the pagemode object if in the module map
                if (("sid" in ndovModuleMap["pmd"]) && null != nds.config.sessionId && nds.config.sessionId.length > 0) {
                    pageModeData["sid"] = nds.config.sessionId;
                }

                for (var module in ndovModuleMap["pmd"]) {
                    if (ndovModuleMap["pmd"].hasOwnProperty(module)) {
                        key = module;
                        value = pageModeData[ndovPageModeWidgetDataId].hasOwnProperty(key) ? pageModeData[ndovPageModeWidgetDataId][key] : "";

                        if (configCompleteData.hasOwnProperty(key)) {
                            value = configCompleteData[key];
                        } else if (ndovInputList.hasOwnProperty(key)) {
                            value = ndovInputList[key];
                        }

                        pageModeData[ndovPageModeWidgetDataId][key] = value;
                    }
                }

                formValue = ndovJSON.stringify(pageModeData);

                if (ndovConfigOptions.hasOwnProperty("pageModeConfig") && true === ndovConfigOptions["pageModeConfig"]["encodeData"]) {
                    formValue = ndoEncipherDecipherInput(formValue);
                }

                // Update fields with page mode data
                for (var k = 0; k < ndovPageModeFormFields.length; k++) {
                    ndovPageModeFormFields[k].value = formValue;
                }
            } catch (e) { /* If JSON failed to parse, do nothing */ }
        }
    }
}());
/**
 * @module widgetkey
 */
(function() {
    /**
	 * Initialize widget key
     * @memberOf module:widgetkey
     * @param moduleData
     */
	function ndoWidgetKeyInit(moduleData)
	{
		if (ndovWidgetKeyOn)
		{
			var r = Math.floor((Math.random()*1000000))+1000;
			var nds = window.ndsapi || (window.ndsapi = {});
			nds.setFormFieldData('wkr', r);
		}
	}
	ndoRegisterModule('wk', { init: ndoWidgetKeyInit });
}());
/**
 * @module autofill
 */

(function() {

    var moduleEnabled = false;
    var getTargetFieldsSelector = 'input[type="text"],input[type="password"]';
    var rememberMeSelector = 'input[name="remember-me"]';

    /**
     * On rebind, reinitialize
     * @param _moduleData
     */
    var rebindHandler = function (_moduleData) {
        if (moduleEnabled) {
            autofill.init();
        }
    }

    // register module and callbacks with widget.js
    ndoRegisterModule('af', {

        /**
         * On sync response, initialize
         * @param {{e: boolean, gtfs: string, rms: string}} moduleData
         */
        init: function ndoAutofillInit(moduleData) {
            moduleEnabled = moduleData.e;
            getTargetFieldsSelector = moduleData.gtfs;
            rememberMeSelector = moduleData.rms;

            if (moduleEnabled) {
                autofill.init();
            }
        },

        /**
         * Before complete, utilize our last chance to find tech!
         * @param _moduleData
         */
        precomplete: function ndoAutofillPrecomplete(_moduleData) {
            if (moduleEnabled) {
                autofill.findTech();
            }
        },

        bind: rebindHandler,
        rebind: rebindHandler,

        /**
         * On stop, remove event listeners and turn off module
         * @param _moduledata
         */
        stop: function ndoAutofillStop(_moduledata) {
            if (moduleEnabled) {
                watch.unsubscribeAll();
                moduleEnabled = false;
            }
        }

    });

    // autofill module interface
    /**
     *
     * @memberOf module:autofill
     * @type {{init, findTech, initFieldWatchers, getTargetFields}}
     * @class
     * @static
     */
    var autofill = (function() {
        return {
            /**
             * @memberOf module:autofill.autofill
             */
            init: function() {
                store.init();
                this.initFieldWatchers();
                this.findTech();
            },
            /**
             * @memberOf module:autofill.autofill
             */
            findTech: function() {
                try {
                    webkit.findTech();
                    lastpass.findTech();
                    rememberme.findTech();
                }
                catch (err) {
                }
            },
            /**
             * @memberOf module:autofill.autofill
             */
            initFieldWatchers: function() {
                watch.unsubscribeAll();
                var fields = this.getTargetFields();
                for (var i = 0; i < fields.length; i += 1) {
                    var field = fields[i];
                    watch.startWatchingField(field);
                }
            },
            /**
             * @memberOf module:autofill.autofill
             */
            getTargetFields: function() {
                return nds.common.querySelectorAll(getTargetFieldsSelector);
            }
        };
    }());


    // provide an interface for storing reports and later serializing all gathered data
    /**
     *
     * @memberOf module:autofill
     * @type {{init, reportTech, reportFill}}
     * @class
     * @static
     */
    var store = (function() {

        /// private members
        var _flags = {};

        // update module data
        /**
         *
         * @private
         */
        function _updateFormFieldData() {
            var output = ndoGetObjectKeys(_flags).join(',');
            nds.setFormFieldData('af', output);
        }

        /// public interface
        return {
            /**
             * Initialize store
             * @memberOf module:autofill.store
             */
            init: function() {
                _flags = {};
                _updateFormFieldData();
            },
            /**
             * @memberOf module:autofill.store
             */
            reportTech: function(techId) {
                _flags[techId] = true;
                _updateFormFieldData();
            },
            /**
             * @memberOf module:autofill.store
             */
            reportFill: function() {
                _flags['filled'] = true;
                _updateFormFieldData();
            }
        };
    }());

    // provide an interface for adding field listeners and later removing them
    /**
     *
     * @memberOf module:autofill
     * @type {{unsubscribeAll, startWatchingField}}
     * @class
     * @static
     */
    var watch = (function(){

        /// private members

        // keep track of all active watchers; each is assigned a unique id so it can be easily removed from this list
        var _allActiveUnsubscribers = {};
        var _unsubscriberIdCounter = 0;

        // private function to build and keep track of an unsubscriber object, so callers can call watch.unsubscribeAll()
        /**
         * @function
         * @memberOf module:autofill.watch
         * @private
         * @returns {{addCallback, callAllCallbacks}|*}
         */
        function createUnsubscriber() {

            // an unsubscriber is just a list of (unsubscribe) callbacks to call
            var unsubscriber = nds.common.createCallbackList();

            // add this unsubscriber to the global list
            // assign a unique id so we can easily add and remove this object from the global _allActiveUnsubscribers collection
            var unsubscriberId = ++_unsubscriberIdCounter;
            _allActiveUnsubscribers[ unsubscriberId ] = unsubscriber;

            // add a special callback to also remove the unsubscriber from our global _allActiveUnsubscribers collection
            unsubscriber.addCallback(function() {
                delete _allActiveUnsubscribers[ unsubscriberId ];
            });

            return unsubscriber;
        }

        /// public interface
        return {
            /**
             * @memberOf module:autofill.watch
             */
            unsubscribeAll: function() {
                // call all callbacks in our _allActiveUnsubscribers collection, which incidentally will also remove entries from _allActiveUnsubscribers
                // n.b. "Properties of the object being enumerated [using for..in] may be deleted during enumeration." http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4
                for (var unsubscriberId in _allActiveUnsubscribers) {
                    if (Object.prototype.hasOwnProperty.call(_allActiveUnsubscribers, unsubscriberId)) {
                        var unsubscriber = _allActiveUnsubscribers[ unsubscriberId ];
                        unsubscriber.callAllCallbacks();
                    }
                }
            },
            /**
             * @memberOf module:autofill.watch
             */
            startWatchingField: function(element) {
                if (!element) { return; } // sanity

                // if it's already filled, report it immediately (n.b. webkit autofill doesn't report a value for password fields)
                if (element.value) {
                    store.reportFill();
                    return;
                }

                // cannot detect autofill when one of 3 events (focus, input and change) which autofill module listens to is disabled
                var enabledEvents = getEnabledEvents();
                if (false === enabledEvents.hasOwnProperty(ndovFocusEvent) || false === enabledEvents.hasOwnProperty(ndovInputEvent)
                    || false === enabledEvents.hasOwnProperty(ndovChangeEvent)) {
                    return;
                }
                // build a new unsubscriber object

                var unsubscriber = createUnsubscriber();

                attachEventListener(element, ndovFocusEvent, function() {
                    unsubscriber.callAllCallbacks(); // cancel all our other removers so we don't later register this field as filled
                }, unsubscriber.addCallback);

                // listen for changes to field values; if we get one before a focus event, that's an autofill!
                var eventNames = [ndovChangeEvent, ndovInputEvent];
                for (var i = 0; i < eventNames.length; i += 1) {
                    attachEventListener(element, eventNames[i], function() {
                        if (element.value) {
                            store.reportFill();
                            unsubscriber.callAllCallbacks();
                        }
                    }, unsubscriber.addCallback);
                }
            }
        };
    }());

    // rememberme
    /**
     *
     * @memberOf module:rememberme
     * @type {{findTech}}
     * @class
     * @static
     */
    var rememberme = (function() {
        return {
            /**
             * @memberOf module:autofill.rememberme
             */
            findTech: function() {
                try {
                    // IE8 quirks-mode doesn't support querySelectorAll.
                    var remembermeAutofills = nds.common.querySelectorAll(rememberMeSelector);
                    for (var i = 0; i < remembermeAutofills.length; i += 1) {
                        if (remembermeAutofills[i].checked)
                        {
                            store.reportTech('rememberme');
                        }
                    }
                }
                catch (err) {
                }
            }
        };
    }());

    // Webkit
    /**
     *
     * @memberOf module:autofill
     * @type {{findTech}}
     * @class
     * @static
     */
    var webkit = (function() {
        return {
            /**
             * @memberOf module:autofill.webkit
             */
            findTech: function() {
                try {
                    // This query selector will throw an exception outside of Webkit: Firefox considers the selector a
                    // "Syntax Error", while IE8 quirks-mode doesn't support querySelectorAll. If this query selector
                    // throws, we can assume we're not in Webkit, and therefore there is nothing to here do except to
                    // catch and discard the exception.
                    var webkitAutofills = nds.common.querySelectorAll(':-webkit-autofill');
                    if (webkitAutofills.length > 0) {
                        store.reportTech('webkit');
                    }
                }
                catch (err) {
                }
            }
        };
    }());

    // LastPass
    /**
     *
     * @memberOf module:autofill
     * @type {{findTech}}
     * @class
     * @static
     */
    var lastpass = (function() {
        var _expectedCSS = {
            // "cursor": "auto",   // chrome-only
            "background-attachment": "scroll",
            "background-size": "16px 18px",
            "background-position": "98% 50%",
            "background-repeat": "no-repeat",
            "background-image": /^url\("data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAA..JREFUOB.*"\)$/ // see below
        };

        /*

         chrome sample PNG content: iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAA
         PhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC

         firefox sample PNG content: iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAA
         LZJREFUOBFjYKAANDQ0rGWiQD9IqzgL0BQ3IKMXiB8AcSKQ/waIrYDsKUD8Fir2pKmpSf/fv3+zgPxfzMzMSbW1tbeBbAaQC+b+//9fB4h9gOwikCAQTAPyDYHYBciuBQkANfcB+WZAbPP37992kBgIUOoFBiZGRsYkIL4ExJvZ2NhAXmFgYmLKBPLPAfFuFhaWJpAYEBQC+SeA+BDQC5UQIQpJYFgdodQLLyh0w6j20RCgUggAAEREPpKMfaEsAAAAAElFTkSuQmCC

         chunk analysis:
         [00 00 00 0d] length = 13
         [49 48 44 52] chunk type = IHDR (width, height, bit depth, color type, compression method, filter method, interlace method)
         [00 00 00 10 00 00 00 12 08 06 00 00 00] chunk data
         [52 3b 5e 6a] CRC

         [00 00 00 01] length = 1
         [73 52 47 42] chunk type = sRGB (indicates that the standard sRGB color space is used.)
         [00] chunk data
         [ae ce 1c e9] CRC

         [00 00 .. ..] length = ...
         [49 44 41 54] chunk type = IDAT (data will be compressed!)
         ...

         [00 00 00 00] length = 0
         [49 45 4e 33] chunk type = IEND
         [ae 42 60 82] CRC

         Analysis:
         Matching the file header is redundant, but doesn't cost anything and may aid future code mantainance
         Matching the IHDR chunk is useful, since that tells us the width and height, among other things; this seems consistent across browsers
         Matching the sRGB chunk is questionably useful; its position in the chunk list might be helpful in fingerprinting
         Matching the start of the IDAT chunk is questionably useful for the same reason as the sRGB chunk
         Matching the IEND chunk would be redundant, since every PNG is required to have that.
         */

        /**
         *
         * @param field
         * @param expectedCSS
         * @returns {boolean}
         * @private
         */
        function _fieldHasExpectedCSS(field, expectedCSS) {
            for (var prop in expectedCSS) {
                if (Object.prototype.hasOwnProperty.call(expectedCSS, prop)) {
                    var valueTest = expectedCSS[prop];

                    var observedValue = nds.common.util.getComputedStyle(field, prop);

                    if (valueTest instanceof RegExp) {
                        if ( ! valueTest.test(observedValue) ) {
                            return false;
                        }
                    }
                    else {
                        if ( observedValue !== valueTest ) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        /**
         *
         * @param field
         * @returns {boolean}
         * @private
         */
        function _fieldHasAbsPosElements(field) {
            var fieldIdentifier = field.id || field.name;
            var zIndexElement;
            try {
                zIndexElement = document.querySelector('[id^="__lpform_' + fieldIdentifier + '"]'); // TODO: CSS-escape?
            }
            catch (err) {
            }
            var zIndexElementMatches = !!zIndexElement;
            return zIndexElementMatches;
        }
        return {
            /**
             * @memberOf module:autofill.lastpass
             * @param fields
             */
            findTech: function(fields) {
                if (!fields) {
                    fields = autofill.getTargetFields();
                }

                for (var i = 0; i < fields.length; i += 1) {
                    var field = fields[i];

                    var match = _fieldHasExpectedCSS(field, _expectedCSS) || _fieldHasAbsPosElements(field);

                    if (match) {
                        store.reportTech('lastpass');
                        break;
                    }

                }
            }
        };
    }());

}());
if (typeof(nds) == 'undefined') {
    nds = window.ndsapi || (window.ndsapi = {});
}
/**
 * @type {Object}
 * @namespace
 */
nds.common = {};
/**
 *
 * @type {Object}
 * @namespace
 * @name nds.common.util
 */
nds.common.util = {};
/**
 *
 * @type {Object}
 * @namespace
 */
nds.common.bi = {};

/**
 * if document.querySelectorAll isn't available (e.g. IE7 or IE8 in quirks mode), don't throw an error
 * @param {string} selectors
 */
nds.common.querySelectorAll = function(selectors) {
    return document.querySelectorAll(selectors);
};
if (!document.querySelectorAll) {
    nds.common.querySelectorAll = function(selectors) {
        return [];
    };
}

/**
 * Cross-browser implementation of addEventListener. Fails silently on unsupported browsers.
 * @param {EventTarget} element
 * @param {string} eventType
 * @param {function(?)} listener
 * @param {Object|null} enabledEvents
 * @returns {function()} Callback function for removing this listener
 */
nds.common.addEventListener = function(element, eventType, listener , enabledEvents) {
    // if event type is not configured to listen to, skip attaching event listener
    if (typeof enabledEvents === 'object' && false === enabledEvents.hasOwnProperty(eventType)) {
        return null;
    }
    try {
        if (element.addEventListener) {
            element.addEventListener(eventType, listener, false);
        }
        // IE 8 compatibility
        else if (element.attachEvent) {
            element.attachEvent('on' + eventType, listener);
        }
    }
    catch (e) {
    }

    // for convenience, return a callback for removing the listener
    return function() {
        nds.common.removeEventListener(element, eventType, listener)
    };
};

/**
 * Cross-browser implementation of removeEventListener. Fails silently on unsupported browsers.
 * @param {EventTarget} element
 * @param {string} eventtype
 * @param {function(Event)} listener
 */
nds.common.removeEventListener = function(element, eventtype, listener) {
    try {
        if (element.removeEventListener) {
            element.removeEventListener(eventtype, listener, false);
        }
        // IE 8 compatibility
        else if (element.detachEvent) {
            element.detachEvent('on' + eventtype, listener);
        }
    }
    catch (e) {
    }
};


/**
 * Returns a new {@link callbackList} object.
 *
 * CallbackList objects accumulate detacher functions (via "addCallback"),
 * then call them all at once when "callAllCallbacks" is called
 * @returns {{addCallback: Function, callAllCallbacks: Function}}
 * @see callbackList
 */
nds.common.createCallbackList = function() {
    /// private members
    var _myCallbacks = [];
    /// public interface
    /**
     * @name callbackList
     * @class
     * @static
     * @see nds.common.createCallbackList
     */
    return {
        /**
         * @memberOf callbackList
         */
        addCallback: function(callback) {
            if (callback) {
                _myCallbacks.push(callback);
            }
        },
        /**
         * @memberOf callbackList
         */
        callAllCallbacks: function() {
            for (var i = 0; i < _myCallbacks.length; i += 1) {
                var callback = _myCallbacks[i];
                callback();
            }
            _myCallbacks = [];
        }
    };
};

/**
 * Truncate value to the given size.
 * @param {string} val 
 * @param {number} targetSize
 * @param {string=} truncText Optional truncation marker string to append to truncated value
 */
nds.common.util.truncTo = function(val, targetSize, truncText)
{
    // default values
    truncText = typeof truncText !== 'undefined' ? truncText : 'TRUNC';

    // early exit, not string
    if (typeof val !== 'string')
    {
        return val;
    }

    // how much room do we have for the value?
    var threshold = targetSize - truncText.length;

    // if no room at all, truncate and don't put the truncatedText in
    if (threshold < 1)
    {
        return val.substring(0,targetSize)
    }

    // normal truncate, with truncatedText
    if (val.length > threshold)
    {
        return val.substring(0,threshold) + truncText
    }

    // no truncate needed
    return val;
};

/**
 * Quick and dirty hash mechanism, not meant for security
 * The code needs to be fast with a small footprint so it can be returned with the ND widget HTML
 * Modified version of http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
 * @param {string} str String to hash
 */
nds.common.util.quickHash = function(str)
{
    var hash1 = 0, hash2 = 0, i, l, charac;
    if (str.length === 0) return '00000000';
    for (i = 0, l = str.length; i < l; i++) {
        charac  = str.charCodeAt(i);
        if( i % 2 === 0 )
        {
            hash1  = ((hash1<<5)-hash1)+charac;
            hash1 |= 0; // Convert to 32bit integer
        }
        else
        {
            hash2  = ((hash2<<5)-hash2)+charac;
            hash2 |= 0; // Convert to 32bit integer
        }
    }
    // convert to base 16
    if( hash1 < 0 )
    {
        hash1 = 0xffffffff+hash1+1;
    }
    if( hash2 < 0 )
    {
        hash2 = 0xffffffff+hash2+1;
    }
    return hash1.toString(16) + hash2.toString(16);
};

nds.common.bi.getScreenFingerprint = function()
{
    var res = '';
    if( window.screen )
    {
        // add width and height, sorted to improve stability when devices are rotated
        res += [ window.screen.width, window.screen.height ].sort().join('x'); // e.g. '480x640'

        // add colorDepth
        res += ' ' + window.screen.colorDepth;
    }
    return res;
};

/**
 * nds.common.util.getComputedStyle
 * @param {Element} el
 * @param {string} prop
 */
nds.common.util.getComputedStyle = function(el, prop) {
    if (document.defaultView && document.defaultView.getComputedStyle) {
        return document.defaultView.getComputedStyle(el, null).getPropertyValue(prop);
    }
    try {
        if (el.currentStyle) {
            // "camel-case" => "camelCase" for IE
            prop = prop.replace(/-(\w)/g, function (_strMatch, p1){
                return p1.toUpperCase();
            });
            return el.currentStyle[prop];
        }
    }
    catch(e) {
        // pass
    }
};

/**
 *
 * @returns {string}
 */
nds.common.bi.getScreenInfo = function()
{
    var res = '';
    if( typeof window.screen !== 'undefined' )
    {
        if( typeof window.screen.width !== 'undefined' && typeof window.screen.height !== 'undefined' )
        {
            res += window.screen.width + 'x' + window.screen.height;
        }

        if( typeof window.screen.availWidth !== 'undefined' && typeof window.screen.availHeight !== 'undefined' )
        {
            res += ' ' + window.screen.availWidth + 'x' + window.screen.availHeight;
        }

        if( typeof window.screen.colorDepth !== 'undefined' )
        {
            res += ' ' + window.screen.colorDepth;
        }

        if( typeof window.screen.pixelDepth !== 'undefined' )
        {
            res += ' ' + window.screen.pixelDepth;
        }
    }
    return res;
};

/**
 *
 * @returns {boolean}
 */
nds.common.bi.isFlashInstalled = function()
{
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (fo) {
            return true;
        }
    } catch (e) {}
    try {
        if (navigator.mimeTypes['application/x-shockwave-flash'] != undefined
            && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
            return true;
        }
    } catch (e) {}
    return false;
};

/**
 *
 * @returns {*}
 */
nds.common.bi.getDeviceLanguage = function()
{
    return window.navigator["userLanguage"] || window.navigator["language"] || window.navigator["browserLanguage"];
};

/**
 *
 * @returns {number}
 */
nds.common.bi.getDeviceTimezone = function()
{
    // to avoid instability twice a year due to daylight savings time, check a specific month instead of the current month
    // to avoid very long-term instability, check a historical year (e.g. Russia: Observed DST in 1917-1919 and 1921 (some areas), 1981-2010. 2011-2014, used permanent DST. In 2014, left permanent DST and switched to permanent standard time.)
    // it may be sufficient to sample only one date, but we may as well attempt to be somewhat accurate: return the utc offset, as opposed to the dst offset
    var janOffset = new Date(2014, 0, 2).getTimezoneOffset();
    var junOffset = new Date(2014, 5, 2).getTimezoneOffset();
    return Math.max(janOffset, junOffset);
};

/**
 *
 * @returns {string}
 */
nds.common.bi.getPlugins = function()
{
    var found = [];
    var versionreg = /([0-9]+)\.[0-9|.]+/g;
    if( window.ActiveXObject )
    {
        if( document.plugins && document.plugins.length > 0 )
        {
            for( var i = 0; i < document.plugins.length; i++ )
            {
                found.push(document.plugins[i].src.replace(versionreg,'$1'));
            }
        }
    }
    else
    {
        try {
            if( navigator.plugins && navigator.plugins.length > 0 )
            {
                for( var j = 0; j < navigator.plugins.length; j++ )
                {
                    // strip minor version numbers
                    found.push(navigator.plugins[j].name.replace(versionreg, '$1'));
                }
            }
        } catch (e) {
            found.push('denied');
        }

    }

    // sort and return
    if( found.length > 0 )
    {
        found.sort();
    }

    var str = 'p';
    for( var k = 0; k < found.length; k++ )
    {
        str += ','+found[k];
    }
    return str;
};

/**
 *
 * @returns {*}
 */
nds.common.bi.getWebGLInfo = function()
{
    var glInfo = {};
    var cvs = document.createElement('canvas');
    var contextNames = ['webgl','experimental-webgl','moz-webgl','webkit-3d'];
    var ctx;

    for(var i = 0; i < contextNames.length; i++) {
        try {
            ctx = cvs.getContext(contextNames[i]);
            if(ctx){
                glInfo['ContextName'] = contextNames[i];
                break;
            }
        } catch(e) {}
    }

    if (!ctx || !('getParameter' in ctx)) {
        return null;
    }

    var webGLAttributes = ['VENDOR','VERSION','RENDERER','SHADING_LANGUAGE_VERSION','DEPTH_BITS',
        'MAX_VERTEX_ATTRIBS','MAX_VERTEX_TEXTURE_IMAGE_UNITS','MAX_VARYING_VECTORS',
        'MAX_VERTEX_UNIFORM_VECTORS','MAX_COMBINED_TEXTURE_IMAGE_UNITS','MAX_TEXTURE_SIZE',
        'MAX_CUBE_MAP_TEXTURE_SIZE','NUM_COMPRESSED_TEXTURE_FORMATS','MAX_RENDERBUFFER_SIZE',
        'MAX_VIEWPORT_DIMS','ALIASED_LINE_WIDTH_RANGE','ALIASED_POINT_SIZE_RANGE'];

    for (var j=0; j<webGLAttributes.length; j++) {
        var attr = webGLAttributes[j];
        if (attr in ctx) {
            glInfo[attr] = ctx.getParameter(ctx[attr])
        }
    }
    return glInfo;
};

/**
 *
 * @returns {{mtp: (string|undefined), ts: (boolean|undefined), te: (boolean|undefined)}} res
 */
nds.common.bi.getDeviceTouchSettings = function() {
    var res = {};
    res['mtp'] = 'NA';
    if( typeof navigator.maxTouchPoints !== 'undefined' ) {
        res['mtp'] = navigator.maxTouchPoints;
    } else if ( typeof navigator.msMaxTouchPoints !== 'undefined' ) {
        res['mtp'] = navigator.msMaxTouchPoints;
    }

    res['ts'] = false;
    if( 'ontouchstart' in window ) {
        res['ts'] = true;
    }

    res['te'] = false;
    try {
        document.createEvent("TouchEvent");
        res['te'] = true;
    } catch(e) { /* ignore */ }

    return res;
};

/**
 *
 * @param allowCookieCreation
 * @returns {{tc: boolean, nc: boolean}}
 */
nds.common.bi.getCookiesEnabled = function(allowCookieCreation) {
    var enabled = true;
    var navigatorEnabled = (typeof navigator.cookieEnabled  !== 'undefined' && navigator.cookieEnabled) ? true : false;

	if (true == allowCookieCreation)
	{
		try
		{
			// Create cookie
			document.cookie = 'ncookietest=1; SameSite=None; Secure';
			enabled = document.cookie.indexOf('ncookietest=') != -1;
			// Delete cookie
			document.cookie = 'ncookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT; SameSite=None; Secure';
		}
		catch (e) { /* ignore */ }
	}
    return {tc: enabled, nc: navigatorEnabled};
};

/**
 *
 * @returns {string}
 */
nds.common.bi.getHTML5CanvasSignature = function() {
    var res = 'NA';
    try {
        var canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 40;
        canvas.style.display = "inline";
        var ctx = canvas.getContext("2d");

        ctx.fillText("aBc#$efG~ \ude73\ud63d", 4, 10);
        ctx.fillStyle = "rgba(67, 92, 0, 0.5)";
        ctx.font = "18pt Arial";
        ctx.fillText("aBc#$~efG \ude73\ud63d", 8, 12);

        res = canvas.toDataURL();

        // TODO: Add more complexity
        // Arcs
        // Fill blending
        // Path winding
        // Fill modes
        // Effects (dropshadow, blur etc see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)
        // Gradient Fill
        // Quadratic curves
        // Color clipping
        // Transforms (rotate, translate, scale)
        // Hit checking (isPointInPath)
        // Browser specific stuff: XUL fill etc
    } catch(e) { /* ignore */ }
    return res;
};

/**
 * 
 * @returns {Array}
 */
nds.common.bi.getFontMetrics = function()
{
    var results = [];
    try
    {

        // create a canvas for testing fonts
        var ctx = document.createElement('canvas').getContext('2d');

        // determine sampling to be done
        var fonts      = nds.common.bi.fontMetricsFontList;
        var fontSize   = '72px';
        var sampleText = "mmmmmmmmmmlli";

        // measure each font, returning an array of widths
        for (var i = 0; i < fonts.length; i += 1)
        {
            ctx.font = fontSize + ' "' + fonts[i] + '"';
            var width = ctx.measureText(sampleText).width;
            results.push(width);
        }
    }
    catch (e)
    {
        // pass
    }
    return results;
};

/**
 * 
 * @returns {boolean}
 */
nds.common.bi.getHTML5LocalStorage = function()
{
    var lsItem = 'ndls';
    var hasLocalStorage = false;
    try {
        var ls = window.localStorage;
        ls.setItem(lsItem,lsItem);
        ls.removeItem(lsItem);
        hasLocalStorage = true;
    } catch(e) { /* ignore */ }

    return hasLocalStorage;
};

/**
 *
 * @returns {string}
 */
nds.common.bi.getHTML5SupportedVideo = function()
{
    var fvInfo = 'fv';
    try
    {
        var video = document.createElement('video');
        var videoTypes = ['ogg', 'mp4', 'webm'];

        if (typeof video !== "undefined")
        {
            for (var videoType in videoTypes)
            {
                if (videoTypes.hasOwnProperty(videoType))
                {
                    if ("" != video.canPlayType('video/' + videoTypes[videoType]))
                    {
                        fvInfo += ',' + videoTypes[videoType];
                    }
                }
            }
        }
    } catch(e) { /* ignore */ }
    return fvInfo;
};

/**
 *
 * @returns {string}
 */
nds.common.bi.getHTML5SupportedAudio = function()
{
    var faInfo = 'fa';
    try
    {
        var audio = document.createElement('audio');
        var audioTypes = ['mpeg', 'ogg', 'wav'];

        if (typeof audio !== "undefined")
        {
            for (var audioType in audioTypes)
            {
                if (audioTypes.hasOwnProperty(audioType))
                {
                    if ("" != audio.canPlayType('audio/' + audioTypes[audioType]))
                    {
                        faInfo += ',' + audioTypes[audioType];
                    }
                }
            }
        }
    } catch(e) { /* ignore */ }
    return faInfo;
};

/**
 *
 * @returns {string}
 */
nds.common.bi.getPlatform = function()
{
    var pf = 'NA';
    try
    {
        pf = navigator.platform;
    } catch(e) { /* ignore */ }

    return pf;
};

/**
 *
 * @returns {string}
 */
nds.common.bi.getVendor = function()
{
    var v = 'NA';
    try
    {
        v = navigator.vendor;
    } catch(e) { /* ignore */ }

    return v;
};

/**
 * Font list from https://github.com/Valve/fingerprintjs2/blob/75cbd474158f8ecce43e00f198c76e486b896937/fingerprint2.js#L347
 * @type {Array.<string>}
 */
nds.common.bi.fontMetricsFontList = [
    // baseFonts
    "monospace", "sans-serif", "serif",
    // fontList
    "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS",
    "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic",
    "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica",
    "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans",
    "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic",
    "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script",
    "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS",
    "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"
];

// source: http://www.json.org/json2.js
// rlukashuk: modified to use ndovJSON and *.toNDJSON to avoid conflict with publisher JS

/*
 http://www.JSON.org/json2.js
 2011-02-23

 Public Domain.

 NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

 See http://www.JSON.org/js.html


 This code should be minified before deployment.
 See http://javascript.crockford.com/jsmin.html

 USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
 NOT CONTROL.


 This file creates a global ndovJSON object containing two methods: stringify
 and parse.

 ndovJSON.stringify(value, replacer, space)
 value       any JavaScript value, usually an object or array.

 replacer    an optional parameter that determines how object
 values are stringified for objects. It can be a
 function or an array of strings.

 space       an optional parameter that specifies the indentation
 of nested structures. If it is omitted, the text will
 be packed without extra whitespace. If it is a number,
 it will specify the number of spaces to indent at each
 level. If it is a string (such as '\t' or '&nbsp;'),
 it contains the characters used to indent at each level.

 This method produces a ndovJSON text from a JavaScript value.

 When an object value is found, if the object contains a toNDJSON
 method, its toNDJSON method will be called and the result will be
 stringified. A toNDJSON method does not serialize: it returns the
 value represented by the name/value pair that should be serialized,
 or undefined if nothing should be serialized. The toNDJSON method
 will be passed the key associated with the value, and this will be
 bound to the value

 For example, this would serialize Dates as ISO strings.

 Date.prototype.toNDJSON = function (key) {
 function f(n) {
 // Format integers to have at least two digits.
 return n < 10 ? '0' + n : n;
 }

 return this.getUTCFullYear()   + '-' +
 f(this.getUTCMonth() + 1) + '-' +
 f(this.getUTCDate())      + 'T' +
 f(this.getUTCHours())     + ':' +
 f(this.getUTCMinutes())   + ':' +
 f(this.getUTCSeconds())   + 'Z';
 };

 You can provide an optional replacer method. It will be passed the
 key and value of each member, with this bound to the containing
 object. The value that is returned from your method will be
 serialized. If your method returns undefined, then the member will
 be excluded from the serialization.

 If the replacer parameter is an array of strings, then it will be
 used to select the members to be serialized. It filters the results
 such that only members with keys listed in the replacer array are
 stringified.

 Values that do not have JSON representations, such as undefined or
 functions, will not be serialized. Such values in objects will be
 dropped; in arrays they will be replaced with null. You can use
 a replacer function to replace those with JSON values.
 ndovJSON.stringify(undefined) returns undefined.

 The optional space parameter produces a stringification of the
 value that is filled with line breaks and indentation to make it
 easier to read.

 If the space parameter is a non-empty string, then that string will
 be used for indentation. If the space parameter is a number, then
 the indentation will be that many spaces.

 Example:

 text = ndovJSON.stringify(['e', {pluribus: 'unum'}]);
 // text is '["e",{"pluribus":"unum"}]'


 text = ndovJSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
 // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

 text = ndovJSON.stringify([new Date()], function (key, value) {
 return this[key] instanceof Date ?
 'Date(' + this[key] + ')' : value;
 });
 // text is '["Date(---current time---)"]'


 ndovJSON.parse(text, reviver)
 This method parses a JSON text to produce an object or array.
 It can throw a SyntaxError exception.

 The optional reviver parameter is a function that can filter and
 transform the results. It receives each of the keys and values,
 and its return value is used instead of the original value.
 If it returns what it received, then the structure is not modified.
 If it returns undefined then the member is deleted.

 Example:

 // Parse the text. Values that look like ISO date strings will
 // be converted to Date objects.

 myData = ndovJSON.parse(text, function (key, value) {
 var a;
 if (typeof value === 'string') {
 a =
 /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
 if (a) {
 return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
 +a[5], +a[6]));
 }
 }
 return value;
 });

 myData = ndovJSON.parse('["Date(09/09/2001)"]', function (key, value) {
 var d;
 if (typeof value === 'string' &&
 value.slice(0, 5) === 'Date(' &&
 value.slice(-1) === ')') {
 d = new Date(value.slice(5, -1));
 if (d) {
 return d;
 }
 }
 return value;
 });


 This is a reference implementation. You are free to copy, modify, or
 redistribute.
 */

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
 call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
 getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
 lastIndex, length, parse, prototype, push, replace, slice, stringify,
 test, toNDJSON, toString, valueOf
 */


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

/**
 * @type {Object}
 */
var ndovJSON;
if (!ndovJSON) {
    ndovJSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toNDJSON !== 'function') {

        Date.prototype.toNDJSON = function (key) {

            return isFinite(this.valueOf()) ?
            this.getUTCFullYear()     + '-' +
            f(this.getUTCMonth() + 1) + '-' +
            f(this.getUTCDate())      + 'T' +
            f(this.getUTCHours())     + ':' +
            f(this.getUTCMinutes())   + ':' +
            f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toNDJSON      =
                Number.prototype.toNDJSON  =
                        Boolean.prototype.toNDJSON = function (key) {
                            return this.valueOf();
                        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap,
            indent,
            meta = {    // table of character substitutions
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"' : '\\"',
                '\\': '\\\\'
            },
            rep;


    function quote(string) {

        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

        // Produce a string from holder[key].

        var i,          // The loop counter.
                k,          // The member key.
                v,          // The member value.
                length,
                mind = gap,
                partial,
                value = holder[key];

        // If the value has a toNDJSON method, call it to obtain a replacement value.
        if (value && typeof value === 'object' &&
                typeof value.toNDJSON === 'function') {
            value = value.toNDJSON(key);
        }

        // If we were called with a replacer function, then call the replacer to
        // obtain a replacement value.
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

        // What happens next depends on the value's type.
        switch (typeof value) {
            case 'string':
                return quote(value);

            case 'number':

                // JSON numbers must be finite. Encode non-finite numbers as null.
                return isFinite(value) ? String(value) : 'null';

            case 'boolean':
            case 'null':

                // If the value is a boolean or null, convert it to a string. Note:
                // typeof null does not produce 'null'. The case is included here in
                // the remote chance that this gets fixed someday.
                return String(value);

            // If the type is 'object', we might be dealing with an object or an array or
            // null.
            case 'object':

                // Due to a specification blunder in ECMAScript, typeof null is 'object',
                // so watch out for that case.
                if (!value) {
                    return 'null';
                }

                // Make an array to hold the partial results of stringifying this object value.
                gap += indent;
                partial = [];

                // Is the value an array?
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    // The value is an array. Stringify every element. Use null as a placeholder
                    // for non-JSON values.
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }

                    // Join all of the elements together, separated with commas, and wrap them in
                    // brackets.
                    v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }

                // If the replacer is an array, use it to select the members to be stringified.
                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === 'string') {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else { // Otherwise, iterate through all of the keys in the object.
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }

                // Join all of the member texts together, separated with commas,
                // and wrap them in braces.
                v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }

    // If the JSON object does not yet have a stringify method, give it one.
    if (typeof ndovJSON.stringify !== 'function') {
        ndovJSON.stringify = function (value, replacer, space) {

            // The stringify method takes a value and an optional replacer, and an optional
            // space parameter, and returns a JSON text. The replacer can be a function
            // that can replace values, or an array of strings that will select the keys.
            // A default replacer method can be provided. Use of the space parameter can
            // produce text that is more easily readable.
            var i;
            gap = '';
            indent = '';

            // If the space parameter is a number, make an indent string containing that
            // many spaces.
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') { // If the space parameter is a string, it will be used as the indent string.
                indent = space;
            }

            // If there is a replacer, it must be a function or an array.
            // Otherwise, throw an error.
            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('ndovJSON.stringify');
            }

            // Make a fake root object containing our value under the key of ''.
            // Return the result of stringifying the value.
            return str('', {'': value});
        };
    }


    // source: https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
    // If the JSON object does not yet have a parse method, give it one.
    // contains an alternative JSON parse function that uses recursive descent instead of eval.
    // It is CSP compliant and supports IE8
    if (typeof ndovJSON.parse !== 'function') {
        ndovJSON.parse = (function () {
            // This is a function that can parse a JSON text, producing a JavaScript
            // data structure. It is a simple, recursive descent parser. It does not use
            // eval or regular expressions, so it can be used as a model for implementing
            // a JSON parser in other languages.

            // We are defining the function inside of another function to avoid creating
            // global variables.
            var at;     // The index of the current character
            var ch;     // The current character
            var escapee = {
                "\"": "\"",
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            };
            var text;

            var next = function (c) {

                // If a c parameter is provided, verify that it matches the current character.
                if (c && c !== ch) {
                    throw new SyntaxError('ndovJSON.parse - Expected "' + c + '" instead of "' + ch + '"');
                }

                // Get the next character. When there are no more characters,
                // return the empty string.
                ch = text.charAt(at);
                at += 1;
                return ch;
            };

            // Parse a number value.
            var number = function () {
                var value;
                var string = "";

                if (ch === "-") {
                    string = "-";
                    next("-");
                }
                while (ch >= "0" && ch <= "9") {
                    string += ch;
                    next();
                }
                if (ch === ".") {
                    string += ".";
                    while (next() && ch >= "0" && ch <= "9") {
                        string += ch;
                    }
                }
                if (ch === "e" || ch === "E") {
                    string += ch;
                    next();
                    if (ch === "-" || ch === "+") {
                        string += ch;
                        next();
                    }
                    while (ch >= "0" && ch <= "9") {
                        string += ch;
                        next();
                    }
                }
                value = +string;
                if (!isFinite(value)) {
                    //Return Infinity
                    //throw new SyntaxError('ndovJSON.parse - Bad number');
                    return string.charAt(0) === "-" ? -Infinity : Infinity;
                } else {
                    return value;
                }
            };

            // Parse a string value.
            var string = function () {
                var hex;
                var i;
                var value = "";
                var uffff;

                // When parsing for string values, we must look for " and \ characters.
                if (ch === "\"") {
                    while (next()) {
                        if (ch === "\"") {
                            next();
                            return value;
                        }
                        if (ch === "\\") {
                            next();
                            if (ch === "u") {
                                uffff = 0;
                                for (i = 0; i < 4; i += 1) {
                                    hex = parseInt(next(), 16);
                                    if (!isFinite(hex)) {
                                        break;
                                    }
                                    uffff = uffff * 16 + hex;
                                }
                                value += String.fromCharCode(uffff);
                            } else if (typeof escapee[ch] === "string") {
                                value += escapee[ch];
                            } else {
                                break;
                            }
                        } else {
                            value += ch;
                        }
                    }
                }
                throw new SyntaxError('ndovJSON.parse - Bad string');
            };

            var white = function () {

                // Skip whitespace.
                while (ch && ch <= " ") {
                    next();
                }
            };

            var word = function () {

                // true, false, or null.
                switch (ch) {
                    case "t":
                        next("t");
                        next("r");
                        next("u");
                        next("e");
                        return true;
                    case "f":
                        next("f");
                        next("a");
                        next("l");
                        next("s");
                        next("e");
                        return false;
                    case "n":
                        next("n");
                        next("u");
                        next("l");
                        next("l");
                        return null;
                }
                throw new SyntaxError('ndovJSON.parse - Unexpected "' + ch + '"');
            };

            // Place holder for the value function.
            var value;

            // Parse an array value.
            var array = function () {
                var arr = [];

                if (ch === "[") {
                    next("[");
                    white();
                    if (ch === "]") {
                        next("]");
                        return arr;   // empty array
                    }
                    while (ch) {
                        arr.push(value());
                        white();
                        if (ch === "]") {
                            next("]");
                            return arr;
                        }
                        next(",");
                        white();
                    }
                }
                throw new SyntaxError('ndovJSON.parse - Bad array');
            };

            // Parse an object value.
            var object = function () {
                var key;
                var obj = {};

                if (ch === "{") {
                    next("{");
                    white();
                    if (ch === "}") {
                        next("}");
                        return obj;   // empty object
                    }
                    while (ch) {
                        key = string();
                        white();
                        next(":");
                        // Allow overwriting duplicate keys
                        // if (Object.hasOwnProperty.call(obj, key)) {
                        //     throw new SyntaxError('ndovJSON.parse - Duplicate key "' + key + '"');
                        // }
                        obj[key] = value();
                        white();
                        if (ch === "}") {
                            next("}");
                            return obj;
                        }
                        next(",");
                        white();
                    }
                }
                throw new SyntaxError('ndovJSON.parse - Bad object');
            };

            value = function () {

                // Parse a JSON value. It could be an object, an array, a string, a number,
                // or a word.
                white();
                switch (ch) {
                    case "{":
                        return object();
                    case "[":
                        return array();
                    case "\"":
                        return string();
                    case "-":
                        return number();
                    default:
                        return (ch >= "0" && ch <= "9")
                            ? number()
                            : word();
                }
            };

            // Return the json_parse function. It will have access to all of the above
            // functions and variables.
            return function (source, reviver) {
                var result;

                text = source;
                at = 0;
                ch = " ";
                result = value();
                white();
                if (ch) {
                    throw new SyntaxError('ndovJSON.parse - Syntax error');
                }

                // If there is a reviver function, we recursively walk the new structure,
                // passing each name/value pair to the reviver function for possible
                // transformation, starting with a temporary root object that holds the result
                // in an empty key. If there is not a reviver function, we simply return the
                // result.
                return (typeof reviver === "function")
                    ? (function walk(holder, key) {
                        var k;
                        var v;
                        var val = holder[key];
                        if (val && typeof val === "object") {
                            for (k in val) {
                                if (Object.prototype.hasOwnProperty.call(val, k)) {
                                    v = walk(val, k);
                                    if (v !== undefined) {
                                        val[k] = v;
                                    } else {
                                        delete val[k];
                                    }
                                }
                            }
                        }
                        return reviver.call(holder, key, val);
                    }({"": result}, ""))
                    : result;
            };
        }());
    }
}());

if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elt /*, from*/)
    {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++)
        {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}
ndwts({"co":{"gzrq":false,"useNdx":false,"ndsidConfig":{"enable":false,"secure":false,"options":[]},"clientSideCookie":false,"initBindings":null,"initId":"","eventModeEnabled":true,"pageModeConfig":{"enable":true,"formbind":[],"inputFieldName":"nds-pmd","encodeData":true,"options":[],"wt":"","requireWidgetToken":false}},"ml":{"id":[],"i":{"bi":"bi","ls":"ls"},"c":{"ua":"ua","bp":"bp","sr":"sr","didtz":"didtz","af":"af","wkr":"wkr","flv":"flv","fv":"fv","fa":"fa","hf":"hf","pl":"pl","ft":"ft","fc":"fc","fs":"fs","wg":"wg","bd":"bd","jsv":"jsv","p":"p","ipr":"ipr"},"pmd":{"bp":"bp","sr":"sr","didtz":"didtz","af":"af","wkr":"wkr","flv":"flv","fv":"fv","fa":"fa","hf":"hf","pl":"pl","ft":"ft","fc":"fc","fs":"fs","wg":"wg","fm":"fm","bd":"bd","jsv":"jsv","dit":"dit","ipr":"ipr","ic":"ic","wv":"wv"}},"wmd":{"ipr":{"fm":[],"lm":true,"bh":false,"tl":4500,"il":25},"wk":{"r":"test"},"di":{"rt":128,"ut":512,"ac":true},"af":{"e":false,"gtfs":"input[type=\"text\"],input[type=\"password\"]","rms":"input[name=\"remember-me\"]"}},"fd":{"ipr":"p","bi":"p"},"wc":"application\/javascript"})