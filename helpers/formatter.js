export function rupiahFormater(value) {
  return 'Rp. ' + new Intl.NumberFormat('id').format(value)
}

export function imageUrl(value) {
  return process.env.NEXT_PUBLIC_BACKEND_HOST + '/uploads/' + value
}
