<template>
    <div class="header">
        <div class="container">
            <div  class="header__box">
                <router-link  class="logo" to="/">Generalist test</router-link>
                <header-nav></header-nav>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderNav from "./HeaderNav.vue"

    export default {
        name: "app-header",
        components: {
            HeaderNav
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        padding: 20px 0;
        background-color: #6ba3ff;
        box-sizing: border-box;
        &__box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
    }
    .logo {
        font-family: sans-serif;
        font-size: 21px;
        color: #ffffff;
    }
</style>
