<template>
    <router-link to="/edit/">add</router-link>
    <section class="toys-list">
        <h1>toys list</h1>
        <ul v-if="toys">
            <!-- <li>{{ toys }}</li> -->
            <li v-for="toy in toys" :key="toy._id">
                <toy-preview :toy="toy" @removeToy="removeToy" />
            </li>
            <!-- <pre>{{toys}}</pre> -->
        </ul>
    </section>

</template>
 <script>
import toyPreview from './toy.preview.vue';
export default {
    emits:['removeToy'],
    name: 'toyList',
    props: {
        toys: {
            type: Array,
            required: true,
        },
    },

    components: {
        toyPreview,
    },
    data() {
        return {};
    },
    created() {

    },
    methods: {
        removeToy(toy) {
            this.$emit('removeToy', toy)
        }
    },
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>