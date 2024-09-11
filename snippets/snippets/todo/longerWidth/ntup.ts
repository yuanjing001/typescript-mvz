// 如果我们有一个联合类型的变量（例如：place）
type Place = 'home' | 'work' | { custom: string }

function placeToString(place: Place): string {
  // 那么TypeScript就会对变量在if/else的每个分支的可能值进行智能处理

  if (place === 'home') {
    // TTypeScript 知道这里的 place = 'home'
    // (因此如果你执行 place.custom 则无法编译)
  } else if (place === 'work') {
    // TypeScript 知道这里的 place = 'work'
    // (因此如果你执行 place.custom 则无法编译)
  } else {
    // TypeScript 知道 place = { custom: … } 这里
    //（因此你可以做 place.custom）
  }
}
