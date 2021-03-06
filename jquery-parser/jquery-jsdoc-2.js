/**
 * Set one or more properties for the set of matched elements.
 * 
 * <p>The <code>.prop()</code> method is a convenient way to set the value of properties—especially when setting multiple properties or using values returned by a function. Properties generally affect the dynamic state of a DOM element without changing the serialized HTML attribute. Examples include the <code>value</code> property of input elements, the <code>disabled</code> property of inputs and buttons, or the <code>checked</code> property of a checkbox. Most often, <code>.prop()</code> should be used to set disabled and checked instead of the <code><a href="http://api.jquery.com/attr">.attr()</a></code> method. The <code><a href="http://api.jquery.com/val">.val()</a></code> method should be used for getting and setting value.</p>
 * <pre>
 * $("input").prop("disabled", false);
 * $("input").prop("checked", true);
 * $("input").val("someValue");
 * </pre>
 * <p>Also note that the <code><a href="http://api.jquery.com/removeProp">.removeProp()</a></code> method should not be used to set these properties to false. Once a native property is removed, it cannot be added again. See <code><a href="http://api.jquery.com/removeProp">.removeProp()</a></code> for more information.</p>
 * 
 * @example
 * <p>Disable all checkboxes on the page.</p>
 * <pre><code>
 * $("input[type='checkbox']").prop({
 *   disabled: true
 * });
 * </code></pre>
 * 
 * @param {String} propertyName The name of the property to set.
 * @param {String} value A value to set for the property.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.prop = function(propertyName, value) {return new jQuery();};

/**
 * Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements.
 * 
 * 
 *   <p>Undelegate is a way of removing event handlers that have been bound using <a href="/delegate">.delegate()</a>. It works virtually identically to <a href="/die">.die()</a> with the addition of a selector filter argument (which is required for delegation to work).</p>
 * 
 * @example
 * <p>Can bind and unbind events to the colored button.</p>
 * <pre><code>
 * function aClick() {
 *   $("div").show().fadeOut("slow");
 * }
 * $("#bind").click(function () {
 *   $("body").delegate("#theone", "click", aClick)
 *     .find("#theone").text("Can Click!");
 * });
 * $("#unbind").click(function () {
 *   $("body").undelegate("#theone", "click", aClick)
 *     .find("#theone").text("Does nothing...");
 * });
 * </code></pre>
 * @example
 * <p>To unbind all delegated events from all paragraphs, write:</p>
 * <pre><code>$("p").undelegate()</code></pre>
 * @example
 * <p>To unbind all delegated click events from all paragraphs, write:</p>
 * <pre><code>$("p").undelegate( "click" )</code></pre>
 * @example
 * <p>To undelegate just one previously bound handler, pass the function in as the third argument:</p>
 * <pre><code>var foo = function () {
 * // code to handle some kind of event
 * };
 * 
 * // ... now foo will be called when paragraphs are clicked ...
 * $("body").delegate("p", "click", foo);
 * 
 * 
 * // ... foo will no longer be called.
 * $("body").undelegate("p", "click", foo); </code></pre>
 * @example
 * <p>To unbind all delegated events by their namespace:</p>
 * <pre><code>var foo = function () {
 * // code to handle some kind of event
 * };
 * 
 * // delegate events under the ".whatever" namespace
 * $("form").delegate("click.whatever", ":button", foo);
 * 
 * $("form").delegate("keypress.whatever", ":text", foo); 
 * 
 * // unbind all events delegated under the ".whatever" namespace
 * 
 * $("form").undelegate(".whatever");</code></pre>
 * 
 * @param {String} selector A selector which will be used to filter the event results.
 * @param {String} eventType A string containing a JavaScript event type, such as "click" or "keydown"
 * 
 * @since 1.4.2
 * @returns {jQuery}
**/
jQuery.prototype.undelegate = function(selector, eventType) {return new jQuery();};

/**
 * Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
 * 
 * 
 *   <p>Delegate is an alternative to using the <a href="/live">.live()</a> method, allowing for each binding of event delegation to specific DOM elements. For example the following delegate code:</p>
 * 
 * <pre>$("table").delegate("td", "hover", function(){
 * 	$(this).toggleClass("hover");
 * });</pre>
 * 
 * <p>Is equivalent to the following code written using <code>.live()</code>:</p>
 * 
 * <pre>$("table").each(function(){
 * 	$("td", this).live("hover", function(){
 * 		$(this).toggleClass("hover");
 * 	});
 * });</pre>
 * 
 * <p>See also the <a href="/undelegate">.undelegate()</a> method for a way of removing event handlers added in <a href="/delegate">.delegate()</a>.</p>
 * <p>Passing and handling event data works <a href="http://api.jquery.com/bind/#passing-event-data">the same way as it does for .bind()</a>.</p>
 * 
 * @example
 * <p>Click a paragraph to add another. Note that .delegate() binds the click event to all paragraphs - even new ones.</p>
 * <pre><code>
 *     $("body").delegate("p", "click", function(){
 *       $(this).after("<p>Another paragraph!</p>");
 *     });
 * </code></pre>
 * @example
 * <p>To display each paragraph's text in an alert box whenever it is clicked:</p>
 * <pre><code>$("body").delegate("p", "click", function(){
 *   alert( $(this).text() );
 * });</code></pre>
 * @example
 * <p>To cancel a default action and prevent it from bubbling up, return false:</p>
 * <pre><code>$("body").delegate("a", "click", function() { return false; })</code></pre>
 * @example
 * <p>To cancel only the default action by using the preventDefault method.</p>
 * <pre><code>$("body").delegate("a", "click", function(event){
 *   event.preventDefault();
 * });</code></pre>
 * @example
 * <p>Can bind custom events too.</p>
 * <pre><code>
 * 
 *     $("body").delegate("p", "myCustomEvent", function(e, myName, myValue){
 *       $(this).text("Hi there!");
 *       $("span").stop().css("opacity", 1)
 *                .text("myName = " + myName)
 *                .fadeIn(30).fadeOut(1000);
 *     });
 *     $("button").click(function () {
 *       $("p").trigger("myCustomEvent");
 *     });
 * 
 * </code></pre>
 * 
 * @param {String} selector A selector to filter the elements that trigger the event.
 * @param {String} eventType A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * 
 * @since 1.4.2
 * @returns {jQuery}
**/
jQuery.prototype.delegate = function(selector, eventType, eventData, handler) {return new jQuery();};

/**
 * Takes a function and returns a new one that will always have a particular context.
 * 
 * <p>This method is most useful for attaching event handlers to an element where the context is pointing back to a different object. Additionally, jQuery makes sure that even if you bind the function returned from <code>jQuery.proxy()</code> it will still unbind the correct function if passed the original.</p>
 * @example
 * <p>Change the context of functions bound to a click handler using the "function, context" signature. Unbind the first handler after first click.</p>
 * <pre><code>
 * var me = {
 *   type: "zombie",
 *   test: function(event) {
 *     // Without proxy, `this` would refer to the event target
 *     // use event.target to reference that element.
 *     var element = event.target;
 *     $(element).css("background-color", "red");
 * 
 *     // With proxy, `this` refers to the me object encapsulating
 *     // this function.
 *     $("#log").append( "Hello " + this.type + "<br>" );
 *     $("#test").unbind("click", this.test);
 *   }
 * };
 * 
 * var you = {
 *   type: "person",
 *   test: function(event) {
 *     $("#log").append( this.type + " " );
 *   }
 * };
 * 
 * // execute you.test() in the context of the `you` object
 * // no matter where it is called
 * // i.e. the `this` keyword will refer to `you`
 * var youClick = $.proxy( you.test, you );
 * 
 * 
 * // attach click handlers to #test
 * $("#test")
 *   // this === "zombie"; handler unbound after first click
 *   .click( $.proxy( me.test, me ) )
 *   // this === "person"
 *   .click( youClick )
 *   // this === "zombie"
 *   .click( $.proxy( you.test, me ) )
 *   // this === "<button> element"
 *   .click( you.test );
 * </code></pre>
 * @example
 * <p>Enforce the context of the function using the "context, function name" signature. Unbind the handler after first click.</p>
 * <pre><code>
 *   var obj = {
 *     name: "John",
 *     test: function() {
 *       $("#log").append( this.name );
 *       $("#test").unbind("click", obj.test);
 *     }
 *   };
 * 
 *   $("#test").click( jQuery.proxy( obj, "test" ) );
 * </code></pre>
 * 
 * @param {Object} context The object to which the context of the function should be set.
 * @param {String} name The name of the function whose context will be changed (should be a property of the <code>context</code> object).
 * 
 * @since 1.4
 * @returns {Function}
**/
jQuery.proxy = function(context, name) {return new Function();};

/**
 * Bind an event handler to the "focusout" JavaScript event.
 * 
 * <p>This method is a shortcut for <code>.bind('focusout', handler)</code>.</p>
 * <p>The <code>focusout</code> event is sent to an element when it, or any element inside of it, loses focus. This is distinct from the <a href="/blur">blur</a> event in that it supports detecting the loss of focus from parent elements (in other words, it supports event bubbling).</p>
 * <p>This event will likely be used together with the <a href="/focusin">focusin</a> event.</p>
 * @example
 * <p>Watch for a loss of focus to occur inside paragraphs and note the difference between the <code>focusout</code> count and the <code>blur</code> count.</p>
 * <pre><code>
 * var fo = 0, b = 0;
 * $("p").focusout(function() {
 *   fo++;
 *   $("#fo")
 *     .text("focusout fired: " + fo + "x");
 * }).blur(function() {
 *   b++;
 *   $("#b")
 *     .text("blur fired: " + b + "x");
 *   
 * });
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.focusout = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "focusin" JavaScript event.
 * 
 * <p>This method is a shortcut for <code>.bind('focusin', handler)</code>.</p>
 * <p>The <code>focusin</code> event is sent to an element when it, or any element inside of it, gains focus. This is distinct from the <a href="/focus">focus</a> event in that it supports detecting the focus event on parent elements (in other words, it supports event bubbling).</p>
 * <p>This event will likely be used together with the <a href="/focusout">focusout</a> event.</p>
 * @example
 * <p>Watch for a focus to occur within the paragraphs on the page.</p>
 * <pre><code>
 *     $("p").focusin(function() {
 *          $(this).find("span").css('display','inline').fadeOut(1000);
 *     });
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.focusin = function(eventData, handler) {return new jQuery();};

/**
 * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
 * 
 * 
 *     <p>Given a jQuery object that represents a set of DOM elements, the <code>.has()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against the descendants of the matching elements; the element will be included in the result if any of its descendant elements matches the selector.</p>
 *     <p>Consider a page with a nested list as follows:</p>
 * <pre>
 *  &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2
 *     &lt;ul&gt;
 *       &lt;li&gt;list item 2-a&lt;/li&gt;
 *       &lt;li&gt;list item 2-b&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 *   <p>We can apply this method to the set of list items as follows:</p>
 *   <pre>$('li').has('ul').css('background-color', 'red');</pre>
 *   <p>The result of this call is a red background for item 2, as it is the only <code>&lt;li&gt;</code> that has a <code>&lt;ul&gt;</code> among its descendants.</p>
 * 
 *   
 * @example
 * <p>Check if an element is inside another.</p>
 * <pre><code>
 *   $("ul").append("<li>" + ($("ul").has("li").length ? "Yes" : "No") + "</li>");
 *   $("ul").has("li").addClass("full");
 * </code></pre>
 * 
 * @param {Element} contained A DOM element to match elements against.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.has = function(contained) {return new jQuery();};

/**
 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
 * 
 * <p>Given a selector expression that represents a set of DOM elements, the <code>.parentsUntil()</code> method traverses through the ancestors of these elements until it reaches an element matched by the selector passed in the method's argument. The resulting jQuery object contains all of the ancestors up to but not including the one matched by the <code>.parentsUntil()</code> selector.</p>
 *     <p>If the selector is not matched or is not supplied, all ancestors will be selected; in these cases it selects the same elements as the <code>.parents()</code> method does when no selector is provided.</p>
 *     <p><strong>As of jQuery 1.6</strong>, A DOM node or jQuery object, instead of a selector, may be used for the first <strong>.parentsUntil()</strong> argument.</p>
 *     <p>The method optionally accepts a selector expression for its second argument. If this argument is supplied, the elements will be filtered by testing whether they match it.</p>
 * 
 * @example
 * <p>Find the ancestors of &lt;li class="item-a"&gt; up to &lt;ul class="level-1"&gt; and give them a red background color. Also, find ancestors of &lt;li class="item-2"&gt; that have a class of "yes" up to &lt;ul class="level-1"&gt; and give them a green border.</p>
 * <pre><code>
 * $("li.item-a").parentsUntil(".level-1")
 *   .css("background-color", "red");
 * 
 * $("li.item-2").parentsUntil( $("ul.level-1"), ".yes" )
 *   .css("border", "3px solid green");
 *     
 * </code></pre>
 * 
 * @param {Element} element A DOM node or jQuery object indicating where to stop matching ancestor elements.
 * @param {Selector} filter A string containing a selector expression to match elements against.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.parentsUntil = function(element, filter) {return new jQuery();};

/**
 * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
 * 
 * <p>Given a selector expression that represents a set of DOM elements, the <code>.prevUntil()</code> method searches through the predecessors of these elements in the DOM tree, stopping when it reaches an element matched by the method's argument. The new jQuery object that is returned contains all previous siblings up to but not including the one matched by the <code>.prevUntil()</code> selector; the elements are returned in order from the closest sibling to the farthest.</p>
 *   <p>If the selector is not matched or is not supplied, all previous siblings will be selected; in these cases it selects the same elements as the <code>.prevAll()</code> method does when no filter selector is provided.</p>
 *   <p><strong>As of jQuery 1.6</strong>, A DOM node or jQuery object, instead of a selector, may be used for the first <strong>.prevUntil()</strong> argument.</p>
 *   <p>The method optionally accepts a selector expression for its second argument. If this argument is supplied, the elements will be filtered by testing whether they match it.</p>
 *   
 * @example
 * <p>Find the siblings that precede &lt;dt id="term-2"&gt; up to the preceding &lt;dt&gt; and give them a red background color. Also, find previous &lt;dd&gt; siblings of &lt;dt id="term-3"&gt; up to &lt;dt id="term-1"&gt; and give them a green text color.</p>
 * <pre><code>  
 * $("#term-2").prevUntil("dt")
 *   .css("background-color", "red");
 *   
 * var term1 = document.getElementById('term-1');
 * $("#term-3").prevUntil(term1, "dd")
 *   .css("color", "green");
 * </code></pre>
 * 
 * @param {Element} element A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
 * @param {Selector} filter A string containing a selector expression to match elements against.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.prevUntil = function(element, filter) {return new jQuery();};

/**
 * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
 * 
 * <p>Given a selector expression that represents a set of DOM elements, the <code>.nextUntil()</code> method searches through the successors of these elements in the DOM tree, stopping when it reaches an element matched by the method's argument. The new jQuery object that is returned contains all following siblings up to but not including the one matched by the <code>.nextUntil()</code> argument.</p>
 *   <p>If the selector is not matched or is not supplied, all following siblings will be selected; in these cases it selects the same elements as the <code>.nextAll()</code> method does when no filter selector is provided.</p>
 *   <p><strong>As of jQuery 1.6</strong>, A DOM node or jQuery object, instead of a selector, may be passed to the <code>.nextUntil()</code> method.</p>
 *   <p>The method optionally accepts a selector expression for its second argument. If this argument is supplied, the elements will be filtered by testing whether they match it.</p>
 * 
 * 
 * @example
 * <p>Find the siblings that follow &lt;dt id="term-2"&gt; up to the next &lt;dt&gt; and give them a red background color. Also, find &lt;dd&gt; siblings that follow &lt;dt id="term-1"&gt; up to &lt;dt id="term-3"&gt; and give them a green text color. </p>
 * <pre><code>  
 * $("#term-2").nextUntil("dt")
 *   .css("background-color", "red");
 * 
 * var term3 = document.getElementById("term-3");
 * $("#term-1").nextUntil(term3, "dd")
 *   .css("color", "green");
 * 
 * </code></pre>
 * 
 * @param {Element} element A DOM node or jQuery object indicating where to stop matching following sibling elements.
 * @param {Selector} filter A string containing a selector expression to match elements against.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.nextUntil = function(element, filter) {return new jQuery();};

/**
 * Add a collection of DOM elements onto the jQuery stack.
 * 
 * <longdesc/>
 * @example
 * <p>Add some elements onto the jQuery stack, then pop back off again.</p>
 * <pre><code>jQuery([])
 *     .pushStack( document.getElementsByTagName("div") )
 *         .remove()
 *     .end();</code></pre>
 * 
 * @param {Array} elements An array of elements to push onto the stack and make into a new jQuery object.
 * @param {String} name The name of a jQuery method that generated the array of elements.
 * @param {Array} arguments The arguments that were passed in to the jQuery method (for serialization).
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.prototype.pushStack = function(elements, name, arguments) {return new jQuery();};

/**
 * Returns value at named data store for the element, as set by <code>jQuery.data(element, name, value)</code>, or the full data store for the element.
 * 
 * <p><strong>Note:</strong> This is a low-level method; a more convenient <code><a href="/data">.data()</a></code> is also available.</p>
 * <p><strong>Regarding HTML5 data-* attributes:</strong> This low-level method does NOT retrieve the <code>data-*</code> attributes unless the more convenient <code><a href="/data">.data()</a></code> method has already retrieved them.</p>
 * <p>The <code>jQuery.data()</code> method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks. We can retrieve several distinct values for a single element one at a time, or as a set:</p>
 * <pre>alert(jQuery.data( document.body, 'foo' ));
 * alert(jQuery.data( document.body ));</pre>
 * <p>The above lines alert the data values that were set on the <code>body</code> element. If nothing was set on that element, an empty string is returned.</p>
 * <p>Calling <code>jQuery.data(element)</code> retrieves all of the element's associated values as a JavaScript object. Note that jQuery itself uses this method to store data for internal use, such as event handlers, so do not assume that it contains only data that your own code has stored.</p>
 * <p><em>Note:</em> this method currently does not provide cross-platform support for setting data on XML documents, as Internet Explorer does not allow data to be attached via expando properties.</p>
 * 
 * 
 * @example
 * <p>Get the data named "blah" stored at for an element.</p>
 * <pre><code>
 * $("button").click(function(e) {
 *   var value, div = $("div")[0];
 * 
 *   switch ($("button").index(this)) {
 *     case 0 :
 *       value = jQuery.data(div, "blah");
 *       break;
 *     case 1 :
 *       jQuery.data(div, "blah", "hello");
 *       value = "Stored!";
 *       break;
 *     case 2 :
 *       jQuery.data(div, "blah", 86);
 *       value = "Stored!";
 *       break;
 *     case 3 :
 *       jQuery.removeData(div, "blah");
 *       value = "Removed!";
 *       break;
 *   }
 * 
 *   $("span").text("" + value);
 * });
 * 
 * </code></pre>
 * 
 * @param {Element} element The DOM element to query for the data.
 * @param {String} key Name of the data stored.
 * 
 * @since 1.2.3
 * @returns {Object}
**/
jQuery.data = function(element, key) {return new Object();};

/**
 * Manipulate the queue of functions to be executed on the matched element.
 * 
 * <p><strong>Note:</strong> This is a low-level method, you should probably use <code><a href="/queue">.queue()</a></code> instead.</p>
 * 	<p>Every element can have one or more queues of functions attached to it by jQuery. In most applications, only one queue (called <code>fx</code>) is used. Queues allow a sequence of actions to be called on an element asynchronously, without halting program execution.</p>
 * 	<p>The <code>jQuery.queue()</code> method allows us to directly manipulate this queue of functions. Calling <code>jQuery.queue()</code> with a callback is particularly useful; it allows us to place a new function at the end of the queue.</p>
 * 	<p>Note that when adding a function with <code>jQuery.queue()</code>, we should ensure that <code>jQuery.dequeue()</code> is eventually called so that the next function in line executes.</p>
 * @example
 * <p>Queue a custom function.</p>
 * <pre><code>
 *    $(document.body).click(function () {
 *       $("div").show("slow");
 *       $("div").animate({left:'+=200'},2000);
 *       jQuery.queue( $("div")[0], "fx", function () {
 *         $(this).addClass("newcolor");
 *         jQuery.dequeue( this );
 *       });
 *       $("div").animate({left:'-=200'},500);
 *       jQuery.queue( $("div")[0], "fx", function () {
 *         $(this).removeClass("newcolor");
 *         jQuery.dequeue( this );
 *       });
 *       $("div").slideUp();
 *     });</code></pre>
 * @example
 * <p>Set a queue array to delete the queue.</p>
 * <pre><code>
 *    $("#start").click(function () {
 *       $("div").show("slow");
 *       $("div").animate({left:'+=200'},5000);
 *       jQuery.queue( $("div")[0], "fx", function () {
 *         $(this).addClass("newcolor");
 *         jQuery.dequeue( this );
 *       });
 *       $("div").animate({left:'-=200'},1500);
 *       jQuery.queue( $("div")[0], "fx", function () {
 *         $(this).removeClass("newcolor");
 *         jQuery.dequeue( this );
 *       });
 *       $("div").slideUp();
 *     });
 *     $("#stop").click(function () {
 *       jQuery.queue( $("div")[0], "fx", [] );
 *       $("div").stop();
 *     });
 * </code></pre>
 * 
 * @param {Element} element A DOM element where the array of queued functions is attached.
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.queue = function(element, queueName, newQueue) {return new jQuery();};

/**
 * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('keydown', handler)</code> in the first and second variations, and <code>.trigger('keydown')</code> in the third.</p>
 * <p>The <code>keydown</code> event is sent to an element when the user first presses a key on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Hello there" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the input field:</p>
 * <pre>$('#target').keydown(function() {
 *   alert('Handler for .keydown() called.');
 * });</pre>
 * <p>Now when the insertion point is inside the field, pressing a key displays the alert:</p>
 * <p><span class="output">Handler for .keydown() called.</span></p>
 * <p>To trigger the event manually, apply <code>.keydown()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').keydown();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>If key presses anywhere need to be caught (for example, to implement global shortcut keys on a page), it is useful to attach this behavior to the <code>document</code> object. Because of event bubbling, all key presses will make their way up the DOM to the <code>document</code> object unless explicitly stopped.</p>
 * <p>To determine which key was pressed, examine the <a href="http://api.jquery.com/category/events/event-object/">event object</a> that is passed to the handler function. While browsers use differing properties to store this information, jQuery normalizes the <code>.which</code> property so you can reliably use it to retrieve the key code. This code corresponds to a key on the keyboard, including codes for special keys such as arrows. For catching actual text entry, <code>.keypress()</code> may be a better choice.</p>
 * 
 * @example
 * <p>Show the event object for the keydown handler when a key is pressed in the input.</p>
 * <pre><code>
 * var xTriggered = 0;
 * $('#target').keydown(function(event) {
 *   if (event.keyCode == '13') {
 *      event.preventDefault();
 *    }
 *    xTriggered++;
 *    var msg = 'Handler for .keydown() called ' + xTriggered + ' time(s).';
 *   $.print(msg, 'html');
 *   $.print(event);
 * });
 * 
 * $('#other').click(function() {
 *   $('#target').keydown();
 * });</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.keydown = function(eventData, handler) {return new jQuery();};

/**
 * Search for a given element from among the matched elements.
 * 
 * <h4>Return Values</h4>
 * <p>If no argument is passed to the <code>.index()</code> method, the return value is an integer indicating the position of the first element within the jQuery object relative to its sibling elements.</p>
 * <p>If <code>.index()</code> is called on a collection of elements and a DOM element or jQuery object is passed in, <code>.index()</code> returns an integer indicating the position of the passed element relative to the original collection.</p>
 * <p>If a selector string is passed as an argument, <code>.index()</code> returns an integer indicating the position of the original element relative to the elements matched by the selector. If the element is not found, <code>.index()</code> will return -1.</p>
 * <h4>Detail</h4>
 * <p>The complementary operation to <code>.get()</code>, which accepts an index and returns a DOM node, <code>.index()</code> can take a DOM node and returns an index. Suppose we have a simple unordered list on the page:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li id="foo"&gt;foo&lt;/li&gt;
 *   &lt;li id="bar"&gt;bar&lt;/li&gt;
 *   &lt;li id="baz"&gt;baz&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>If we retrieve one of the three list items (for example, through a DOM function or as the context to an event handler), <code>.index()</code> can search for this list item within the set of matched elements:</p>
 * <pre>
 * var listItem = document.getElementById('bar');
 * alert('Index: ' + $('li').index(listItem));
 * We get back the zero-based position of the list item:
 * </pre>
 * <p><span class="output">Index: 1</span></p>
 * <p>Similarly, if we retrieve a jQuery object consisting of one of the three list items, <code>.index()</code> will search for that list item:</p>
 * <pre>
 * var listItem = $('#bar');
 * alert('Index: ' + $('li').index(listItem));
 * </pre>
 * <p>We get back the zero-based position of the list item:</p>
 * <p><span class="output">Index: 1</span></p>
 * <p>Note that if the jQuery collection used as the <code>.index()</code> method's argument contains more than one element, the first element within the matched set of elements will be used.</p>
 * <pre>
 * var listItems = $('li:gt(0)');
 * alert('Index: ' + $('li').index(listItems));
 * </pre>
 * <p>We get back the zero-based position of the first list item within the matched set:</p>
 * <p><span class="output">Index: 1</span></p>
 * <p>If we use a string as the <code>.index()</code> method's argument, it is interpreted as a jQuery selector string. The first element among the object's matched elements which also matches this selector is located.</p>
 * <pre>
 * var listItem = $('#bar');
 * alert('Index: ' + listItem.index('li'));
 * </pre>
 * <p>We get back the zero-based position of the list item:</p>
 * <p><span class="output">Index: 1</span></p>
 * <p>If we omit the argument, <code>.index()</code> will return the position of the first element within the set of matched elements in relation to its siblings:</p>
 * <pre>alert('Index: ' + $('#bar').index();</pre>
 * <p>Again, we get back the zero-based position of the list item:</p>
 * <p><span class="output">Index: 1</span></p>
 * 
 * 
 * @example
 * <p>On click, returns the index (based zero) of that div in the page.</p>
 * <pre><code>
 * $("div").click(function () {
 *   // this is the dom element clicked
 *   var index = $("div").index(this);
 *   $("span").text("That was div index #" + index);
 * });
 * </code></pre>
 * @example
 * <p>Returns the index for the element with ID bar.</p>
 * <pre><code>var listItem = $('#bar');
 *     $('div').html( 'Index: ' + $('li').index(listItem) );</code></pre>
 * @example
 * <p>Returns the index for the first item in the jQuery collection.</p>
 * <pre><code>var listItems = $('li:gt(0)');
 * $('div').html( 'Index: ' + $('li').index(listItems) );
 * </code></pre>
 * @example
 * <p>Returns the index for the element with ID bar in relation to all &lt;li&gt; elements.</p>
 * <pre><code>$('div').html('Index: ' +  $('#bar').index('li') );</code></pre>
 * @example
 * <p>Returns the index for the element with ID bar in relation to its siblings.</p>
 * <pre><code>var barIndex = $('#bar').index();
 * $('div').html( 'Index: ' +  barIndex );</code></pre>
 * @example
 * <p>Returns -1, as there is no element with ID foobar.</p>
 * <pre><code>var foobar = $("li").index( $('#foobar') );
 * $('div').html('Index: ' + foobar);</code></pre>
 * 
 * @param {Selector} selector A selector representing a jQuery collection in which to look for an element.
 * 
 * @since 1.4
 * @returns {Number}
**/
jQuery.prototype.index = function(selector) {return 0;};

/**
 * Remove a previously-stored piece of data.
 * 
 * <p>The <code>.removeData()</code> method allows us to remove values that were previously set using <code>.data()</code>. When called with the name of a key, <code>.removeData()</code> deletes that particular value; when called with no arguments, all values are removed.</p><p>NOTE: Starting with jQuery 1.4.3, calling <code>.removeData()</code> will cause the value of the property being removed to revert to the value of the data attribute of the same name in the DOM, rather than being set to <code>undefined</code>.</p>
 * @example
 * <p>Set a data store for 2 names then remove one of them.</p>
 * <pre><code>
 * 
 *     $("span:eq(0)").text("" + $("div").data("test1"));
 *     $("div").data("test1", "VALUE-1");
 *     $("div").data("test2", "VALUE-2");
 *     $("span:eq(1)").text("" + $("div").data("test1"));
 *     $("div").removeData("test1");
 *     $("span:eq(2)").text("" + $("div").data("test1"));
 *     $("span:eq(3)").text("" + $("div").data("test2"));
 * 
 * </code></pre>
 * 
 * @param {String} name A string naming the piece of data to delete.
 * 
 * @since 1.2.3
 * @returns {jQuery}
**/
jQuery.prototype.removeData = function(name) {return new jQuery();};

/**
 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('scroll', handler)</code> in the first and second variations, and <code>.trigger('scroll')</code> in the third.</p>
 * <p>The <code>scroll</code> event is sent to an element when the user scrolls to a different place in the element. It applies to <code>window</code> objects, but also to scrollable frames and elements with the <code>overflow </code>CSS property set to <code>scroll</code> (or <code>auto</code> when the element's explicit height or width is less than the height or width of its contents).</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="target" style="overflow: scroll; width: 200px; height: 100px;"&gt;
 *   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 *   sed do eiusmod tempor incididunt ut labore et dolore magna
 *   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
 *   ullamco laboris nisi ut aliquip ex ea commodo consequat.
 *   Duis aute irure dolor in reprehenderit in voluptate velit
 *   esse cillum dolore eu fugiat nulla pariatur. Excepteur
 *   sint occaecat cupidatat non proident, sunt in culpa qui
 *   officia deserunt mollit anim id est laborum.
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre>
 * <p>The style definition is present to make the target element small enough to be scrollable:</p>
 *  
 * <p class="image"><img src="/images/0042_05_11.png" alt=""/>
 * </p>
 * <p>The <code>scroll</code> event handler can be bound to this element:</p>
 * <pre>$('#target').scroll(function() {
 *   $('#log').append('&lt;div&gt;Handler for .scroll() called.&lt;/div&gt;');
 * });</pre>
 * <p>Now when the user scrolls the text up or down, one or more messages are appended to <code>&lt;div id="log"&gt;&lt;/div&gt;</code>:</p>
 * <p><span class="output">Handler for .scroll() called.</span></p>
 * <p>To trigger the event manually, apply <code>.scroll()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').scroll();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>A <code>scroll</code> event is sent whenever the element's scroll position changes, regardless of the cause. A mouse click or drag on the scroll bar, dragging inside the element, pressing the arrow keys, or using the mouse's scroll wheel could cause this event.</p>
 * 
 * @example
 * <p>To do something when your page is scrolled:</p>
 * <pre><code>
 *     $("p").clone().appendTo(document.body);
 *     $("p").clone().appendTo(document.body);
 *     $("p").clone().appendTo(document.body);
 *     $(window).scroll(function () { 
 *       $("span").css("display", "inline").fadeOut("slow"); 
 *     });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.scroll = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('resize', handler)</code> in the first and second variations, and <code>.trigger('resize')</code> in the third.</p>
 * <p>The <code>resize</code> event is sent to the <code>window</code> element when the size of the browser window changes:</p>
 * <pre>$(window).resize(function() {
 *   $('#log').append('&lt;div&gt;Handler for .resize() called.&lt;/div&gt;');
 * });
 * </pre>
 * <p>Now whenever the browser window's size is changed, the message is appended to &lt;div id="log"&gt; one or more times, depending on the browser.</p>
 * <p>Code in a <code>resize</code> handler should never rely on the number of times the handler is called. Depending on implementation, <code>resize</code> events can be sent continuously as the resizing is in progress (the typical behavior in Internet Explorer and WebKit-based browsers such as Safari and Chrome), or only once at the end of the resize operation (the typical behavior in Firefox).</p>
 * 
 * @example
 * <p>To see the window width while (or after) it is resized, try:</p>
 * <pre><code>
 * $(window).resize(function() {
 *   $('body').prepend('<div>' + $(window).width() + '</div>');
 * });
 *   </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.resize = function(eventData, handler) {return new jQuery();};

/**
 * Execute the next function on the queue for the matched elements.
 * 
 * <p>When <code>.dequeue()</code> is called, the next function on the queue is removed from the queue, and then executed. This function should in turn (directly or indirectly) cause <code>.dequeue()</code> to be called, so that the sequence can continue.</p>
 * @example
 * <p>Use dequeue to end a custom queue function which allows the queue to keep going.</p>
 * <pre><code>
 * $("button").click(function () {
 *   $("div").animate({left:'+=200px'}, 2000);
 *   $("div").animate({top:'0px'}, 600);
 *   $("div").queue(function () {
 *     $(this).toggleClass("red");
 *     $(this).dequeue();
 *   });
 *   $("div").animate({left:'10px', top:'30px'}, 700);
 * });
 * </code></pre>
 * 
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * 
 * @since 1.2
 * @returns {jQuery}
**/
jQuery.prototype.dequeue = function(queueName) {return new jQuery();};

