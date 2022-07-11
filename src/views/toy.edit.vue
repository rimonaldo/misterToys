<template>

    <div class="section edit" v-if="toy">
        {{ toy }}

        <form @submit="saveToy">

            <input type="text" v-model="toy.name">
            <input placeholder="price" type="text" v-model="toy.price">
            <div class="select-labels">
                <button @click="isOpen = !isOpen">^</button>
                <select :class="{ open: isOpen }" class="labels" multiple v-model="toy.labels">
                    <option v-for="(label, idx) in labels" :key="idx">{{ label }}</option>
                </select>
            </div>

            <button>save</button>
        </form>
    </div>



</template>
 <script>
export default {
    name: 'ProjectApp',
    components: {},
    data() {
        return {
            toy: null,
            labels: [],
            isOpen: false
        };
    },
    created() {
        const { toyId } = this.$route.params

        if (toyId) {
            this.$store.dispatch({ type: 'getToyById', toyId })
                .then((toy) => {
                    this.toy = toy
                })
        } else {
            this.$store.dispatch({ type: 'getEmptyToy' })
                .then((toy) => {
                    this.toy = JSON.parse(JSON.stringify(toy))
                })
        }

        this.labels = this.$store.getters.labels
    },
    methods: {
        saveToy() {
            this.$store.dispatch({ type: 'updateToy', toy: this.toy })
                .then((toy)=>{
                    this.$router.push('/toy')
                })
        }
    },
    computed: {


    },
    unmounted() { },
};
</script>
 <style>
 select.labels {
     height: 1.2em;
 }
 
 select.labels.open {
 
     height: 100%;
 }
 </style>