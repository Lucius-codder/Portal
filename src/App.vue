<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/vue">vue</router-link> |
        </div>
        <router-view/>
        <!-- 新增site1渲染节点 -->
        <div id="vue-container" />
        <!-- 新增site2渲染节点 -->
        <div id="site2" />
    </div>
</template>
<script lang="ts">
// import { loadMicroApp } from 'qiankun'


// import {Component, Vue} from 'vue-property-decorator';

// @Component({
//     mounted() {
//         loadMicroApp({
//           name: 'vue-container',
//           entry: '//localhost:8087'
//         })
//     }
// })
// export default class Menu extends Vue {
    
// }
</script>
<style lang="scss">
    #app {
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
