<template>
    <section class="toys-container">
        <router-link to="/edit/" >add</router-link>
        <div v-if="toys.length && toys">
            <toy-preview v-for="toy in toys" :key="toy._id"
            :toy="toy" @removeToy="removeToy" />
        </div>
    </section>

</template>
 <script>
 import toyPreview from './toy.preview.vue';
 export default {
     emits: ['removeToy'],
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

 <!-- <style>
 .main-content {
     border: 1px black solid;
     margin: 0 auto;
     min-width: 800px;
     width: 60%;
 }
 
 .main-content ul {
     display: flex;
     flex-wrap: wrap;
     /* padding:1rem; */
 
 }
 
 .main-content ul li {
     border: 1px black solid;
     width: 25%;
     display: flex;
     min-height: 250px;
     padding: 1rem;
 
     flex-direction: column;
     justify-content: space-between;
 }
 
 .main-content ul li span {
     color: gray;
 }
 </style> -->