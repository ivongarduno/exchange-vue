const dollarFilter = value => {
  if (!value) {
    return '$ 0'
  }

  return `$ ${Number(value).toFixed(2)}`
}

const percentFilter = value => {
  if (!value) {
    return '$ 0'
  }

  return `${Number(value).toFixed(2)} %`
}

export { dollarFilter, percentFilter }