/**
 * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('keyup', handler)</code> in the first two variations, and <code>.trigger('keyup')</code> in the third.</p>
 * <p>The <code>keyup</code> event is sent to an element when the user releases a key on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Hello there" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the input field:</p>
 * <pre>$('#target').keyup(function() {
 *   alert('Handler for .keyup() called.');
 * });
 * </pre>
 * <p>Now when the insertion point is inside the field and a key is pressed and released, the alert is displayed:</p>
 * <p><span class="output">Handler for .keyup() called.</span></p>
 * <p>To trigger the event manually, apply <code>.keyup()</code> without arguments:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').keyup();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>If key presses anywhere need to be caught (for example, to implement global shortcut keys on a page), it is useful to attach this behavior to the <code>document</code> object. Because of event bubbling, all key presses will make their way up the DOM to the <code>document</code> object unless explicitly stopped.</p>
 * <p>To determine which key was pressed, examine the event object that is passed to the handler function. While browsers use differing properties to store this information, jQuery normalizes the <code>.which</code> property so you can reliably use it to retrieve the key code. This code corresponds to a key on the keyboard, including codes for special keys such as arrows. For catching actual text entry, <code>.keypress()</code> may be a better choice.</p>
 * 
 * @example
 * <p>Show the event object for the keyup handler when a key is released in the input.</p>
 * <pre><code>
 * var xTriggered = 0;
 * $('#target').keyup(function(event) {
 *   if (event.keyCode == '13') {
 *      event.preventDefault();
 *    }
 *    xTriggered++;
 *    var msg = 'Handler for .keyup() called ' + xTriggered + ' time(s).';
 *   $.print(msg, 'html');
 *   $.print(event);
 * });
 * 
 * $('#other').click(function() {
 *   $('#target').keyup();
 * });</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.keyup = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p><strong>Note:</strong> as the <code>keypress</code> event isn't covered by any official specification, the actual behavior encountered when using it may differ across browsers, browser versions, and platforms.</p>
 * <p>This method is a shortcut for <code>.bind('keypress', handler)</code> in the first two variations, and <code>.trigger('keypress')</code> in the third.</p>
 * <p>The <code>keypress</code> event is sent to an element when the browser registers keyboard input. This is similar to the <code>keydown</code> event, except in the case of key repeats. If the user presses and holds a key, a <code>keydown </code>event is triggered once, but separate <code>keypress</code> events are triggered for each inserted character. In addition, modifier keys (such as Shift) trigger <code>keydown</code> events but not <code>keypress</code> events.</p>
 * <p>A <code>keypress</code> event handler can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 * 	&lt;fieldset&gt;
 *   	&lt;input id="target" type="text" value="Hello there" /&gt;
 * 	&lt;/fieldset&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the input field:</p>
 * <pre>$('#target').keypress(function() {
 *   alert('Handler for .keypress() called.');
 * });</pre>
 * <p>Now when the insertion point is inside the field, pressing a key displays the alert:</p>
 * <p><span class="output">Handler for .keypress() called.</span></p>
 * <p>The message repeats if the key is held down. To trigger the event manually, apply <code>.keypress()</code> without an argument::</p>
 * <pre>$('#other').click(function() {
 *   $('#target').keypress();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>If key presses anywhere need to be caught (for example, to implement global shortcut keys on a page), it is useful to attach this behavior to the <code>document</code> object. Because of event bubbling, all key presses will make their way up the DOM to the <code>document</code> object unless explicitly stopped.</p>
 * <p>To determine which character was entered, examine the <code>event</code> object that is passed to the handler function. While browsers use differing properties to store this information, jQuery normalizes the <code>.which</code> property so you can reliably use it to retrieve the character code.</p>
 * <p>Note that <code>keydown</code> and <code>keyup</code> provide a code indicating which key is pressed, while <code>keypress</code> indicates which character was entered. For example, a lowercase "a" will be reported as 65 by <code>keydown</code> and <code>keyup</code>, but as 97 by <code>keypress</code>. An uppercase "A" is reported as 65 by all events. Because of this distinction, when catching special keystrokes such as arrow keys, <code>.keydown()</code> or <code>.keyup()</code> is a better choice.</p>
 * 
 * @example
 * <p>Show the event object for the keypress handler when a key is pressed in the input.</p>
 * <pre><code>
 * var xTriggered = 0;
 * $('#target').keypress(function(event) {
 *   if (event.which == '13') {
 *      event.preventDefault();
 *    }
 *    xTriggered++;
 *    var msg = 'Handler for .keypress() called ' + xTriggered + ' time(s).';
 *   $.print(msg, 'html');
 *   $.print(event);
 * });
 * 
 * $('#other').click(function() {
 *   $('#target').keypress();
 * });</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.keypress = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('submit', handler)</code> in the first variation, and <code>.trigger('submit')</code> in the third.</p>
 * <p>The <code>submit</code> event is sent to an element when the user is attempting to submit a form. It can only be attached to <code>&lt;form&gt;</code> elements. Forms can be submitted either by clicking an explicit <code>&lt;input type="submit"&gt;</code>, <code>&lt;input type="image"&gt;</code>, or <code>&lt;button type="submit"&gt;</code>, or by pressing <kbd>Enter</kbd> when certain form elements have focus.</p>
 * <blockquote><p>Depending on the browser, the Enter key may only cause a form submission if the form has exactly one text field, or only when there is a submit button present. The interface should not rely on a particular behavior for this key unless the issue is forced by observing the keypress event for presses of the Enter key.</p></blockquote>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form id="target" action="destination.html"&gt;
 *   &lt;input type="text" value="Hello there" /&gt;
 *   &lt;input type="submit" value="Go" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the form:</p>
 * <pre>$('#target').submit(function() {
 *   alert('Handler for .submit() called.');
 *   return false;
 * });</pre>
 * <p>Now when the form is submitted, the message is alerted. This happens prior to the actual submission, so we can cancel the submit action by calling <code>.preventDefault()</code> on the event object or by returning <code>false</code> from our handler. We can trigger the event manually when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').submit();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also display the message. In addition, the default <code>submit</code> action on the form will be fired, so the form will be submitted.</p>
 * <p>The JavaScript <code>submit</code> event does not bubble in Internet Explorer. However, scripts that rely on event delegation with the <code>submit</code> event will work consistently across browsers as of jQuery 1.4, which has normalized the event's behavior. </p>
 * 
 * 
 * @example
 * <p>If you'd like to prevent forms from being submitted unless a flag variable is set, try:</p>
 * <pre><code>
 * 
 *     $("form").submit(function() {
 *       if ($("input:first").val() == "correct") {
 *         $("span").text("Validated...").show();
 *         return true;
 *       }
 *       $("span").text("Not valid!").show().fadeOut(1000);
 *       return false;
 *     });
 * </code></pre>
 * @example
 * <p>If you'd like to prevent forms from being submitted unless a flag variable is set, try:</p>
 * <pre><code>$("form").submit( function () {
 *   return this.some_flag_variable;
 * } );</code></pre>
 * @example
 * <p>To trigger the submit event on the first form on the page, try:</p>
 * <pre><code>$("form:first").submit();</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.submit = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('select', handler)</code> in the first two variations, and <code>.trigger('select')</code> in the third.</p>
 * <p>The <code>select</code> event is sent to an element when the user makes a text selection inside it. This event is limited to <code>&lt;input type="text"&gt;</code> fields and <code>&lt;textarea&gt;</code> boxes.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Hello there" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the text input:</p>
 * <pre>$('#target').select(function() {
 *   alert('Handler for .select() called.');
 * });</pre>
 * <p>Now when any portion of the text is selected, the alert is displayed. Merely setting the location of the insertion point will not trigger the event. To trigger the event manually, apply <code>.select()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').select();
 * });</pre>
 * <p>After this code executes, clicks on the Trigger button will also alert the message:</p>
 * <p><span class="output">Handler for .select() called.</span></p>
 * <p>In addition, the default <code>select</code> action on the field will be fired, so the entire text field will be selected.</p>
 * <blockquote><p>The method for retrieving the current selected text differs from one browser to another. A number of jQuery plug-ins offer cross-platform solutions.</p></blockquote>
 * 
 * @example
 * <p>To do something when text in input boxes is selected:</p>
 * <pre><code>
 *     $(":input").select( function () { 
 *       $("div").text("Something was selected").show().fadeOut(1000); 
 *     });
 * </code></pre>
 * @example
 * <p>To trigger the select event on all input elements, try:</p>
 * <pre><code>$("input").select();</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.select = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('change', handler)</code> in the first two variations, and <code>.trigger('change')</code> in the third.</p>
 * <p>The <code>change</code> event is sent to an element when its value changes. This event is limited to <code>&lt;input&gt;</code> elements, <code>&lt;textarea&gt;</code> boxes and <code>&lt;select&gt;</code> elements. For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input class="target" type="text" value="Field 1" /&gt;
 *   &lt;select class="target"&gt;
 *     &lt;option value="option1" selected="selected"&gt;Option 1&lt;/option&gt;
 *     &lt;option value="option2"&gt;Option 2&lt;/option&gt;
 *   &lt;/select&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 * <p>The event handler can be bound to the text input and the select box:</p>
 * <pre>$('.target').change(function() {
 *   alert('Handler for .change() called.');
 * });</pre>
 * <p>Now when the second option is selected from the dropdown, the alert is displayed. It is also displayed if you change the text in the field and then click away. If the field loses focus without the contents having changed, though, the event is not triggered. To trigger the event manually, apply <code>.change()</code> without arguments:</p>
 * <pre>$('#other').click(function() {
 *   $('.target').change();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message. The message will display twice, because the handler has been bound to the <code>change</code> event on both of the form elements.</p>
 * <p>As of jQuery 1.4, the <code>change</code> event bubbles in Internet Explorer, behaving consistently with the event in other modern browsers.</p>
 * 
 * @example
 * <p>Attaches a change event to the select that gets the text for each selected option and writes them in the div.  It then triggers the event for the initial text draw.</p>
 * <pre><code>
 *     $("select").change(function () {
 *           var str = "";
 *           $("select option:selected").each(function () {
 *                 str += $(this).text() + " ";
 *               });
 *           $("div").text(str);
 *         })
 *         .change();
 * </code></pre>
 * @example
 * <p>To add a validity test to all text input elements:</p>
 * <pre><code>$("input[type='text']").change( function() {
 *   // check input ($(this).val()) for validity here
 * });</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.change = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('blur', handler)</code> in the first two variations, and <code>.trigger('blur')</code> in the third.</p>
 * <p>The <code>blur</code> event is sent to an element when it loses focus. Originally, this event was only applicable to form elements, such as <code>&lt;input&gt;</code>. In recent browsers, the domain of the event has been extended to include all element types. An element can lose focus via keyboard commands, such as the Tab key, or by mouse clicks elsewhere on the page.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Field 1" /&gt;
 *   &lt;input type="text" value="Field 2" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * The event handler can be bound to the first input field:
 * $('#target').blur(function() {
 *   alert('Handler for .blur() called.');
 * });</pre>
 * <p>Now if the first field has the focus, clicking elsewhere or tabbing away from it displays the alert:</p>
 * <p><span class="output">Handler for .blur() called.</span></p>
 * <p>To trigger the event programmatically, apply <code>.blur()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').blur();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>blur</code> event does not bubble in Internet Explorer. Therefore, scripts that rely on event delegation with the <code>blur</code> event will not work consistently across browsers. As of version 1.4.2, however, jQuery works around this limitation by mapping <code>blur</code> to the <code>focusout</code> event in its event delegation methods, <a href="http://api.jquery.com/live/"><code>.live()</code></a> and <a href="http://api.jquery.com/delegate/"><code>.delegate()</code></a>.</p>
 * 
 * @example
 * <p>To trigger the blur event on all paragraphs:</p>
 * <pre><code>$("p").blur();</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.blur = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <ul>
 * <li>This method is a shortcut for <code>.bind('focus', handler)</code> in the first and second variations, and <code>.trigger('focus')</code> in the third.</li>
 * <li>The <code>focus</code> event is sent to an element when it gains focus. This event is implicitly applicable to a limited set of elements, such as  form elements (<code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, etc.) and links (<code>&lt;a href&gt;</code>). In recent browser versions, the event can be extended to include all element types by explicitly setting the element's <code>tabindex</code> property. An element can gain focus via keyboard commands, such as the Tab key, or by mouse clicks on the element.</li>
 * <li>Elements with focus are usually highlighted in some way by the browser, for example with a dotted line surrounding the element. The focus is used to determine which element is the first to receive keyboard-related events.</li>
 * </ul>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;form&gt;
 *   &lt;input id="target" type="text" value="Field 1" /&gt;
 *   &lt;input type="text" value="Field 2" /&gt;
 * &lt;/form&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * </pre>
 * <p>The event handler can be bound to the first input field:</p>
 * <pre>$('#target').focus(function() {
 *   alert('Handler for .focus() called.');
 * });</pre>
 * <p>Now clicking on the first field, or tabbing to it from another field, displays the alert:</p>
 * <p><span class="output">Handler for .focus() called.</span></p>
 * <p>We can trigger the event when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').focus();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>focus</code> event does not bubble in Internet Explorer. Therefore, scripts that rely on event delegation with the <code>focus</code> event will not work consistently across browsers. As of version 1.4.2, however, jQuery works around this limitation by mapping <code>focus</code> to the <code>focusin</code> event in its event delegation methods, <a href="http://api.jquery.com/live/"><code>.live()</code></a> and <a href="http://api.jquery.com/delegate/"><code>.delegate()</code></a>.</p>
 * <blockquote><p>Triggering the focus on hidden elements causes an error in Internet Explorer. Take care to only call <code>.focus()</code> without parameters on elements that are visible.</p></blockquote>
 * 
 * @example
 * <p>Fire focus.</p>
 * <pre><code>
 *     $("input").focus(function () {
 *          $(this).next("span").css('display','inline').fadeOut(1000);
 *     });
 * </code></pre>
 * @example
 * <p>To stop people from writing in text input boxes, try:</p>
 * <pre><code>$("input[type=text]").focus(function(){
 *   $(this).blur();
 * });</code></pre>
 * @example
 * <p>To focus on a login input box with id 'login' on page startup, try:</p>
 * <pre><code>$(document).ready(function(){
 *   $("#login").focus();
 * });</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.focus = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mousemove', handler)</code> in the first two variations, and <code>.trigger('mousemove')</code> in the third.</p>
 * <p>The <code>mousemove</code> event is sent to an element when the mouse pointer moves inside the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="target"&gt;
 *   Move here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre>
 *  
 * <p>The event handler can be bound to the target:</p>
 * <pre>$("#target").mousemove(function(event) {
 *   var msg = "Handler for .mousemove() called at ";
 *   msg += event.pageX + ", " + event.pageY;
 *   $("#log").append("&lt;div&gt;" + msg + "&lt;/div&gt;");
 * });</pre>
 * <p>Now when the mouse pointer moves within the target button, the messages are appended to &lt;div id="log"&gt;:</p>
 * <p>
 * <span class="output">Handler for .mousemove() called at (399, 48)</span><br/>
 * <span class="output">Handler for .mousemove() called at (398, 46)</span><br/>
 * <span class="output">Handler for .mousemove() called at (397, 44)</span><br/>
 * <span class="output">Handler for .mousemove() called at (396, 42)</span><br/>
 * </p>
 * <p>To trigger the event manually, apply <code>.mousemove()</code> without an argument:</p>
 * <pre>$("#other").click(function() {
 *   $("#target").mousemove();
 * });</pre>
 * <p>After this code executes, clicks on the Trigger button will also append the message:</p>
 * <p><span class="output">Handler for .mousemove() called at (undefined, undefined)</span></p>
 * <p>When tracking mouse movement, you usually need to know the actual position of the mouse pointer. The event object that is passed to the handler contains some information about the mouse coordinates. Properties such as <code>.clientX</code>, <code>.offsetX</code>, and <code>.pageX</code> are available, but support for them differs between browsers. Fortunately, jQuery normalizes the <code>.pageX</code> and <code>.pageY</code> properties so that they can be used in all browsers. These properties provide the X and Y coordinates of the mouse pointer relative to the top-left corner of the document, as illustrated in the example output above.</p>
 * <p>Keep in mind that the <code>mousemove</code> event is triggered whenever the mouse pointer moves, even for a pixel. This means that hundreds of events can be generated over a very small amount of time. If the handler has to do any significant processing, or if multiple handlers for the event exist, this can be a serious performance drain on the browser. It is important, therefore, to optimize <code>mousemove </code>handlers as much as possible, and to unbind them as soon as they are no longer needed.</p>
 * <p>A common pattern is to bind the <code>mousemove</code> handler from within a <code>mousedown</code> hander, and to unbind it from a corresponding <code>mouseup</code> handler. If implementing this sequence of events, remember that the <code>mouseup</code> event might be sent to a different HTML element than the <code>mousemove</code> event was. To account for this, the <code>mouseup</code> handler should typically be bound to an element high up in the DOM tree, such as <code>&lt;body&gt;</code>.</p>
 * 
 * @example
 * <p>Show the mouse coordinates when the mouse is moved over the yellow div.  Coordinates are relative to the window, which in this case is the iframe.</p>
 * <pre><code>
 *     $("div").mousemove(function(e){
 *       var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
 *       var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
 *       $("span:first").text("( e.pageX, e.pageY ) - " + pageCoords);
 *       $("span:last").text("( e.clientX, e.clientY ) - " + clientCoords);
 *     });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.mousemove = function(eventData, handler) {return new jQuery();};

/**
 * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
 * 
 * 
 * <p>The <code>.hover()</code> method, when passed a single function, will execute that handler for both <code>mouseenter</code> and <code>mouseleave</code> events. This allows the user to use jQuery's various toggle methods within the handler or to respond differently within the handler depending on the <code>event.type</code>.</p>
 * <p>Calling <code>$(selector).hover(handlerInOut)</code> is shorthand for:</p>
 * <pre>$(selector).bind("mouseenter mouseleave", handlerInOut);</pre>
 * <p>See the discussions for <code><a href="/mouseenter">.mouseenter()</a></code> and <code><a href="/mouseleave">.mouseleave()</a></code> for more details.</p>
 * 
 * @example
 * <p>Slide the next sibling LI up or down on hover, and toggle a class.</p>
 * <pre><code>
 * $("li")
 * .filter(":odd")
 * .hide()
 *  .end()
 * .filter(":even")
 * .hover(
 *   function () {
 *     $(this).toggleClass("active")
 *       .next().stop(true, true).slideToggle();
 *   }
 * );
 * 
 * 
 * </code></pre>
 * 
 * @param {Function} handlerInOut A function to execute when the mouse pointer enters or leaves the element.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.hover = function(handlerInOut) {return new jQuery();};

/**
 * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseleave', handler)</code> in the first two variations, and <code>.trigger('mouseleave')</code> in the third.</p>
 * <p>The <code>mouseleave</code> JavaScript event is proprietary to Internet Explorer. Because of the event's general utility, jQuery simulates this event so that it can be used regardless of browser. This event is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="outer"&gt;
 *   Outer
 *   &lt;div id="inner"&gt;
 *     Inner
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre> 
 * <p class="image"><img src="/images/0042_05_09.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any element:</p>
 * <pre>$('#outer').mouseleave(function() {
 *   $('#log').append('&lt;div&gt;Handler for .mouseleave() called.&lt;/div&gt;');
 * });</pre>
 * <p>Now when the mouse pointer moves out of the <span class="output">Outer</span> <code>&lt;div&gt;</code>, the message is appended to <code>&lt;div id="log"&gt;</code>. You can also trigger the event when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#outer').mouseleave();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>The <code>mouseleave</code> event differs from <code>mouseout</code> in the way it handles event bubbling. If <code>mouseout</code> were used in this example, then when the mouse pointer moved out of the <span class="output">Inner</span> element, the handler would be triggered. This is usually undesirable behavior. The <code>mouseleave</code> event, on the other hand, only triggers its handler when the mouse leaves the element it is bound to, not a descendant. So in this example, the handler is triggered when the mouse leaves the <span class="output">Outer</span> element, but not the <span class="output">Inner</span> element.</p>
 * 
 * @example
 * <p>Show number of times mouseout and mouseleave events are triggered.
 * <code>mouseout</code> fires when the pointer moves out of child element as well, while <code>mouseleave</code> fires only when the pointer moves out of the bound element.</p>
 * <pre><code>
 *     var i = 0;
 *     $("div.overout").mouseover(function(){
 *       $("p:first",this).text("mouse over");
 *     }).mouseout(function(){
 *       $("p:first",this).text("mouse out");
 *       $("p:last",this).text(++i);
 *     });
 * 
 *     var n = 0;
 *     $("div.enterleave").mouseenter(function(){
 *       $("p:first",this).text("mouse enter");
 *     }).mouseleave(function(){
 *       $("p:first",this).text("mouse leave");
 *       $("p:last",this).text(++n);
 *     });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.mouseleave = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseenter', handler)</code> in the first two variations, and <code>.trigger('mouseenter')</code> in the third.</p>
 * <p>The <code>mouseenter</code> JavaScript event is proprietary to Internet Explorer. Because of the event's general utility, jQuery simulates this event so that it can be used regardless of browser. This event is sent to an element when the mouse pointer enters the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="outer"&gt;
 *   Outer
 *   &lt;div id="inner"&gt;
 *     Inner
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_08.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any element:</p>
 * <pre>$('#outer').mouseenter(function() {
 *   $('#log').append('&lt;div&gt;Handler for .mouseenter() called.&lt;/div&gt;');
 * });</pre>
 * <p>Now when the mouse pointer moves over the <span class="output">Outer</span> <code>&lt;div&gt;</code>, the message is appended to <code>&lt;div id="log"&gt;</code>. You can also trigger the event when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#outer').mouseenter();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>The <code>mouseenter</code> event differs from <code>mouseover</code> in the way it handles event bubbling. If <code>mouseover</code> were used in this example, then when the mouse pointer moved over the <span class="output">Inner</span> element, the handler would be triggered. This is usually undesirable behavior. The <code>mouseenter</code> event, on the other hand, only triggers its handler when the mouse enters the element it is bound to, not a descendant. So in this example, the handler is triggered when the mouse enters the <span class="output">Outer</span> element, but not the <span class="output">Inner</span> element.</p>
 * 
 * @example
 * <p>Show texts when mouseenter and mouseout event triggering.
 * <code>mouseover</code> fires when the pointer moves into the child element as well, while <code>mouseenter</code> fires only when the pointer moves into the bound element.</p>
 * <pre><code>
 *     var i = 0;
 *     $("div.overout").mouseover(function(){
 *       $("p:first",this).text("mouse over");
 *       $("p:last",this).text(++i);
 *     }).mouseout(function(){
 *       $("p:first",this).text("mouse out");
 *     });
 * 
 *     var n = 0;
 *     $("div.enterleave").mouseenter(function(){
 *       $("p:first",this).text("mouse enter");
 *       $("p:last",this).text(++n);
 *     }).mouseleave(function(){
 *       $("p:first",this).text("mouse leave");
 *     });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.mouseenter = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseout', handler)</code> in the first two variation, and <code>.trigger('mouseout')</code> in the third.</p>
 * <p>The <code>mouseout</code> event is sent to an element when the mouse pointer leaves the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="outer"&gt;
 *   Outer
 *   &lt;div id="inner"&gt;
 *     Inner
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre> 
 * <p class="image"><img src="/images/0042_05_07.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any element:</p>
 * <pre>$('#outer').mouseout(function() {
 *   $('#log').append('Handler for .mouseout() called.');
 * });</pre>
 * <p>Now when the mouse pointer moves out of the <span class="output">Outer</span> <code>&lt;div&gt;</code>, the message is appended to <code>&lt;div id="log"&gt;</code>. To trigger the event manually, apply <code>.mouseout()</code> without an argument::</p>
 * <pre>$('#other').click(function() {
 *   $('#outer').mouseout();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>This event type can cause many headaches due to event bubbling. For instance, when the mouse pointer moves out of the <span class="output">Inner</span> element in this example, a <code>mouseout</code> event will be sent to that, then trickle up to <span class="output">Outer</span>. This can trigger the bound <code>mouseout</code> handler at inopportune times. See the discussion for <code>.<a href="/mouseleave">mouseleave</a>()</code> for a useful alternative.</p>
 * 
 * @example
 * <p>Show the number of times mouseout and mouseleave events are triggered.
 * <code>mouseout</code> fires when the pointer moves out of the child element as well, while <code>mouseleave</code> fires only when the pointer moves out of the bound element.</p>
 * <pre><code>
 *     var i = 0;
 *     $("div.overout").mouseout(function(){
 *       $("p:first",this).text("mouse out");
 *       $("p:last",this).text(++i);
 *     }).mouseover(function(){
 *       $("p:first",this).text("mouse over");
 *     });
 * 
 *     var n = 0;
 *     $("div.enterleave").bind("mouseenter",function(){
 *       $("p:first",this).text("mouse enter");
 *     }).bind("mouseleave",function(){
 *       $("p:first",this).text("mouse leave");
 *       $("p:last",this).text(++n);
 *     });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.mouseout = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseover', handler)</code> in the first two variations, and <code>.trigger('mouseover')</code> in the third.</p>
 * <p>The <code>mouseover</code> event is sent to an element when the mouse pointer enters the element. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="outer"&gt;
 *   Outer
 *   &lt;div id="inner"&gt;
 *     Inner
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * &lt;div id="log"&gt;&lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_06.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any element:</p>
 * <pre>$('#outer').mouseover(function() {
 *   $('#log').append('&lt;div&gt;Handler for .mouseover() called.&lt;/div&gt;');
 * });</pre>
 * <p>Now when the mouse pointer moves over the <span class="output">Outer</span> <code>&lt;div&gt;</code>, the message is appended to <code>&lt;div id="log"&gt;</code>. We can also trigger the event when another element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#outer').mouseover();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also append the message.</p>
 * <p>This event type can cause many headaches due to event bubbling. For instance, when the mouse pointer moves over the <span class="output">Inner</span> element in this example, a <code>mouseover</code> event will be sent to that, then trickle up to <span class="output">Outer</span>. This can trigger our bound <code>mouseover</code> handler at inopportune times. See the discussion for <code>.mouseenter()</code> for a useful alternative.</p>
 * 
 * @example
 * <p>Show the number of times mouseover and mouseenter events are triggered.
 * <code>mouseover</code> fires when the pointer moves into the child element as well, while <code>mouseenter</code> fires only when the pointer moves into the bound element.</p>
 * <pre><code>
 *   var i = 0;
 *   $("div.overout").mouseover(function() {
 *     i += 1;
 *     $(this).find("span").text( "mouse over x " + i );
 *   }).mouseout(function(){
 *     $(this).find("span").text("mouse out ");
 *   });
 * 
 *   var n = 0;
 *   $("div.enterleave").mouseenter(function() {
 *     n += 1;
 *     $(this).find("span").text( "mouse enter x " + n );
 *   }).mouseleave(function() {
 *     $(this).find("span").text("mouse leave");
 *   });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.mouseover = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('dblclick', handler)</code> in the first two variations, and <code>.trigger('dblclick')</code> in the third.
 * The <code>dblclick</code> event is sent to an element when the element is double-clicked. Any HTML element can receive this event.
 * For example, consider the HTML:</p>
 * <pre>&lt;div id="target"&gt;
 *   Double-click here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_04.png" alt=""/>
 * </p>
 * <p>The event handler can be bound to any <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').dblclick(function() {
 *   alert('Handler for .dblclick() called.');
 * });</pre>
 * <p>Now double-clicking on this element displays the alert:</p>
 * <p><span class="output">Handler for .dblclick() called.</span></p>
 * <p>To trigger the event manually, apply <code>.dblclick()</code> without an argument:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').dblclick();
 * });</pre>
 * <p>After this code executes, (single) clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>dblclick</code> event is only triggered after this exact series of events:</p>
 * <ul>
 * <li>The mouse button is depressed while the pointer is inside the element.</li>
 * <li>The mouse button is released while the pointer is inside the element.</li>
 * <li>The mouse button is depressed again while the pointer is inside the element, within a time window that is system-dependent.</li>
 * <li>The mouse button is released while the pointer is inside the element.</li>
 * </ul>
 * <p>It is inadvisable to bind handlers to both the <code>click</code> and <code>dblclick</code> events for the same element. The sequence of events triggered varies from browser to browser, with some receiving two <code>click</code> events before the <code>dblclick</code> and others only one. Double-click sensitivity (maximum time between clicks that is detected as a double click) can vary by operating system and browser, and is often user-configurable.
 * </p>
 * 
 * @example
 * <p>To bind a "Hello World!" alert box the dblclick event on every paragraph on the page:</p>
 * <pre><code>$("p").dblclick( function () { alert("Hello World!"); });</code></pre>
 * @example
 * <p>Double click to toggle background color.</p>
 * <pre><code>
 *     var divdbl = $("div:first");
 *     divdbl.dblclick(function () { 
 *       divdbl.toggleClass('dbl'); 
 *     });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.dblclick = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('click', handler)</code> in the first two variations, and <code>.trigger('click')</code> in the third.</p>
 * <p>The <code>click</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is pressed and released. Any HTML element can receive this event.</p>
 * <pre>For example, consider the HTML:
 * &lt;div id="target"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_03.png" alt=""/></p>
 * <p>The event handler can be bound to any <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').click(function() {
 *   alert('Handler for .click() called.');
 * });</pre>
 * <p>Now if we click on this element, the alert is displayed:</p>
 * <p><span class="output">Handler for .click() called.</span></p>
 * <p>We can also trigger the event when a different element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').click();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>click</code> event is only triggered after this exact series of events:</p>
 * <ul>
 *   <li>The mouse button is depressed while the pointer is inside the element.</li>
 *   <li>The mouse button is released while the pointer is inside the element.</li>
 * </ul>
 * <p>This is usually the desired sequence before taking an action. If this is not required, the <code>mousedown</code> or <code>mouseup</code> event may be more suitable.</p>
 * 
 * @example
 * <p>To hide paragraphs on a page when they are clicked:</p>
 * <pre><code>
 *     $("p").click(function () { 
 *       $(this).slideUp(); 
 *     });
 *     $("p").hover(function () {
 *       $(this).addClass("hilite");
 *     }, function () {
 *       $(this).removeClass("hilite");
 *     });
 * </code></pre>
 * @example
 * <p>To trigger the click event on all of the paragraphs on the page:</p>
 * <pre><code>$("p").click();</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.click = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mouseup', handler)</code> in the first variation, and <code>.trigger('mouseup')</code> in the second.</p>
 * <p>The <code>mouseup</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is released. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="target"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;
 * </pre> 
 * <p class="image"><img src="/images/0042_05_02.png" alt=""/></p>
 * <p>The event handler can be bound to any <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').mouseup(function() {
 *   alert('Handler for .mouseup() called.');
 * });
 * </pre>
 * <p>Now if we click on this element, the alert is displayed:</p>
 * <p><span class="output">Handler for .mouseup() called.</span></p>
 * <p>We can also trigger the event when a different element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').mouseup();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>If the user clicks outside an element, drags onto it, and releases the button, this is still counted as a <code>mouseup</code> event. This sequence of actions is not treated as a button press in most user interfaces, so it is usually better to use the <code>click</code> event unless we know that the <code>mouseup</code> event is preferable for a particular situation.</p>
 * 
 * @example
 * <p>Show texts when mouseup and mousedown event triggering.</p>
 * <pre><code>
 *     $("p").mouseup(function(){
 *       $(this).append('<span style="color:#F00;">Mouse up.</span>');
 *     }).mousedown(function(){
 *       $(this).append('<span style="color:#00F;">Mouse down.</span>');
 *     });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.mouseup = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('mousedown', handler)</code> in the first variation, and <code>.trigger('mousedown')</code> in the second.</p>
 * <p>The <code>mousedown</code> event is sent to an element when the mouse pointer is over the element, and the mouse button is pressed. Any HTML element can receive this event.</p>
 * <p>For example, consider the HTML:</p>
 * <pre>&lt;div id="target"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;div id="other"&gt;
 *   Trigger the handler
 * &lt;/div&gt;</pre>
 *  
 * <p class="image"><img src="/images/0042_05_01.png" alt=""/></p>
 * <p>The event handler can be bound to any <code>&lt;div&gt;</code>:</p>
 * <pre>$('#target').mousedown(function() {
 *   alert('Handler for .mousedown() called.');
 * });</pre>
 * <p>Now if we click on this element, the alert is displayed:</p>
 * <p><span class="output">Handler for .mousedown() called.</span></p>
 * <p>We can also trigger the event when a different element is clicked:</p>
 * <pre>$('#other').click(function() {
 *   $('#target').mousedown();
 * });</pre>
 * <p>After this code executes, clicks on <span class="output">Trigger the handler</span> will also alert the message.</p>
 * <p>The <code>mousedown</code> event is sent when any mouse button is clicked. To act only on specific buttons, we can use the event object's <code>which </code>property. Not all browsers support this property (Internet Explorer uses button instead), but jQuery normalizes the property so that it is safe to use in any browser. The value of <code>which</code> will be 1 for the left button, 2 for the middle button, or 3 for the right button.</p>
 * <p>This event is primarily useful for ensuring that the primary button was used to begin a drag operation; if ignored, strange results can occur when the user attempts to use a context menu. While the middle and right buttons can be detected with these properties, this is not reliable. In Opera and Safari, for example, right mouse button clicks are not detectable by default.</p>
 * <p>If the user clicks on an element, drags away from it, and releases the button, this is still counted as a <code>mousedown</code> event. This sequence of actions is treated as a "canceling" of the button press in most user interfaces, so it is usually better to use the <code>click</code> event unless we know that the <code>mousedown</code> event is preferable for a particular situation.</p>
 * 
 * 
 * @example
 * <p>Show texts when mouseup and mousedown event triggering.</p>
 * <pre><code>
 *     $("p").mouseup(function(){
 *       $(this).append('<span style="color:#F00;">Mouse up.</span>');
 *     }).mousedown(function(){
 *       $(this).append('<span style="color:#00F;">Mouse down.</span>');
 *     });
 * 
 * </code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.mousedown = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "error" JavaScript event.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('error', handler)</code>.</p>
 * <p>The <code>error</code> event is sent to elements, such as images, that are referenced by a document and loaded by the browser. It is called if the element was not loaded correctly.</p>
 * <p>For example, consider a page with a simple image element:</p>
 * <pre>&lt;img alt="Book" id="book" /&gt;</pre>
 * <p>The event handler can be bound to the image:</p>
 * <pre>$('#book')
 *   .error(function() {
 *     alert('Handler for .error() called.')
 *   })
 *   .attr("src", "missing.png");
 * </pre>
 * <p>If the image cannot be loaded (for example, because it is not present at the supplied URL), the alert  is displayed:</p>
 * <p><span class="output">Handler for .error() called.</span></p>
 * <blockquote><p>The event handler <em>must</em> be attached before the browser fires the error event, which is why the example sets the src attribute after attaching the handler. Also, the error event may not be correctly fired when the page is served locally; <code>error</code> relies on HTTP status codes and will generally not be triggered if the URL uses the <code>file:</code> protocol.</p>
 * </blockquote>
 * <p>Note: A jQuery error event handler should not be attached to the window object. The browser fires the window's error event when a script error occurs. However, the window error event receives different arguments and has different return value requirements than conventional event handlers. Use <code>window.onerror</code> instead.
 * </p>
 * 
 * @example
 * <p>To hide the "broken image" icons for IE users, you can try:</p>
 * <pre><code>$("img")
 *   .error(function(){
 *     $(this).hide();
 *   })
 *   .attr("src", "missing.png");</code></pre>
 * 
 * @param {Function} handler A function to execute when the event is triggered.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.error = function(handler) {return new jQuery();};

/**
 * Bind an event handler to the "unload" JavaScript event.
 * 
 * 
 * <p>This method is a shortcut for <code>.bind('unload', handler)</code>.</p>
 * <p>The <code>unload</code> event is sent to the <code>window</code> element when the user navigates away from the page. This could mean one of many things. The user could have clicked on a link to leave the page, or typed in a new URL in the address bar. The forward and back buttons will trigger the event. Closing the browser window will cause the event to be triggered. Even a page reload will first create an <code>unload</code> event.</p>
 * <blockquote><p>The exact handling of the <code>unload</code> event has varied from version to version of browsers. For example, some versions of Firefox trigger the event when a link is followed, but not when the window is closed. In practical usage, behavior should be tested on all supported browsers, and contrasted with the proprietary <code>beforeunload</code> event.</p></blockquote>
 * <p>Any <code>unload</code> event handler should be bound to the <code>window</code> object:</p>
 * <pre>$(window).unload(function() {
 *   alert('Handler for .unload() called.');
 * });
 * </pre>
 * <p>After this code executes, the alert will be displayed whenever the browser leaves the current page.
 * It is not possible to cancel the <code>unload</code> event with <code>.preventDefault()</code>. This event is available so that scripts can perform cleanup when the user leaves the page.
 * </p>
 * 
 * @example
 * <p>To display an alert when a page is unloaded:</p>
 * <pre><code>$(window).unload( function () { alert("Bye now!"); } );</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.unload = function(eventData, handler) {return new jQuery();};

/**
 * Bind an event handler to the "load" JavaScript event.
 * 
 * 
 *   <p>This method is a shortcut for <code>.bind('load', handler)</code>.</p>
 *   <p>The <code>load</code> event is sent to an element when it and all sub-elements have been completely loaded. This event can be sent to any element associated with a URL: images, scripts, frames, iframes, and the <code>window</code> object.</p>
 * <p>For example, consider a page with a simple image:</p>
 * <pre>&lt;img src="book.png" alt="Book" id="book" /&gt;</pre>
 * <p>The event handler can be bound to the image:</p>
 * <pre>$('#book').load(function() {
 *   // Handler for .load() called.
 * });</pre>
 * <p>As soon as the image has been loaded, the handler is called.</p>
 * <p>In general, it is not necessary to wait for all images to be fully loaded. If code can be executed earlier, it is usually best to place it in a handler sent to the <code>.ready()</code> method.
 * </p>
 * <blockquote><p>The Ajax module also has a method named <code><a href="/load">.load()</a></code>. Which one is fired depends on the set of arguments passed.</p></blockquote>
 * <blockquote><p>
 * <b>Caveats of the <code>load</code> event when used with images</b>
 * <p>A common challenge developers attempt to solve using the <code>.load()</code> shortcut is to execute a function when an image (or collection of images) have completely loaded. There are several known caveats with this that should be noted. These are:</p>
 * <ul><li>It doesn't work consistently nor reliably cross-browser</li>
 * <li>It doesn't fire correctly in WebKit if the image src is set to the same src as before</li>
 * <li>It doesn't correctly bubble up the DOM tree</li>
 * <li>Can cease to fire for images that already live in the browser's cache</li>
 * </ul></p></blockquote>
 * <blockquote><p><strong>Note:</strong> The <code>.live()</code> and <code>.delegate()</code> methods cannot be used to detect the <code>load</code> event of an iframe. The load event does not correctly bubble up the parent document and the event.target isn't set by Firefox, IE9 or Chrome, which is required to do event delegation.</p></blockquote>
 * <blockquote><p><strong>Note:</strong> When calling <code>.load()</code> using a URL without a suffixed selector expression, the content is passed to <code>.html()</code> prior to scripts being removed. This executes the script blocks before they are discarded. If <code>.load()</code> is however called with a selector expression appended to the URL, the scripts are stripped out prior to the DOM being updated, which is why they are never executed. An example of both cases can be seen below:
 * </p></blockquote>
 * <p>Here, any JavaScript loaded into <code>#a</code> as a part of the document will successfully execute.</p>
 * <pre>
 * $('#a').load('article.html');
 * </pre>
 * <p>However in this case, script blocks in the document being loaded into <code>#b</code> are stripped out prior to being executed:</p>
 * <pre>
 * $('#b').load('article.html #target');
 * </pre>
 * 
 * @example
 * <p>Run a function when the page is fully loaded including graphics.</p>
 * <pre><code>$(window).load(function () {
 *   // run code
 * });</code></pre>
 * @example
 * <p>Add the class bigImg to all images with height greater then 100 upon each image load.</p>
 * <pre><code>$('img.userIcon').load(function(){
 *   if($(this).height() > 100) {
 *     $(this).addClass('bigImg');
 *   }
 * });</code></pre>
 * 
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.load = function(eventData, handler) {return new jQuery();};

/**
 * Remove an event handler previously attached using <code>.live()</code> from the elements.
 * 
 * 
 * <p>Any handler that has been attached with <code>.live()</code> can be removed with <code>.die()</code>. This method is analogous to <code>.unbind()</code>, which is used to remove handlers attached with <code>.bind()</code>.
 * See the discussions of <code>.live()</code> and <code>.unbind()</code> for further details.</p>
 * <p><strong>Note:</strong> In order for <code>.die()</code> to function correctly, the selector used with it must match exactly the selector initially used with <code>.live()</code>.</p>
 * 
 * @example
 * <p>Can bind and unbind events to the colored button.</p>
 * <pre><code>
 * 
 * function aClick() {
 *   $("div").show().fadeOut("slow");
 * }
 * $("#bind").click(function () {
 *   $("#theone").live("click", aClick)
 *               .text("Can Click!");
 * });
 * $("#unbind").click(function () {
 *   $("#theone").die("click", aClick)
 *               .text("Does nothing...");
 * });
 * 
 * </code></pre>
 * @example
 * <p>To unbind all live events from all paragraphs, write:</p>
 * <pre><code>$("p").die()</code></pre>
 * @example
 * <p>To unbind all live click events from all paragraphs, write:</p>
 * <pre><code>$("p").die( "click" )</code></pre>
 * @example
 * <p>To unbind just one previously bound handler, pass the function in as the second argument:</p>
 * <pre><code>var foo = function () {
 * // code to handle some kind of event
 * };
 * 
 * $("p").live("click", foo); // ... now foo will be called when paragraphs are clicked ...
 * 
 * $("p").die("click", foo); // ... foo will no longer be called.</code></pre>
 * 
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>keydown</code>.
 * @param {String} handler The function that is no longer to be executed.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.prototype.die = function(eventType, handler) {return new jQuery();};

/**
 * Attach a handler to the event for all elements which match the current selector, now and in the future.
 * 
 * 
 *   <p>This method is a variation on the basic <code>.bind()</code> method for attaching event handlers to elements. When <code>.bind()</code> is called, the elements that the jQuery object refers to get the handler attached; elements that get introduced later do not, so they would require another <code>.bind()</code> call. For instance, consider the HTML:</p>
 * <pre>&lt;body&gt;
 *   &lt;div class="clickme"&gt;
 *     Click here
 *   &lt;/div&gt;
 * &lt;/body&gt;
 * </pre>
 *   <p>To bind a simple click handler to this element:</p>
 * <pre>$('.clickme').bind('click', function() {
 *   // Bound handler called.
 * });
 * </pre>
 *   <p>When the element is clicked, the handler is called. However, suppose that after this, another element is added:
 *   </p>
 *   <pre>$('body').append('&lt;div class="clickme"&gt;Another target&lt;/div&gt;');</pre>
 *   <p>This new element also matches the selector <code>.clickme</code>, but since it was added after the call to <code>.bind()</code>, clicks on it will do nothing.</p>
 *   <p>The <code>.live()</code> method provides an alternative to this behavior. To bind a click handler to the target element using this method:</p>
 * <pre>$('.clickme').live('click', function() {
 *   // Live handler called.
 * });</pre>
 *   <p>And then later add a new element:</p>
 *   <pre>$('body').append('&lt;div class="clickme"&gt;Another target&lt;/div&gt;');</pre>
 *   <p>Then clicks on the new element will also trigger the handler.</p>
 *   <p>To <em>unbind</em> the click handlers from all <code>&lt;div class="clickme"&gt;</code> that were bound using <code>.live()</code>, use the <code><a href="http://api.jquery.com/die/">.die()</a></code> method:</p>
 * <pre>$(".clickme").die("click");</pre>
 *   <h4 id="event-delegation">Event Delegation</h4>
 *   <p>The <code>.live()</code> method is able to affect elements that have not yet been added to the DOM through the use of event delegation: a handler bound to an ancestor element is responsible for events that are triggered on its descendants. The handler passed to <code>.live()</code> is never bound to an element; instead, <code>.live()</code> binds a special handler to the root of the DOM tree. In the example above, when the new element is clicked, the following steps occur:</p>
 *   <ol>
 *     <li>A click event is generated and passed to the <code>&lt;div&gt;</code> for handling.</li>
 *     <li>No handler is directly bound to the <code>&lt;div&gt;</code>, so the event bubbles up the DOM tree.</li>
 *     <li>The event bubbles up until it reaches the root of the tree, which is where <code>.live()</code> binds its special handlers by default. <br/><em>* As of jQuery 1.4, event bubbling can optionally stop at a DOM element "context".</em></li>
 *     <li>The special <code>click</code> handler bound by <code>.live()</code> executes.</li>
 *     <li>This handler tests the <code>target</code> of the event object to see whether it should continue. This test is performed by checking if <code>$(event.target).closest(".clickme")</code> is able to locate a matching element.</li>
 *     <li>If a matching element is found, the original handler is called on it.</li>
 *   </ol>
 *   <p>Because the test in step 5 is not performed until the event occurs, elements can be added at any time and still respond to events.</p>
 *   <p>See the discussion for <code><a href="/bind">.bind()</a></code> for more information on event binding.</p>
 * 
 *   <h4 id="multiple-events">Multiple Events</h4>
 *   <p>As of jQuery 1.4.1 <code>.live()</code> can accept multiple, space-separated events, similar to the functionality provided in <a href="/bind">.bind()</a>. For example, you can "live bind" the <code>mouseover</code> and <code>mouseout</code> events at the same time like so: </p>
 * <pre>$(".hoverme").live("mouseover mouseout", function(event) {
 *   if ( event.type == "mouseover" ) {
 *     // do something on mouseover
 *   } else {
 *     // do something on mouseout
 *   }
 * });</pre>
 *   <p>As of jQuery 1.4.3, you can bind multiple live event handlers simultaneously by passing a map of event type/handler pairs:</p>
 * 
 * <pre>$("a").live({
 *   click: function() {
 *     // do something on click
 *   },
 *   mouseover: function() {
 *     // do something on mouseover
 *   }
 * });</pre>
 *   <h4 id="event-data">Event Data</h4>
 *   <p>As of jQuery 1.4, the optional <code>eventData</code> parameter is available for passing additional information to the handler. One handy use of this parameter is to work around issues caused by closures. See the <code>.bind()</code> method's "<a href="/bind/#passing-event-data">Passing Event Data</a>" discussion for more information.</p>
 *   <h4 id="event-context">Event Context</h4>
 *   <p>As of jQuery 1.4, live events can be bound to a DOM element "context" rather than to the default document root. To set this context, use the <a href="http://api.jquery.com/jquery/#selector-context"><code>jQuery()</code> function's second argument</a>, passing in a single DOM element (as opposed to a jQuery collection or a selector).</p>
 * <pre>$("div.clickme", $("#container")[0]).live("click", function() {
 *   // Live handler called.
 * });</pre>
 *   <p>The live handler in this example is called only when <code>&lt;div class="clickme"&gt;</code> is a descendant of an element with an ID of "container."</p>
 *   <h4 id="caveats">Caveats</h4>
 *   <p>The <code>.live()</code> technique is useful, but due to its special approach cannot be simply substituted for <code>.bind()</code> in all cases. Specific differences include:</p>
 *   <ul>
 *     <li>DOM traversal methods are not supported for finding elements to send to <code>.live()</code>. Rather, the <code>.live()</code> method should always be called directly after a selector, as in the example above.</li>
 *     <li>To stop further handlers from executing after one bound using <code>.live()</code>, the handler must return <code>false</code>. Calling <code>.stopPropagation()</code> will not accomplish this.</li>
 *     <li>The <code>paste</code> and <code>reset</code> events, in addition to <code>change</code> when used with inputs of type "file," are not fully supported by the <code>.live()</code> method, due to issues with simulating event bubbling in Internet Explorer. In these cases, the <code>.bind()</code> method can be used instead.</li>
 *     <li>In <b>jQuery 1.3.x</b> only the following JavaScript events (in addition to custom events) could be bound with <code>.live()</code>: <code>click</code>, <code>dblclick</code>, <code>keydown</code>, <code>keypress</code>, <code>keyup</code>, <code>mousedown</code>, <code>mousemove</code>, <code>mouseout</code>, <code>mouseover</code>, and <code>mouseup</code>.</li>
 *   </ul>
 *   <blockquote>
 *     <ul>
 *       <li>As of <b>jQuery 1.4</b> the <code>.live()</code> method supports custom events as well as all <em>JavaScript events that bubble</em>.</li>
 *       <li>As of <b>jQuery 1.4.1</b> even <code>focus</code> and <code>blur</code> work with live (mapping to the more appropriate, bubbling, events <code>focusin</code> and <code>focusout</code>).</li>
 *       <li>As of <b>jQuery 1.4.1</b> the <code>hover</code> event can be specified (mapping to <code>mouseenter</code> and  <code>mouseleave</code>, which, in turn, are mapped to <code>mouseover</code> and <code>mouseout</code>).</li>
 *     </ul>
 *   </blockquote>
 * 
 * @example
 * <p>Click a paragraph to add another. Note that .live() binds the click event to all paragraphs - even new ones.</p>
 * <pre><code>
 * $("p").live("click", function(){
 *   $(this).after("<p>Another paragraph!</p>");
 * });
 * </code></pre>
 * @example
 * <p>Cancel a default action and prevent it from bubbling up by returning false.</p>
 * <pre><code>$("a").live("click", function() { return false; })</code></pre>
 * @example
 * <p>Cancel only the default action by using the preventDefault method.</p>
 * <pre><code>$("a").live("click", function(event){
 *   event.preventDefault();
 * });</code></pre>
 * @example
 * <p>Bind custom events with .live().</p>
 * <pre><code>
 * $("p").live("myCustomEvent", function(e, myName, myValue) {
 *   $(this).text("Hi there!");
 *   $("span").stop().css("opacity", 1)
 *            .text("myName = " + myName)
 *            .fadeIn(30).fadeOut(1000);
 * });
 * $("button").click(function () {
 *   $("p").trigger("myCustomEvent");
 * });
 * </code></pre>
 * @example
 * <p>Use a map to bind multiple live event handlers. Note that .live() binds the click, mouseover, and mouseout events to all paragraphs — even new ones.</p>
 * <pre><code>
 * $("p").live({
 *   click: function() {
 *     $(this).after("<p>Another paragraph!</p>");
 *   },
 *   mouseover: function() {
 *     $(this).addClass("over");
 *   },
 *   mouseout: function() {
 *     $(this).removeClass("over");
 *   }
 * });
 * </code></pre>
 * 
 * @param {String} eventType A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names, as well.
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.live = function(eventType, eventData, handler) {return new jQuery();};

/**
 * Execute all handlers and behaviors attached to the matched elements for the given event type.
 * 
 * 
 *     <p>Any event handlers attached with <code>.bind()</code> or one of its shortcut methods are triggered when the corresponding event occurs. They can be fired manually, however, with the <code>.trigger()</code> method. A call to <code>.trigger()</code> executes the handlers in the same order they would be if the event were triggered naturally by the user:</p>
 *     <pre>$('#foo').bind('click', function() {
 *       alert($(this).text());
 *     });
 *     $('#foo').trigger('click');</pre>
 *     <p>As of jQuery 1.3, <code>.trigger()</code>ed events bubble up the DOM tree; an event handler can stop the bubbling by returning <code>false</code> from the handler or calling the <a href="http://api.jquery.com/event.stopPropagation/"><code>.stopPropagation()</code></a> method on the event object passed into the event. Although <code>.trigger()</code> simulates an event activation, complete with a synthesized event object, it does not perfectly replicate a naturally-occurring event.</p>
 *     <p>To trigger handlers bound via jQuery without also triggering the native event, use <a href="http://api.jquery.com/triggerHandler/"><code>.triggerHandler()</code></a> instead. </p>
 *     <p>When we define a custom event type using the <code>.bind()</code> method, the second argument to <code>.trigger()</code> can become useful. For example, suppose we have bound a handler for the <code>custom</code> event to our element instead of the built-in <code>click</code> event as we did above:</p>
 * <pre>$('#foo').bind('custom', function(event, param1, param2) {
 *   alert(param1 + "\n" + param2);
 * });
 * $('#foo').trigger('custom', ['Custom', 'Event']);
 * </pre>
 *     <p>The event object is always passed as the first parameter to an event handler, but if additional parameters are specified during a <code>.trigger()</code> call, these parameters will be passed along to the handler as well. To pass more than one parameter, use an array as shown here. As of jQuery 1.6.2, a single parameter can be passed without using an array.</p>
 *     <p>Note the difference between the extra parameters we're passing here and the <code>eventData</code> parameter to the <a href="/bind/">.bind()</a> method. Both are mechanisms for passing information to an event handler, but the <code>extraParameters</code> argument to <code>.trigger()</code> allows information to be determined at the time the event is triggered, while the <code>eventData</code> argument to <code>.bind()</code> requires the information to be already computed at the time the handler is bound.</p>    
 *   
 * @example
 * <p>Clicks to button #2 also trigger a click for button #1.</p>
 * <pre><code>
 * $("button:first").click(function () {
 * update($("span:first"));
 * });
 * $("button:last").click(function () {
 * $("button:first").trigger('click');
 * 
 * update($("span:last"));
 * });
 * 
 * function update(j) {
 * var n = parseInt(j.text(), 10);
 * j.text(n + 1);
 * }
 * </code></pre>
 * @example
 * <p>To submit the first form without using the submit() function, try:</p>
 * <pre><code>$("form:first").trigger("submit")</code></pre>
 * @example
 * <p>To submit the first form without using the submit() function, try:</p>
 * <pre><code>var event = jQuery.Event("submit");
 * $("form:first").trigger(event);
 * if ( event.isDefaultPrevented() ) {
 * // Perform an action...
 * }</code></pre>
 * @example
 * <p>To pass arbitrary data to an event:</p>
 * <pre><code>$("p").click( function (event, a, b) {
 * // when a normal click fires, a and b are undefined
 * // for a trigger like below a refers to "foo" and b refers to "bar"
 * 
 * } ).trigger("click", ["foo", "bar"]);</code></pre>
 * @example
 * <p>To pass arbitrary data through an event object:</p>
 * <pre><code>var event = jQuery.Event("logged");
 * event.user = "foo";
 * event.pass = "bar";
 * $("body").trigger(event);</code></pre>
 * @example
 * <p>Alternative way to pass data through an event object:</p>
 * <pre><code>$("body").trigger({
 * type:"logged",
 * user:"foo",
 * pass:"bar"
 * 
 * });</code></pre>
 * 
 * @param {Event} event A <a href="http://api.jquery.com/category/events/event-object/"><code>jQuery.Event</code></a> object.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.prototype.trigger = function(event) {return new jQuery();};

/**
 * Remove a previously-attached event handler from the elements.
 * 
 * 
 *     <p>Any handler that has been attached with <code>.bind()</code> can be removed with <code>.unbind()</code>. In the simplest case, with no arguments, <code>.unbind()</code> removes all handlers attached to the elements:</p>
 * <pre>$('#foo').unbind();</pre>
 * <p>This version removes the handlers regardless of type. To be more precise, we can pass an event type:</p>
 * <pre>$('#foo').unbind('click');</pre>
 * <p>By specifying the <code>click</code> event type, only handlers for that event type will be unbound. This approach can still have negative ramifications if other scripts might be attaching behaviors to the same element, however. Robust and extensible applications typically demand the two-argument version for this reason:</p>
 * <pre>var handler = function() {
 *   alert('The quick brown fox jumps over the lazy dog.');
 * };
 * $('#foo').bind('click', handler);
 * $('#foo').unbind('click', handler);
 * </pre>
 * <p>By naming the handler, we can be assured that no other functions are caught in the crossfire. Note that the following will <em>not</em> work:</p>
 * <pre>$('#foo').bind('click', function() {
 *   alert('The quick brown fox jumps over the lazy dog.');
 * });
 * 
 * // will NOT work
 * $('#foo').unbind('click', function() {
 *   alert('The quick brown fox jumps over the lazy dog.');
 * });</pre>
 * <p>Even though the two functions are identical in content, they are created separately and so JavaScript is free to keep them as distinct function objects. To unbind a particular handler, we need a reference to that function and not a different one that happens to do the same thing.</p>
 * <blockquote><p><strong>Note: </strong>Because the <code><a href="http://api.jquery.com/live/">.live()</a></code> method binds event handlers to <code>document</code> by default, calling .unbind() on <code>document</code> will unbind the handlers bound by <code>.live()</code>, as well. For example, <code>$(document).unbind('click');</code> will remove not only <code>$(document).bind('click', fn1)</code> <br/>but also <br/> <code>$('a.foo').live('click', fn2)</code>.</p></blockquote>
 * <h4>Using Namespaces</h4>
 * <p>Instead of maintaining references to handlers in order to unbind them, we can namespace the events and use this capability to narrow the scope of our unbinding actions. As shown in the discussion for the <code>.bind()</code> method, namespaces are defined by using a period (<code>.</code>) character when binding a handler:</p>
 * <pre>$('#foo').bind('click.myEvents', handler);</pre>
 * <p>When a handler is bound in this fashion, we can still unbind it the normal way:</p>
 * <pre>$('#foo').unbind('click');</pre>
 * <p>However, if we want to avoid affecting other handlers, we can be more specific:</p>
 * <pre>$('#foo').unbind('click.myEvents');</pre>
 * <p>If multiple namespaced handlers are bound, we can unbind them at once:</p>
 * <pre>$('#foo').unbind('click.myEvents.yourEvents');</pre>
 * <p>This syntax is similar to that used for CSS class selectors; they are not hierarchical. This method call is thus the same as:</p>
 * <pre>$('#foo').unbind('click.yourEvents.myEvents');</pre>
 * <p>We can also unbind all of the handlers in a namespace, regardless of event type:</p>
 * <pre>$('#foo').unbind('.myEvents');</pre>
 * <p>It is particularly useful to attach namespaces to event bindings when we are developing plug-ins or otherwise writing code that may interact with other event-handling code in the future.</p>
 * <h4>Using the Event Object</h4>
 * <p>The third form of the <code>.unbind()</code> method is used when we wish to unbind a handler from within itself. For example, suppose we wish to trigger an event handler only three times:</p>
 * <pre>var timesClicked = 0;
 * $('#foo').bind('click', function(event) {
 *   alert('The quick brown fox jumps over the lazy dog.');
 *   timesClicked++;
 *   if (timesClicked &gt;= 3) {
 *     $(this).unbind(event);
 *   }
 * });
 * </pre>
 * <p>The handler in this case must take a parameter, so that we can capture the event object and use it to unbind the handler after the third click. The event object contains the context necessary for <code>.unbind()</code> to know which handler to remove.
 * This example is also an illustration of a closure. Since the handler refers to the <code>timesClicked</code> variable, which is defined outside the function, incrementing the variable has an effect even between invocations of the handler.</p>
 * 
 * @example
 * <p>Can bind and unbind events to the colored button.</p>
 * <pre><code>
 * 
 * function aClick() {
 * $("div").show().fadeOut("slow");
 * }
 * $("#bind").click(function () {
 * // could use .bind('click', aClick) instead but for variety...
 * $("#theone").click(aClick)
 *   .text("Can Click!");
 * });
 * $("#unbind").click(function () {
 * $("#theone").unbind('click', aClick)
 *   .text("Does nothing...");
 * });
 * 
 * </code></pre>
 * @example
 * <p>To unbind all events from all paragraphs, write:</p>
 * <pre><code>$("p").unbind()</code></pre>
 * @example
 * <p>To unbind all click events from all paragraphs, write:</p>
 * <pre><code>$("p").unbind( "click" )</code></pre>
 * @example
 * <p>To unbind just one previously bound handler, pass the function in as the second argument:</p>
 * <pre><code>var foo = function () {
 * // code to handle some kind of event
 * };
 * 
 * $("p").bind("click", foo); // ... now foo will be called when paragraphs are clicked ...
 * 
 * $("p").unbind("click", foo); // ... foo will no longer be called.</code></pre>
 * 
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Boolean} _false Unbinds the corresponding 'return false' function that was bound using <code>.bind( eventType, false )</code>.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.unbind = function(eventType, _false) {return new jQuery();};

/**
 * Attach a handler to an event for the elements.
 * 
 * <p>The <code>.bind()</code> method is the primary means of attaching behavior to a document. All JavaScript event types, such as <code>focus</code>, <code>mouseover</code>, and <code>resize</code>, are allowed for <code>eventType.</code> (The <code>beforeunload</code> and <code>error</code> events on the <code>window</code> object use nonstandard conventions and are not supported by jQuery; attach a handler directly to the <code>window</code> object instead.) </p>
 * <p>The jQuery library provides shortcut methods for binding the standard event types, such as <code>.click()</code> for <code>.bind('click')</code>. A description of each can be found in the discussion of its shortcut method: <a href="/blur">blur</a>, <a href="/focus">focus</a>, <a href="/focusin">focusin</a>, <a href="/focusout">focusout</a>, <a href="/load-event">load</a>, <a href="/resize">resize</a>, <a href="/scroll">scroll</a>, <a href="/unload">unload</a>, <a href="/click">click</a>, <a href="/dblclick">dblclick</a>, <a href="/mousedown">mousedown</a>, <a href="/mouseup">mouseup</a>, <a href="/mousemove">mousemove</a>, <a href="/mouseover">mouseover</a>, <a href="/mouseout">mouseout</a>, <a href="/mouseenter">mouseenter</a>, <a href="/mouseleave">mouseleave</a>, <a href="/change">change</a>, <a href="/select">select</a>, <a href="/submit">submit</a>, <a href="/keydown">keydown</a>, <a href="/keypress">keypress</a>, <a href="/keyup">keyup</a>,  <a href="/error">error</a></p>
 * 
 * <p>Any string is legal for <code>eventType</code>; if the string is not the name of a native JavaScript event, then the handler is bound to a custom event. These events are never called by the browser, but may be triggered manually from other JavaScript code using <code>.trigger()</code> or <code>.triggerHandler()</code>.</p>
 * <p>If the <code>eventType</code> string contains a period (<code>.</code>) character, then the event is namespaced. The period character separates the event from its namespace. For example, in the call <code>.bind('click.name', handler)</code>, the string <code>click</code> is the event type, and the string <code>name</code> is the namespace. Namespacing allows us to unbind or trigger some events of a type without affecting others. See the discussion of <code>.unbind()</code> for more information.</p>
 * <p>When an event reaches an element, all handlers bound to that event type for the element are fired. If there are multiple handlers registered, they will always execute in the order in which they were bound. After all handlers have executed, the event continues along the normal event propagation path.</p>
 * <p>A basic usage of <code>.bind()</code> is:</p>
 * <pre>
 * $('#foo').bind('click', function() {
 *   alert('User clicked on "foo."');
 * });
 * </pre>
 * <p>This code will cause the element with an ID of <code>foo</code> to respond to the <code>click</code> event. When a user clicks inside this element thereafter, the alert will be shown.</p>
 * <h4 id="multiple-events">Multiple Events</h4>
 * <p>Multiple event types can be bound at once by including each one separated by a space:</p>
 * <pre>
 * $('#foo').bind('mouseenter mouseleave', function() {
 *   $(this).toggleClass('entered');
 * });
 * </pre>
 * <p>The effect of this on <code>&lt;div id="foo"&gt;</code> (when it does not initially have the "entered" class) is to add the "entered" class when the mouse enters the <code>&lt;div&gt;</code> and remove the class when the mouse leaves. </p>
 * <p>As of jQuery 1.4 we can bind multiple event handlers simultaneously by passing a map of event type/handler pairs:</p>
 * <pre>
 * $('#foo').bind({
 *   click: function() {
 *     // do something on click
 *   },
 *   mouseenter: function() {
 *     // do something on mouseenter
 *   }
 * });
 * </pre>
 * <h4 id="event-handlers">Event Handlers</h4>
 * <p>The <code>handler</code> parameter takes a callback function, as shown above. Within the handler, the keyword <code>this</code> refers to the DOM element to which the handler is bound. To make use of the element in jQuery, it can be passed to the normal <code>$()</code> function. For example:</p>
 * <pre>$('#foo').bind('click', function() {
 *   alert($(this).text());
 * });
 * </pre>
 * <p>After this code is executed, when the user clicks inside the element with an ID of <code>foo</code>, its text contents will be shown as an alert.
 * </p>
 * <p>As of jQuery 1.4.2 duplicate event handlers can be bound to an element instead of being discarded. For example:</p>
 * <pre>function test(){ alert("Hello"); }
 * $("button").click( test );
 * $("button").click( test );</pre>
 * <p>The above will generate two alerts when the button is clicked.</p>
 * 
 * <p>In jQuery 1.4.3 you can now pass in 'false' in place of an event handler. This will bind an event handler that's equivalent to: <code>function(){ return false; }</code>. This function can be removed at a later time by calling: <code>.unbind( eventName, false )</code>.</p>
 * 
 * <h4 id="event-object"><a href="/category/events/event-object/">The Event object</a></h4>
 * <p>The <code>handler</code> callback function can also take parameters. When the function is called, the JavaScript event object will be passed to the first parameter.</p>
 * <p>The event object is often unnecessary and the parameter omitted, as sufficient context is usually available when the handler is bound to know exactly what needs to be done when the handler is triggered. However, at times it becomes necessary to gather more information about the user's environment at the time the event was initiated. <a href="/category/events/event-object/">View the full Event Object</a>.</p>
 * 
 * <p>Returning <code>false</code> from a handler is equivalent to calling both <code>.preventDefault()</code> and <code>.stopPropagation()</code> on the event object.</p>
 * <p>Using the event object in a handler looks like this:</p>
 * <pre>$(document).ready(function() {
 *   $('#foo').bind('click', function(event) {
 *     alert('The mouse cursor is at ('
 *       + event.pageX + ', ' + event.pageY + ')');
 *   });
 * });
 * </pre>
 * <p>Note the parameter added to the anonymous function. This code will cause a click on the element with ID <code>foo</code> to report the page coordinates of the mouse cursor at the time of the click.</p>
 * 
 * <h4 id="passing-event-data">Passing Event Data</h4>
 * <p>The optional <code>eventData</code> parameter is not commonly used. When provided, this argument allows us to pass additional information to the handler. One handy use of this parameter is to work around issues caused by closures. For example, suppose we have two event handlers that both refer to the same external variable:</p>
 * <pre>var message = 'Spoon!';
 * $('#foo').bind('click', function() {
 *   alert(message);
 * });
 * message = 'Not in the face!';
 * $('#bar').bind('click', function() {
 *   alert(message);
 * });
 * </pre>
 * <p>Because the handlers are closures that both have <code>message</code> in their environment, both will display the message <span class="output">Not in the face!</span> when triggered. The variable's value has changed. To sidestep this, we can pass the message in using <code>eventData</code>:
 * </p>
 * <pre>var message = 'Spoon!';
 * $('#foo').bind('click', {msg: message}, function(event) {
 *   alert(event.data.msg);
 * });
 * message = 'Not in the face!';
 * $('#bar').bind('click', {msg: message}, function(event) {
 *   alert(event.data.msg);
 * });
 * </pre>
 * <p>This time the variable is not referred to directly within the handlers; instead, the variable is passed in <em>by value</em> through <code>eventData</code>, which fixes the value at the time the event is bound. The first handler will now display <span class="output">Spoon!</span> while the second will alert <span class="output">Not in the face!</span>
 * </p>
 * <blockquote>
 *   <p>Note that objects are passed to functions <em>by reference</em>, which further complicates this scenario.</p>
 * </blockquote>
 * <p>If <code>eventData</code> is present, it is the second argument to the <code>.bind()</code> method; if no additional data needs to be sent to the handler, then the callback is passed as the second and final argument.</p>
 * <blockquote><p>See the <code>.trigger()</code> method reference for a way to pass data to a handler at the time the event happens rather than when the handler is bound.</p></blockquote>
 * 
 * <p>As of jQuery 1.4 we can no longer attach data (and thus, events) to object, embed, or applet elements because critical errors occur when attaching data to Java applets.</p>
 * <p><strong>Note: </strong>Although demonstrated in the next example, it is inadvisable to bind handlers to both the <code>click</code> and <code>dblclick</code> events for the same element. The sequence of events triggered varies from browser to browser, with some receiving two click events before the <code>dblclick</code> and others only one. Double-click sensitivity (maximum time between clicks that is detected as a double click) can vary by operating system and browser, and is often user-configurable.</p>
 * 
 * @example
 * <p>Handle click and double-click for the paragraph.  Note: the coordinates are window relative, so in this case relative to the demo iframe.</p>
 * <pre><code>
 * $("p").bind("click", function(event){
 * var str = "( " + event.pageX + ", " + event.pageY + " )";
 * $("span").text("Click happened! " + str);
 * });
 * $("p").bind("dblclick", function(){
 * $("span").text("Double-click happened in " + this.nodeName);
 * });
 * $("p").bind("mouseenter mouseleave", function(event){
 * $(this).toggleClass("over");
 * });
 * 
 * </code></pre>
 * @example
 * <p>To display each paragraph's text in an alert box whenever it is clicked:</p>
 * <pre><code>$("p").bind("click", function(){
 * alert( $(this).text() );
 * });</code></pre>
 * @example
 * <p>You can pass some extra data before the event handler:</p>
 * <pre><code>function handler(event) {
 * alert(event.data.foo);
 * }
 * $("p").bind("click", {foo: "bar"}, handler)</code></pre>
 * @example
 * <p>Cancel a default action and prevent it from bubbling up by returning <code>false</code>:</p>
 * <pre><code>$("form").bind("submit", function() { return false; })</code></pre>
 * @example
 * <p>Cancel only the default action by using the .preventDefault() method.</p>
 * <pre><code>$("form").bind("submit", function(event) {
 * event.preventDefault();
 * });</code></pre>
 * @example
 * <p>Stop an event from bubbling without preventing the default action by using the .stopPropagation() method.</p>
 * <pre><code>$("form").bind("submit", function(event) {
 *   event.stopPropagation();
 * });</code></pre>
 * @example
 * <p>Bind custom events.</p>
 * <pre><code>
 * 
 * $("p").bind("myCustomEvent", function(e, myName, myValue){
 * $(this).text(myName + ", hi there!");
 * $("span").stop().css("opacity", 1)
 * .text("myName = " + myName)
 * .fadeIn(30).fadeOut(1000);
 * });
 * $("button").click(function () {
 * $("p").trigger("myCustomEvent", [ "John" ]);
 * });
 * 
 * </code></pre>
 * @example
 * <p>Bind multiple events simultaneously.</p>
 * <pre><code>$("div.test").bind({
 *   click: function(){
 *     $(this).addClass("active");
 *   },
 *   mouseenter: function(){
 *     $(this).addClass("inside");
 *   },
 *   mouseleave: function(){
 *     $(this).removeClass("inside");
 *   }
 * });</code></pre>
 * 
 * @param {String} eventType A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {Object} eventData A map of data that will be passed to the event handler.
 * @param {Boolean} _false Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.bind = function(eventType, eventData, _false) {return new jQuery();};

/**
 * Perform a custom animation of a set of CSS properties.
 * 
 * 
 *   <p>The <code>.animate()</code> method allows us to create animation effects on any numeric CSS property. The only required parameter is a map of CSS properties. This map is similar to the one that can be sent to the <code>.css()</code> method, except that the range of properties is more restrictive.</p>
 * 
 * <h4 id="animation-properties">Animation Properties and Values</h4>
 * <p>All animated properties should be animated to a <em>single numeric value</em>, except as noted below; most properties that are non-numeric cannot be animated using basic jQuery functionality. (For example, <code>width</code>, <code>height</code>, or <code>left</code> can be animated but <code>background-color</code> cannot be.) Property values are treated as a number of pixels unless otherwise specified. The units <code>em</code> and <code>%</code> can be specified where applicable.</p>
 * <p>In addition to style properties, some non-style properties such as <code>scrollTop</code> and <code>scrollLeft</code>, as well as custom properties, can be animated.</p>
 * <p>Shorthand CSS properties (e.g. margin, background, border) are not supported. For example, if you want to retrieve the rendered margin, use: <code>$(elem).css('marginTop')</code> and <code>$(elem).css('marginRight')</code>, and so on.</p>
 * <p>In addition to numeric values, each property can take the strings <code>'show'</code>, <code>'hide'</code>, and <code>'toggle'</code>. These shortcuts allow for custom hiding and showing animations that take into account the display type of the element.</p>
 * <p>Animated properties can also be relative. If a value is supplied with a leading <code>+=</code> or <code>-=</code> sequence of characters, then the target value is computed by adding or subtracting the given number from the current value of the property.</p>
 * <p>Unlike shorthand animation methods such as <code>.slideDown()</code> and <code>.fadeIn()</code>, the <code>.animate()</code> method does <em>not</em> make hidden elements visible as part of the effect. For example, given <code>$('someElement').hide().animate({height:'20px'}, 500)</code>, the animation will run, but <em>the element will remain hidden</em>.</p>
 * <h4 id="duration">Duration</h4>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 * 
 * <h4 id="complete">Complete Function</h4>
 * <p>If supplied, the <code>complete</code> callback function is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, the callback is executed once per matched element, not once for the animation as a whole.</p>
 * 
 * <h4 id="basic-usage">Basic Usage</h4>
 * <p>To animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123"
 *   style="position: relative; left: 10px;" /&gt;</pre>
 * <p>To animate the opacity, left offset, and height of the image simultaneously:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').animate({
 *     opacity: 0.25,
 *     left: '+=50',
 *     height: 'toggle'
 *   }, 5000, function() {
 *     // Animation complete.
 *   });
 * });
 * </pre>
 * <p class="image">
 *   <img src="/images/animate-1.jpg" alt=""/>
 * </p>
 * <p>Note that the target value of the <code>height</code> property is <code>'toggle'</code>. Since the image was visible before, the animation shrinks the height to 0 to hide it. A second click then reverses this transition:
 * </p>
 * <p class="image">
 * <img src="/images/animate-2.jpg" alt=""/>
 * </p>
 * 
 * <p>The <code>opacity</code> of the image is already at its target value, so this property is not animated by the second click. Since the target value for <code>left</code> is a relative value, the image moves even farther to the right during this second animation.</p>
 * <p>Directional properties (<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>) have no discernible effect on elements if their  <code>position</code> style property is <code>static</code>, which it is by default.</p>
 * <blockquote><p><strong>Note: </strong>The <a href="http://jqueryui.com">jQuery UI</a> project extends the <code>.animate()</code> method by allowing some non-numeric styles such as colors to be animated. The project also includes mechanisms for specifying animations through CSS classes rather than individual attributes.</p></blockquote>
 * <blockquote><p><strong>Note:</strong> if attempting to animate an element with a height or width of 0px, where contents of the element are visible due to overflow, jQuery may clip this overflow during animation. By fixing the dimensions of the original element being hidden however, it is possible to ensure that the animation runs smoothly. A <a href="http://www.google.com/search?q=clearfix">clearfix</a> can be used to automatically fix the dimensions of your main element without the need to set this manually.</p></blockquote>
 * 
 * <h4 id="step">Step Function</h4>
 * <p>The second version of <code>.animate()</code> provides a <code>step</code> option — a callback function that is fired at each step of the animation. This function is useful for enabling custom animation types or altering the animation as it is occurring. It accepts two arguments (<code>now</code> and <code>fx</code>), and <code>this</code> is set to the DOM element being animated.
 * </p>
 * <ul>
 *   <li><code>now</code>: the numeric value of the property being animated at each step</li>
 *   <li><code>fx</code>: a reference to the <code>jQuery.fx</code> prototype object, which contains a number of properties such as <code>elem</code> for the animated element, <code>start</code> and <code>end</code> for the first and last value of the animated property, respectively, and <code>prop</code> for the property being animated.</li>
 * </ul>
 * <p>Note that the <code>step</code> function is called for each animated property on each animated element. For example, given two list items, the <code>step</code> function fires four times at each step of the animation:  </p>
 * <pre>$('li').animate({
 *   opacity: .5,
 *   height: '50%'
 * },
 * {
 *   step: function(now, fx) {
 *     var data = fx.elem.id + ' ' + fx.prop + ': ' + now;
 *     $('body').append('&lt;div&gt;' + data + '&lt;/div&gt;');
 *   }
 * });</pre>
 * 
 * 
 * <h4 id="easing">Easing</h4>
 * <p>The remaining parameter of <code>.animate()</code> is a string naming an easing function to use. An easing function specifies the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com/">jQuery UI suite</a>.</p>
 * 
 * <h4 id="per-property-easing">Per-property Easing</h4>
 * <p>As of jQuery version 1.4, you can set per-property easing functions within a single <code>.animate()</code> call. In the first version of <code>.animate()</code>, each property can take an array as its value: The first member of the array is the CSS property and the second member is an easing function.  If a per-property easing function is not defined for a particular property, it uses the value of the <code>.animate()</code> method's optional easing argument. If the easing argument is not defined, the default <code>swing</code> function is used.</p>
 * <p>For example, to simultaneously animate the width and height with the <code>swing</code> easing function and the opacity with the <code>linear</code> easing function:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').animate({
 *     width: ['toggle', 'swing'],
 *     height: ['toggle', 'swing'],
 *     opacity: 'toggle'
 *   }, 5000, 'linear', function() {
 *       $(this).after('&lt;div&gt;Animation complete.&lt;/div&gt;');
 *   });
 * });</pre>
 * <p>In the second version of <code>.animate()</code>, the options map can include the <code>specialEasing</code> property, which is itself a map of CSS properties and their corresponding easing functions.  For example, to simultaneously animate the width using the <code>linear</code> easing function and the height using the <code>easeOutBounce</code> easing function:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').animate({
 *     width: 'toggle',
 *     height: 'toggle'
 *   }, {
 *     duration: 5000,
 *     specialEasing: {
 *       width: 'linear',
 *       height: 'easeOutBounce'
 *     },
 *     complete: function() {
 *       $(this).after('&lt;div&gt;Animation complete.&lt;/div&gt;');
 *     }
 *   });
 * });</pre>
 * <p>As previously noted, a plugin is required for the <code>easeOutBounce</code> function.</p>
 * 
 * 
 * @example
 * <p>Click the button to animate the div with a number of different properties.</p>
 * <pre><code>
 * 
 * / * Using multiple unit types within one animation. * /
 * 
 * $("#go").click(function(){
 *   $("#block").animate({
 *     width: "70%",
 *     opacity: 0.4,
 *     marginLeft: "0.6in",
 *     fontSize: "3em",
 *     borderWidth: "10px"
 *   }, 1500 );
 * });
 * </code></pre>
 * @example
 * <p>Animates a div's left property with a relative value. Click several times on the buttons to see the relative animations queued up.</p>
 * <pre><code>
 * $("#right").click(function(){
 *   $(".block").animate({"left": "+=50px"}, "slow");
 * });
 * 
 * $("#left").click(function(){
 *   $(".block").animate({"left": "-=50px"}, "slow");
 * });
 * 
 * </code></pre>
 * @example
 * <p>The first button shows how an unqueued animation works.  It expands the div out to 90% width <strong>while</strong> the font-size is increasing. Once the font-size change is complete, the border animation will begin.
 * 
 * The second button starts a traditional chained animation, where each animation will start once the previous animation on the element has completed.</p>
 * <pre><code>
 * 
 * $( "#go1" ).click(function(){
 *   $( "#block1" ).animate( { width: "90%" }, { queue: false, duration: 3000 })
 *      .animate({ fontSize: "24px" }, 1500 )
 *      .animate({ borderRightWidth: "15px" }, 1500 );
 * });
 * 
 * $( "#go2" ).click(function(){
 *   $( "#block2" ).animate({ width: "90%" }, 1000 )
 *      .animate({ fontSize: "24px" }, 1000 )
 *      .animate({ borderLeftWidth: "15px" }, 1000 );
 * });
 * 
 * $( "#go3" ).click(function(){
 *   $( "#go1" ).add( "#go2" ).click();
 * });
 * 
 * $( "#go4" ).click(function(){
 *   $( "div" ).css({ width: "", fontSize: "", borderWidth: "" });
 * });
 * 
 * </code></pre>
 * @example
 * <p>Animates the first div's left property and synchronizes the remaining divs, using the step function to set their left properties at each stage of the animation. </p>
 * <pre><code>
 * $( "#go" ).click(function(){
 *   $( ".block:first" ).animate({
 *     left: 100
 *   }, {
 *     duration: 1000,
 *     step: function( now, fx ){
 *       $( ".block:gt(0)" ).css( "left", now );
 *     }
 *   });
 * });
 * </code></pre>
 * @example
 * <p>Animates all paragraphs to toggle both height and opacity, completing the animation within 600 milliseconds.</p>
 * <pre><code>$( "p" ).animate({
 *   "height": "toggle", "opacity": "toggle"
 * }, "slow" );</code></pre>
 * @example
 * <p>Animates all paragraph to a left style of 50 and opacity of 1 (opaque, visible), completing the animation within 500 milliseconds.</p>
 * <pre><code>$( "p" ).animate({
 *   "left": "50", "opacity": 1
 * }, 500 );
 * </code></pre>
 * @example
 * <p>An example of using an 'easing' function to provide a different style of animation. This will only work if you have a plugin that provides this easing function.  Note, this code will do nothing unless the paragraph element is hidden.</p>
 * <pre><code>$( "p" ).animate({
 *   "opacity": "show"
 * }, "slow", "easein" );</code></pre>
 * @example
 * <p>Animates all paragraphs to toggle both height and opacity, completing the animation within 600 milliseconds.</p>
 * <pre><code>$( "p" ).animate({
 *   "height": "toggle", "opacity": "toggle"
 * }, { duration: "slow" });</code></pre>
 * @example
 * <p>Animates all paragraph to a left style of 50 and opacity of 1 (opaque, visible), completing the animation within 500 milliseconds.  It also will do it <em>outside</em> the queue, meaning it will automatically start without waiting for its turn.</p>
 * <pre><code>$( "p" ).animate({
 *   left: "50px", opacity: 1
 * }, { duration: 500, queue: false });</code></pre>
 * @example
 * <p>An example of using an 'easing' function to provide a different style of animation. This will only work if you have a plugin that provides this easing function.</p>
 * <pre><code>$( "p" ).animate({
 *   "opacity": "show"
 * }, { "duration": "slow", "easing": "easein" });</code></pre>
 * @example
 * <p>An example of using a callback function.  The first argument is an array of CSS properties, the second specifies that the animation should take 1000 milliseconds to complete, the third states the easing type, and the fourth argument is an anonymous callback function. </p>
 * <pre><code>$( "p" ).animate({
 *   height:200, width:400, opacity: .5
 * }, 1000, "linear", function(){ alert("all done"); });
 * </code></pre>
 * 
 * @param {Map} properties A map of CSS properties that the animation will move toward.
 * @param {Map} options A map of additional options to pass to the method. Supported keys:
 *         <ul>
 *         <li><code>duration</code>: A string or number determining how long the animation will run.</li>
 *         <li><code>easing</code>: A string indicating which easing function to use for the transition.</li>
 *         <li><code>complete</code>: A function to call once the animation is complete.</li>
 *         <li><code>step</code>: A function to be called after each step of the animation.</li>
 *         <li><code>queue</code>: A Boolean indicating whether to place the animation in the effects queue. If <code>false</code>, the animation will begin immediately.</li>
 *         <li><code>specialEasing</code>: A map of one or more of the CSS properties defined by the properties argument and their corresponding easing functions (added 1.4).</li>
 *         </ul>
 *         
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.animate = function(properties, options) {return new jQuery();};

/**
 * Adjust the opacity of the matched elements.
 * 
 * 
 *   <p>The <code>.fadeTo()</code> method animates the opacity of the matched elements.</p>
 *   <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, the default duration of  <code>400</code> milliseconds is used. Unlike the other effect methods, <code>.fadeTo()</code> requires that <code>duration</code> be explicitly specified.</p>
 *   <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 *   <p>We can animate any element, such as a simple image:</p>
 *   <pre>&lt;div id="clickme"&gt;
 *     Click here
 *   &lt;/div&gt;
 *   &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 *   With the element initially shown, we can dim it slowly:
 *   $('#clickme').click(function() {
 *     $('#book').fadeTo('slow', 0.5, function() {
 *       // Animation complete.
 *     });
 *   });
 *   </pre>
 *   <p class="image four-across"> 
 *     <img src="/images/0042_06_41.png" alt=""/>
 *     <img src="/images/0042_06_42.png" alt=""/>
 *     <img src="/images/0042_06_43.png" alt=""/>
 *     <img src="/images/0042_06_44.png" alt=""/>
 *   </p>
 *   <p>With <code>duration</code> set to <code>0</code>, this method just changes the <code>opacity</code> CSS property, so <code>.fadeTo(0, opacity)</code> is the same as <code>.css('opacity', opacity)</code>.</p>
 * 
 * @example
 * <p>Animates first paragraph to fade to an opacity of 0.33 (33%, about one third visible), completing the animation within 600 milliseconds.</p>
 * <pre><code>
 * $("p:first").click(function () {
 * $(this).fadeTo("slow", 0.33);
 * });
 * </code></pre>
 * @example
 * <p>Fade div to a random opacity on each click, completing the animation within 200 milliseconds.</p>
 * <pre><code>
 * $("div").click(function () {
 * $(this).fadeTo("fast", Math.random());
 * });
 * </code></pre>
 * @example
 * <p>Find the right answer!  The fade will take 250 milliseconds and change various styles when it completes.</p>
 * <pre><code>
 * var getPos = function (n) {
 * return (Math.floor(n) * 90) + "px";
 * };
 * $("p").each(function (n) {
 * var r = Math.floor(Math.random() * 3);
 * var tmp = $(this).text();
 * $(this).text($("p:eq(" + r + ")").text());
 * $("p:eq(" + r + ")").text(tmp);
 * $(this).css("left", getPos(n));
 * });
 * $("div").each(function (n) {
 *       $(this).css("left", getPos(n));
 *     })
 * .css("cursor", "pointer")
 * .click(function () {
 *       $(this).fadeTo(250, 0.25, function () {
 *             $(this).css("cursor", "")
 *                    .prev().css({"font-weight": "bolder",
 *                                 "font-style": "italic"});
 *           });
 *     });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Number} opacity A number between 0 and 1 denoting the target opacity.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.fadeTo = function(duration, opacity, easing, callback) {return new jQuery();};

/**
 * Hide the matched elements by fading them to transparent.
 * 
 * 
 *     <p>The <code>.fadeOut()</code> method animates the opacity of the matched elements. Once the opacity reaches 0, the <code>display</code> style property is set to <code>none</code>, so the element no longer affects the layout of the page.</p>
 *     <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, or if the <code>duration</code> parameter is omitted, the default duration of  <code>400</code> milliseconds is used.</p>
 *     <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;</pre>
 * <p>With the element initially shown, we can hide it slowly:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').fadeOut('slow', function() {
 *     // Animation complete.
 *   });
 * });</pre>
 *     <p class="image four-across">
 *       <img src="/images/0042_06_37.png" alt=""/>
 *       <img src="/images/0042_06_38.png" alt=""/>
 *       <img src="/images/0042_06_39.png" alt=""/>
 *       <img src="/images/0042_06_40.png" alt=""/>
 *     </p>
 * <blockquote>
 * <p><strong>Note: </strong>To avoid unnecessary DOM manipulation, <code>.fadeOut()</code> will not hide an element that is already considered hidden. For information on which elements jQuery considers hidden, see <a href="http://api.jquery.com/hidden-selector"> :hidden Selector</a>.</p>
 * </blockquote>
 *     <h4 id="easing">Easing</h4>
 *     <p><strong>As of jQuery 1.4.3</strong>, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *     <h4 id="callback-function">Callback Function</h4>
 *     <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p><strong>As of jQuery 1.6</strong>, the <code><a href="http://api.jquery.com/promise/">.promise()</a></code> method can be used in conjunction with the <code><a href="http://api.jquery.com/deferred.done/">deferred.done()</a></code> method to execute a single callback for the animation as a whole when <em>all</em> matching elements have completed their animations ( See the <a href="http://api.jquery.com/promise/#example-1">example for .promise()</a> ).  </p>
 *   
 * @example
 * <p>Animates all paragraphs to fade out, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 *   $("p").click(function () {
 *   $("p").fadeOut("slow");
 *   });
 *   </code></pre>
 * @example
 * <p>Fades out spans in one section that you click on.</p>
 * <pre><code>
 * 
 *   $("span").click(function () {
 *   $(this).fadeOut(1000, function () {
 *   $("div").text("'" + $(this).text() + "' has faded!");
 *   $(this).remove();
 *   });
 *   });
 *   $("span").hover(function () {
 *   $(this).addClass("hilite");
 *   }, function () {
 *   $(this).removeClass("hilite");
 *   });
 * 
 *   </code></pre>
 * @example
 * <p>Fades out two divs, one with a "linear" easing and one with the default, "swing," easing.</p>
 * <pre><code>
 * $("#btn1").click(function() {
 *   function complete() {
 *     $("<div/>").text(this.id).appendTo("#log");
 *   }
 *   
 *   $("#box1").fadeOut(1600, "linear", complete);
 *   $("#box2").fadeOut(1600, complete);
 * });
 * 
 * $("#btn2").click(function() {
 *   $("div").show();
 *   $("#log").empty();
 * });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.fadeOut = function(duration, easing, callback) {return new jQuery();};

/**
 * Display the matched elements by fading them to opaque.
 * 
 * 
 *     <p>The <code>.fadeIn()</code> method animates the opacity of the matched elements.</p>
 *     <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, or if the <code>duration</code> parameter is omitted, the default duration of  <code>400</code> milliseconds is used.</p>
 *     <p>We can animate any element, such as a simple image:</p>
 *     <pre>&lt;div id="clickme"&gt;
 *       Click here
 *     &lt;/div&gt;
 *     &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 *     With the element initially hidden, we can show it slowly:
 *     $('#clickme').click(function() {
 *       $('#book').fadeIn('slow', function() {
 *         // Animation complete
 *       });
 *     });</pre>
 *     <p class="image four-across">
 *       <img src="/images/0042_06_33.png" alt=""/>
 *       <img src="/images/0042_06_34.png" alt=""/>
 *       <img src="/images/0042_06_35.png" alt=""/>
 *       <img src="/images/0042_06_36.png" alt=""/>
 *     </p>
 * 
 *     <h4 id="easing">Easing</h4>
 *     <p><strong>As of jQuery 1.4.3</strong>, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *     <h4 id="callback-function">Callback Function</h4>
 *     <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole. </p>
 *   <p><strong>As of jQuery 1.6</strong>, the <code><a href="http://api.jquery.com/promise/">.promise()</a></code> method can be used in conjunction with the <code><a href="http://api.jquery.com/deferred.done/">deferred.done()</a></code> method to execute a single callback for the animation as a whole when <em>all</em> matching elements have completed their animations ( See the <a href="http://api.jquery.com/promise/#example-1">example for .promise()</a> ).  </p>
 *   
 * @example
 * <p>Animates hidden divs to fade in one by one, completing each animation within 600 milliseconds.</p>
 * <pre><code>
 *       $(document.body).click(function () {
 *         $("div:hidden:first").fadeIn("slow");
 *       });
 *     </code></pre>
 * @example
 * <p>Fades a red block in over the text. Once the animation is done, it quickly fades in more text on top.</p>
 * <pre><code>
 *         $("a").click(function () {
 *           $("div").fadeIn(3000, function () {
 *             $("span").fadeIn(100);
 *           });
 *           return false;
 *         }); 
 * 
 *       </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.fadeIn = function(duration, easing, callback) {return new jQuery();};

/**
 * Display or hide the matched elements with a sliding motion.
 * 
 * 
 *   <p>The <code>.slideToggle()</code> method animates the height of the matched elements. This causes lower parts of the page to slide up or down, appearing to reveal or conceal the items. If the element is initially displayed, it will be hidden; if hidden, it will be shown. The <code>display</code> property is saved and restored as needed. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>. When the height reaches 0 after a hiding animation, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page.</p>
 *   <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 *   <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;</pre>
 *   <p>We will cause <code>.slideToggle()</code> to be called when another element is clicked:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').slideToggle('slow', function() {
 *     // Animation complete.
 *   });
 * });
 * </pre>
 *   <p>With the element initially shown, we can hide it slowly with the first click:</p>
 *   <p class="image four-across"> 
 *     <img src="/images/0042_06_25.png" alt=""/>
 *     <img src="/images/0042_06_26.png" alt=""/>
 *     <img src="/images/0042_06_27.png" alt=""/>
 *     <img src="/images/0042_06_28.png" alt=""/>
 *   </p>
 *   <p>A second click will show the element once again:</p>
 * 
 *   <p class="image four-across"> 
 *     <img src="/images/0042_06_29.png" alt=""/>
 *     <img src="/images/0042_06_30.png" alt=""/>
 *     <img src="/images/0042_06_31.png" alt=""/>
 *     <img src="/images/0042_06_32.png" alt=""/>
 *   </p>
 *     <h4 id="easing">Easing</h4>
 *     <p><strong>As of jQuery 1.4.3</strong>, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *     <h4 id="callback-function">Callback Function</h4>
 *   <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 *   <p><strong>As of jQuery 1.6</strong>, the <code><a href="http://api.jquery.com/promise/">.promise()</a></code> method can be used in conjunction with the <code><a href="http://api.jquery.com/deferred.done/">deferred.done()</a></code> method to execute a single callback for the animation as a whole when <em>all</em> matching elements have completed their animations ( See the <a href="http://api.jquery.com/promise/#example-1">example for .promise()</a> ).  </p>
 *   
 * @example
 * <p>Animates all paragraphs to slide up or down, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 *     $("button").click(function () {
 *       $("p").slideToggle("slow");
 *     });
 * </code></pre>
 * @example
 * <p>Animates divs between dividers with a toggle that makes some appear and some disappear.</p>
 * <pre><code>
 *   $("#aa").click(function () {
 *     $("div:not(.still)").slideToggle("slow", function () {
 *       var n = parseInt($("span").text(), 10);
 *       $("span").text(n + 1);
 *     });
 *   });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.slideToggle = function(duration, easing, callback) {return new jQuery();};

/**
 * Hide the matched elements with a sliding motion.
 * 
 * 
 * <p>The <code>.slideUp()</code> method animates the height of the matched elements. This causes lower parts of the page to slide up, appearing to conceal the items. Once the height reaches 0, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page.</p>
 *   <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, or if the <code>duration</code> parameter is omitted, the default duration of  <code>400</code> milliseconds is used.</p>
 *   <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;</pre>
 *   <p>With the element initially shown, we can hide it slowly:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').slideUp('slow', function() {
 *     // Animation complete.
 *   });
 * });
 *   </pre>
 *   <p class="image four-across"> 
 *   <img src="/images/0042_06_21.png" alt=""/>
 *   <img src="/images/0042_06_22.png" alt=""/>
 *   <img src="/images/0042_06_23.png" alt=""/> 
 *   <img src="/images/0042_06_24.png" alt=""/>
 *   </p>
 *     <h4 id="easing">Easing</h4>
 *     <p><strong>As of jQuery 1.4.3</strong>, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *     <h4 id="callback-function">Callback Function</h4>
 *   <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p><strong>As of jQuery 1.6</strong>, the <code><a href="http://api.jquery.com/promise/">.promise()</a></code> method can be used in conjunction with the <code><a href="http://api.jquery.com/deferred.done/">deferred.done()</a></code> method to execute a single callback for the animation as a whole when <em>all</em> matching elements have completed their animations ( See the <a href="http://api.jquery.com/promise/#example-1">example for .promise()</a> ).  </p>
 *   
 * @example
 * <p>Animates all divs to slide up, completing the animation within 400 milliseconds.</p>
 * <pre><code>
 *   $(document.body).click(function () {
 *     if ($("div:first").is(":hidden")) {
 *       $("div").show("slow");
 *     } else {
 *       $("div").slideUp();
 *     }
 *   });
 * 
 *   </code></pre>
 * @example
 * <p>Animates the parent paragraph to slide up, completing the animation within 200 milliseconds. Once the animation is done, it displays an alert.</p>
 * <pre><code>
 *   $("button").click(function () {
 *     $(this).parent().slideUp("slow", function () {
 *       $("#msg").text($("button", this).text() + " has completed.");
 *     });
 *   });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.slideUp = function(duration, easing, callback) {return new jQuery();};

/**
 * Display the matched elements with a sliding motion.
 * 
 * 
 * <p>The <code>.slideDown()</code> method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively. If any other string is supplied, or if the <code>duration</code> parameter is omitted, the default duration of  <code>400</code> milliseconds is used.</p>
 * <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;</pre>
 * <p>With the element initially hidden, we can show it slowly:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').slideDown('slow', function() {
 *     // Animation complete.
 *   });
 * });</pre>
 * <p class="image four-across"> 
 * <img src="/images/0042_06_17.png" alt=""/>
 * <img src="/images/0042_06_18.png" alt=""/>
 * <img src="/images/0042_06_19.png" alt=""/>
 * <img src="/images/0042_06_20.png" alt=""/>
 * </p>
 *     <h4 id="easing">Easing</h4>
 *     <p><strong>As of jQuery 1.4.3</strong>, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 *     <h4 id="callback-function">Callback Function</h4>
 * <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p><strong>As of jQuery 1.6</strong>, the <code><a href="http://api.jquery.com/promise/">.promise()</a></code> method can be used in conjunction with the <code><a href="http://api.jquery.com/deferred.done/">deferred.done()</a></code> method to execute a single callback for the animation as a whole when <em>all</em> matching elements have completed their animations ( See the <a href="http://api.jquery.com/promise/#example-1">example for .promise()</a> ).  </p>
 * 
 * @example
 * <p>Animates all divs to slide down and show themselves over 600 milliseconds.</p>
 * <pre><code>
 * $(document.body).click(function () {
 * if ($("div:first").is(":hidden")) {
 * $("div").slideDown("slow");
 * } else {
 * $("div").hide();
 * }
 * });
 * 
 * </code></pre>
 * @example
 * <p>Animates all inputs to slide down, completing the animation within 1000 milliseconds. Once the animation is done, the input look is changed especially if it is the middle input which gets the focus.</p>
 * <pre><code>
 * $("div").click(function () {
 * $(this).css({ borderStyle:"inset", cursor:"wait" });
 * $("input").slideDown(1000,function(){
 * $(this).css("border", "2px red inset")
 * .filter(".middle")
 *  .css("background", "yellow")
 *  .focus();
 * $("div").css("visibility", "hidden");
 * });
 * });
 * 
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {String} easing A string indicating which easing function to use for the transition.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.4.3
 * @returns {jQuery}
**/
jQuery.prototype.slideDown = function(duration, easing, callback) {return new jQuery();};

