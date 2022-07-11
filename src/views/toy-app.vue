

<template>
    <section class="toys">
        <h1>toys</h1>
        <toy-list :toys="toys"></toy-list>
    </section>
</template>
 <script>
import toyList from '../components/toy.list.vue';

export default {
    props: {
        toys: {
            type: Array,
            required: true,
        },
    },
    name: 'toy',
    components: {
        toyList,
    },
    data() {
        return {};
    },
    created() {
        if (this.toys) {
            console.log('toy-app got :',this.toys);

        }
    },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>