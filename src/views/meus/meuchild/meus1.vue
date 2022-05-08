<template>
    <div>{{ name }}</div>
    <list>
        <template #default="{ game }">
            <ul>
                <li v-for="item in game" :key="item.id" style="color:#f00">{{ item.nickName }}</li>
            </ul>
        </template>
    </list>
    <list>
        <template #default="{ game }">
            <h4 v-for="item in game" :key="item.id" style="color:#0f0">{{ item.nickName }}</h4>
        </template>
    </list>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import list from "./slots/list.vue";

export default defineComponent({
    components: {
        list,
    },
    setup() {
        const name = "meus";
        return {
            name,
        };
    },
});
</script>
