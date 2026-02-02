export const bfka = `// 我们希望修改makestate()来支持
// 创建两种不同的states:

// 一个只允许数字的，而且…
const numState = makeState()
numState.setState(1)
console.log(numState.getState()) // 1

// 另一个只允许字符串
const strState = makeState()
strState.setState('foo')
console.log(strState.getState()) // foo`

export const bqvz = `// 声明一个泛型函数
function genericFunc<T>() {
  // 你可以在这里使用 T
}

// 调用它：T 将是 number
genericFunc<number>()`

export const brze = `function makeState<S>() {
  let state: S

  function getState() {
    return state
  }

  function setState(x: S) {
    state = x
  }

  return { getState, setState }
}`

export const bwyu = `// 对这样的泛型代码感到困惑？
function makePair<
  F extends number | string,
  S extends boolean | F
>()`

export const cbeq = `const { getState, setState } = makeState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())`

export const cqrm = `function makePair<F, S>() {
  // 用法：将 F 传递给 A，将 S 传递给 B
  let pair: Pair<F, S>

  // ...
}`

export const cupt = `function makeState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}`

export const defo = `function makeState<S>() {
  let state: S

  function getState() {
    return state
  }

  function setState(x: S) {
    state = x
  }

  return { getState, setState }
}

const numState = makeState<number>()
numState.setState(1)
console.log(numState.getState())

const strState = makeState<string>()
strState.setState('foo')
console.log(strState.getState())`

export const dngl = `function makeState<
  S extends number | string
>() {
  let state: S

  function getState() {
    return state
  }

  function setState(x: S) {
    state = x
  }

  return { getState, setState }
}

// 如果我们现在传递 boolean 给 S 会怎样？
const boolState = makeState<boolean>()`

export const gjgg = `// 创建一个只允许数字的 state
const numState = makeState<number>()
numState.setState(1)
console.log(numState.getState())

// numState.setState('foo') 会失败！`

export const gkgi = `function makeState() {
  // 改为 string
  let state: string

  function getState() {
    return state
  }

  // 接受一个 string
  function setState(x: string) {
    state = x
  }

  return { getState, setState }
}`

export const gozc = `// 创建一个 (number, string) 对
const { getPair, setPair } = makePair<
  number,
  string
>()

// 必须传递 (number, string)
setPair(1, 'hello')`

export const gzwe = `// Don’t need to use <number>
const numState = makeState()

numState.setState(1)
console.log(numState.getState())`

export const hkgv = `// 创建一个只允许字符串的 state
const strState = makeState<string>()
strState.setState('foo')
console.log(strState.getState())

// strState.setState(1) 会失败！`

export const jdhu = `// 它将 S 设置为 number
makeState<number>()`

export const jejx = `const { getPair, setPair } = makePair()

setPair(1, 2)
console.log(getPair())

setPair(3, 4)
console.log(getPair())`

export const kbld = `// 限制 T 的类型
function genericFunc<T extends number>()

// 成功
genericFunc<number>()
// 错误
genericFunc<string>()`

export const lldl = `// 提取为泛型接口
// 使其可重用
interface Pair<A, B> {
  first: A
  second: B
}`

export const llvc = `// 创建一个只允许布尔值的 state
const boolState = makeState<boolean>()
boolState.setState(true)
console.log(boolState.getState())`

export const mngc = `function makeState<S extends number | string>()`

export const mroc = `class State<S> {
  state: S

  getState() {
    return this.state
  }

  setState(x: S) {
    this.state = x
  }
}`

export const mrub = `function makePair<F, S>() {
  let pair: { first: F; second: S }

  // ...
}`

export const nbvo = `function makePair<
  F extends number | string = number,
  S extends number | string = number
>()`

export const nnyl = `function makeState() {
  let state: number

  function getState() {
    return state
  }

  // setState() 期望一个 number
  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}`

export const nuzz = `function makeState<
  A extends number | string,
  B extends number | string
>() {
  let state: [A, B]

  function getState() {
    return state
  }

  function setState(first: A, second: B) {
    state = [first, second]
  }

  return { getState, setState }
}

const state = makeState<number, string>()
state.setState(1, 'cat')
console.log(state.getState())`

