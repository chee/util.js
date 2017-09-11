export const iff = (predicate, value) => {
  const conditions = [{predicate, value}]

  const resolve = elseValue => {
    const match = conditions.find(condition => condition.predicate)
    return match ? match.value : elseValue
  }

  resolve.elseif = (predicate, value) => {
    conditions.push({predicate, value})
    return resolve
  }

  resolve.else = value =>
    resolve(value)

  return resolve
}
