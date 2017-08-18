export default {
	props:['propUserAge'],
    methods: {
        editAge() {
            this.propUserAge = 30; // have to pass this prop through the parent component
            // this.$emit('ageWasEditied', this.propUserAge); // pass a custom event emitter
            eventBus.$emit('ageWasEditied', this.propUserAge); // this is a way of passing data between two childs without going via parent
        }
    }
};