/**
 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.find()</code> method allows us to search through the descendants of these elements in the DOM tree and construct a new jQuery object from the matching elements. The <code>.find()</code> and <code>.children()</code> methods are similar, except that the latter only travels a single level down the DOM tree.</p>
 *   <p>The first signature for the <code>.find()</code>method accepts a selector expression of the same type that we can pass to the <code>$()</code> function. The elements will be filtered by testing whether they match this selector.</p>
 *   <p>Consider a page with a basic nested list on it:</p>
 * <pre>
 * &lt;ul class="level-1"&gt;
 *   &lt;li class="item-i"&gt;I&lt;/li&gt;
 *   &lt;li class="item-ii"&gt;II
 *     &lt;ul class="level-2"&gt;
 *       &lt;li class="item-a"&gt;A&lt;/li&gt;
 *       &lt;li class="item-b"&gt;B
 *         &lt;ul class="level-3"&gt;
 *           &lt;li class="item-1"&gt;1&lt;/li&gt;
 *           &lt;li class="item-2"&gt;2&lt;/li&gt;
 *           &lt;li class="item-3"&gt;3&lt;/li&gt;
 *         &lt;/ul&gt;
 *       &lt;/li&gt;
 *       &lt;li class="item-c"&gt;C&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 *   &lt;li class="item-iii"&gt;III&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 *   <p>If we begin at item II, we can find list items within it:</p>
 *   <pre>$('li.item-ii').find('li').css('background-color', 'red');</pre>
 *   <p>The result of this call is a red background on items A, B, 1, 2, 3, and C. Even though item II matches the selector expression, it is not included in the results; only descendants are considered candidates for the match.</p>
 *   <blockquote><p>Unlike in the rest of the tree traversal methods, the selector expression is required in a call to <code>.find()</code>. If we need to retrieve all of the descendant elements, we can pass in the universal selector <code>'*'</code> to accomplish this.</p></blockquote>
 *   <p><a href="http://api.jquery.com/jquery/#selector-context">Selector context</a> is implemented with the <code>.find()</code> <code>method;</code> therefore, <code>$('li.item-ii').find('li')</code> is equivalent to <code>$('li', 'li.item-ii')</code>.</p>
 *   <p><strong>As of jQuery 1.6</strong>, we can also filter the selection with a given jQuery collection or element. With the same nested list as above, if we start with:</p>
 *   <pre>var $allListElements = $('li');</pre>
 *   <p>And then pass this jQuery object to find:</p>
 *   <pre>$('li.item-ii').find( $allListElements );</pre>
 *   <p>This will return a jQuery collection which contains only the list elements that are descendants of item II.</p>
 *   <p>Similarly, an element may also be passed to find:</p>
 * <pre>
 * var item1 = $('li.item-1')[0];
 * $('li.item-ii').find( item1 ).css('background-color', 'red');
 * </pre>
 *   <p>The result of this call would be a red background on item 1.</p>
 * 
 * @example
 * <p>Starts with all paragraphs and searches for descendant span elements, same as $("p span")</p>
 * <pre><code>
 *   $("p").find("span").css('color','red');
 * </code></pre>
 * @example
 * <p>A selection using a jQuery collection of all span tags. Only spans within p tags are changed to red while others are left blue.</p>
 * <pre><code>
 *   var $spans = $('span');
 *   $("p").find( $spans ).css('color','red');
 * </code></pre>
 * @example
 * <p>Add spans around each word then add a hover and italicize words with the letter <strong>t</strong>.</p>
 * <pre><code>
 *   var newText = $("p").text().split(" ").join("</span> <span>");
 *   newText = "<span>" + newText + "</span>";
 * 
 *   $("p").html( newText )
 *     .find('span')
 *     .hover(function() { 
 *       $(this).addClass("hilite"); 
 *     },
 *       function() { $(this).removeClass("hilite"); 
 *     })
 *   .end()
 *     .find(":contains('t')")
 *     .css({"font-style":"italic", "font-weight":"bolder"});
 * 
 * </code></pre>
 * 
 * @param {jQuery} jq A jQuery object to match elements against.
 * 
 * @since 1.6
 * @returns {jQuery}
**/
jQuery.prototype.find = function(jq) {return new jQuery();};

