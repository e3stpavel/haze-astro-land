export const brighter = (hexColor: string, percent: number): string => {
  // strip the leading # if it's there
  hexColor = hexColor.replace(/^\s*#|\s*$/g, '')

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hexColor.length === 3)
    hexColor = hexColor.replace(/(.)/g, '$1$1')

  const r = parseInt(hexColor.substr(0, 2), 16)
  const g = parseInt(hexColor.substr(2, 2), 16)
  const b = parseInt(hexColor.substr(4, 2), 16)

  return `#${
   ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substring(1)
   }${((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substring(1)
   }${((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substring(1)}`
}
