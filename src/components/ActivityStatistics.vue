<template>
    <div class="activity-statistics">
        <h3>Статистика:</h3>

        <div class="activity-statistics__list">
            <p>Общее колличество:
                <span  v-if="(getTotalCount > 0)">{{getTotalCount}}</span>
                <span class="no-data" v-else>Нет данных</span>
            </p>
            <p>Колличество уникальных типов:
                <span  v-if="(getTotalCount > 0)">{{getCountUniqueTypes}}</span>
                <span class="no-data" v-else>Нет данных</span>
            </p>
            <p>Максимальное значение кол-ва участников:
                <span  v-if="(getTotalCount > 0)">{{getMaxCountParticipants}}</span>
                <span  class="no-data" v-else>Нет данных</span>
            </p>
            <p>Общая стоимость:
                <span  v-if="(getTotalCount > 0)">{{getTotalPrice}}</span>
                <span class="no-data" v-else>Нет данных</span>
            </p>
        </div>
        <div class="activity-statistics__isEmpty" v-if="(getTotalCount <= 0)">
            <a @click="addItemHandler" class="btn btn-success" href="#">Добавить</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "activity-statistics",
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
            getCountUniqueTypes: function() {
                let uniqueTypes = {};
                let uniqueTypesLength = 0;
                this.getActivityList.forEach(function(item) {
                    let type = item.type;
                    uniqueTypes[type] = type;
                });
                for (let type in uniqueTypes) {
                    uniqueTypesLength+=1;
                }
                return uniqueTypesLength
            },
            getMaxCountParticipants: function() {
                let maxCount = 0;
                this.getActivityList.forEach(function(item) {
                    let participants = item.participants;
                    if (maxCount < participants) {
                        maxCount = participants
                    }
                });
                return maxCount
            },
            getTotalPrice: function() {
                let totalPrice = 0;
                this.getActivityList.forEach(function(item) {
                    totalPrice += item.price;
                });
                return totalPrice.toFixed(1)
            }
        },
        methods: {
            addItemHandler() {
                this.$store.dispatch('addActivity');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .activity-statistics {
        max-width: 540px;
        margin: 0 auto;
        h3 {
            margin-bottom: 20px;
        }
        &__list {
            p {
                margin-top: 3px;
                &:first-child {
                    margin-top: 0;
                }
            }
        }
        &__isEmpty {
            a {
                margin-top: 10px;
            }
        }
        .no-data {
            color: red;
        }
    }
</style>
