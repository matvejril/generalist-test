<template>
    <div class="content">
        <div class="container">
            <router-view>
                <activity-list></activity-list>
                <activity-statistics></activity-statistics>
            </router-view>
        </div>
    </div>
</template>

<script>
    import ActivityList from "./ActivityList.vue";
    import ActivityStatistics from './ActivityStatistics.vue'
    export default {
        name: "app-content",
        components: {
            ActivityList,
            ActivityStatistics
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>
