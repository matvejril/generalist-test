<template>
    <ul class="header-nav">
        <li><router-link to="/">список активностей</router-link></li>
        <li><router-link to="/statistics">статистика</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: "header-nav"
    }
</script>

<style lang="scss" scoped>
    .header-nav {
        .router-link-exact-active {
            border-color: #ffffff;
        }
        li {
            display: inline-block;
            margin: 0 15px;
            &:first-child {
                margin-left: 0;
            };
            &:last-child {
                margin-right: 0;
            }
        }
        a {
            color: #ffffff;
            border-bottom: 1px solid transparent;
            &:hover {
                border-color: #ffffff;
            }
        }
    }
</style>
