// constructor function: new vue instance object there the core of each application their one job is to control there own template of html code

//curly braces only work on strings only interporlation syntax

//Directives

// what is a directive its an instruction you place in your dom

//v-on is a directive allow us to listen to an event pass an argument such as the name of the event then assign a value to this such as the code you want to be exectued when this event happens changeTitle is a method of the vue instance can use any default dom event and function name v-on:click="increase"

//v-one directive only renders the element once allows elements to not be overidden

//v-bind don't use the string attribute instead bind v-bind:(arg) arg being the name of the attribute v-bind:value for example takes a value from the data object

//v-bind don't use the string attribute instead bind v-bind:(arg) arg being the name of the attribute

// v-html allows us to render html code and not escape it use carefully it exposes you to cross site scripting





new Vue({
	el: '#app', // always a string
	data: {  //object stores all data for vue instance
		title:'Hello World'
	},
	methods: {
		changeTitle: function(event) { // vue allows us to acess all property's in data and methods by using this
			this.title = event.target.value;
		}
	}
});



//Dom interaction

// takes our html code renders a template internally then pumps out to the dom
new Vue({
	el: '#appTwo', // always a string
	data: {  //object stores all data for vue instance
		titleTwo: 'Hello World',
		link: 'www.khws.co.uk', //v-bind data dynamically
		finshedLink: '<a href="http:www.khws.co.uk">KHWS</a>'
	},
	methods: {
		sayHello: function() {
			//have access to the object instance using this because of proxy
			this.titleTwo = 'Hello Test';
			return this.titleTwo; // can call function in the DOM but only items that return a string
		},

	}
});


new Vue ({
	el: '#exercise',
	data: {
		name: 'Adam Hopkins',
		age: 27,
		imageLink:'http://static3.uk.businessinsider.com/image/55f94dfb9dd7cc1a008ba8f7-960/jeremy-corbyn.jpg'
	},
	methods: {
		randomFloat: function(max) {

			return Math.random();

		}
	}
})



new Vue ({
	el: '#appEvent',
	data: {
		counter: 0,
	},
	methods:{
		increase: function() {
			this.counter++;
		}
	}
})























