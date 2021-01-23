import { writable, get } from "svelte/store";

export default class Store {
    constructor(value) {
        const { set, update, subscribe } = writable(value);
        this.set = set;
        this.update = update;
        this.subscribe = subscribe;
    }
    get() {
        return get(this);
    }
    setProp(propName, value) {
        this.update(state => {
            if (typeof state == "object") {
                state[propName] = value;
            }
            return state;
        })
    }
    getProp(propName) {
        const state = this.get();
        if (typeof state === "object") {
            return state[propName];
        }
    }
}