<template>
    <section class="filter">
        <input @input="setFilter" v-model="filterBy.txt" type="text" placeholder="Search by toy name..." />
        <select @change="setFilter" v-model="filterBy.byLabel" multiple>
            <option value="">Select label</option>
            <option v-for="(label, idx) in labels" :value="label" :key="idx">
                {{ label }}
            </option>
        </select>
        <select @change="setFilter" v-model="filterBy.status">
            <option value="">Select status</option>
            <option v-for="(opt, idx) in stockOptions" :value="opt" :key="idx">
                {{ opt }}
            </option>
        </select>
        <select @change="setFilter" v-model="filterBy.bySort">
            <option value="">Select sort</option>
            <option v-for="(opt, idx) in sortOptions" :value="opt" :key="idx">
                {{ opt }}
            </option>
        </select>
    </section>



    
</template>

<script>
export default {
    props: [],
    components: {},
    data() {
        return {
            filterBy: {
                txt: '',
                status: '',
                byLabel: [],
                bySort: '',
            },
            labels: [
                'On wheels',
                'Box game',
                'Art',
                'Baby',
                'Doll',
                'Puzzle',
                'Outdoor',
                'Battery powered',
            ],
            stockOptions: ['In stock', 'Out of stock'],
            sortOptions: [
                'Name - Increasing',
                'Price - Increasing',
                'Created - Increasing',
                'Name - Decreasing',
                'Price - Decreasing',
                'Created - Decreasing',
            ],
        }
    },
    methods: {
        setFilter() {
            if (this.filterBy.byLabel[0] === '') this.filterBy.byLabel = []
            console.log(this.filterBy.byLabel)
            this.$emit('setFilter', this.filterBy)
        },
    },
    computed: {},
    created() { },
}
</script>
