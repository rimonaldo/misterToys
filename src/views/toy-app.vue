

<template>
    <section class="toys ">
        <toy-filter @setFilter="setFilter" />
        <toy-list :toys="toys" @removeToy="removeToy" v-if="toys" />
    </section>
</template>
 <script>
import toyList from '../components/toy.list.vue';
import toyFilter from '../components/form.vue';
export default {
    props: {


    },
    name: 'toy',
    components: {
        toyList,
        toyFilter,
    },
    data() {
        return {};
    },
    created() {
        if (this.toys) {
            console.log('toy-app got :', this.toys);

        }
    },
    methods: {
        removeToy(toy) {
            this.$store.dispatch({ type: 'removeToy', toyId: toy._id })
        },
        setFilter(filter) {
            filter = JSON.parse(JSON.stringify(filter));
            this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
        },
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        }
    },
    unmounted() { },
};
</script>
 <style>
 </style>