module.exports = function iff (test, value) {
  const conditions = [{test, value}]

  const resolve = _else => {
    const match = conditions.find(condition => condition.test)

    return match
      ? match.value
      : _else
  }

  resolve.elseif = (test, value) => {
    conditions.push({test, value})
    return resolve
  }

  resolve.else = value => {
    return resolve(value)
  }

  resolve.toString = () => conditions.reduce((output, condition) =>
    output + `
      ${condition.test}: ${condition.value}
    `, ''
  )

  return resolve
}
