<template>
    <div>
        <ItemsListComponent :items="items" :loading="loading" @on-select-item="onSelectItem" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import ItemsListComponent from '../components/items/ItemsList.component.vue'

import { useAppStore } from '../store'
import { ItemInterface } from '../models'

export default defineComponent({
    name: 'Home',
    components: {
        ItemsListComponent
    },
    setup() {
        const { itemStore } = useAppStore()
        const { actions } = itemStore
        const items = computed<ItemInterface[]>(() => {
            return itemStore.getters.items
        })
        const loading = computed(() => {
            return itemStore.getters.loading
        })
        const onSelectItem = async (id: number) => {
            await actions.toggleItemSelected(id)
        }
        onMounted(async () => {
            await actions.loadItems()
        })
        return {items, loading, onSelectItem}
    },
})

</script>

<style scoped>

</style>