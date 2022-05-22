import { defineStore } from "pinia";
import axios from "axios";

export const categoryStore = defineStore({
    id: "categoryStore",
    state: () => ({
        // serverUrl: "http://localhost:3000",
        serverUrl: "https://npaper-edu-deploy.herokuapp.com",

        categories: [],
    }),
    actions: {
        getAllCategory() {
            axios({
                method: "get",
                url: this.serverUrl + "/categories",
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    console.log(data);
                    this.categories = data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
