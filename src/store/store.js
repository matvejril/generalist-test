import  Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

import { writeToLocalStorage, clearLocalStorage, readFromLocalStorage } from '../assets/helpers/localStorage';

Vue.use(Vuex);

let initialActivityList = readFromLocalStorage();

export default new Vuex.Store({
    state: {
        activityList: initialActivityList,
    },
    getters: {
        getActivityList: state => {
            return state.activityList
        }
    },
    actions: {
        // подготовить данные для мутации
        addActivity(context) {
            axios
                .get('https://www.boredapi.com/api/activity')
                .then(response => {
                    let activity = response.data;
                    context.commit('addActivity', activity);
                    writeToLocalStorage(context.state.activityList);
                })
                .catch(function (error) {
                    // handle error
                });
        },
        removeActivity(context, key) {
            let indexEl;
            context.state.activityList.forEach(function(item, index) {
                if (item.key === key) {
                    indexEl = index;
                }
            });
            context.commit('removeActivity', indexEl);
            writeToLocalStorage(context.state.activityList);
        },
        clearList(context) {
            context.commit('clearList');
            clearLocalStorage();
        },
    },
    mutations: {
        // внести изменения в стейт
        addActivity(state, payload) {
            state.activityList.push(payload);
        },
        removeActivity(state, payload) {
            state.activityList.splice(payload, 1);
        },
        clearList(state) {
            state.activityList = [];
        },
    }
});