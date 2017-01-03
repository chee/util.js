const {parse} = require('scss-parser')
const fs = require('fs')
const scss = fs.readFileSync('./_screen-size.scss').toString()
const ast = parse(scss)
const walk = require('../../walk-ast')

let js = ''
let inside = false
walk(ast, node => {
  if (node.type == 'property') {
    const child = node.value[0]
    if (child.type == 'variable') {
      js += child.value.toUpperCase().replace('-', '_')
    } else if (child.type == 'identifier') {
      js += child.value.toUpperCase()
    }
  } else if (node.type == 'punctuation') {
    if (node.value == ':') {
      if (inside) {
        js += ':'
      } else {
        js += '={'
        inside = true
      }
    } else if (node.value == ',') {
      js += node.value
    }
  } else if (node.type == 'space') {
    //js += node.value
  } else if (node.type == 'value') {
    node.value[1].type == 'number' && (js += node.value[1].value)
  }
})
js += '}'
console.log(js)
