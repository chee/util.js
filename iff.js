iff = (cond, result) => {
  const conditions = [{cond, result}]
  const end = (els) => {
    const succ = conditions.find(condition => condition.cond)
    return succ ? succ.result : els
  }
  end.elseif = (cond, result) => {
    conditions.push({cond, result})
    return end
  }
  end.else = result => {
    return end(result)
  }
  end.toString = () => conditions.reduce((out, condition) => {
    out += `
      ${condition.cond}: ${condition.result}
    `
  }, '')
  return end
}
