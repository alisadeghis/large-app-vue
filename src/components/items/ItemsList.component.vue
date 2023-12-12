<template>
    <div class="">
        <ul v-show="!loading">
            <ItemComponent v-for="(item) in items" :key="item.id" :model="item" @on-selected-item="handleClick(item)">
                {{ item.name }} {{ item.selected }}
            </ItemComponent>
        </ul>
        <LoaderComponent :show="loading" />
    </div>
</template>

<script setup lang="ts">
import { ItemInterface } from '../../models';
import ItemComponent from '../items/children/Item.component.vue'
import LoaderComponent from '../shared/Loader.component.vue'

defineProps<{
    items: ItemInterface[],
    loading?: boolean
}>()
const emits = defineEmits<{
    (e: 'onSelectItem', id: number): boolean
}>()
const handleClick = (item: ItemInterface) => {
    emits('onSelectItem', item.id)
}
</script>

<style scoped>
ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
</style>