export const nyih = `// 设置 T 的默认类型
function genericFunc<T = number>()

// T 在函数内部将是 number
genericFunc()`

export const osaa = `function makeState() {
  // 改为 string
  let state: string

  function getState() {
    return state
  }

  // 接受一个 string
  function setState(x: string) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = makeState()

setState('foo')
console.log(getState())`

export const pjcw = `// 设置 x 的默认值
function regularFunc(x = 2)

// x 在函数内部将是 2
regularFunc()`

export const qgea = `// 提取为泛型类型别名。
// 它基本上与使用接口相同
type Pair<A, B> = {
  first: A
  second: B
}`

export const qgxj = `// makeState() 有 1 个类型参数
function makeState<S>()

// makePair() 有 2 个类型参数
function makePair<F, S>()`

export const qini = `// 指定 x 为 number
function regularFunc(x: number)

// 成功
regularFunc(1)
// 错误
regularFunc('foo')`

export const qqic = `// 不通过，因为创建的状态…
const numAndStrState = makeState()     

// 允许任何数字…
numAndStrState.setState(1)
console.log(numAndStrState.getState())

// 和字符串.
numAndStrState.setState('foo')
console.log(numAndStrState.getState())

// 这不是我们想要的。我们想要创造
// 仅数字和仅字符串`

export const rebo = `// 在 makeState() 的函数定义中
let state: S // <- number

function setState(x: S /* <- number */) {
  state = x
}`

export const rxdm = `function makePair<F, S>() {
  let pair: { first: F; second: S }

  function getPair() {
    return pair
  }

  function setPair(x: F, y: S) {
    pair = {
      first: x,
      second: y
    }
  }

  return { getPair, setPair }
}`

export const stkh = `const { getState, setState } = makeState()

// 如果我们使用字符串会怎样？
setState('foo')
console.log(getState())`

export const thxf = `// 将 S 的默认类型设置为 number
function makeState<
  S extends number | string = number
>()`

export const udpv = `function makeState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = makeState()

setState(1)
console.log(getState())

setState(2)
console.log(getState())`

export const ugeb = `function makePair() {
  // 存储一对值
  let pair: { first: number; second: number }

  function getPair() {
    return pair
  }

  // 将 x 存储为 first，y 存储为 second
  function setPair(x: number, y: number) {
    pair = {
      first: x,
      second: y
    }
  }

  return { getPair, setPair }
}`

export const wpru = `// 声明一个普通函数
function regularFunc(x: any) {
  // 你可以在这里使用 x
}

// 调用它：x 将是 1
regularFunc(1)`

export const xeax = `const { getState, setState } = makeState()

setState('foo')
console.log(getState())`

export const xekh = `// The second parameter S must be either
// boolean or whatever was specified for F
function makePair<
  F extends number | string,
  S extends boolean | F
>()

// These will work
makePair<number, boolean>()
makePair<number, number>()
makePair<string, boolean>()
makePair<string, string>()

// This will fail because the second
// parameter must extend boolean | number,
// but instead it’s string
makePair<number, string>()`

export const xfwf = `// 我们能否让 <number> 成为
// makeState() 的默认类型参数？

// 我们希望这两个语句是等价的
const numState1 = makeState()
const numState2 = makeState<number>()`

export const ystu = `function makeState() {
  let state: number | string

  function getState() {
    return state
  }

  function setState(x: number | string) {
    state = x
  }

  return { getState, setState }
}`

export const zdbq = `// 在初始化时传递类型参数
const numState = new State<number>()

numState.setState(1)

// 打印 1
console.log(numState.getState())`

export const zhql = `function makeState() {
  let state: number

  function getState() {
    return state
  }

  function setState(x: number) {
    state = x
  }

  return { getState, setState }
}

const { getState, setState } = makeState()

setState('foo')
console.log(getState())`

export const bxzx = `// 如果你可以同时传递
// number 和 string，并让它重复
// 字符串指定的次数，那会很有用
padLeft('Hello world', 4, '#')
// → "####Hello world"`

export const crgn = `// 如果第二个参数是 string，那么
// 该字符串会附加到左侧
padLeft('Hello world', 'Jim: ')
// → "Jim: Hello world"

// 问问自己：你会这样做吗？`