/**
 * Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.closest()</code> method allows us to search through these elements and their ancestors in the DOM tree and construct a new jQuery object from the matching elements. The <code>.parents()</code> and <code>.closest()</code> methods are similar in that they both traverse up the DOM tree. The differences between the two, though subtle, are significant:</p>
 * 
 *   <table>
 *     <thead>
 *       <tr>
 *         <th>.closest()</th>
 *         <th>.parents()</th>
 *       </tr>
 *     </thead>
 *     <tbody>
 *       <tr>
 *         <td>Begins with the current element</td>
 *         <td>Begins with the parent element</td></tr>
 *       <tr>
 *         <td>Travels up the DOM tree until it finds a match for the supplied selector</td>
 *         <td>Travels up the DOM tree to the document's root element, adding each ancestor element to a temporary collection; it then filters that collection based on a selector if one is supplied </td>
 *       </tr>
 *       <tr>
 *         <td>The returned jQuery object contains zero or one element</td>
 *         <td>The returned jQuery object contains zero, one, or multiple elements</td>
 *       </tr>
 *     </tbody>
 *   </table>
 * 
 * <pre>
 * &lt;ul id="one" class="level-1"&gt;
 *   &lt;li class="item-i"&gt;I&lt;/li&gt;
 *   &lt;li id="ii" class="item-ii"&gt;II
 *   &lt;ul class="level-2"&gt;
 *     &lt;li class="item-a"&gt;A&lt;/li&gt;
 *     &lt;li class="item-b"&gt;B
 *       &lt;ul class="level-3"&gt;
 *         &lt;li class="item-1"&gt;1&lt;/li&gt;
 *         &lt;li class="item-2"&gt;2&lt;/li&gt;
 *         &lt;li class="item-3"&gt;3&lt;/li&gt;
 *       &lt;/ul&gt;
 *     &lt;/li&gt;
 *     &lt;li class="item-c"&gt;C&lt;/li&gt;
 *   &lt;/ul&gt;
 *   &lt;/li&gt;
 *   &lt;li class="item-iii"&gt;III&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * 
 * <p>Suppose we perform a search for <code>&lt;ul&gt;</code> elements starting at item A:</p>
 * <pre>
 * $('li.item-a').closest('ul')
 *   .css('background-color', 'red');
 * </pre>
 * <p>This will change the color of the level-2 <code>&lt;ul&gt;</code>, since it is the first encountered when traveling up the DOM tree.</p>
 * <p>Suppose we search for an <code>&lt;li&gt;</code> element instead:</p>
 * <pre>$('li.item-a').closest('li')
 *   .css('background-color', 'red');
 * </pre>
 * <p>This will change the color of list item A. The <code>.closest()</code> method begins its search with the element itself before progressing up the DOM tree, and stops when item A matches the selector.</p>
 * <p>We can pass in a DOM element as the context within which to search for the closest element.</p>
 * <pre>var listItemII = document.getElementById('ii');
 * $('li.item-a').closest('ul', listItemII)
 *   .css('background-color', 'red');
 * $('li.item-a').closest('#one', listItemII)
 *   .css('background-color', 'green');</pre>
 * <p>This will change the color of the level-2 <code>&lt;ul&gt;</code>, because it is both the first <code>&lt;ul&gt;</code> ancestor of list item A and a descendant of list item II. It will not change the color of the level-1 <code>&lt;ul&gt;</code>, however, because it is not a descendant of list item II.</p>
 * 
 * @example
 * <p>Show how event delegation can be done with closest. The closest list element toggles a yellow background when it or its descendent is clicked.</p>
 * <pre><code>
 *   $( document ).bind("click", function( e ) {
 *     $( e.target ).closest("li").toggleClass("hilight");
 *   });
 * </code></pre>
 * @example
 * <p>Pass a jQuery object to closest. The closest list element toggles a yellow background when it or its descendent is clicked.</p>
 * <pre><code>
 *   var $listElements = $("li").css("color", "blue");
 *   $( document ).bind("click", function( e ) {
 *     $( e.target ).closest( $listElements ).toggleClass("hilight");
 *   });
 * </code></pre>
 * 
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @param {Element} context A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.closest = function(selector, context) {return new jQuery();};

/**
 * Load data from the server using a HTTP GET request.
 * 
 * <p>This is a shorthand Ajax function, which is equivalent to:</p>
 *     <pre>$.ajax({
 *   url: <em>url</em>,
 *   data: <em>data</em>,
 *   success: <em>success</em>,
 *   dataType: <em>dataType</em>
 * });
 * </pre>
 *     <p>The <code>success</code> callback function is passed the returned data, which will be an XML root element, text string, JavaScript file, or JSON object, depending on the MIME type of the response. It is also passed the text status of the response. </p>
 *     <p><strong>As of jQuery 1.5</strong>, the <code>success</code> callback function is also passed a <a href="http://api.jquery.com/jQuery.get/#jqxhr-object">"jqXHR" object</a> (in <strong>jQuery 1.4</strong>, it was passed the <code>XMLHttpRequest</code> object). However, since JSONP and cross-domain GET requests do not use <abbr title="XMLHTTPRequest">XHR</abbr>,  in those cases the <code>(j)XHR</code> and <code>textStatus</code> parameters passed to the success callback are undefined.</p>
 *     <p>Most implementations will specify a success handler:</p>
 *     <pre>$.get('ajax/test.html', function(data) {
 *   $('.result').html(data);
 *   alert('Load was performed.');
 * });
 * </pre>
 *   <p>This example fetches the requested HTML snippet and inserts it on the page.</p>
 *   <h4 id="jqxhr-object">The jqXHR Object</h4>
 *   <p><strong>As of jQuery 1.5</strong>, all of jQuery's Ajax methods return  a superset of the <code>XMLHTTPRequest</code> object. This jQuery XHR object, or "jqXHR," returned by <code>$.get()</code> implements the Promise interface, giving it all the properties, methods, and behavior of a Promise (see <a href="http://api.jquery.com/category/deferred-object/">Deferred object</a> for more information). For convenience and consistency with the callback names used by <code><a href="http://api.jquery.com/jQuery.ajax/">$.ajax()</a></code>, it provides <code>.error()</code>, <code>.success()</code>, and <code>.complete()</code> methods. These methods take a function argument that is called when the request terminates, and the function receives the same arguments as the correspondingly-named <code>$.ajax()</code> callback.</p>
 * 
 *   <p>The Promise interface in jQuery 1.5 also allows jQuery's Ajax methods, including <code>$.get()</code>, to chain multiple <code>.success()</code>, <code>.complete()</code>, and <code>.error()</code> callbacks on a single request, and even to assign these callbacks after the request may have completed. If the request is already complete, the callback is fired immediately.</p>
 *   <pre>// Assign handlers immediately after making the request,
 *   // and remember the jqxhr object for this request
 *   var jqxhr = $.get("example.php", function() {
 *     alert("success");
 *   })
 *   .success(function() { alert("second success"); })
 *   .error(function() { alert("error"); })
 *   .complete(function() { alert("complete"); });
 * 
 *   // perform other work here ...
 * 
 *   // Set another completion function for the request above
 *   jqxhr.complete(function(){ alert("second complete"); });</pre>
 * 
 * @example
 * <p>Request the test.php page, but ignore the return results.</p>
 * <pre><code>$.get("test.php");</code></pre>
 * @example
 * <p>Request the test.php page and send some additional data along (while still ignoring the return results).</p>
 * <pre><code>$.get("test.php", { name: "John", time: "2pm" } );</code></pre>
 * @example
 * <p>pass arrays of data to the server (while still ignoring the return results).</p>
 * <pre><code>$.get("test.php", { 'choices[]': ["Jon", "Susan"]} );</code></pre>
 * @example
 * <p>Alert out the results from requesting test.php (HTML or XML, depending on what was returned).</p>
 * <pre><code>$.get("test.php", function(data){
 * alert("Data Loaded: " + data);
 * });</code></pre>
 * @example
 * <p>Alert out the results from requesting test.cgi with an additional payload of data (HTML or XML, depending on what was returned).</p>
 * <pre><code>$.get("test.cgi", { name: "John", time: "2pm" },
 *    function(data){
 *      alert("Data Loaded: " + data);
 *    });</code></pre>
 * @example
 * <p> Gets the test.php page contents which has been returned in json format (&lt;?php echo json_encode(array("name"=&gt;"John","time"=&gt;"2pm")); ?&gt;).</p>
 * <pre><code>$.get("test.php", { "func": "getNameAndTime" },
 *    function(data){
 *      alert(data.name); // John
 *      console.log(data.time); //  2pm
 *    }, "json");</code></pre>
 * 
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} success A callback function that is executed if the request succeeds.
 * @param {String} dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
 * 
 * @since 1.0
 * @returns {jqXHR}
**/
jQuery.get = function(url, data, success, dataType) {return new jqXHR();};

