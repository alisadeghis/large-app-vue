import { ItemInterface } from '../../../models'
import { render, screen, fireEvent } from '../../../test-utils'
import { describe, it, expect } from 'vitest'
import ItemComponent from './Item.component.vue'


describe('item component: behavior', () => {
    it('click event item', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'test item event',
            selected: false
        }
        const testid = 'unit-test-behavior-1'

        const { emitted } = render<typeof ItemComponent>(ItemComponent, {
            testid,
            model
        })

        const liElem = screen.getByTestId(testid)
        fireEvent.click(liElem)
        // check that it emitted the "selected" event and passed the expected param value (the model of type ItemInterface)
        // this will be an object like {"selectItem":[[1]],"click":[[{"isTrusted":false}]]}
        const result = emitted() as { selectItem: any[][] }
        console.log('emitted result', JSON.stringify(result))
        expect(result.selectItem).not.toBeUndefined
        const expectedParam = result.selectItem[0][0]
        expect(expectedParam).not.toBeUndefined
        expect(expectedParam).toEqual(model.id)
    })
})