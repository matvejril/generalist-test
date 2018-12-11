<template>
    <div class="activity-item">
        <p><span>{{index}}. {{activityItem.activity}}</span></p>
        <div class="activity-item__params">
            <p class="activity-item__price">Цена: {{activityItem.price}}</p>
            <p class="activity-item__participants">Участники: {{activityItem.participants}}</p>
            <p class="activity-item__type">Тип: {{activityItem.type}}</p>
        </div>
        <a class="activity-item__remove" href="#" @click="removeActivityHandler" title="Удалить"></a>
    </div>
</template>

<script>
    export default {
        name: "activity-item",
        props: {
            index: Number,
            activityItem: Object,
        },
        data() {
            return {
            }
        },
        methods: {
            removeActivityHandler() {
                this.$store.dispatch("removeActivity", this.activityItem.key)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .activity-item {
        position: relative;
        margin-top: 10px;
        padding: 5px 20px 5px 5px;
        border: 1px solid black;
        border-radius: 3px;
        &:first-child {
            margin-top: 0;
        }
        &__params {
            margin-left: 12px;
            p {
                display: inline-block;
                margin-left: 10px;
            }
        }
        &__price {
            width: 105px;
        }
        &__participants {
            width: 135px;
        }
        &__type {
            width: 170px;
        }
        &__remove {
            width: 10px;
            height: 10px;
            display: none;
            position: absolute;
            right: 2px;
            top: 2px;
            padding: 4px;
            background: url('../assets/images/icon-close.png') no-repeat center;
            background-size: cover;
            opacity: 0.7;
            &:hover {
                opacity: 1;
            }
        }
        &:hover {
            .activity-item__remove {
                display: block;
            }
        }
    }
</style>