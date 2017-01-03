module.exports = ast => {
  (function walk(node, parent) {
    if (Array.isArray(node.value)) {
      node.value.forEach(child => {
        child && walk(child, node)
      })
    } else if (node.value && node.value.type) {
      walk(child, node)
    }
  })(ast, null)
}
