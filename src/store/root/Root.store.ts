import { useItemsStore } from "../items";

export const useAppStore = () => {
    return {
        itemStore: useItemsStore()
    }
}
export type RootStoreInterface = ReturnType<typeof useAppStore>