/**
 * Perform an asynchronous HTTP (Ajax) request.
 * 
 * 
 *       <p>The <code>$.ajax()</code> function underlies all Ajax requests sent by jQuery.  It is often unnecessary to directly call this function, as several higher-level alternatives like <code><a href="/jQuery.get">$.get()</a></code> and <code><a href="/load">.load()</a></code> are available and are easier to use. If less common options are required, though, <code>$.ajax()</code> can be used more flexibly.</p>
 *       <p>At its simplest, the <code>$.ajax()</code> function can be called with no arguments:</p>
 *       <pre>$.ajax();</pre>
 * 
 *       <p><strong>Note:</strong> Default settings can be set globally by using the <code><a href="/jQuery.ajaxSetup">$.ajaxSetup()</a></code> function.</p>
 * 
 *       <p>This example, using no options, loads the contents of the current page, but does nothing with the result. To use the result, we can implement one of the callback functions.</p>
 * 
 *       <h4 id="jqXHR">The jqXHR Object</h4>
 *       <p>The jQuery XMLHttpRequest (jqXHR) object returned by <code>$.ajax()</code> <strong>as of jQuery 1.5</strong> is a superset of the browser's native XMLHttpRequest object. For example, it contains <code>responseText</code> and <code>responseXML</code> properties, as well as a <code>getResponseHeader()</code> method. When the transport mechanism is something other than XMLHttpRequest (for example, a script tag for a JSONP request) the <code>jqXHR</code> object simulates native XHR functionality where possible. </p>
 *      <p><strong>As of jQuery 1.5.1</strong>, the <code>jqXHR</code> object also contains the <code>overrideMimeType()</code> method (it was available in jQuery 1.4.x, as well, but was temporarily removed in jQuery 1.5). The <code>.overrideMimeType()</code> method may be used in the <code>beforeSend()</code> callback function, for example, to modify the response content-type header:</p>
 * <pre>
 * $.ajax({
 *   url: 'http://fiddle.jshell.net/favicon.png',
 *   beforeSend: function( xhr ) {
 *     xhr.overrideMimeType( 'text/plain; charset=x-user-defined' );
 *   },
 *   success: function( data ) {
 *     if (console &amp;&amp; console.log){
 *       console.log( 'Sample of data:', data.slice(0,100) );
 *     }
 *   }
 * });
 * </pre>
 * 
 *       <p>The jqXHR objects returned by <code>$.ajax()</code> implement the Promise interface, giving them all the properties, methods, and behavior of a Promise (see <a href="http://api.jquery.com/category/deferred-object/">Deferred object</a> for more information).  For convenience and consistency with the callback names used by <code>$.ajax()</code>, jqXHR also provides <code>.error()</code>, <code>.success()</code>, and <code>.complete()</code> methods. These methods take a function argument that is called when the <code>$.ajax()</code> request terminates, and the function receives the same arguments as the correspondingly-named <code>$.ajax()</code> callback. In jQuery 1.5 this allows you to assign multiple callbacks on a single request, and even to assign callbacks after the request may have completed. (If the request is already complete, the callback is fired immediately.)</p>
 * 
 * <pre>// Assign handlers immediately after making the request,
 * // and remember the jqxhr object for this request
 * var jqxhr = $.ajax({ url: "example.php" })
 *     .success(function() { alert("success"); })
 *     .error(function() { alert("error"); })
 *     .complete(function() { alert("complete"); });
 * 
 * // perform other work here ...
 * 
 * // Set another completion function for the request above
 * jqxhr.complete(function(){ alert("second complete"); });</pre>
 * 
 *       <p>For backward compatibility with <code>XMLHttpRequest</code>, a <code>jqXHR</code> object will expose the following properties and methods:</p>
 *       <ul>
 *         <li><code>readyState</code></li>
 *         <li><code>status</code></li>
 *         <li><code>statusText</code></li>
 *         <li><code>responseXML</code> and/or <code>responseText</code> when the underlying request responded with xml and/or text, respectively</li>
 *         <li><code>setRequestHeader(name, value)</code> which departs from the standard by replacing the old value with the new one rather than concatenating the new value to the old one</li>
 *         <li><code>getAllResponseHeaders()</code></li>
 *         <li><code>getResponseHeader()</code></li>
 *         <li><code>abort()</code></li>
 *       </ul>
 * 
 *       <p>No <code>onreadystatechange</code> mechanism is provided, however, since <code>success</code>, <code>error</code>, <code>complete</code> and <code>statusCode</code> cover all conceivable requirements.</p>
 *       <h4 id="callback-functions">Callback Function Queues</h4>
 *       <p>The <code>beforeSend</code>, <code>error</code>, <code>dataFilter</code>, <code>success</code> and <code>complete</code> options all accept callback functions that are invoked at the appropriate times.</p>
 * 
 *       <p><strong>As of jQuery 1.5</strong>, the <code>error</code>, <code>success</code>, and <code>complete</code> callback hooks are first-in, first-out managed queues. This means you can assign more than one callback for each hook. See <a href="http://api.jquery.com/category/deferred-object/">Deferred object methods</a>, which are implemented internally for these <code>$.ajax()</code> callback hooks.</p>
 * 
 *       <p>The <code>this</code> reference within all callbacks is the object in the <code>context</code> option passed to <code>$.ajax</code> in the settings; if <code>context</code> is not specified, <code>this</code> is a reference to the Ajax settings themselves.</p>
 * 
 *       <p>Some types of Ajax requests, such as JSONP and cross-domain GET requests, do not use XHR; in those cases the <code>XMLHttpRequest</code> and <code>textStatus</code> parameters passed to the callback are <code>undefined</code>.</p>
 * 
 *       <p>Here are the callback hooks provided by <code>$.ajax()</code>:</p>
 *       <ol>
 *         <li><code>beforeSend</code> callback is invoked; it receives the <code>jqXHR</code> object and the <code>settings</code> map as parameters.</li>
 *         <li><code>error</code> callbacks are invoked, in the order they are registered, if the request fails. They receive the <code>jqXHR</code>, a string indicating the error type, and an exception object if applicable. Some built-in errors will provide a string as the exception object: "abort", "timeout", "No Transport".</li>
 *         <li><code>dataFilter</code> callback is invoked immediately upon successful receipt of response data. It receives the returned data and the value of <code>dataType</code>, and must return the (possibly altered) data to pass on to <code>success</code>.</li>
 *         <li><code>success</code> callbacks are then invoked, in the order they are registered, if the request succeeds. They receive the returned data, a string containing the success code, and the <code>jqXHR</code> object.</li>
 *         <li><code>complete</code> callbacks fire, in the order they are registered, when the request finishes, whether in failure or success. They receive the <code>jqXHR</code> object, as well as a string containing the success or error code.</li>
 *       </ol>
 *       <p>For example, to make use of the returned HTML, we can implement a <code>success</code> handler:</p>
 * <pre>$.ajax({
 *   url: 'ajax/test.html',
 *   success: function(data) {
 *     $('.result').html(data);
 *     alert('Load was performed.');
 *   }
 * });</pre>
 * 
 *       <h4 id="data-types">Data Types</h4>
 *       <p>The <code>$.ajax()</code> function relies on the server to provide information about the retrieved data. If the server reports the return data as XML, the result can be traversed using normal XML methods or jQuery's selectors. If another type is detected, such as HTML in the example above, the data is treated as text.</p>
 *       <p>Different data handling can be achieved by using the <code>dataType</code> option. Besides plain <code>xml</code>, the <code>dataType</code> can be <code>html</code>, <code>json</code>, <code>jsonp</code>, <code>script</code>, or <code>text</code>.</p>
 *       <p>The <code>text</code> and <code>xml</code> types return the data with no processing. The data is simply passed on to the success handler, either through the <code>responseText</code> or <code>responseXML</code> property of the <code>jqXHR</code> object, respectively.</p>
 *       <p><strong>Note:</strong> We must ensure that the MIME type reported by the web server matches our choice of <code>dataType</code>. In particular, XML must be declared by the server as <code>text/xml</code> or <code>application/xml</code> for consistent results.</p>
 *       <p>If <code>html</code> is specified, any embedded JavaScript inside the retrieved data is executed before the HTML is returned as a string. Similarly, <code>script</code> will execute the JavaScript that is pulled back from the server, then return nothing.</p>
 *       <p>The <code>json</code> type parses the fetched data file as a JavaScript object and returns the constructed object as the result data. To do so, it uses <code>jQuery.parseJSON()</code> when the browser supports it; otherwise it uses a <code>Function</code> <strong>constructor</strong>. Malformed JSON data will throw a parse error (see <a href="http://json.org/">json.org</a> for more information). JSON data is convenient for communicating structured data in a way that is concise and easy for JavaScript to parse. If the fetched data file exists on a remote server, specify the <code>jsonp</code> type instead.</p>
 *       <p>The <code>jsonp</code> type appends a query string parameter of <code>callback=?</code> to the URL. The server should prepend the JSON data with the callback name to form a valid JSONP response. We can specify a parameter name other than <code>callback</code> with the <code>jsonp</code> option to <code>$.ajax()</code>.</p>
 *       <p><strong>Note:</strong> JSONP is an extension of the JSON format, requiring some server-side code to detect and handle the query string parameter. More information about it can be found in the <a href="http://bob.pythonmac.org/archives/2005/12/05/remote-json-jsonp/">original post detailing its use</a>.</p>
 *       <p>When data is retrieved from remote servers (which is only possible using the <code>script</code> or <code>jsonp</code> data types), the <code>error</code> callbacks and global events will never be fired.</p>
 * 
 *           <h4 id="sending-data-to-server">Sending Data to the Server</h4>
 *           <p>By default, Ajax requests are sent using the GET HTTP method. If the POST method is required, the method can be specified by setting a value for the <code>type</code> option. This option affects how the contents of the <code>data</code> option are sent to the server. POST data will always be transmitted to the server using UTF-8 charset, per the W3C XMLHTTPRequest standard.</p>
 *           <p>The <code>data</code> option can contain either a query string of the form <code>key1=value1&amp;key2=value2</code>, or a map of the form <code>{key1: 'value1', key2: 'value2'}</code>. If the latter form is used, the data is converted into a query string using <code><a href="http://api.jquery.com/jQuery.param/">jQuery.param()</a></code> before it is sent. This processing can be circumvented by setting <code>processData</code> to <code>false</code>.  The processing might be undesirable if you wish to send an XML object to the server; in this case, change the <code>contentType</code> option from <code>application/x-www-form-urlencoded</code> to a more appropriate MIME type.</p>
 * 
 *           <h4 id="advanced-options">Advanced Options</h4>
 *           <p>The <code>global</code> option prevents handlers registered using <code><a href="/ajaxSend">.ajaxSend()</a></code>, <code><a href="/ajaxError">.ajaxError()</a></code>, and similar methods from firing when this request would trigger them. This can be useful to, for example, suppress a loading indicator that was implemented with <code><a href="/ajaxSend">.ajaxSend()</a></code> if the requests are frequent and brief. With cross-domain script and JSONP requests, the global option is automatically set to <code>false</code>. See the descriptions of these methods below for more details.  See the descriptions of these methods below for more details.</p>
 *           <p>If the server performs HTTP authentication before providing a response, the user name and password pair can be sent via the <code>username</code> and <code>password</code> options.</p>
 *           <p>Ajax requests are time-limited, so errors can be caught and handled to provide a better user experience. Request timeouts are usually either left at their default or set as a global default using <code><a href="/jQuery.ajaxSetup">$.ajaxSetup()</a></code> rather than being overridden for specific requests with the <code>timeout</code> option.</p>
 *           <p>By default, requests are always issued, but the browser may serve results out of its cache. To disallow use of the cached results, set <code>cache</code> to <code>false</code>. To cause the request to report failure if the asset has not been modified since the last request, set <code>ifModified</code> to <code>true</code>.</p>
 *           <p>The <code>scriptCharset</code> allows the character set to be explicitly specified for requests that use a <code>&lt;script&gt;</code> tag (that is, a type of <code>script</code> or <code>jsonp</code>). This is useful if the script and host page have differing character sets.</p>
 *           <p>The first letter in Ajax stands for "asynchronous," meaning that the operation occurs in parallel and the order of completion is not guaranteed. The <code>async</code> option to <code>$.ajax()</code> defaults to <code>true</code>, indicating that code execution can continue after the request is made. Setting this option to <code>false</code> (and thus making the call no longer asynchronous) is strongly discouraged, as it can cause the browser to become unresponsive.</p>
 * 
 *           <p>The <code>$.ajax()</code> function returns the <code>XMLHttpRequest</code> object that it creates. Normally jQuery handles the creation of this object internally, but a custom function for manufacturing one can be specified using the <code>xhr</code> option. The returned object can generally be discarded, but does provide a lower-level interface for observing and manipulating the request. In particular, calling <code>.abort()</code> on the object will halt the request before it completes.</p>
 * 
 *  <h4>Extending Ajax</h4>
 *      <p><strong>As of jQuery 1.5</strong>, jQuery's Ajax implementation includes prefilters, converters, and transports that allow you to extend Ajax with a great deal of flexibility. For more information about these advanced features, see the <a href="http://api.jquery.com/extending-ajax/">Extending Ajax</a> page.</p>
 *  
 * @example
 * <p>Load and execute a JavaScript file.</p>
 * <pre><code>$.ajax({
 *    type: "GET",
 *    url: "test.js",
 *    dataType: "script"
 *  });</code></pre>
 * @example
 * <p>Save some data to the server and notify the user once it's complete.</p>
 * <pre><code>$.ajax({
 *    type: "POST",
 *    url: "some.php",
 *    data: "name=John&location=Boston",
 *    success: function(msg){
 *      alert( "Data Saved: " + msg );
 *    }
 *  });</code></pre>
 * @example
 * <p>Retrieve the latest version of an HTML page.</p>
 * <pre><code>$.ajax({
 *   url: "test.html",
 *   cache: false,
 *   success: function(html){
 *     $("#results").append(html);
 *   }
 * });</code></pre>
 * @example
 * <p>Loads data synchronously. Blocks the browser while the requests is active.
 * It is better to block user interaction by other means when synchronization is
 * necessary.</p>
 * <pre><code>var html = $.ajax({
 *   url: "some.php",
 *   async: false
 *  }).responseText;</code></pre>
 * @example
 * <p>Sends an xml document as data to the server. By setting the processData
 * option to <code>false</code>, the automatic conversion of data to strings is prevented.</p>
 * <pre><code>var xmlDocument = [create xml document];
 *  $.ajax({
 *    url: "page.php",
 *    processData: false,
 *    data: xmlDocument,
 *    success: handleResponse
 *  });</code></pre>
 * @example
 * <p>Sends an id as data to the server, save some data to the server and notify the user once it's complete.  <strong>Note that this usage - returning the result of the call into a variable - requires a synchronous (blocking) request! <em>(async:false)</em></strong></p>
 * <pre><code>bodyContent = $.ajax({
 *       url: "script.php",
 *       global: false,
 *       type: "POST",
 *       data: ({id : this.getAttribute('id')}),
 *       dataType: "html",
 *       async:false,
 *       success: function(msg){
 *          alert(msg);
 *       }
 *    }
 * ).responseText;</code></pre>
 * 
 * @param {Map} settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with <a href="/jQuery.ajaxSetup">$.ajaxSetup()</a>.
 * 
 * @since 1.0
 * @returns {jqXHR}
**/
jQuery.ajax = function(settings) {return new jqXHR();};

