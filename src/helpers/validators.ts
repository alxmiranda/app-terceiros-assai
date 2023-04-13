
export const objectIsEmpty = (obj = {}) => {
  const length = Object.keys(obj).length
  return length === 0
}