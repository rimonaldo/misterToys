<template>

    <section>
        <h2>{{ toy.name }}</h2>
        <span v-for="(label, idx) in toy.labels" :key="idx">|{{ label }}</span>
        <div class="prive">{{ toy.price }}</div>
        <div class="actions">
            <div class="stock">{{ toy.inStock }}</div>
            <button>Buy Now</button>
        </div>
        <router-link :to="'/details/' + toy._id"><button>details</button> </router-link>
        <router-link :to="'/edit/' + toy._id"><button>edit</button> </router-link>
        <button @click="removeToy(toy)">X</button>
    </section>

</template>

 <script>
export default {
    emits:['removeToy'],
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