export const getValuePattern = (id: string, value: string) => {
  const valueSize = value.length.toString().padStart(2, '0')

  return `${id}${valueSize}${value}`
}