/**
 * Add elements to the set of matched elements.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.add()</code> method constructs a new jQuery object from the union of those elements and the ones passed into the method. The argument to <code>.add()</code> can be pretty much anything that  <code>$()</code> accepts, including a jQuery selector expression, references to DOM elements, or an HTML snippet.</p>
 * <p>The updated set of elements can be used in a following (chained) method, or assigned to a variable for later use. For example:</p>
 * <pre>
 * $("p").add("div").addClass("widget");
 * var pdiv = $("p").add("div");
 * </pre>
 * <p>The following will <em>not</em> save the added elements, because the <code>.add()</code> method creates a new set and leaves the original set in pdiv unchanged:</p>
 * <pre>
 * var pdiv = $("p");
 * pdiv.add("div");  // WRONG, pdiv will not change
 * </pre>
 * <p>Consider a page with a simple list and a paragraph following it:</p>
 * <pre>&lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 * &lt;/ul&gt;
 * &lt;p&gt;a paragraph&lt;/p&gt;</pre>
 * <p>We can select the list items and then the paragraph by using either a selector or a reference to the DOM element itself as the <code>.add()</code> method's argument:</p>
 * <pre>$('li').add('p').css('background-color', 'red');</pre>
 * <p>Or:</p>
 * <pre>$('li').add(document.getElementsByTagName('p')[0])
 *   .css('background-color', 'red');</pre>
 * <p>The result of this call is a red background behind all four elements.
 * Using an HTML snippet as the <code>.add()</code> method's argument (as in the third version), we can create additional elements on the fly and add those elements to the matched set of elements. Let's say, for example, that we want to alter the background of the list items along with a newly created paragraph:</p>
 * <pre>$('li').add('&lt;p id="new"&gt;new paragraph&lt;/p&gt;')
 *   .css('background-color', 'red');</pre>
 * <p>Although the new paragraph has been created and its background color changed, it still does not appear on the page. To place it on the page, we could add one of the insertion methods to the chain.</p>
 * <p>As of jQuery 1.4 the results from .add() will always be returned in document order (rather than a simple concatenation).</p>
 * 
 * @example
 * <p>Finds all divs and makes a border.  Then adds all paragraphs to the jQuery object to set their backgrounds yellow.</p>
 * <pre><code>
 * 
 * $("div").css("border", "2px solid red")
 *         .add("p")
 *         .css("background", "yellow");
 * </code></pre>
 * @example
 * <p>Adds more elements, matched by the given expression, to the set of matched elements.</p>
 * <pre><code>$("p").add("span").css("background", "yellow");</code></pre>
 * @example
 * <p>Adds more elements, created on the fly, to the set of matched elements.</p>
 * <pre><code>$("p").clone().add("<span>Again</span>").appendTo(document.body);</code></pre>
 * @example
 * <p>Adds one or more Elements to the set of matched elements.</p>
 * <pre><code>$("p").add(document.getElementById("a")).css("background", "yellow");</code></pre>
 * @example
 * <p>Demonstrates how to add (or push) elements to an existing collection</p>
 * <pre><code>var collection = $("p");
 * // capture the new collection
 * collection = collection.add(document.getElementById("a"));
 * collection.css("background", "yellow");</code></pre>
 * 
 * @param {Elements} elements One or more elements to add to the set of matched elements.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.add = function(elements) {return new jQuery();};

/**
 * Remove elements from the set of matched elements.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.not()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against each element; the elements that don't match the selector will be included in the result.</p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>We can apply this method to the set of list items:</p>
 * <pre>$('li').not(':even').css('background-color', 'red');</pre>
 * <p>The result of this call is a red background for items 2 and 4, as they do not match the selector (recall that :even and :odd use 0-based indexing).</p>
 * <h4>Removing Specific Elements</h4>
 * <p>The second version of the <code>.not()</code> method allows us to remove elements from the matched set, assuming we have found those elements previously by some other means. For example, suppose our list had an id applied to one of its items:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2&lt;/li&gt;
 *   &lt;li id="notli"&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>We can fetch the third list item using the native JavaScript <code>getElementById()</code> function, then remove it from a jQuery object:</p>
 * <pre>
 * $('li').not(document.getElementById('notli'))
 *   .css('background-color', 'red');
 * </pre>
 * <p>This statement changes the color of items 1, 2, 4, and 5. We could have accomplished the same thing with a simpler jQuery expression, but this technique can be useful when, for example, other libraries provide references to plain DOM nodes.</p>
 * <p>As of jQuery 1.4, the <code>.not()</code> method can take a function as its argument in the same way that <code>.filter()</code> does. Elements for which the function returns <code>true</code> are excluded from the filtered set; all other elements are included.</p>
 * @example
 * <p>Adds a border to divs that are not green or blue.</p>
 * <pre><code>
 *     $("div").not(".green, #blueone")
 *             .css("border-color", "red");
 * 
 * </code></pre>
 * @example
 * <p>Removes the element with the ID "selected" from the set of all paragraphs.</p>
 * <pre><code>$("p").not( $("#selected")[0] )</code></pre>
 * @example
 * <p>Removes the element with the ID "selected" from the set of all paragraphs.</p>
 * <pre><code>$("p").not("#selected")</code></pre>
 * @example
 * <p>Removes all elements that match "div p.selected" from the total set of all paragraphs.</p>
 * <pre><code>$("p").not($("div p.selected"))</code></pre>
 * 
 * @param {Elements} elements One or more DOM elements to remove from the matched set.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.not = function(elements) {return new jQuery();};

/**
 * Display or hide the matched elements.
 * 
 * <p>With no parameters, the <code>.toggle()</code> method simply toggles the visibility of elements:</p>
 * <pre>$('.target').toggle();
 * </pre>
 * <p>The matched elements will be revealed or hidden immediately, with no animation, by changing the CSS <code>display</code> property. If the element is initially displayed, it will be hidden; if hidden, it will be shown. The <code>display</code> property is saved and restored as needed. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>.</p>
 * <p>When a duration is provided, <code>.toggle()</code> becomes an animation method. The <code>.toggle()</code> method animates the width, height, and opacity of the matched elements simultaneously. When these properties reach 0 after a hiding animation, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 * <blockquote><p>Note: The event handling suite also has a method named <a href="http://api.jquery.com/toggle-event/">.toggle()</a>. Which one is fired depends on the set of arguments passed.</p></blockquote>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 * <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 * </pre>
 * <p>We will cause <code>.toggle()</code> to be called when another element is clicked:</p>
 * <pre>$('#clickme').click(function() {
 *   $('#book').toggle('slow', function() {
 *     // Animation complete.
 *   });
 * });
 * </pre>
 * <p>With the element initially shown, we can hide it slowly with the first click:
 * </p>
 * <p class="image four-across"> 
 * <img src="/images/0042_06_09.png" alt=""/>
 * <img src="/images/0042_06_10.png" alt=""/>
 * <img src="/images/0042_06_11.png" alt=""/>
 * <img src="/images/0042_06_12.png" alt=""/>
 * </p>
 * <p>A second click will show the element once again:</p>
 * <p class="image four-across"><img src="/images/0042_06_13.png" alt=""/>
 * <img src="/images/0042_06_14.png" alt=""/>
 * <img src="/images/0042_06_15.png" alt=""/>
 * <img src="/images/0042_06_16.png" alt=""/>
 * </p>
 * <p>The second version of the method accepts a Boolean parameter. If this parameter is <code>true</code>, then the matched elements are shown; if <code>false</code>, the elements are hidden. In essence, the statement:
 * </p>
 * <pre>$('#foo').toggle(showOrHide);</pre>
 * <p>is equivalent to:</p>
 * <pre>if ( showOrHide == true ) {
 *   $('#foo').show();
 * } else if ( showOrHide == false ) {
 *   $('#foo').hide();
 * }
 * </pre>
 * @example
 * <p>Toggles all paragraphs.</p>
 * <pre><code>
 * 
 * $("button").click(function () {
 * $("p").toggle();
 * });
 * </code></pre>
 * @example
 * <p>Animates all paragraphs to be shown if they are hidden and hidden if they are visible, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 * $("button").click(function () {
 * $("p").toggle("slow");
 * });    
 * </code></pre>
 * @example
 * <p>Shows all paragraphs, then hides them all, back and forth.</p>
 * <pre><code>
 * 
 * var flip = 0;
 * $("button").click(function () {
 * $("p").toggle( flip++ % 2 == 0 );
 * });
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.toggle = function(duration, callback) {return new jQuery();};

/**
 * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request. 
 * 
 * 
 *     <p>This function is used internally to convert form element values into a serialized string representation (See <a href="/serialize/">.serialize()</a> for more information).</p>
 * 
 *     <p>As of jQuery 1.3, the return value of a function is used instead of the function as a String.</p>
 * 
 *     <p>As of jQuery 1.4, the <code>$.param()</code> method serializes deep objects recursively to accommodate modern scripting languages and frameworks such as PHP and Ruby on Rails. You can disable this functionality globally by setting <code>jQuery.ajaxSettings.traditional = true;</code>.</p>
 * <p>If the object passed is in an Array, it must be an array of objects in the format returned by <a href="/serializeArray/">.serializeArray()</a></p> 
 * <pre>[{name:"first",value:"Rick"},
 * {name:"last",value:"Astley"},
 * {name:"job",value:"Rock Star"}]</pre>
 * <blockquote>
 *     <p><strong>Note:</strong> Because some frameworks have limited ability to parse serialized arrays, we should exercise caution when passing an <code>obj</code> argument that contains objects or arrays nested within another array.</p>
 * </blockquote>
 * <p>In jQuery 1.4, HTML5 input elements are also serialized.</p>
 *     <p>We can display a query string representation of an object and a URI-decoded version of the same as follows:</p>
 * <pre>var myObject = {
 *   a: {
 *     one: 1, 
 *     two: 2, 
 *     three: 3
 *   }, 
 *   b: [1,2,3]
 * };
 * var recursiveEncoded = $.param(myObject);
 * var recursiveDecoded = decodeURIComponent($.param(myObject));
 * 
 * alert(recursiveEncoded);
 * alert(recursiveDecoded);
 * </pre>
 *   <p>The values of <code>recursiveEncoded</code> and <code>recursiveDecoded</code> are alerted as follows:</p>
 * <p><span class="output">a%5Bone%5D=1&amp;a%5Btwo%5D=2&amp;a%5Bthree%5D=3&amp;b%5B%5D=1&amp;b%5B%5D=2&amp;b%5B%5D=3</span><br/>
 * <span class="output">a[one]=1&amp;a[two]=2&amp;a[three]=3&amp;b[]=1&amp;b[]=2&amp;b[]=3</span></p>
 *     <p>To emulate the behavior of <code>$.param()</code> prior to jQuery 1.4, we can set the <code>traditional</code> argument to <code>true</code>:</p>
 * <pre>var myObject = {
 *   a: {
 *     one: 1, 
 *     two: 2, 
 *     three: 3
 *   }, 
 *   b: [1,2,3]
 * };
 * var shallowEncoded = $.param(myObject, true);
 * var shallowDecoded = decodeURIComponent(shallowEncoded);
 * 
 * alert(shallowEncoded);
 * alert(shallowDecoded);
 * </pre>
 * <p>The values of <code>shallowEncoded</code> and <code>shallowDecoded</code> are alerted as follows:</p>
 * <p><span class="output">a=%5Bobject+Object%5D&amp;b=1&amp;b=2&amp;b=3</span><br/>
 * <span class="output">a=[object+Object]&amp;b=1&amp;b=2&amp;b=3</span></p>
 *   
 * @example
 * <p>Serialize a key/value object.</p>
 * <pre><code>
 * 
 *     var params = { width:1680, height:1050 };
 *     var str = jQuery.param(params);
 *     $("#results").text(str);
 * </code></pre>
 * @example
 * <p>Serialize a few complex objects</p>
 * <pre><code>
 * // <=1.3.2: 
 * $.param({ a: [2,3,4] }) // "a=2&a=3&a=4"
 * // >=1.4:
 * $.param({ a: [2,3,4] }) // "a[]=2&a[]=3&a[]=4"
 * 
 * // <=1.3.2: 
 * $.param({ a: { b:1,c:2 }, d: [3,4,{ e:5 }] }) // "a=[object+Object]&d=3&d=4&d=[object+Object]"
 * // >=1.4: 
 * $.param({ a: { b:1,c:2 }, d: [3,4,{ e:5 }] }) // "a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5"
 * 
 * </code></pre>
 * 
 * @param {Array} obj An array or object to serialize.
 * @param {Boolean} traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
 * 
 * @since 1.4
 * @returns {String}
**/
jQuery.param = function(obj, traditional) {return "";};

/**
 * Hide the matched elements.
 * 
 * 
 * <p>With no parameters, the <code>.hide()</code> method is the simplest way to hide an element:</p>
 * <pre>$('.target').hide();
 * </pre>
 * <p>The matched elements will be hidden immediately, with no animation. This is roughly equivalent to calling <code>.css('display', 'none')</code>, except that the value of the <code>display</code> property is saved in jQuery's data cache so that <code>display</code> can later be restored to its initial value. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>.</p>
 * <p>When a duration is provided, <code>.hide()</code> becomes an animation method. The <code>.hide()</code> method animates the width, height, and opacity of the matched elements simultaneously. When these properties reach 0, the <code>display</code> style property is set to <code>none</code> to ensure that the element no longer affects the layout of the page.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 * <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 * With the element initially shown, we can hide it slowly:
 * $('#clickme').click(function() {
 *   $('#book').hide('slow', function() {
 *     alert('Animation complete.');
 *   });
 * });</pre>
 * 
 * <p class="image four-across"> 
 *   <img src="/images/0042_06_05.png" alt=""/> 
 *   <img src="/images/0042_06_06.png" alt=""/>
 *   <img src="/images/0042_06_07.png" alt=""/>
 *   <img src="/images/0042_06_08.png" alt=""/>
 * </p>
 * 
 * 
 * @example
 * <p>Hides all paragraphs then the link on click.</p>
 * <pre><code>
 * 
 *     $("p").hide();
 *     $("a").click(function ( event ) {
 *       event.preventDefault();
 *       $(this).hide();
 *     });
 * </code></pre>
 * @example
 * <p>Animates all shown paragraphs to hide slowly, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 *     $("button").click(function () {
 *       $("p").hide("slow");
 *     });    
 * </code></pre>
 * @example
 * <p>Animates all spans (words in this case) to hide fastly, completing each animation within 200 milliseconds. Once each animation is done, it starts the next one.</p>
 * <pre><code>
 *     $("#hidr").click(function () {
 *       $("span:last-child").hide("fast", function () {
 *         // use callee so don't have to name the function
 *         $(this).prev().hide("fast", arguments.callee); 
 *       });
 *     });
 *     $("#showr").click(function () {
 *       $("span").show(2000);
 *     });
 * 
 * </code></pre>
 * @example
 * <p>Hides the divs when clicked over 2 seconds, then removes the div element when its hidden.  Try clicking on more than one box at a time.</p>
 * <pre><code>
 *     for (var i = 0; i < 5; i++) {
 *       $("<div>").appendTo(document.body);
 *     }
 *     $("div").click(function () {
 *       $(this).hide(2000, function () {
 *         $(this).remove();
 *       });
 *     });
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.hide = function(duration, callback) {return new jQuery();};

/**
 * Set the CSS width of each element in the set of matched elements.
 * 
 * <p>When calling <code>.width('value')</code>, the value can be either a string (number and unit) or a number. If only a number is provided for the value, jQuery assumes a pixel unit. If a string is provided, however, any valid CSS measurement may be used for the width (such as <code>100px</code>, <code>50%</code>, or <code>auto</code>). Note that in modern browsers, the CSS width property does not include padding, border, or margin, unless the <code>box-sizing</code> CSS property is used.</p>
 * 
 * <p>If no explicit unit was specified (like 'em' or '%') then "px" is concatenated to the value.</p>
 * 
 * <p>Note that <code>.width('value')</code> sets the width of the box in accordance with the CSS <code>box-sizing</code> property. Changing this property to <code>border-box</code> will cause this function to change the outerWidth of the box instead of the content width.</p>
 * @example
 * <p>To set the width of each div on click to 30px plus a color change.</p>
 * <pre><code>
 * 
 *     $("div").one('click', function () {
 *       $(this).width(30)
 *              .css({cursor:"auto", "background-color":"blue"});
 *     });
 * </code></pre>
 * 
 * @param {String} value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.width = function(value) {return new jQuery();};

/**
 * Set the CSS height of every matched element.
 * 
 * <p>When calling <code>.height(value)</code>, the value can be either a string (number and unit) or a number. If only a number is provided for the value, jQuery assumes a pixel unit. If a string is provided, however, any valid CSS measurement may be used for the height (such as <code>100px</code>, <code>50%</code>, or <code>auto</code>). Note that in modern browsers, the CSS height property does not include padding, border, or margin.</p>
 * <p>If no explicit unit was specified (like 'em' or '%') then "px" is concatenated to the value.</p>
 * <p>Note that <code>.height(value)</code> sets the height of the box in accordance with the CSS <code>box-sizing</code> property. Changing this property to <code>border-box</code> will cause this function to change the outerHeight of the box instead of the content height.</p>
 * @example
 * <p>To set the height of each div on click to 30px plus a color change.</p>
 * <pre><code>$("div").one('click', function () {
 *       $(this).height(30)
 *              .css({cursor:"auto", backgroundColor:"green"});
 *     });</code></pre>
 * 
 * @param {String} value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.height = function(value) {return new jQuery();};

/**
 * Display the matched elements.
 * 
 * 
 * <p>With no parameters, the <code>.show()</code> method is the simplest way to display an element:
 * </p>
 * <pre>$('.target').show();
 * </pre>
 * <p>The matched elements will be revealed immediately, with no animation. This is roughly equivalent to calling <code>.css('display', 'block')</code>, except that the <code>display</code> property is restored to whatever it was initially. If an element has a <code>display</code> value of <code>inline</code>, then is hidden and shown, it will once again be displayed <code>inline</code>.</p>
 * <p><strong>Note: </strong> If using !important in your styles, such as
 * <code>display: none !important</code>,
 * it is necessary to override the style using <code>.css('display', 'block !important')</code> should you wish for <code>.show()</code> to function correctly.</p>
 * <p>When a duration is provided, <code>.show()</code> becomes an animation method. The <code>.show()</code> method animates the width, height, and opacity of the matched elements simultaneously.</p>
 * <p>Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings <code>'fast'</code> and <code>'slow'</code> can be supplied to indicate durations of <code>200</code> and <code>600</code> milliseconds, respectively.</p>
 *     <p>As of jQuery 1.4.3, an optional string naming an easing function may be used. Easing functions specify the speed at which the animation progresses at different points within the animation. The only easing implementations in the jQuery library are the default, called <code>swing</code>, and one that progresses at a constant pace, called <code>linear</code>. More easing functions are available with the use of plug-ins, most notably the <a href="http://jqueryui.com">jQuery UI suite</a>.</p>
 * <p>If supplied, the callback is fired once the animation is complete. This can be useful for stringing different animations together in sequence. The callback is not sent any arguments, but <code>this</code> is set to the DOM element being animated. If multiple elements are animated, it is important to note that the callback is executed once per matched element, not once for the animation as a whole.</p>
 * <p>We can animate any element, such as a simple image:</p>
 * <pre>&lt;div id="clickme"&gt;
 *   Click here
 * &lt;/div&gt;
 * &lt;img id="book" src="book.png" alt="" width="100" height="123" /&gt;
 * With the element initially hidden, we can show it slowly:
 * $('#clickme').click(function() {
 *   $('#book').show('slow', function() {
 *     // Animation complete.
 *   });
 * });</pre>
 * <p class="image four-across">
 *   <img src="/images/0042_06_01.png" alt=""/>
 *   <img src="/images/0042_06_02.png" alt=""/>
 *   <img src="/images/0042_06_03.png" alt=""/>
 *   <img src="/images/0042_06_04.png" alt=""/>
 * </p>
 * 
 * 
 * @example
 * <p>Animates all hidden paragraphs to show slowly, completing the animation within 600 milliseconds.</p>
 * <pre><code>
 *     $("button").click(function () {
 *     $("p").show("slow");
 *     });
 *     </code></pre>
 * @example
 * <p>Animates all hidden divs to show fastly in order, completing each animation within 200 milliseconds. Once each animation is done, it starts the next one.</p>
 * <pre><code>
 * $("#showr").click(function () {
 *   $("div:eq(0)").show("fast", function () {
 *     / * use callee so don't have to name the function * /
 *     $(this).next("div").show("fast", arguments.callee);
 *   });
 * });
 * $("#hidr").click(function () {
 *   $("div").hide(2000);
 * });
 * 
 * </code></pre>
 * @example
 * <p>Shows all span and input elements with an animation. Once the animation is done, it changes the text.</p>
 * <pre><code>
 * function doIt() {
 *   $("span,div").show("slow");
 * }
 * / * can pass in function name * /
 * $("button").click(doIt);
 * 
 * $("form").submit(function () {
 *   if ($("input").val() == "yes") {
 *     $("p").show(4000, function () {
 *       $(this).text("Ok, DONE! (now showing)");
 *     });
 *   }
 *   $("span,div").hide("fast");
 *   / * to stop the submit * /
 *   return false; 
 * });
 * </code></pre>
 * 
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Callback} callback A function to call once the animation is complete.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.show = function(duration, callback) {return new jQuery();};

/**
 * Set the current horizontal position of the scroll bar for each of the set of matched elements.
 * 
 * <p>The horizontal scroll position is the same as the number of pixels that are hidden from view above the scrollable area. Setting the <code>scrollLeft</code> positions the horizontal scroll of each matched element.</p>
 * @example
 * <p>Set the scrollLeft of a div.</p>
 * <pre><code>$("div.demo").scrollLeft(300);
 * </code></pre>
 * 
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * 
 * @since 1.2.6
 * @returns {jQuery}
**/
jQuery.prototype.scrollLeft = function(value) {return new jQuery();};

/**
 * Translate all items in an array or object to new array of items.
 * 
 * 
 *   <p>The <code>$.map()</code> method applies a function to each item in an array or object and maps the results into a new array. <strong>Prior to jQuery 1.6</strong>, <code>$.map()</code> supports traversing <em>arrays and array-like objects only</em>. <strong>As of jQuery 1.6</strong> it also traverses objects.</p>
 *    <p>Array-like objects, such as jQuery collections, are treated as arrays. In other words, if an object has a <code>.length</code> property <em>and</em> a value on the <code>.length - 1</code> index, it is traversed as an array.</p>
 *     <p>The translation function that is provided to this method is called for each top-level element in the array or object and is passed two arguments: The element's value and its index or key within the array or object.</p>
 *     <p>The function can return:</p>
 *     <ul>
 *       <li>the translated value, which will be mapped to the resulting array</li>
 *       <li><code>null</code>, to remove the item</li>
 *       <li>an array of values, which will be flattened into the full array</li>
 *     </ul>
 *    
 * @example
 * <p>A couple examples of using .map()</p>
 * <pre><code>
 *     var arr = [ "a", "b", "c", "d", "e" ];
 *     $("div").text(arr.join(", "));
 * 
 *     arr = jQuery.map(arr, function(n, i){
 *       return (n.toUpperCase() + i);
 *     });
 *     $("p").text(arr.join(", "));
 * 
 *     arr = jQuery.map(arr, function (a) { 
 *       return a + a; 
 *     });
 *     $("span").text(arr.join(", "));
 * 
 * </code></pre>
 * @example
 * <p>Map the original array to a new one and add 4 to each value.</p>
 * <pre><code>$.map( [0,1,2], function(n){
 *    return n + 4;
 *  });</code></pre>
 * @example
 * <p>Maps the original array to a new one and adds 1 to each value if it is bigger then zero, otherwise it's removed.</p>
 * <pre><code>$.map( [0,1,2], function(n){
 *    return n > 0 ? n + 1 : null;
 *  });</code></pre>
 * @example
 * <p>Map the original array to a new one; each element is added with its original value and the value plus one.</p>
 * <pre><code>$.map( [0,1,2], function(n){
 *    return [ n, n + 1 ];
 *  });</code></pre>
 * @example
 * <p>Map the original object to a new array and double each value.</p>
 * <pre><code>
 * var dimensions = { width: 10, height: 15, length: 20 };
 * dimensions = $.map( dimensions, function( value, index ) {
 *   return value * 2;
 * }); </code></pre>
 * @example
 * <p>Map an object's keys to an array.</p>
 * <pre><code>
 * var dimensions = { width: 10, height: 15, length: 20 },
 *     keys = $.map( dimensions, function( value, index ) {
 *       return index;
 *     }); </code></pre>
 * @example
 * <p>Maps the original array to a new one; each element is squared.</p>
 * <pre><code>
 * $.map( [0,1,2,3], function (a) { 
 *   return a * a; 
 * });</code></pre>
 * @example
 * <p>Remove items by returning <code>null</code> from the function. This removes any numbers less than 50, and the rest are decreased by 45.</p>
 * <pre><code>
 * $.map( [0, 1, 52, 97], function (a) {
 *   return (a > 50 ? a - 45 : null); 
 * });</code></pre>
 * @example
 * <p>Augmenting the resulting array by returning an array inside the function.</p>
 * <pre><code>var array = [0, 1, 52, 97];
 * array = $.map(array, function(a, index) {
 *   return [a - 45, index];
 * }); </code></pre>
 * 
 * @param {Array} arrayOrObject The Array or Object to translate.
 * @param {Function} callback The function to process each item against.  The first argument to the function is the value; the second argument is the index or key of the array or object property. The function can return any value to add to the array. A returned array will be flattened into the resulting array. Within the function, <code>this</code> refers to the global (window) object. 
 * 
 * @since 1.6
 * @returns {Array}
**/
jQuery.map = function(arrayOrObject, callback) {return new Array();};

/**
 * Merge the contents of two or more objects together into the first object.
 * 
 * <p>When we supply two or more objects to <code>$.extend()</code>, properties from all of the objects are added to the target object.</p>
 *   <p>If only one argument is supplied to <code>$.extend()</code>, this means the target argument was omitted. In this case, the jQuery object itself is assumed to be the target. By doing this, we can add new functions to the jQuery namespace.  This can be useful for plugin authors wishing to add new methods to JQuery.</p>
 *   <p>Keep in mind that the target object (first argument) will be modified, and will also be returned from <code>$.extend()</code>. If, however, we want to preserve both of the original objects, we can do so by passing an empty object as the target:</p>
 *   <pre>var object = $.extend({}, object1, object2);</pre>
 * 
 *   <p>The merge performed by <code>$.extend()</code> is not recursive by default; if a property of the first object is itself an object or array, it will be completely overwritten by a property with the same key in the second object. The values are not merged. This can be seen in the example below by examining the value of banana. However, by passing <code>true</code> for the first function argument, objects will be recursively merged.</p>
 *   <p>Undefined properties are not copied. However, properties inherited from the object's prototype <em>will</em> be copied over. For performance reasons, properties that have values of built-in JavaScript types such as Date or RegExp are not re-constructed, and will appear as plain Objects in the resulting object or array.</p>
 * <blockquote>
 * <p><strong>Note:</strong> When performing a deep extend, Object and Array are extended, however primitive types such string, boolean and number are not. For specific needs that fall outside of this behaviour, it is recommended to write a custom extend method as this will be significantly faster from a performance perspective. </p>
 * </blockquote>
 * 
 *   
 * @example
 * <p>Merge two objects, modifying the first.</p>
 * <pre><code>
 * var object1 = {
 *   apple: 0,
 *   banana: {weight: 52, price: 100},
 *   cherry: 97
 * };
 * var object2 = {
 *   banana: {price: 200},
 *   durian: 100
 * };
 * 
 * / * merge object2 into object1 * /
 * $.extend(object1, object2);
 * 
 * var printObj = function(obj) {
 *   var arr = [];
 *   $.each(obj, function(key, val) {
 *     var next = key + ": ";
 *     next += $.isPlainObject(val) ? printObj(val) : val;
 *     arr.push( next );
 *   });
 *   return "{ " +  arr.join(", ") + " }";
 * };
 * 
 * $("#log").append( printObj(object1) );
 * </code></pre>
 * @example
 * <p>Merge two objects recursively, modifying the first.</p>
 * <pre><code>
 * var object1 = {
 *   apple: 0,
 *   banana: {weight: 52, price: 100},
 *   cherry: 97
 * };
 * var object2 = {
 *   banana: {price: 200},
 *   durian: 100
 * };
 * 
 * / * merge object2 into object1, recursively * /
 * $.extend(true, object1, object2);
 * 
 * var printObj = function(obj) {
 *   var arr = [];
 *   $.each(obj, function(key, val) {
 *     var next = key + ": ";
 *     next += $.isPlainObject(val) ? printObj(val) : val;
 *     arr.push( next );
 *   });
 *   return "{ " +  arr.join(", ") + " }";
 * };
 * 
 * $("#log").append( printObj(object1) );
 * </code></pre>
 * @example
 * <p>Merge defaults and options, without modifying the defaults. This is a common plugin development pattern.</p>
 * <pre><code>
 * var defaults = { validate: false, limit: 5, name: "foo" };
 * var options = { validate: true, name: "bar" };
 * 
 * / * merge defaults and options, without modifying defaults * /
 * var settings = $.extend({}, defaults, options);
 * 
 * var printObj = function(obj) {
 *   var arr = [];
 *   $.each(obj, function(key, val) {
 *     var next = key + ": ";
 *     next += $.isPlainObject(val) ? printObj(val) : val;
 *     arr.push( next );
 *   });
 *   return "{ " +  arr.join(", ") + " }";
 * };
 * 
 * 
 * $("#log").append( "<div><b>settings -- </b>" + printObj(settings) + "</div>" );
 * $("#log").append( "<div><b>options -- </b>" + printObj(options) + "</div>" );
 * 
 * </code></pre>
 * 
 * @param {Boolean} deep If true, the merge becomes recursive (aka. deep copy).
 * @param {Object} target The object to extend. It will receive the new properties.
 * @param {Object} object1 An object containing additional properties to merge in.
 * @param {Object} objectN Additional objects containing properties to merge in.
 * 
 * @since 1.1.4
 * @returns {Object}
**/
jQuery.extend = function(deep, target, object1, objectN) {return new Object();};

