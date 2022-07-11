<template>

    <section class="details">
        <h1>details</h1>

        {{toy}}
    </section>

</template>
 <script>
export default {
    name: 'details',
    props: {

    },
    components: {},
    data() {
        return {
            toy:null
        };
    },
    created() {
        const { toyId } = this.$route.params
        this.$store.dispatch({type:'getToyById', toyId})
            .then((toy)=>{
                this.toy = toy
            })
    },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>