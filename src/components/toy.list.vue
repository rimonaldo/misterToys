<template>

    <section class="toys-list">
        <h1>toys list</h1>
        <ul v-if="toys">
            <!-- <li>{{ toys }}</li> -->
            <li v-for="toy in toys" :key="toy._id">
                <toy-preview :toy="toy" />
            </li>
            <!-- <pre>{{toys}}</pre> -->
        </ul>
    </section>

</template>
 <script>
import toyPreview from './toy.preview.vue';
export default {
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
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>