/**
 * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
 * 
 * 
 *     <p>The <code>$.each()</code> function is not the same as <a href="/each/">.each()</a>, which is used to iterate, exclusively, over a jQuery object. The <code>$.each()</code> function can be used to iterate over any collection, whether it is a map (JavaScript object) or an array. In the case of an array, the callback is passed an array index and a corresponding array value each time. (The value can also be accessed through the <code>this</code> keyword, but Javascript will always wrap the <code>this</code> value as an <code>Object</code> even if it is a simple string or number value.) The method returns its first argument, the object that was iterated.</p>
 * 
 * <pre>$.each([52, 97], function(index, value) { 
 *   alert(index + ': ' + value); 
 * });
 * </pre>
 * <p>This produces two messages:</p>
 * <p>
 *   <span class="output">0: 52</span><br/>
 *   <span class="output">1: 97</span>
 * </p>
 *     <p>If a map is used as the collection, the callback is passed a key-value pair each time:</p>
 * <pre>var map = { 
 *   'flammable': 'inflammable', 
 *   'duh': 'no duh' 
 * }; 
 * $.each(map, function(key, value) { 
 *   alert(key + ': ' + value); 
 * });</pre>
 *     <p>Once again, this produces two messages:</p>
 *     <p>
 *       <span class="output">flammable: inflammable</span><br/>
 *       <span class="output">duh: no duh</span>
 *     </p>
 *     
 *     <p>We can break the <code>$.each()</code> loop at a particular iteration by making the callback function return <code>false</code>. Returning <em>non-false</em> is the same as a <code>continue</code> statement in a for loop; it will skip immediately to the next iteration.</p>
 * @example
 * <p>Iterates through the array displaying each number as both a word and numeral</p>
 * <pre><code>
 *     var arr = [ "one", "two", "three", "four", "five" ];
 *     var obj = { one:1, two:2, three:3, four:4, five:5 };
 * 
 *     jQuery.each(arr, function() {
 *       $("#" + this).text("Mine is " + this + ".");
 *        return (this != "three"); // will stop running after "three"
 *    });
 * 
 *     jQuery.each(obj, function(i, val) {
 *       $("#" + i).append(document.createTextNode(" - " + val));
 *     });
 * </code></pre>
 * @example
 * <p>Iterates over items in an array, accessing both the current item and its index.</p>
 * <pre><code>$.each( ['a','b','c'], function(i, l){
 *    alert( "Index #" + i + ": " + l );
 *  });</code></pre>
 * @example
 * <p>Iterates over the properties in an object, accessing both the current item and its key.</p>
 * <pre><code>$.each( { name: "John", lang: "JS" }, function(k, v){
 *    alert( "Key: " + k + ", Value: " + v );
 *  });</code></pre>
 * 
 * @param {Object} collection The object or array to iterate over.
 * @param {Function} callback The function that will be executed on every object.
 * 
 * @since 1.0
 * @returns {Object}
**/
jQuery.each = function(collection, callback) {return new Object();};

/**
 * Set the current vertical position of the scroll bar for each of the set of matched elements.
 * 
 * <p>The vertical scroll position is the same as the number of pixels that are hidden from view above the scrollable area. Setting the <code>scrollTop</code> positions the vertical scroll of each matched element.</p>
 * @example
 * <p>Set the scrollTop of a div.</p>
 * <pre><code>$("div.demo").scrollTop(300);
 * </code></pre>
 * 
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * 
 * @since 1.2.6
 * @returns {jQuery}
**/
jQuery.prototype.scrollTop = function(value) {return new jQuery();};

/**
 * Set the current coordinates of every element in the set of matched elements, relative to the document.
 * 
 * <p>The <code>.offset()</code> setter method allows us to reposition an element. The element's position is specified <em>relative to the document</em>. If the element's <code>position</code> style property is currently <code>static</code>, it will be set to <code>relative</code> to allow for this repositioning.</p>
 * @example
 * <p>Set the offset of the second paragraph:</p>
 * <pre><code>$("p:last").offset({ top: 10, left: 30 });</code></pre>
 * 
 * @param {Object} coordinates An object containing the properties <code>top</code> and <code>left</code>, which are integers indicating the new top and left coordinates for the elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.offset = function(coordinates) {return new jQuery();};

/**
 * Set one or more CSS properties for the  set of matched elements.
 * 
 * <p>As with the <code>.prop()</code> method, the <code>.css()</code> method makes setting properties of elements quick and easy. This method can take either a property name and value as separate parameters, or a single map of key-value pairs (JavaScript object notation).</p>
 *       <p>Also, jQuery can equally interpret the CSS and DOM formatting of multiple-word properties. For example, jQuery understands and returns the correct value for both <code>.css({'background-color': '#ffe', 'border-left': '5px solid #ccc'})</code> and <code>.css({backgroundColor: '#ffe', borderLeft: '5px solid #ccc'})</code>. Notice that with the DOM notation, quotation marks around the property names are optional, but with CSS notation they're required due to the hyphen in the name.</p>
 *       
 *       <p>When using <code>.css()</code> as a setter, jQuery modifies the element's <code>style</code> property. For example,  <code>$('#mydiv').css('color', 'green')</code> is equivalent to <code>document.getElementById('mydiv').style.color = 'green'</code>. Setting the value of a style property to an empty string — e.g. <code>$('#mydiv').css('color', '')</code> — removes that property from an element if it has already been directly applied, whether in the HTML style attribute, through jQuery's <code>.css()</code> method, or through direct DOM manipulation of the <code>style</code> property. It does not, however, remove a style that has been applied with a CSS rule in a stylesheet or <code>&lt;style&gt;</code> element.</p>
 * 
 *      <p>As of jQuery 1.6, <code>.css()</code> accepts relative values similar to <code>.animate()</code>. Relative values are a string starting with <code>+=</code> or <code>-=</code> to increment or decrement the current value. For example, if an element's padding-left was 10px, <code>.css( "padding-left", "+=15" )</code> would result in a total padding-left of 25px.</p>
 * 
 *       <p>As of jQuery 1.4, <code>.css()</code> allows us to pass a function as the property value:</p>
 * <pre>$('div.example').css('width', function(index) {
 *   return index * 50;
 * });</pre>
 *   <p>This example sets the widths of the matched elements to incrementally larger values.</p>
 * @example
 * <p>To change the color of any paragraph to red on mouseover event.</p>
 * <pre><code>
 *   $("p").mouseover(function () {
 *     $(this).css("color","red");
 *   });
 * </code></pre>
 * @example
 * <p>Increase the width of #box by 200 pixels</p>
 * <pre><code>
 *   $("#box").one( "click", function () {
 *     $( this ).css( "width","+=200" );
 *   });
 * </code></pre>
 * @example
 * <p>To highlight a clicked word in the paragraph.</p>
 * <pre><code>
 *   var words = $("p:first").text().split(" ");
 *   var text = words.join("</span> <span>");
 *   $("p:first").html("<span>" + text + "</span>");
 *   $("span").click(function () {
 *     $(this).css("background-color","yellow");
 *   });
 * 
 * </code></pre>
 * @example
 * <p>To set the color of all paragraphs to red and background to blue:</p>
 * <pre><code>
 *   $("p").hover(function () {
 *     $(this).css({'background-color' : 'yellow', 'font-weight' : 'bolder'});
 *   }, function () {
 *     var cssObj = {
 *       'background-color' : '#ddd',
 *       'font-weight' : '',
 *       'color' : 'rgb(0,40,244)'
 *     }
 *     $(this).css(cssObj);
 *   });
 * </code></pre>
 * @example
 * <p>Increase the size of a div when you click it:</p>
 * <pre><code>
 *   $("div").click(function() {
 *     $(this).css({
 *       width: function(index, value) {
 *         return parseFloat(value) * 1.2;
 *       }, 
 *       height: function(index, value) {
 *         return parseFloat(value) * 1.2;
 *       }
 * 
 *     });
 *   });
 * </code></pre>
 * 
 * @param {String} propertyName A CSS property name.
 * @param {String} value A value to set for the property.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.css = function(propertyName, value) {return new jQuery();};

/**
 * Create a deep copy of the set of matched elements.
 * 
 * <p>The <code>.clone()</code> method performs a <em>deep</em> copy of the set of matched elements, meaning that it copies the matched elements as well as all of their descendant elements and text nodes. When used in conjunction with one of the insertion methods, <code>.clone()</code> is a convenient way to duplicate elements on a page. Consider the following HTML:</p>
 *         <pre>&lt;div class="container"&gt;
 *   &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;div class="goodbye"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *         <p>As shown in the discussion for <code><a href="http://api.jquery.com/append/">.append()</a></code>,  normally when an element is inserted somewhere in the DOM, it is moved from its old location. So, given the code:</p>
 * <pre>$('.hello').appendTo('.goodbye');</pre>
 *     <p>The resulting DOM structure would be:</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;div class="goodbye"&gt;
 *     Goodbye
 *     &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *         <p>To prevent this and instead create a copy of the element, you could write the following:</p>
 *         <pre>$('.hello').clone().appendTo('.goodbye');</pre>
 *         <p>This would produce:</p>
 *         <pre>&lt;div class="container"&gt;
 *   &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;div class="goodbye"&gt;
 *     Goodbye
 *     &lt;div class="hello"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *         <blockquote><p>Note that when using the <code>.clone()</code> method, you can modify the cloned elements or their contents before (re-)inserting them into the document.</p></blockquote>
 *         <p>Normally, any event handlers bound to the original element are <em>not</em> copied to the clone. The optional <code>withDataAndEvents</code> parameter allows us to change this behavior, and to instead make copies of all of the event handlers as well, bound to the new copy of the element. As of jQuery 1.4, all element data (attached by the <code>.data()</code> method) is also copied to the new copy. </p>
 * <p>However, objects and arrays within element data are not copied and will continue to be shared between the cloned element and the original element. To deep copy all data, copy each one manually:</p>
 * <pre>var $elem = $('#elem').data( "arr": [ 1 ] ), // Original element with attached data
 *     $clone = $elem.clone( true )
 *     .data( "arr", $.extend( [], $elem.data("arr") ) ); // Deep copy to prevent data sharing
 * </pre>
 *     <p>As of jQuery 1.5, <code>withDataAndEvents</code> can be optionally enhanced with <code>deepWithDataAndEvents </code> to copy the events and data for all children of the cloned element.</p>
 *   
 * @example
 * <p>Clones all b elements (and selects the clones) and prepends them to all paragraphs.</p>
 * <pre><code>
 *   $("b").clone().prependTo("p");
 * </code></pre>
 * @example
 * <p>When using <code>.clone()</code> to clone a collection of elements that are not attached to the DOM, their order when inserted into the DOM is not guaranteed. However, it may be possible to preserve sort order with a workaround, as demonstrated:</p>
 * <pre><code>
 * // sort order is not guaranteed here and may vary with browser  
 * $('#copy').append($('#orig .elem')
 *           .clone()
 *           .children('a')
 *           .prepend('foo - ')
 *           .parent()
 *           .clone()); 
 *  
 * // correct way to approach where order is maintained
 * $('#copy-correct')
 *           .append($('#orig .elem')
 *           .clone()
 *           .children('a')
 *           .prepend('bar - ')
 *           .end()); 
 * </code></pre>
 * 
 * @param {Boolean} withDataAndEvents A Boolean indicating whether event handlers and data should be copied along with the elements. The default value is <code>false</code>. <em>*For 1.5.0 the default value is incorrectly <code>true</code>. This will be changed back to <code>false</code> in 1.5.1 and up.</em>
 * @param {Boolean} deepWithDataAndEvents A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to <code>false</code>).
 * 
 * @since 1.5
 * @returns {jQuery}
**/
jQuery.prototype.clone = function(withDataAndEvents, deepWithDataAndEvents) {return new jQuery();};

/**
 * Replace each element in the set of matched elements with the provided new content.
 * 
 * <p>The <code>.replaceWith()</code> method removes content from the DOM and inserts new content in its place with a single call. Consider this DOM structure:</p>
 *     <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner first"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner second"&gt;And&lt;/div&gt;
 *   &lt;div class="inner third"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p>The second inner <code>&lt;div&gt;</code> could be replaced with the specified HTML:</p>
 *     <pre>$('div.second').replaceWith('&lt;h2&gt;New heading&lt;/h2&gt;');</pre>
 *     <p>This results in the structure:</p>
 *     <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner first"&gt;Hello&lt;/div&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 *   &lt;div class="inner third"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p><em>All</em> inner <code>&lt;div&gt;</code> elements could be targeted at once:</p>
 *     <pre>$('div.inner').replaceWith('&lt;h2&gt;New heading&lt;/h2&gt;');</pre>
 *     <p>This causes all of them to be replaced:</p>
 *     <pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 *   &lt;h2&gt;New heading&lt;/h2&gt;
 * &lt;/div&gt;</pre>
 *     <p>An element could also be selected as the replacement:</p>
 *     <pre>$('div.third').replaceWith($('.first'));</pre>
 *     <p>This results in the DOM structure:</p>
 *     <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner second"&gt;And&lt;/div&gt;
 *   &lt;div class="inner first"&gt;Hello&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p>This example demonstrates that the selected element replaces the target by being moved from its old location, not by being cloned.</p>
 *     <p>The <code>.replaceWith()</code> method, like most jQuery methods, returns the jQuery object so that other methods can be chained onto it. However, it must be noted that the <em>original</em> jQuery object is returned. This object refers to the element that has been removed from the DOM, not the new element that has replaced it.</p>
 * <p>As of jQuery 1.4, <code>.replaceWith()</code> can also work on disconnected DOM nodes. For example, with the following code, <code>.replaceWith()</code> returns a jQuery set containing only a paragraph.:</p>
 * <pre>$("&lt;div/&gt;").replaceWith("&lt;p&gt;&lt;/p&gt;");</pre>
 * <p>The <code>.replaceWith()</code> method can also take a function as its argument:</p>
 * <pre>$('div.container').replaceWith(function() {
 *   return $(this).contents();
 * });</pre>
 * <p>This results in <code>&lt;div class="container"&gt;</code> being replaced by its three child <code>&lt;div&gt;</code>s. The return value of the function may be an HTML string, DOM element, or jQuery object.</p>
 * 
 * @example
 * <p>On click, replace the button with a div containing the same word.</p>
 * <pre><code>
 * $("button").click(function () {
 *   $(this).replaceWith( "<div>" + $(this).text() + "</div>" );
 * });
 * </code></pre>
 * @example
 * <p>Replace all paragraphs with bold words.</p>
 * <pre><code>
 * $("p").replaceWith( "<b>Paragraph. </b>" );
 * </code></pre>
 * @example
 * <p>On click, replace each paragraph with a div that is already in the DOM and selected with the <code>$()</code> function. Notice it doesn't clone the object but rather moves it to replace the paragraph.</p>
 * <pre><code>
 * $("p").click(function () {
 *   $(this).replaceWith( $("div") );
 * });
 * </code></pre>
 * @example
 * <p>On button click, replace the containing div with its child divs and append the class name of the selected element to the paragraph.</p>
 * <pre><code>
 * $('button').bind("click", function() {
 *   var $container = $("div.container").replaceWith(function() {
 *     return $(this).contents();
 *   });
 * 
 *   $("p").append( $container.attr("class") );
 * });
 * </code></pre>
 * 
 * @param {Function} fn A function that returns content with which to replace the set of matched elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.replaceWith = function(fn) {return new jQuery();};

/**
 * Wrap an HTML structure around the content of each element in the set of matched elements.
 * 
 * <p>The <code>.wrapInner()</code> function can take any string or object that could be passed to the <code>$()</code> factory function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. The structure will be wrapped around the content of each of the elements in the set of matched elements.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>Using <code>.wrapInner()</code>, we can insert an HTML structure around the content of each inner <code>&lt;div&gt;</code> elements like so:</p>
 * 				<pre>$('.inner').wrapInner('&lt;div class="new" /&gt;');</pre>
 * 				<p>The new <code>&lt;div&gt;</code> element is created on the fly and added to the DOM. The result is a new <code>&lt;div&gt;</code> wrapped around the content of each matched element:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;div class="new"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;div class="new"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>The second version of this method allows us to instead specify a callback function. This callback function will be called once for every matched element; it should return a DOM element, jQuery object, or HTML snippet in which to wrap the content of the corresponding element. For example:</p>
 * 				<pre>$('.inner').wrapInner(function() {
 *   return '&lt;div class="' + this.nodeValue + '" /&gt;';
 * });</pre>
 * 				<p>This will cause each <code>&lt;div&gt;</code> to have a class corresponding to the text it wraps:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;div class="Hello"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;div class="Goodbye"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 * <p><strong>Note:</strong> When passing a selector string to the <code>.wrapInner()</code> function, the expected input is well formed HTML with correctly closed tags. Examples of valid input include:</p>
 * <pre>
 * $(elem).wrapInner("&lt;div class='test' /&gt;");
 * $(elem).wrapInner("&lt;div class='test'&gt;&lt;/div&gt;");
 * $(elem).wrapInner("&lt;div class=\"test\"&gt;&lt;/div&gt;");
 * </pre>
 * 
 * @example
 * <p>Selects all paragraphs and wraps a bold tag around each of its contents.</p>
 * <pre><code>$("p").wrapInner("<b></b>");</code></pre>
 * @example
 * <p>Wraps a newly created tree of objects around the inside of the body.</p>
 * <pre><code>$("body").wrapInner("<div><div><p><em><b></b></em></p></div></div>");</code></pre>
 * @example
 * <p>Selects all paragraphs and wraps a bold tag around each of its contents.</p>
 * <pre><code>$("p").wrapInner(document.createElement("b"));</code></pre>
 * @example
 * <p>Selects all paragraphs and wraps a jQuery object around each of its contents.</p>
 * <pre><code>$("p").wrapInner($("<span class='red'></span>"));</code></pre>
 * 
 * @param {Function} wrappingFunction A callback function which generates a structure to wrap around the content of the matched elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.wrapInner = function(wrappingFunction) {return new jQuery();};

/**
 * Wrap an HTML structure around each element in the set of matched elements.
 * 
 * <p>The <code>.wrap()</code> function can take any string or object that could be passed to the <code>$()</code> factory function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. The structure will be wrapped around each of the elements in the set of matched elements. This method returns the original set of elements for chaining purposes.</p>
 *   <p>Consider the following HTML:</p>
 *   <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>Using <code>.wrap()</code>, we can insert an HTML structure around the inner <code>&lt;div&gt;</code> elements like so:</p>
 * 				<pre>$('.inner').wrap('&lt;div class="new" /&gt;');</pre>
 * 				<p>The new <code>&lt;div&gt;</code> element is created on the fly and added to the DOM. The result is a new <code>&lt;div&gt;</code> wrapped around each matched element:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;div class="new"&gt;
 *     &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 *   &lt;div class="new"&gt;
 *     &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *   <p>The second version of this method allows us to instead specify a callback function. This callback function will be called once for every matched element; it should return a DOM element, jQuery object, or HTML snippet in which to wrap the corresponding element. For example:</p>
 *   <pre>$('.inner').wrap(function() {
 *   return '&lt;div class="' + $(this).text() + '" /&gt;';
 * });</pre>
 *   <p>This will cause each <code>&lt;div&gt;</code> to have a class corresponding to the text it wraps:</p>
 *   <pre>&lt;div class="container"&gt;
 *   &lt;div class="Hello"&gt;
 *     &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;/div&gt;
 *   &lt;div class="Goodbye"&gt;
 *     &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 
 * @example
 * <p>Wrap a new div around all of the paragraphs.</p>
 * <pre><code>$("p").wrap("<div></div>");</code></pre>
 * @example
 * <p>Wraps a newly created tree of objects around the spans.  Notice anything in between the spans gets left out like the <strong> (red text) in this example.  Even the white space between spans is left out.  Click View Source to see the original html.</p>
 * <pre><code>$("span").wrap("<div><div><p><em><b></b></em></p></div></div>");</code></pre>
 * @example
 * <p>Wrap a new div around all of the paragraphs.</p>
 * <pre><code>$("p").wrap(document.createElement("div"));</code></pre>
 * @example
 * <p>Wrap a jQuery object double depth div around all of the paragraphs.  Notice it doesn't move the object but just clones it to wrap around its target.</p>
 * <pre><code>$("p").wrap($(".doublediv"));</code></pre>
 * 
 * @param {Function} fn A callback function returning the HTML content or jQuery object to wrap around the matched elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.wrap = function(fn) {return new jQuery();};

/**
 * Insert content, specified by the parameter, before each element in the set of matched elements.
 * 
 * <p>The <code>.before()</code> and <code><a href="/insertBefore">.insertBefore()</a></code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .before()</code>, the selector expression preceding the method is the container before which the content is inserted. With <code>.insertBefore()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted before the target container.</p>
 * 				<p>Consider the following HTML:</p>
 * 				<pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>You can create content and insert it before several elements at once:</p>
 * 				<pre>$('.inner').before('&lt;p&gt;Test&lt;/p&gt;');</pre>
 * 				<p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * <p>You can also select an element on the page and insert it before another:</p>
 * 				<pre>$('.container').before($('h2'));</pre>
 * 				<p>If an element selected this way is inserted elsewhere, it will be moved before the target (not cloned):</p>
 * 				<pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * <p>In jQuery 1.4, <code>.before()</code> and <code>.after()</code> will also work on disconnected DOM nodes:</p>
 * <pre>$("&lt;div/&gt;").before("&lt;p&gt;&lt;/p&gt;");</pre>
 * <p>The result is a jQuery set that contains a paragraph and a div (in that order).</p>
 *    <h4 id="additional-arguments">Additional Arguments</h4>
 *     <p>Similar to other content-adding methods such as <code><a href="http://api.jquery.com/prepend/">.prepend()</a></code> and <code><a href="http://api.jquery.com/after/">.after()</a></code>, <code>.before()</code> also supports passing in multiple arguments as input. Supported input includes DOM elements, jQuery objects, HTML strings, and arrays of DOM elements.</p> 
 *     <p>For example, the following will insert two new <code>&lt;div&gt;</code>s and an existing <code>&lt;div&gt;</code> before the first paragraph:</p>
 * <pre>var $newdiv1 = $('&lt;div id="object1"/&gt;'),
 *     newdiv2 = document.createElement('div'),
 *     existingdiv1 = document.getElementById('foo');
 * 
 * $('p').first().before($newdiv1, [newdiv2, existingdiv1]);
 * </pre>
 * <p>Since <code>.before()</code> can accept any number of additional arguments, the same result can be achieved by passing in the three <code>&lt;div&gt;</code>s as three separate arguments, like so: <code>$('p').first().before($newdiv1, newdiv2, existingdiv1)</code>. The type and number of arguments will largely depend on how you collect the elements in your code.</p>
 * 
 * 
 * @example
 * <p>Inserts some HTML before all paragraphs.</p>
 * <pre><code>$("p").before("<b>Hello</b>");</code></pre>
 * @example
 * <p>Inserts a DOM element before all paragraphs.</p>
 * <pre><code>$("p").before( document.createTextNode("Hello") );</code></pre>
 * @example
 * <p>Inserts a jQuery object (similar to an Array of DOM Elements) before all paragraphs.</p>
 * <pre><code>$("p").before( $("b") );</code></pre>
 * 
 * @param {Function} fn A function that returns an HTML string to insert before each element in the set of matched elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.before = function(fn) {return new jQuery();};

/**
 * Insert content, specified by the parameter, after each element in the set of matched elements.
 * 
 * <p>The <code>.after()</code> and <code><a href="/insertAfter">.insertAfter()</a></code> methods perform the same task. The major difference is in the syntax—specifically, in the placement of the content and target. With<code> .after()</code>, the selector expression preceding the method is the container after which the content is inserted. With <code>.insertAfter()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted after the target container.</p>
 * 
 * <p>Using the following HTML:</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 
 * <p>Content can be created and then inserted after several elements at once:</p>
 * 
 * <pre>$('.inner').after('&lt;p&gt;Test&lt;/p&gt;');</pre>
 * 
 * <p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * 
 * <pre>&lt;div class="container"&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;p&gt;Test&lt;/p&gt;
 * &lt;/div&gt;</pre>
 * 
 * <p>An element in the DOM can also be selected and inserted after another element:</p>
 * 
 * <pre>$('.container').after($('h2'));</pre>
 * 
 * <p>If an element selected this way is inserted elsewhere, it will be moved rather than cloned:</p>
 * 
 * <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;
 * &lt;h2&gt;Greetings&lt;/h2&gt;</pre>
 * <p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * <h4 id="disconnected-dom-nodes">Inserting Disconnected DOM nodes</h4>
 * <p>As of jQuery 1.4, <code>.before()</code> and <code>.after()</code> will also work on disconnected DOM nodes. For example, given the following code:</p>
 * <pre>$('&lt;div/&gt;').after('&lt;p&gt;&lt;/p&gt;');</pre>
 * <p>The result is a jQuery set containing a div and a paragraph, in that order. That set can be further manipulated, even before it is inserted in the document.</p>
 * <pre>$('&lt;div/&gt;').after('&lt;p&gt;&lt;/p&gt;').addClass('foo')
 *   .filter('p').attr('id', 'bar').html('hello')
 * .end()
 * .appendTo('body');</pre>
 * <p>This results in the following elements inserted just before the closing <code>&lt;/body&gt;</code> tag:</p>
 * <pre>
 * &lt;div class="foo"&gt;&lt;/div&gt;
 * &lt;p class="foo" id="bar"&gt;hello&lt;/p&gt;
 * </pre>
 * <h4 id="passing-a-function">Passing a Function</h4>
 * <p>As of jQuery 1.4, <code>.after()</code> supports passing a function that returns the elements to insert.</p>
 * <pre>$('p').after(function() {
 *   return '&lt;div&gt;' + this.className + '&lt;/div&gt;';
 * });</pre>
 * <p>This example inserts a <code>&lt;div&gt;</code> after each paragraph, with each new <code>&lt;div&gt;</code> containing the class name(s) of its preceding paragraph.</p>
 *     <h4 id="additional-arguments">Additional Arguments</h4>
 *     <p>Similar to other content-adding methods such as <code><a href="http://api.jquery.com/prepend/">.prepend()</a></code> and <code><a href="http://api.jquery.com/before/">.before()</a></code>, <code>.after()</code> also supports passing in multiple arguments as input. Supported input includes DOM elements, jQuery objects, HTML strings, and arrays of DOM elements.</p> 
 *     <p>For example, the following will insert two new <code>&lt;div&gt;</code>s and an existing <code>&lt;div&gt;</code> after the first paragraph:</p>
 * <pre>var $newdiv1 = $('&lt;div id="object1"/&gt;'),
 *     newdiv2 = document.createElement('div'),
 *     existingdiv1 = document.getElementById('foo');
 * 
 * $('p').first().after($newdiv1, [newdiv2, existingdiv1]);
 * </pre>
 * <p>Since <code>.after()</code> can accept any number of additional arguments, the same result can be achieved by passing in the three <code>&lt;div&gt;</code>s as three separate arguments, like so: <code>$('p').first().after($newdiv1, newdiv2, existingdiv1)</code>. The type and number of arguments will largely depend on the elements are collected in the code.</p>
 * 
 * 
 * @example
 * <p>Inserts some HTML after all paragraphs.</p>
 * <pre><code>$("p").after("<b>Hello</b>");</code></pre>
 * @example
 * <p>Inserts a DOM element after all paragraphs.</p>
 * <pre><code>$("p").after( document.createTextNode("Hello") );</code></pre>
 * @example
 * <p>Inserts a jQuery object (similar to an Array of DOM Elements) after all paragraphs.</p>
 * <pre><code>$("p").after( $("b") );</code></pre>
 * 
 * @param {Function} fn A function that returns an HTML string to insert after each element in the set of matched elements.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.after = function(fn) {return new jQuery();};

/**
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * 
 * <p>The <code>.prepend()</code> method inserts the specified content as the first child of each element in the jQuery collection (To insert it as the <em>last</em> child, use <a href="http://api.jquery.com/append/"><code>.append()</code></a>). </p>
 *     <p>The <code>.prepend()</code> and <code><a href="/prependTo">.prependTo()</a></code> methods perform the same task. The major difference is in the syntax—specifically, in the placement of the content and target. With<code> .prepend()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.prependTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.</p>
 *     <p>Consider the following HTML:</p>
 *     <pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p>You can create content and insert it into several elements at once:</p>
 *     <pre>$('.inner').prepend('&lt;p&gt;Test&lt;/p&gt;');</pre>
 *     <p>Each <code>&lt;div class="inner"&gt;</code> element gets this new content:</p>
 *     <pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;p&gt;Test&lt;/p&gt;
 *     Hello
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     &lt;p&gt;Test&lt;/p&gt;
 *     Goodbye
 *   &lt;/div&gt;
 * &lt;/div&gt;</pre>
 *   <p>You can also select an element on the page and insert it into another:</p>
 *   <pre>$('.container').prepend($('h2'));</pre>
 *   <p>If <em>a single element</em> selected this way is inserted elsewhere, it will be moved into the target (<em>not cloned</em>):</p>
 *   <pre>&lt;div class="container"&gt;
 *     &lt;h2&gt;Greetings&lt;/h2&gt;
 *     &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *     &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *     <p><strong>Important</strong>: If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 *     <h4 id="additional-arguments">Additional Arguments</h4>
 *     <p>Similar to other content-adding methods such as <code><a href="http://api.jquery.com/append/">.append()</a></code> and <code><a href="http://api.jquery.com/before/">.before()</a></code>, <code>.prepend()</code> also supports passing in multiple arguments as input. Supported input includes DOM elements, jQuery objects, HTML strings, and arrays of DOM elements.</p> 
 *     <p>For example, the following will insert two new <code>&lt;div&gt;</code>s and an existing <code>&lt;div&gt;</code> as the first three child nodes of the body:</p>
 * <pre>var $newdiv1 = $('&lt;div id="object1"/&gt;'),
 *     newdiv2 = document.createElement('div'),
 *     existingdiv1 = document.getElementById('foo');
 * 
 * $('body').prepend($newdiv1, [newdiv2, existingdiv1]);
 * </pre>
 * <p>Since <code>.prepend()</code> can accept any number of additional arguments, the same result can be achieved by passing in the three <code>&lt;div&gt;</code>s as three separate arguments, like so: <code>$('body').prepend($newdiv1, newdiv2, existingdiv1)</code>. The type and number of arguments will largely depend on how you collect the elements in your code.</p>
 *   
 * @example
 * <p>Prepends some HTML to all paragraphs.</p>
 * <pre><code>$("p").prepend("<b>Hello </b>");</code></pre>
 * @example
 * <p>Prepends a DOM Element to all paragraphs.</p>
 * <pre><code>$("p").prepend(document.createTextNode("Hello "));</code></pre>
 * @example
 * <p>Prepends a jQuery object (similar to an Array of DOM Elements) to all paragraphs.</p>
 * <pre><code>$("p").prepend( $("b") );</code></pre>
 * 
 * @param {Function} fn A function that returns an HTML string to insert at the beginning of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.prepend = function(fn) {return new jQuery();};

/**
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * 
 * <p>The <code>.append()</code> method inserts the  specified content as the last child of each element in the jQuery collection (To insert it as the <em>first</em> child, use <a href="http://api.jquery.com/prepend/"><code>.prepend()</code></a>). </p>
 *     <p>The <code>.append()</code> and <code><a href="/appendTo">.appendTo()</a></code> methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With<code> .append()</code>, the selector expression preceding the method is the container into which the content is inserted. With <code>.appendTo()</code>, on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.</p>
 *     <p>Consider the following HTML:</p>
 *     <pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 * &lt;/div&gt;
 * </pre>
 * <p>You can create content and insert it into several elements at once:</p>
 * <pre>$('.inner').append('&lt;p&gt;Test&lt;/p&gt;');
 * </pre>
 * <p>Each inner <code>&lt;div&gt;</code> element gets this new content:</p>
 * <pre>&lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;
 *     Hello
 *     &lt;p&gt;Test&lt;/p&gt;
 *   &lt;/div&gt;
 *   &lt;div class="inner"&gt;
 *     Goodbye
 *     &lt;p&gt;Test&lt;/p&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </pre>
 * <p>You can also select an element on the page and insert it into another:</p>
 * <pre>$('.container').append($('h2'));
 * </pre>
 * <p>If an element selected this way is inserted elsewhere, it will be moved into the target (not cloned):</p>
 * <pre>&lt;div class="container"&gt;
 *   &lt;div class="inner"&gt;Hello&lt;/div&gt;
 *   &lt;div class="inner"&gt;Goodbye&lt;/div&gt;
 *   &lt;h2&gt;Greetings&lt;/h2&gt;
 * &lt;/div&gt;
 * </pre>
 * <p>If there is more than one target element, however, cloned copies of the inserted element will be created for each target after the first.</p>
 * 
 *     <h4 id="additional-arguments">Additional Arguments</h4>
 *     <p>Similar to other content-adding methods such as <code><a href="http://api.jquery.com/prepend/">.prepend()</a></code> and <code><a href="http://api.jquery.com/before/">.before()</a></code>, <code>.append()</code> also supports passing in multiple arguments as input. Supported input includes DOM elements, jQuery objects, HTML strings, and arrays of DOM elements.</p> 
 *     <p>For example, the following will insert two new <code>&lt;div&gt;</code>s and an existing <code>&lt;div&gt;</code> as the last three child nodes of the body:</p>
 * <pre>var $newdiv1 = $('&lt;div id="object1"/&gt;'),
 *     newdiv2 = document.createElement('div'),
 *     existingdiv1 = document.getElementById('foo');
 * 
 * $('body').append($newdiv1, [newdiv2, existingdiv1]);
 * </pre>
 * <p>Since <code>.append()</code> can accept any number of additional arguments, the same result can be achieved by passing in the three <code>&lt;div&gt;</code>s as three separate arguments, like so: <code>$('body').append($newdiv1, newdiv2, existingdiv1)</code>. The type and number of arguments will largely depend on how you collect the elements in your code.</p>
 * 
 * @example
 * <p>Appends some HTML to all paragraphs.</p>
 * <pre><code>
 *   $("p").append("<strong>Hello</strong>");
 * </code></pre>
 * @example
 * <p>Appends an Element to all paragraphs.</p>
 * <pre><code>
 *   $("p").append(document.createTextNode("Hello"));
 * </code></pre>
 * @example
 * <p>Appends a jQuery object (similar to an Array of DOM Elements) to all paragraphs.</p>
 * <pre><code>
 *   $("p").append( $("strong") );
 * </code></pre>
 * 
 * @param {Function} fn A function that returns an HTML string to insert at the end of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.append = function(fn) {return new jQuery();};

/**
 * Set the value of each element in the set of matched elements.
 * 
 * <p>This method is typically used to set the values of form fields. </p>
 * <p>Passing an array of element values allows matching  <code>&lt;input type="checkbox"&gt;</code>, <code>&lt;input type="radio"&gt;</code> and <code>&lt;option&gt;</code>s inside of n <code>&lt;select multiple="multiple"&gt;</code> to be selected. In the case of <code>&lt;input type="radio"&gt;</code>s that are part of a radio group and <code>&lt;select multiple="multiple"&gt;</code> the other elements will be deselected.</p>
 *     <p>The <code>.val()</code> method allows us to set the value by passing in a function. As of jQuery 1.4, the function is passed two arguments, the current element's index and its current value: </p>
 * <pre>$('input:text.items').val(function(index, value) {
 *   return value + ' ' + this.className;
 * });
 * </pre>
 *   <p>This example appends the string " items" to the text inputs' values.</p>
 *   
 * @example
 * <p>Set the value of an input box.</p>
 * <pre><code>
 *     $("button").click(function () {
 *       var text = $(this).text();
 *       $("input").val(text);
 *     });
 * </code></pre>
 * @example
 * <p>Use the function argument to modify the value of an input box.</p>
 * <pre><code>
 *   $('input').bind('blur', function() {
 *       
 *     $(this).val(function(i, val) {
 *       return val.toUpperCase();
 *     });
 *     
 *   });
 *   </code></pre>
 * @example
 * <p>Set a single select, a multiple select, checkboxes and a radio button .</p>
 * <pre><code>
 *     
 *     $("#single").val("Single2");
 *     $("#multiple").val(["Multiple2", "Multiple3"]); 
 *     $("input").val(["check1","check2", "radio1" ]);
 * 
 * </code></pre>
 * 
 * @param {String} value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.val = function(value) {return new jQuery();};

/**
 * Set the content of each element in the set of matched elements to the specified text.
 * 
 * <p>Unlike the <code>.html()</code> method, <code>.text()</code> can be used in both XML and HTML documents. </p>
 *   <p>We need to be aware that this method escapes the string provided as necessary so that it will render correctly in HTML. To do so, it calls the DOM method <code>.createTextNode()</code>, which replaces special characters with their HTML entity equivalents (such as <code>&amp;lt;</code> for <code>&lt;</code>).  Consider the following HTML:</p>
 * 				<pre>&lt;div class="demo-container"&gt;
 *   &lt;div class="demo-box"&gt;Demonstration Box&lt;/div&gt;
 *   &lt;ul&gt;
 *     &lt;li&gt;list item 1&lt;/li&gt;
 *     &lt;li&gt;list &lt;strong&gt;item&lt;/strong&gt; 2&lt;/li&gt;
 *   &lt;/ul&gt;
 * &lt;/div&gt;
 * </pre>
 * 	<p>The code <code>$('div.demo-container').text('&lt;p&gt;This is a test.&lt;/p&gt;');</code> will produce the following DOM output:</p>
 * 	<pre>&lt;div class="demo-container"&gt;
 * &amp;lt;p&amp;gt;This is a test.&amp;lt;/p&amp;gt;
 * &lt;/div&gt;</pre>
 * 	<p>It will appear on a rendered page as though the tags were exposed, like this:</p>
 * 	<pre>&lt;p&gt;This is a test&lt;/p&gt;</pre>
 * 	<p>The <code>.text()</code> method cannot be used on input elements.  For input field text, use the <a href="/val">.val()</a> method.</p>
 *   <p>As of jQuery 1.4, the <code>.text()</code> method allows us to set the text content by passing in a function.</p>
 * <pre>$('ul li').text(function(index) {
 *   return 'item number ' + (index + 1);
 * });</pre>
 *   <p>Given an unordered list with three <code>&lt;li&gt;</code> elements, this example will produce the following DOM output:</p>
 * <pre>&lt;ul&gt;
 *   &lt;li&gt;item number 1&lt;/li&gt;
 *   &lt;li&gt;item number 2&lt;/li&gt;
 *   &lt;li&gt;item number 3&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * 
 * @example
 * <p>Add text to the paragraph (notice the bold tag is escaped).</p>
 * <pre><code>$("p").text("<b>Some</b> new text.");</code></pre>
 * 
 * @param {String} textString A string of text to set as the content of each matched element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.text = function(textString) {return new jQuery();};

/**
 * Set the HTML contents of each element in the set of matched elements.
 * 
 * 
 *     <p>The <code>.html()</code> method is not available in XML documents. </p>
 * 				<p>When <code>.html()</code> is used to set an element's content, any content that was in that element is completely replaced by the new content. Consider the following HTML:</p>
 * 				<pre>&lt;div class="demo-container"&gt;
 *   &lt;div class="demo-box"&gt;Demonstration Box&lt;/div&gt;
 * &lt;/div&gt;</pre>
 * 				<p>The content of <code>&lt;div class="demo-container"&gt;</code> can be set like this:</p>
 * 				<pre>$('div.demo-container')
 *   .html('&lt;p&gt;All new content. &lt;em&gt;You bet!&lt;/em&gt;&lt;/p&gt;');</pre>
 * 				<p>That line of code will replace everything inside <code>&lt;div class="demo-container"&gt;</code>:</p>
 * 				<pre>&lt;div class="demo-container"&gt;
 *   &lt;p&gt;All new content. &lt;em&gt;You bet!&lt;/em&gt;&lt;/p&gt;
 * &lt;/div&gt;</pre>
 * <p>As of jQuery 1.4, the <code>.html()</code> method allows the HTML content to be set by passing in a function.</p>
 * <pre>$('div.demo-container').html(function() {
 *   var emph = '&lt;em&gt;' + $('p').length + ' paragraphs!&lt;/em&gt;';
 *   return '&lt;p&gt;All new content for ' + emph + '&lt;/p&gt;';
 * });</pre>
 * 
 * <p>Given a document with six paragraphs, this example will set the HTML of <code>&lt;div class="demo-container"&gt;</code> to <code>&lt;p&gt;All new content for &lt;em&gt;6 paragraphs!&lt;/em&gt;&lt;/p&gt;</code>.</p>
 * 
 *   <p>This method uses the browser's <code>innerHTML</code> property. Some browsers may not generate a DOM that exactly replicates the HTML source provided. For example, Internet Explorer prior to version 8 will convert all <code>href</code> properties on links to absolute URLs, and Internet Explorer prior to version 9 will not correctly handle HTML5 elements without the addition of a separate <a href="http://code.google.com/p/html5shiv/">compatibility layer</a>.</p>
 * 
 * 
 * @example
 * <p>Add some html to each div.</p>
 * <pre><code>$("div").html("<span class='red'>Hello <b>Again</b></span>");</code></pre>
 * @example
 * <p>Add some html to each div then immediately do further manipulations to the inserted html.</p>
 * <pre><code>
 * 
 *     $("div").html("<b>Wow!</b> Such excitement...");
 *     $("div b").append(document.createTextNode("!!!"))
 *               .css("color", "red");
 * 
 * </code></pre>
 * 
 * @param {String} htmlString A string of HTML to set as the content of each matched element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.html = function(htmlString) {return new jQuery();};

/**
 * Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments.
 * 
 * 
 * <p>Unlike other filtering methods, <code>.is()</code> does not create a new jQuery object. Instead, it allows you to test the contents of a jQuery object without modification. This is often useful inside callbacks, such as event handlers.</p>
 * <p>Suppose you have a list, with two of its items containing a child element:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;list &lt;strong&gt;item 1&lt;/strong&gt;&lt;/li&gt;
 *   &lt;li&gt;&lt;span&gt;list item 2&lt;/span&gt;&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>You can attach a click handler to the &lt;ul&gt; element, and then limit the code to be triggered only when a list item itself, not one of its children, is clicked:</p>
 * <pre>$("ul").click(function(event) {
 *   var $target = $(event.target);
 *   if ( $target.is("li") ) {
 *     $target.css("background-color", "red");
 *   }
 * });</pre>
 * <p>Now, when the user clicks on the word "list" in the first item or anywhere in the third item, the clicked list item will be given a red background. However, when the user clicks on item 1 in the first item or anywhere in the second item, nothing will occur, because in those cases the target of the event would be <code>&lt;strong&gt;</code> or <code>&lt;span&gt;</code>, respectively.
 * </p>
 * <p>Be aware that for selector strings with positional selectors such as <code>:first</code>, <code>:gt()</code>, or <code>:even</code>, the positional filtering is done against the jQuery object passed to <code>.is()</code>, <em>not</em> against the containing document. So for the HTML shown above, an expression such as <code>$("li:first").is("li:last")</code> returns <code>true</code>, but <code>$("li:first-child").is("li:last-child")</code> returns <code>false</code>.</p>
 * 
 * <h4>Using a Function</h4>
 * <p>The second form of this method evaluates expressions related to elements based on a function rather than a selector. For each element, if the function returns <code>true</code>, <code>.is()</code> returns <code>true</code> as well. For example, given a somewhat more involved HTML snippet:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;&lt;strong&gt;list&lt;/strong&gt; item 1 - one strong tag&lt;/li&gt;
 *   &lt;li&gt;&lt;strong&gt;list&lt;/strong&gt; item &lt;strong&gt;2&lt;/strong&gt; -
 *     two &lt;span&gt;strong tags&lt;/span&gt;&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>You can attach a click handler to every <code>&lt;li&gt;</code> that evaluates the number of <code>&lt;strong&gt;</code> elements within the clicked <code>&lt;li&gt;</code> at that time like so:</p>
 * <pre>
 * $("li").click(function() {
 *   var $li = $(this),
 *     isWithTwo = $li.is(function() {
 *       return $('strong', this).length === 2;
 *     });
 *   if ( isWithTwo ) {
 *     $li.css("background-color", "green");
 *   } else {
 *     $li.css("background-color", "red");
 *   }
 * });
 * </pre>
 * 
 * 
 * @example
 * <p>Shows a few ways is() can be used inside an event handler.</p>
 * <pre><code>
 *   $("div").one('click', function () {
 *     if ($(this).is(":first-child")) {
 *       $("p").text("It's the first div.");
 *     } else if ($(this).is(".blue,.red")) {
 *       $("p").text("It's a blue or red div.");
 *     } else if ($(this).is(":contains('Peter')")) {
 *       $("p").text("It's Peter!");
 *     } else {
 *       $("p").html("It's nothing <em>special</em>.");
 *     }
 *     $("p").hide().slideDown("slow");
 *     $(this).css({"border-style": "inset", cursor:"default"});
 *   });
 * </code></pre>
 * @example
 * <p>Returns true, because the parent of the input is a form element.</p>
 * <pre><code>
 *   var isFormParent = $("input[type='checkbox']").parent().is("form");
 *   $("div").text("isFormParent = " + isFormParent);
 * </code></pre>
 * @example
 * <p>Returns false, because the parent of the input is a p element.</p>
 * <pre><code>
 *   var isFormParent = $("input[type='checkbox']").parent().is("form");
 *   $("div").text("isFormParent = " + isFormParent);
 * </code></pre>
 * @example
 * <p>Checks against an existing collection of alternating list elements. Blue, alternating list elements slide up while others turn red.</p>
 * <pre><code>
 *   var $alt = $("#browsers li:nth-child(2n)").css("background", "#00FFFF");
 *   $('li').click(function() {
 *     var $li = $(this);
 *     if ( $li.is( $alt ) ) {
 *       $li.slideUp();
 *     } else {
 *       $li.css("background", "red");
 *     }
 *   });
 * </code></pre>
 * @example
 * <p>An alternate way to achieve the above example using an element rather than a jQuery object. Checks against an existing collection of alternating list elements. Blue, alternating list elements slide up while others turn red.</p>
 * <pre><code>
 *   var $alt = $("#browsers li:nth-child(2n)").css("background", "#00FFFF");
 *   $('li').click(function() {
 *     if ( $alt.is( this ) ) {
 *       $(this).slideUp();
 *     } else {
 *       $(this).css("background", "red");
 *     }
 *   });
 * </code></pre>
 * 
 * @param {Function} fn A function used as a test for the set of elements. It accepts one argument, <code>index</code>, which is the element's index in the jQuery collection.Within the function, <code>this</code> refers to the current DOM element. 
 * 
 * @since 1.6
 * @returns {Boolean}
**/
jQuery.prototype.is = function(fn) {return new Boolean();};

