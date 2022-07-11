

<template>
    <section class="toys">
        <h1>toys</h1>
        <toy-list :toys="toys" @removeToy="removeToy" />
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
            console.log('toy-app got :', this.toys);

        }
    },
    methods: {
        removeToy(toy) {
            this.$store.dispatch({ type: 'removeToy', toyId: toy._id })
        }
    },
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>