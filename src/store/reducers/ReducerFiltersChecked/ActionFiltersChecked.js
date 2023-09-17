import { CHECKED, ALL_CHECKED } from '../Actions'

export const checked = (id) => {
  return {
    type: CHECKED,
    id,
  }
}

export const allChecked = (checked) => {
  return {
    type: ALL_CHECKED,
    checked,
  }
}
