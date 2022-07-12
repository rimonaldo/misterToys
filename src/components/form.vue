<template >
    <section class="filter">

        <el-form :model="form" @input="onSubmit">
            <el-form-item>
                <div class="search">
                    <el-input placeholder="Search toy" v-model="filterBy.txt" />
                </div>

                <div style="display: inline-block">
                    <p></p>
                    <el-select @change="onSubmit" v-model="filterBy.byLabel" multiple placeholder="Labels"
                        style="width: 240px">
                        <el-option v-for="(label, idx) in labels" :key="idx" :value="label" />
                    </el-select>
                </div>

                <div class="in-stock el-input">
                    <span>In stock</span>
                    <el-switch v-model="filterBy.status" @change="onSubmit" />
                </div>
            </el-form-item>


        </el-form>
    </section>
</template>

<script>


// do not use same name with ref

export default {
    name: 'filter-form',
    data() {
        return {

            labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"],
            filterBy: {
                txt: '',
                status: '',
                byLabel: [],
                bySort: '',
            },

        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
            console.log(this.filterBy);
            if (this.filterBy.byLabel[0] === '') this.filterBy.byLabel = []
            console.log(this.filterBy.byLabel)
            this.$emit('setFilter', this.filterBy)
        },
        setFilter() {
            if (this.filterBy.byLabel[0] === '') this.filterBy.byLabel = []
            console.log(this.filterBy.byLabel)
            this.$emit('setFilter', this.filterBy)
        },

    }
}

</script>

<style>
.filter {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.search {
    min-width: 500px;

}

.filter .el-form-item__content {
    padding: 1rem;
}

.filter .el-input {
    padding: 0 .5rem;
    flex: 1;
    margin: 0 auto;
}

.filter .in-stock span {
    margin: 0 0.2rem;
}
</style>
<!-- <template>
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
</script> -->
