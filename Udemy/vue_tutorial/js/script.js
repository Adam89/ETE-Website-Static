// constructor function: new vue instance object there the core of each application their one job is to control there own template of html code

//v-on is a directive please listen to an event pass an argument such as the name of the event then assign a value to this such as the code you want to be exectued when this event happens changeTitle is a method of the vue instance


//curly braces only work on strings
//v-bind don't use the string attribute instead bind v-bind:(arg) arg being the name of the attribute



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
		link: 'www.khws.co.uk' //v-bind data dynamically
	},
	methods: {
		sayHello: function() {
			//have access to the object instance using this because of proxy
			return this.titleTwo; // can call function in the DOM but only items that return a string
		}
	}
});