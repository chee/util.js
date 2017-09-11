function createItemsProxy (items) {
  return new Proxy(items, {
    get (target, name) {
      const object = items.find(({_id}) => _id === name)
      return object || target
    }
  })
}