/**
 * Reduce the set of matched elements to the one at the specified index.
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.eq()</code> method constructs a new jQuery object from one element within that set. The supplied index identifies the position of this element in the set. </p>
 * <p>Consider a page with a simple list on it:</p>
 * <pre>
 *   &lt;ul&gt;
 *     &lt;li&gt;list item 1&lt;/li&gt;
 *     &lt;li&gt;list item 2&lt;/li&gt;
 *     &lt;li&gt;list item 3&lt;/li&gt;
 *     &lt;li&gt;list item 4&lt;/li&gt;
 *     &lt;li&gt;list item 5&lt;/li&gt;
 *   &lt;/ul&gt;
 * </pre>
 * <p>We can apply this method to the set of list items:</p>
 * <pre>
 *   $('li').eq(2).css('background-color', 'red');
 * </pre>
 * <p>The result of this call is a red background for item 3. Note that the supplied index is zero-based, and refers to the position of the element within the jQuery object, not within the DOM tree.</p>
 * <p>Providing a negative number indicates a position starting from the end of the set, rather than the beginning. For example:</p>
 * <pre>
 *   $('li').eq(-2).css('background-color', 'red');
 * </pre>
 * <p>This time list item 4 is turned red, since it is two from the end of the set.</p>
 * <p>If an element cannot be found at the specified zero-based index, the method constructs a new jQuery object with an empty set and a <code>length</code> property of 0. </p>
 * <pre>
 *   $('li').eq(5).css('background-color', 'red');
 * </pre>
 * <p>Here, none of the list items is turned red, since <code>.eq(5)</code> indicates the sixth of five list items.</p>
 * 
 * @example
 * <p>Turn the div with index 2 blue by adding an appropriate class.</p>
 * <pre><code>
 * 
 *     $("body").find("div").eq(2).addClass("blue");
 * </code></pre>
 * 
 * @param {Number} neg_index An integer indicating the position of the element, counting backwards  from the last element in the set. 
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.eq = function(neg_index) {return new jQuery();};

/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test. 
 * 
 * <p>Given a jQuery object that represents a set of DOM elements, the <code>.filter()</code> method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against each element; all elements matching the selector will be included in the result.</p>
 * <p>Consider a page with a simple list on it:</p>
 * &lt;ul&gt;
 *   &lt;li&gt;list item 1&lt;/li&gt;
 *   &lt;li&gt;list item 2&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 *   &lt;li&gt;list item 6&lt;/li&gt;
 * &lt;/ul&gt;
 * <p>We can apply this method to the set of list items:</p>
 * <pre>
 *   $('li').filter(':even').css('background-color', 'red');
 * </pre>
 * <p>The result of this call is a red background for items 1, 3, and 5, as they match the selector (recall that <code>:even</code> and <code>:odd</code> use 0-based indexing).</p>
 * <h4 id="using-filter-function">Using a Filter Function</h4>
 * <p>The second form of this method allows us to filter elements against a function rather than a selector. For each element, if the function returns <code>true</code>, the element will be included in the filtered set; otherwise, it will be excluded. Suppose we have a somewhat more involved HTML snippet:</p>
 * <pre>
 * &lt;ul&gt;
 *   &lt;li&gt;&lt;strong&gt;list&lt;/strong&gt; item 1 -
 *     one strong tag&lt;/li&gt;
 *   &lt;li&gt;&lt;strong&gt;list&lt;/strong&gt; item &lt;strong&gt;2&lt;/strong&gt; -
 *     two &lt;span&gt;strong tags&lt;/span&gt;&lt;/li&gt;
 *   &lt;li&gt;list item 3&lt;/li&gt;
 *   &lt;li&gt;list item 4&lt;/li&gt;
 *   &lt;li&gt;list item 5&lt;/li&gt;
 *   &lt;li&gt;list item 6&lt;/li&gt;
 * &lt;/ul&gt;
 * </pre>
 * <p>We can select the list items, then filter them based on their contents:</p>
 * <pre>
 * $('li').filter(function(index) {
 *   return $('strong', this).length == 1;
 * }).css('background-color', 'red');
 * </pre>
 * <p>This code will alter the first list item only, as it contains exactly one <code>&lt;strong&gt;</code> tag. Within the filter function, <code>this</code> refers to each DOM element in turn. The parameter passed to the function tells us the index of that DOM element within the set matched by the jQuery object.</p>
 * <p>We can also take advantage of the <code>index</code> passed through the function, which indicates the 0-based position of the element within the unfiltered set of matched elements:</p>
 * <pre>
 * $('li').filter(function(index) {
 *   return index % 3 == 2;
 * }).css('background-color', 'red');
 * </pre>
 * <p>This alteration to the code will cause the third and sixth list items to be highlighted, as it uses the modulus operator (<code>%</code>) to select every item with an <code>index</code> value that, when divided by 3, has a remainder of <code>2</code>.</p>
 * 
 * @example
 * <p>Change the color of all divs; then add a border to those with a "middle" class.</p>
 * <pre><code>
 * 
 *     $("div").css("background", "#c8ebcc")
 *             .filter(".middle")
 *             .css("border-color", "red");
 * </code></pre>
 * @example
 * <p>Change the color of all divs; then add a border to the second one (index == 1) and the div with an id of "fourth."</p>
 * <pre><code>
 *     $("div").css("background", "#b4b0da")
 *             .filter(function (index) {
 *                   return index == 1 || $(this).attr("id") == "fourth";
 *                 })
 *             .css("border", "3px double red");
 * 
 * </code></pre>
 * @example
 * <p>Select all divs and filter the selection with a DOM element, keeping only the one with an id of "unique".</p>
 * <pre><code>$("div").filter( document.getElementById("unique") )</code></pre>
 * @example
 * <p>Select all divs and filter the selection with a jQuery object, keeping only the one with an id of "unique".</p>
 * <pre><code>
 * $("div").filter( $("#unique") )</code></pre>
 * 
 * @param {Function} fn A function used as a test for each element in the set. <code>this</code> is the current DOM element.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.filter = function(fn) {return new jQuery();};

/**
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
 * 
 * <p>This method takes one or more class names as its parameter. In the first version, if an element in the matched set of elements already has the class, then it is removed; if an element does not have the class, then it is added. For example, we can apply <code>.toggleClass()</code> to a simple <code>&lt;div&gt;</code>: </p>
 *       <pre>&lt;div class="tumble"&gt;Some text.&lt;/div&gt;
 *       </pre>
 *       <p>The first time we apply <code>$('div.tumble').toggleClass('bounce')</code>, we get the following:</p>
 *       <pre>&lt;div class="tumble bounce"&gt;Some text.&lt;/div&gt;
 *       </pre>
 *       <p>The second time we apply <code>$('div.tumble').toggleClass('bounce')</code>, the <code>&lt;div&gt;</code> class is returned to the single <code>tumble</code> value:</p>
 *       <pre>&lt;div class="tumble"&gt;Some text.&lt;/div&gt;</pre>
 *       <p>Applying <code>.toggleClass('bounce spin')</code> to the same <code>&lt;div&gt;</code> alternates between <code>&lt;div class="tumble bounce spin"&gt;</code> and <code>&lt;div class="tumble"&gt;</code>.</p>
 *       <p>The second version of <code>.toggleClass()</code> uses the second parameter for determining whether the class should be added or removed. If this parameter's value is <code>true</code>, then the class is added; if <code>false</code>, the class is removed. In essence, the statement:</p>
 *   <pre>$('#foo').toggleClass(className, addOrRemove);</pre>
 *   <p>is equivalent to:</p>
 *   <pre>if (addOrRemove) {
 *     $('#foo').addClass(className);
 *   }
 *   else {
 *     $('#foo').removeClass(className);
 *   }
 *   </pre>
 *   <p>As of jQuery 1.4, the <code>.toggleClass()</code> method allows us to indicate the class name to be toggled by passing in a function.</p>
 * <pre>$('div.foo').toggleClass(function() {
 *   if ($(this).parent().is('.bar')) {
 *     return 'happy';
 *   } else {
 *     return 'sad';
 *   }
 * });</pre>
 *   <p>This example will toggle the <code>happy</code> class for <code>&lt;div class="foo"&gt;</code> elements if their parent element has a class of <code>bar</code>; otherwise, it will toggle the <code>sad</code> class.</p>
 *   
 *       
 * @example
 * <p>Toggle the class 'highlight' when a paragraph is clicked.</p>
 * <pre><code>
 *     $("p").click(function () {
 *       $(this).toggleClass("highlight");
 *     });
 * </code></pre>
 * @example
 * <p>Add the "highlight" class to the clicked paragraph on every third click of that paragraph, remove it every first and second click.</p>
 * <pre><code>
 * var count = 0;
 * $("p").each(function() {
 *   var $thisParagraph = $(this);
 *   var count = 0;
 *   $thisParagraph.click(function() {
 *     count++;
 *     $thisParagraph.find("span").text('clicks: ' + count);
 *     $thisParagraph.toggleClass("highlight", count % 3 == 0);
 *   });
 * });
 * 
 * </code></pre>
 * 
 * @param {String} className One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @param {Boolean} _switch A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
 * 
 * @since 1.3
 * @returns {jQuery}
**/
jQuery.prototype.toggleClass = function(className, _switch) {return new jQuery();};

/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * 
 * <p>If a class name is included as a parameter, then only that class will be removed from the set of matched elements. If no class names are specified in the parameter, all classes will be removed.</p>
 * 				<p>More than one class may be removed at a time, separated by a space, from the set of matched elements, like so:</p>
 * 				<pre>$('p').removeClass('myClass yourClass')
 * </pre>
 * 				<p>This method is often used with <code>.addClass()</code> to switch elements' classes from one to another, like so:</p>
 * 				<pre>$('p').removeClass('myClass noClass').addClass('yourClass');
 * </pre>
 * 				<p>Here, the <code>myClass</code> and <code>noClass</code> classes are removed from all paragraphs, while <code>yourClass</code> is added.</p>
 * 				<p>To replace all existing classes with another class, we can use <code>.attr('class', 'newClass')</code> instead.</p>
 *         <p>As of jQuery 1.4, the <code>.removeClass()</code> method allows us to indicate the class to be removed by passing in a function.</p>
 *         <pre>$('li:last').removeClass(function() {
 *           return $(this).prev().attr('class');
 *         });</pre>
 *         <p>This example removes the class name of the penultimate <code>&lt;li&gt;</code> from the last <code>&lt;li&gt;</code>.</p>
 * 
 * @example
 * <p>Remove the class 'blue' from the matched elements.</p>
 * <pre><code>$("p:even").removeClass("blue");</code></pre>
 * @example
 * <p>Remove the class 'blue' and 'under' from the matched elements.</p>
 * <pre><code>$("p:odd").removeClass("blue under");</code></pre>
 * @example
 * <p>Remove all the classes from the matched elements.</p>
 * <pre><code>$("p:eq(1)").removeClass();</code></pre>
 * 
 * @param {Function} fn A function returning one or more space-separated class names to be removed. Receives the index position of the element in the set and the old class value as arguments.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.removeClass = function(fn) {return new jQuery();};

/**
 * Set one or more attributes for the set of matched elements.
 * 
 * <p>The <code>.attr()</code> method is a convenient way to set the value of attributes—especially when setting multiple attributes or using values returned by a function. Consider the following image:</p>
 * <pre>&lt;img id="greatphoto" src="brush-seller.jpg" alt="brush seller" /&gt;</pre>
 *     
 *     <h4 id="setting-simple-attr">Setting a simple attribute</h4>
 *     <p>To change the <code>alt</code> attribute, simply pass the name of the attribute and its new value to the <code>.attr()</code> method:</p>
 *     <pre>$('#greatphoto').attr('alt', 'Beijing Brush Seller');</pre>
 *     <p><em>Add</em> an attribute the same way:</p>
 * <pre>$('#greatphoto')
 * .attr('title', 'Photo by Kelly Clark');</pre>
 * 
 *     <h4 id="setting-several-attrs">Setting several attributes at once</h4>
 *     <p>To change the <code>alt</code> attribute and add the <code>title</code> attribute at the same time, pass both sets of names and values into the method at once using a map (JavaScript object literal). Each key-value pair in the map adds or modifies an attribute:</p>
 * <pre>$('#greatphoto').attr({
 *   alt: 'Beijing Brush Seller',
 *   title: 'photo by Kelly Clark'
 * });</pre>
 *     <p>When setting multiple attributes, the quotes around attribute names are optional.</p>
 *     <p><strong>WARNING</strong>: When setting the 'class' attribute, you must always use quotes!</p>
 *     <p><strong>Note</strong>: Internet Explorer does not allow you to change the <code>type</code> attribute of an <code>&lt;input&gt;</code> or <code>&lt;button&gt;</code> element. </p>
 *     <h4 id="computed-attr-values">Computed attribute values</h4>
 *     <p>By using a function to set attributes, you can compute the value based on other properties of the element. For example, to concatenate a new value with an existing value:</p>
 * <pre>$('#greatphoto').attr('title', function(i, val) {
 *   return val + ' - photo by Kelly Clark'
 * });</pre>
 *     <p>This use of a function to compute attribute values can be particularly useful when modifying the attributes of multiple elements at once.</p><p><strong>Note: </strong>If nothing is returned in the setter function (ie. <code>function(index, attr){})</code>, the current value of the attribute is returned as it acts as a getter when the value is undefined. Effectively, no changes are made if the setter function does not return something.</p>
 * @example
 * <p>Set some attributes for all &lt;img&gt;s in the page.</p>
 * <pre><code>
 * $("img").attr({ 
 *   src: "/images/hat.gif",
 *   title: "jQuery",
 *   alt: "jQuery Logo"
 * });
 * $("div").text($("img").attr("alt"));
 * </code></pre>
 * @example
 * <p>Disable buttons greater than the 1st button.</p>
 * <pre><code>
 * $("button:gt(1)").attr("disabled","disabled");
 * </code></pre>
 * @example
 * <p>Set the id for divs based on the position in the page.</p>
 * <pre><code>
 * $("div").attr("id", function (arr) {
 *   return "div-id" + arr;
 * })
 * .each(function () {
 *   $("span", this).html("(ID = '<b>" + this.id + "</b>')");
 * });
 * </code></pre>
 * @example
 * <p>Set the src attribute from title attribute on the image.</p>
 * <pre><code>
 * $("img").attr("src", function() { 
 *     return "/images/" + this.title; 
 * });
 * </code></pre>
 * 
 * @param {String} attributeName The name of the attribute to set.
 * @param {String} value A value to set for the attribute.
 * 
 * @since 1.0
 * @returns {jQuery}
**/
jQuery.prototype.attr = function(attributeName, value) {return new jQuery();};

/**
 * Adds the specified class(es) to each of the set of matched elements.
 * 
 * <p>It's important to note that this method does not replace a class. It simply adds the class, appending it to any which may already be assigned to the elements.</p>
 *   <p>More than one class may be added at a time, separated by a space, to the set of matched elements, like so:</p>
 *   <pre>$("p").addClass("myClass yourClass");</pre>
 *   <p>This method is often used with <code>.removeClass()</code> to switch elements' classes from one to another, like so:</p>
 *   <pre>$("p").removeClass("myClass noClass").addClass("yourClass");</pre>
 *   <p>Here, the <code>myClass</code> and <code>noClass</code> classes are removed from all paragraphs, while <code>yourClass</code> is added.</p>
 * <p>As of jQuery 1.4, the <code>.addClass()</code> method's argument can receive a function.</p>
 * <pre>$("ul li:last").addClass(function() {
 *   return "item-" + $(this).index();
 * });</pre>
 * <p>Given an unordered list with five <code>&lt;li&gt;</code> elements, this example adds the class "item-4" to the last <code>&lt;li&gt;</code>.</p>
 * 
 * 
 * @example
 * <p>Adds the class "selected" to the matched elements.</p>
 * <pre><code>
 *   $("p:last").addClass("selected");
 *   </code></pre>
 * @example
 * <p>Adds the classes "selected" and "highlight" to the matched elements.</p>
 * <pre><code>
 *   $("p:last").addClass("selected highlight");
 *   </code></pre>
 * @example
 * <p>Pass in a function to <code>.addClass()</code> to add the "green" class to a div that already has a "red" class.</p>
 * <pre><code>
 *   $("div").addClass(function(index, currentClass) {
 *     var addedClass;
 * 
 *     if ( currentClass === "red" ) {
 *       addedClass = "green";
 *       $("p").text("There is one green div");
 *     }
 *   
 *     return addedClass;
 *   });
 * </code></pre>
 * 
 * @param {Function} fn A function returning one or more space-separated class names to be added. Receives the index position of the element in the set and the old class value as arguments.
 * 
 * @since 1.4
 * @returns {jQuery}
**/
jQuery.prototype.addClass = function(fn) {return new jQuery();};