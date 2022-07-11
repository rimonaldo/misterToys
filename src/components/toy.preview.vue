<template>

    <section>
        <h2>{{ toy.name }}</h2>
        <span v-for="(label, idx) in toy.labels" :key="idx">|{{ label }}</span>
        <div class="prive">{{ toy.price }}</div>
        <div class="actions">
            <div class="stock">{{ toy.inStock }}</div>
            <button>Buy Now</button>
        </div>
<router-link :to="'/details/'+toy._id"><button>details</button> </router-link>

    </section>

</template>

 <script>
export default {
    name: 'ProjectApp',
    props: {
        toy: {
            type: Object,
            required: true,
        },
    },
    components: {},
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>
 <style>
 </style>