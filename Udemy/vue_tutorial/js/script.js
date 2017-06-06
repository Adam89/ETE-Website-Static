// constructor function: new vue instance object there the core of each application their one job is to control there own template of html code

//curly braces only work on strings only interporlation syntax

//Directives

// what is a directive its an instruction you place in your dom

//v-on is a directive allow us to listen to an event pass an argument such as the name of the event then assign a value to this such as the code you want to be exectued when this event happens changeTitle is a method of the vue instance can use any default dom event and function name v-on:click="increase"

//v-one (shorthand @click) directive only renders the element once allows elements to not be overidden

//v-bind (shorthand :href) don't use the string attribute instead bind v-bind:(arg) arg being the name of the attribute v-bind:value for example takes a value from the data object

//v-bind don't use the string attribute instead bind v-bind:(arg) arg being the name of the attribute

// v-html allows us to render html code and not escape it use carefully it exposes you to cross site scripting

//v-model on one hand output the name in the input field and update the name value in my VUE instance.

//$event in the dom allows us to pass the event as a second argument


//event modifiers add a dot after the name of the event through v-on:mousemove.stop.prevent

//key modifiers v-on:keyup.enter allows us to add key modifiers enables us to listen to specific keys like keyup etc

// you can write any JS in the dom aslong as it has one expression or short ternary expressions


// data is not reactive vue will update the page when any of it's data properties are updated


// new Vue({
// 	el: '#app', // always a string
// 	data: {  //object stores all data for vue instance
// 		title:'Hello World'
// 	},
// 	methods: {
// 		changeTitle: function(event) { // vue allows us to acess all property's in data and methods by using this
// 			this.title = event.target.value;
// 		}
// 	}
// });



// //Dom interaction

// // takes our html code renders a template internally then pumps out to the dom
// new Vue({
// 	el: '#appTwo', // always a string
// 	data: {  //object stores all data for vue instance
// 		titleTwo: 'Hello World',
// 		link: 'www.khws.co.uk', //v-bind data dynamically
// 		finshedLink: '<a href="http:www.khws.co.uk">KHWS</a>'
// 	},
// 	methods: {
// 		sayHello: function() {
// 			//have access to the object instance using this because of proxy
// 			this.titleTwo = 'Hello Test';
// 			return this.titleTwo; // can call function in the DOM but only items that return a string
// 		},

// 	}
// });


// new Vue ({
// 	el: '#exercise',
// 	data: {
// 		name: 'Adam Hopkins',
// 		age: 27,
// 		imageLink:'http://static3.UK.businessinsider.com/image/55f94dfb9dd7cc1a008ba8f7-960/jeremy-corbyn.jpg'
// 	},
// 	methods: {
// 		randomFloat: function(max) {

// 			return Math.random();

// 		}
// 	}
// })



// new Vue ({
// 	el: '#appEvent',
// 	data: {
// 		counter: 0,
// 		x: 0,
// 		y: 0
// 	},
// 	methods:{
// 		increase: function(step, event) {
// 			this.counter += step;
// 		},
// 		updateCoordinates: function(event) { // event object gets attached to any v-on show us how to pass event object and use it.
// 			this.x = event.clientX;
// 			this.y = event.clientY;
// 		},
// 		// dummy: function(event) {
// 		// 	stopPropagation();
// 		// }
// 		alertMe: function() {
// 			alert('alert!');
// 		}
// 	}
// });



// new Vue({
//         el: '#exercise',
//         data: {
//             value: ''
//         },
//         methods: {
//         alertMe: function() {
//           alert('Alert!');
//           }
//         }
//     });



// new Vue({
//         el: '#twoWayBind',
//         data: {
//             name: 'adam'
//         },
//         methods: {
//         alertMe: function() {
//           alert('Alert!');
//           }
//         }
//     });





// new Vue({
//         el: '#computedChanges',
//         data: {
//             counter: 0,
//             secondCounter: 0
//         },
//         computed: { // takes JS object everything stored here can be called like a property in the data object it's aware only use if you need to cache a variable as computed will only update once data changes
//         	output:function() {
//         		console.log('test');
//         		return this.counter > 5 ? 'Greater 5': 'Smaller than 5';
//         	}
//         },
//         watch: {
//         	counter : function(value) { // linked to counter above reacts to every change
//         		var vm = this; // need to store this in var as its in a call back closure
//         		setTimeout(function() {
//         			vm.counter = 0;

//         		}, 2000);
//         	}
//         },
//         methods: {
//         resultDom: function() {
//         	console.log('testOne');
//           return this.counter > 5 ? 'Greater 5': 'Smaller than 5';
//           }
//         }
//     });


// new Vue({
//         el: '#exercise',
//         data: {
//             value: 0
//         },
//         computed: {
//         	result: function() {

//         		return this.value == 37 ? 'done' : 'not there yet';

//         	}
//         },
//         watch: {
//         	result: function() {
//         		var vm = this;
//         		console.log(vm);
//         		setTimeout(function(){
//         			vm.value = 0;
//         		}, 5000);
//         	}
//         }
//     });




// new Vue({
//         el: '#appCSS',
//         data: {
//             attachRed: false, //attached red to the dom using v-bind and a conditional statement and called methods
//             color: 'green'
//         },
//         computed: {
//         	divClasses: function() {
//         		return {
//         			red: this.attachRed,
//         			blue: !this.attachRed
//         		};
//         	}
//         }
//     });

new Vue({
        el: '#appCSSTwo',
        data: {
            color: 'green',
            width: 100,
            height: 100
        },
        computed: {
        	myStyle: function() {
        		return {
        			backgroundColor: this.color,
        			width: this.width +'px', //adjust the width
        			height: this.height + 'px'
        		};
        	}
        }
    });




































































