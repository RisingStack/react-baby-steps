'use strict'

export const ITEM_TOGGLE_RESOLVED = 'ITEM_TOGGLE_RESOLVED'

export function itemToggleResolved (id) {
  return {
    type: ITEM_TOGGLE_RESOLVED,
    id
  }
}
