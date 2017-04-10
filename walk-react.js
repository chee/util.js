
// run a function on every element in a react tree, replacing that element with
// the result of running `fn` on it
export function elementWalker(component, fn) {
  return (function walk(node) {
    if (!node) return
    if (typeof node.type == 'function') {
      if (node.type.render) {
        node = node.type.render(node.props)
      } else {
        node = node.type(node.props)
      }
    }
    if (typeof node.type == 'string') {
      node = fn(node)
    }
    if (!node) return
    if (Array.isArray(node.props.children)) {
      node.props.children.forEach(child => walk(child))
    }
    if (typeof node.props.children == 'function') {
      walk(node.props.children)
    }
    return node
  })(component)
}
