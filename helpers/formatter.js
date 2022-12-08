export function rupiahFormater(value) {
  return 'Rp. ' + new Intl.NumberFormat('id').format(value)
}