export const hfdq = `function paddingLeftCss(val: number | string) {
  if (typeof val === 'number') {
    return \`padding-left: \${val * 0.25}rem;\`
  } else {
    return \`padding-left: \${val};\`
  }
}

// padding-left: 0.25rem;
paddingLeftCss(1)

// padding-left: 0.5rem;
paddingLeftCss(2)

// padding-left: 10%;
paddingLeftCss('10%')`

export const mvsz = `function makePair<F extends number | string, S extends boolean | F>() {}`

export const zgvn = `type Todo = Readonly<{ id: number; text: string; done: boolean; place: Place }>`

export const lcfe = `// 如果第二个参数是 number，那么
// 会在左侧添加该数量的空格
padLeft('Hello world', 4)
// → "    Hello world"

// 如果第二个参数是 string，那么
// 该字符串会附加到左侧
padLeft('Hello world', 'Jim: ')
// → "Jim: Hello world"`

export const riis = `/**
 * 接受一个字符串并在左侧添加"填充"。
 *
 * 如果 'padding' 是数字，则在左侧
 * 添加该数量的空格。
 *
 * 如果 'padding' 是字符串，则将 'padding'
 * 附加到左侧。
 */
function padLeft(
  value: string,
  padding: number | string
) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  } else {
    return padding + value
  }
}`

export const lplh = `console.log(1 + 2)`

export const onux = `function extend<First, Second>(
  first: First,
  second: Second
): First & Second {
  const result: Partial<First & Second> = {}
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      ;(result as First)[prop] = first[prop]
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      ;(result as Second)[prop] = second[prop]
    }
  }
  return result as First & Second
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void
}

class ConsoleLogger implements Loggable {
  log(name) {
    console.log(\`Hello, I'm \${name}.\`)
  }
}

const jim = extend(
  new Person('Jim'),
  ConsoleLogger.prototype
)
jim.log(jim.name)`

export const vnfq = `type Person = { name: string }
type Loggable = { log: (name: string) => void }

// Use & to make jim BOTH Person AND Loggable
const jim: Person & Loggable = {
  name: 'Jim',
  log: name => {
    console.log(\`Hello, I'm \${name}.\`)
  }
}

// "Hello, I’m Jim."
jim.log(jim.name)`

export const xwbz = `function makePair<
  F extends number | string,
  S extends boolean | F
>() {}`

export const ampt = `function toggleTodo(todo: Todo): Todo {
  return {
    // 这行之前缺失了
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}`

export const bnli = `const foo: Todo = {
  id: 1,
  text: '…',
  done: true
}`

export const bpmz = `type CompletedTodo = Readonly<{
  id: number
  text: string
  done: true
}>`

export const csum = `// 参数 "todo" 必须匹配 Todo 类型
function toggleTodo(todo: Todo) {
  // ...
}`

export const dqwb = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring
  todo.done = !todo.done
  return todo
}`

export const dxfc = `// Associated data. If we're using React, this
// would be the component’s props or state
[
  { id: 1, text: 'First todo', done: false },
  { id: 2, text: 'Second todo', done: false }
]`

export const eega = `else {
  // place = 'work' 或 { custom: string }，并且
  // 如果 place = 'work'，place.custom 是无效的
  return 'pinEmoji ' + place.custom
}`

export const frtm = `type Todo = {
  id: number
  text: string
  done: boolean
}

// 确保输入和输出
// 都是正确的类型（都必须是 Todo）
function toggleTodo(todo: Todo): Todo {
  // ...
}`

export const hquv = `[
  // ...
  // ...
  // ...
  // ...
  // 没有 place 属性
  { id: 5, text: 'Read a book', done: false }
]`

export const hszk = `function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    done: true
  }))
}`

export const kuzw = `function completeAll(todos: Todo[]): Todo[] {
  // 我们希望它返回一个新数组
  // 而不是修改原始数组
}`

export const lgci = `// 输入是 Todo 项目的数组：Todo[]
function completeAll(todos: Todo[]) {
  // ...
}`

export const lieq = `type Todo = {
  id: number
  text: string
  done: boolean
}`

export const dhor = `type Place = 'home' | 'work' | { custom: string }

