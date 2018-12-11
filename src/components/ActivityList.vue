<template>
    <div class="activity-list">
        <h3>Активности:</h3>
        <div class="activity-list__actions">
            <a @click="clearListHandler" class="btn btn-error" href="#">Удилать все</a><a @click="addItemHandler" class="btn btn-success" href="#">Добавить</a>
        </div>
        <div v-if="(getTotalCount > 0)" class="activity-list__list">
            <activity-item v-for="(activityItem, i) in getActivityList"
                           :index="(i+1)"
                           :activityItem = "activityItem"
            ></activity-item>
        </div>
        <div class="activity-list__isEmpty" v-else>
            <p>В списке нет активностей.</p>
        </div>
    </div>
</template>

<script>
    import ActivityItem from "./ActivityItem.vue"

    export default {
        name: 'activity-list',
        data () {
            return {
            }
        },
        computed: {
            getActivityList() {
                return this.$store.getters.getActivityList
            },
            getTotalCount: function() {
                return this.getActivityList.length
            },
        },
        components: {
            ActivityItem
        },
        methods: {
            addItemHandler() {
                this.$store.dispatch('addActivity');
            },
            clearListHandler() {
                this.$store.dispatch('clearList')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .activity-list {
        max-width: 540px;
        margin: 0 auto;
        h3 {
            margin-bottom: 20px;
        }
        &__actions {
            margin-bottom: 15px;
            text-align: right;
            a {
                margin-left: 15px;
                &:first-child {
                    margin-left: 0;
                }
            }
        }
        &__list {
        }
        &__isEmpty {
            p {
                color: red;
            }
        }
    }
</style>
