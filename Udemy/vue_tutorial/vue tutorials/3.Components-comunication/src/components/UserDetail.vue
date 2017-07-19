<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
    </div>
</template>

<script>

export default { // this component is going to receive some data (PROPS from outside props is an object)
	props: ['name']
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