// TypeScript 知道 "place" 的类型
// 在函数内每个位置会是什么
function placeToString(place: Place): string {
  // 在这里，place = 'home', 'work' 或 { custom:… }

  if (place === 'home') {
    // 在这里，place = 'home'

    return 'homeEmoji Home'
  } else {
    // 在这里，place = 'work' 或 { custom: string }

    return 'pinEmoji ' + place.custom
  }
}`

export const fawy = `type Place = 'home' | 'work' | { custom: string }

// 它们都会编译
const place1: Place = 'home'
const place2: Place = 'work'
const place3: Place = { custom: 'Gym' }
const place4: Place = { custom: 'Supermarket' }`

export const ntup = `// 如果我们有一个联合类型的变量（例如：place）
type Place = 'home' | 'work' | { custom: string }

function placeToString(place: Place): string {
  // TypeScript is smart about what the variable’s
  // possible values are for each branch of if/else

  if (place === 'home') {
    // TypeScript knows place = 'home' here
    // (So it won’t compile if you do place.custom)
  } else if (place === 'work') {
    // TypeScript knows place = 'work' here
    // (So it won’t compile if you do place.custom)
  } else {
    // TypeScript knows place = { custom: … } here
    // (So you can do place.custom)
  }
}`

export const rvyq = `type Place = 'home' | 'work' | { custom: string }

type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  // place 是可选的
  place?: Place
}>`

export const szco = `// 正确的实现
function placeToString(place: Place): string {
  if (place === 'home') {
    return 'homeEmoji Home'
  } else if (place === 'work') {
    return 'workEmoji Work'
  } else {
    // place 保证是 { custom: string }
    return 'pinEmoji ' + place.custom
  }
}`

export const umjt = `type Place = 'home' | 'work' | { custom: string }`

export const vgja = `type Place = 'home' | 'work' | { custom: string }

// Little Duckling’s implementation
function placeToString(place: Place): string {
  if (place === 'home') {
    return 'homeEmoji Home'
  } else {
    return 'pinEmoji ' + place.custom
  }
}`

export const wymp = `const argument = {
  id: 1,
  text: '…',
  done: true
}

console.log('Before toggleTodo(), argument is:')
console.log(argument)

toggleTodo(argument)

console.log('After toggleTodo(), argument is:')
console.log(argument)`

export const lund = `const result = toggleTodo({
  id: 1,
  text: '…',
  done: true
})

console.log('Expected:')
console.log(\`{ id: 1, text: '…', done: false }\`)
console.log('Actual:')
console.log(result)`

export const mnmy = `// 输出是 Todo 项目的数组：Todo[]
function completeAll(todos: Todo[]): Todo[] {
  // ...
}`

export const mwrj = `// 将 todos 声明为 readonly Todo[] 后，
// 以下代码将无法编译：

// 编译错误 - 修改了数组
todos[0] = { id: 1, text: '…', done: true }

// 编译错误 - push() 修改了数组
todos.push({ id: 1, text: '…', done: true })`

export const mxqy = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>`

export const mzyn = `// 创建 number 和 string 的联合类型
type Foo = number | string

// 你可以将 number 或 string
// 变量赋值给 Foo。所以这两个都会编译：
const a: Foo = 1
const b: Foo = 'hello'`

export const njgr = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring is a
  // bad refactoring because it modifies
  // the argument (input) todo object
  todo.done = !todo.done
  return todo
}`

export const npah = `type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}

function toggleTodo(todo: Todo): Todo {
  // This won’t compile
  todo.done = !todo.done
  return todo
}`

export const npgx = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  place: Place
}>`

export const npog = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  // place 是可选的
  place?: Place
}>`

export const ntau = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s code from earlier:
  // Missing the "id" property
  return {
    text: todo.text,
    done: !todo.done
  }
}`

export const nxyl = `// Readonly<...> 使每个属性都变为只读
type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>`

export const okva = `console.log(
  completeAll([
    { id: 1, text: '…', done: false },
    { id: 2, text: '…', done: true }
  ])
)`

export const oone = `// 返回一个 "done" 都为 true 的数组
function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  // ...
}`

export const qaqa = `type Foo = {
  bar: number
}

