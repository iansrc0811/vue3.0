export function fetchUserRepositories(users) {
  return new Promise(resolve => {
    let names = []
    let index = 1
    if (!users) resolve( {name: '', index: 1} )
    users.forEach(user => {
      names.push( { name: user, index: 1 } )
      index += 1
    })
    setTimeout(() => resolve(names), 500)
  })
}
