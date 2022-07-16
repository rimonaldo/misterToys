<template>

    <section class="toy">
        <h3>{{ toy.name }}</h3>

        <div class="img">

            <span v-for="(label, idx) in toy.labels" :key="idx">|{{ label }}</span>
        </div>
        <div class="price">{{ toy.price }}</div>
        <div class="buy">
            <button v-if="toy.inStock" class="btn-action">Buy Now</button>
            <button v-else class="btn-action-dark">Out of stock</button>
        </div>

        <div class="actions" >
            <router-link :to="'/details/' + toy._id"><button>details</button> </router-link>
            <router-link :to="'/edit/' + toy._id"><button>edit</button> </router-link>
            <button @click="removeToy(toy)">X</button>
        </div>

    </section>

</template>

 <script>
export default {
    emits: ['removeToy'],
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
    created() {
    },
    methods: {
        removeToy(toy) {
            this.$emit('removeToy', toy)
        }
    },
    computed: {
        user(){
            return this.$store.getters.user
        }
    },
    unmounted() { },
};
</script>
 <style>
 </style>