type ReadonlyFoo = Readonly<Foo>

// ReadonlyFoo 是 { readonly bar: number }`

export const qbgu = `// 我们之前说过
// toggleTodo 必须返回一个新的 todo 对象。
function toggleTodo(todo) {
  // ...
}`

export const qnrh = `placeToString('home')
// __home__

placeToString('work')
// __work__

placeToString({ custom: 'Gym' })
// __gym__

placeToString({ custom: 'Supermarket' })
// __supermarket__`

export const qnwc = `// They booth have a property foo,
// but B’s foo (true) is
// more specific than A’s foo (boolean)
type A = { foo: boolean }
type B = { foo: true }

// This intersection type…
type AandB = A & B

// …is equivalent to:
type AandB = { foo: true }`

export const reel = `function toggleTodo(todo) {
  return {
    text: todo.text,
    done: !todo.done
  }
}`

export const rlya = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>

type CompletedTodo = Readonly<{
  id: number
  text: string
  done: true
}>`

export const rmuo = `type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>

// 覆盖 Todo 的 done 属性
type CompletedTodo = Todo & {
  readonly done: true
}`

export const ruga = `function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  // ...
}`

export const szan = `// 将输入 todos 设为只读数组
function completeAll(
  todos: readonly Todo[]
): Todo[] {
  // ...
}`

export const tdbp = `// 接受一个 todo 项目数组并返回
// 一个 "done" 都为 true 的新数组
function completeAll(todos) {
  // ...
}`

export const tgvw = `const bar: Todo = {
  text: '…',
  done: true
}`

export const uxlb = `function toggleTodo(todo: Todo): Todo {
  // Little Duckling’s refactoring
  todo.done = !todo.done
  return todo
}`

export const vgnq = `type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}

// 之前的实现：它将继续
// 工作，因为输入的 todo 没有被修改
function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}`

export const vpco = `// 接受一个 todo 对象并返回
// 一个新的 todo 对象，其中包含
// "done" 属性的相反布尔值。
function toggleTodo(todo) {
  // ...
}

// 示例用法：

toggleTodo({ id: …, text: '…', done: true })
// -> 返回 { id: …, text: '…', done: false }

toggleTodo({ id: …, text: '…', done: false })
// -> 返回 { id: …, text: '…', done: true }`

export const wdjp = `type A = { a: number }
type B = { b: string }

// 这个交叉类型…
type AandB = A & B

// …等价于：
type AandB = {
  a: number
  b: string
}`

export const whae = `function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    // 如果我们将 done 设置为 false 会怎样？
    done: false
  }))
}`

export const xrwn = `type Todo = Readonly<{
  // id 和 text 与 CompletedTodo 相同
  id: number
  text: string
  done: boolean
}>

type CompletedTodo = Readonly<{
  // id 和 text 与 Todo 相同
  id: number
  text: string
  done: true
}>`

export const ybhj = `function placeToString(place: Place): string {
  // 接受一个 Place 并返回一个字符串
  // 可用于 place 标签 UI
}`

export const yhto = `type Todo = {
  readonly id: number
  readonly text: string
  readonly done: boolean
}`

export const yvpp = `type Foo = {
  // bar 是可选属性，因为有 "?"
  bar?: number
}

// 这两个都会编译：
// bar 可以存在或缺失
const a: Foo = {}
const b: Foo = { bar: 1 }`

export const ywiv = `// 返回值必须匹配 Todo 类型
function toggleTodo(todo: Todo): Todo {
  // ...
}`

export const yxjg = `function toggleTodo(todo) {
  return {
    // 这行之前缺失了
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}`

export const yztr = `// 如何更新它以支持 place 标签？
type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>`

export const zswn = `// 这会编译吗？
const testTodo: CompletedTodo = {
  id: 1,
  text: '…',
  done: false
}`

// Interface 相关代码片段
export const ifBasic = `// 定义一个接口
interface User {
  name: string
  age: number
}`

export const ifBasicUsage = `interface User {
  name: string
  age: number
}

// 创建一个符合接口的对象
const user: User = {
  name: 'Alice',
  age: 25
}`

export const ifVsType = `// 使用接口
interface UserInterface {
  name: string
  age: number
}

// 使用类型别名
type UserType = {
  name: string
  age: number
}

// 两者在这种情况下几乎相同
const user1: UserInterface = { name: 'Alice', age: 25 }
const user2: UserType = { name: 'Bob', age: 30 }`

export const ifExtends = `// 基础接口
interface Person {
  name: string
  age: number
}

// 扩展接口
interface Employee extends Person {
  employeeId: string
  department: string
}`

export const ifExtendsUsage = `interface Person {
  name: string
  age: number
}

interface Employee extends Person {
  employeeId: string
  department: string
}

// Employee 必须包含所有属性
const employee: Employee = {
  name: 'Alice',
  age: 30,
  employeeId: 'E001',
  department: 'Engineering'
}`

export const ifMultipleExtends = `interface Named {
  name: string
}

interface Aged {
  age: number
}

// 同时扩展多个接口
interface Person extends Named, Aged {
  email: string
}`

export const ifOptional = `interface Product {
  id: number
  name: string
  price: number
  // description 是可选的
  description?: string
}`

export const ifOptionalUsage = `interface Product {
  id: number
  name: string
  price: number
  description?: string
}

// 两种情况都有效
const product1: Product = {
  id: 1,
  name: 'Laptop',
  price: 999
}

const product2: Product = {
  id: 2,
  name: 'Mouse',
  price: 29,
  description: 'Wireless mouse'
}`

export const ifReadonly = `interface Config {
  readonly id: string
  readonly apiUrl: string
  timeout: number
}`

export const ifReadonlyError = `interface Config {
  readonly id: string
  timeout: number
}

const config: Config = {
  id: 'app-001',
  timeout: 3000
}

// 尝试修改只读属性
config.id = 'app-002'`

export const ifFunction = `interface Calculator {
  // 定义一个函数类型
  calculate(a: number, b: number): number
}

// 或者使用箭头函数语法
interface Formatter {
  format: (value: string) => string
}`

export const ifFunctionUsage = `interface Calculator {
  calculate(a: number, b: number): number
}

const calculator: Calculator = {
  calculate(a, b) {
    return a + b
  }
}

console.log(calculator.calculate(10, 5))`

export const ifIndexSignature = `// 索引签名：允许任意字符串键
interface StringDictionary {
  [key: string]: string
}

// 数字索引签名
interface NumberArray {
  [index: number]: number
}`

export const ifIndexSignatureUsage = `interface StringDictionary {
  [key: string]: string
}

const dict: StringDictionary = {
  hello: '你好',
  world: '世界',
  typescript: 'TypeScript'
}

// 可以添加任意字符串属性
dict.newKey = '新值'`

export const ifMixedSignature = `interface Config {
  // 固定属性
  name: string
  version: number
  // 索引签名：其他任意属性
  [key: string]: string | number
}`

export const ifMerging = `// 第一个声明
interface Window {
  title: string
}

// 第二个声明
interface Window {
  version: number
}

// 两个声明会自动合并
// Window 现在有 title 和 version`

export const ifMergingUsage = `interface Window {
  title: string
}

interface Window {
  version: number
}

// 使用合并后的接口
const window: Window = {
  title: 'My App',
  version: 1
}`

export const ifImplements = `interface Animal {
  name: string
  makeSound(): void
}

// 类实现接口
class Dog implements Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  makeSound() {
    console.log('Woof!')
  }
}`

export const ifImplementsError = `interface Animal {
  name: string
  makeSound(): void
}

// 缺少 makeSound 方法
class Cat implements Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }
}`

export const ifGeneric = `// 泛型接口
interface Response<T> {
  success: boolean
  data?: T
  error?: string
}

// 使用不同类型
type UserResponse = Response<{
  id: number
  name: string
}>

type ErrorResponse = Response<never>`

export const ifGenericUsage = `interface Response<T> {
  success: boolean
  data?: T
  error?: string
}

const userResponse: Response<{ id: number; name: string }> = {
  success: true,
  data: { id: 1, name: 'Alice' }
}

const errorResponse: Response<never> = {
  success: false,
  error: 'Not found'
}

console.log(userResponse)
console.log(errorResponse)`
