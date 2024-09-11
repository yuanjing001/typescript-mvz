import React from 'react'
import PostPage from 'src/components/PostPage'
import { A, P, Code, Highlight, Ul, UlLi, Hr } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CodeBlock from 'src/components/CodeBlock'
import * as snippets from 'src/lib/snippets'
import RunButtonText from 'src/components/RunButtonText'
import ReadMore from 'src/components/ReadMore'
import AboutMe from 'src/components/AboutMe'

const Page = () => (
  <PostPage
    articleKey="generics"
    cards={[
      {
        title: <>TypeScript的泛型太难了？</>,
        content: (
          <>
            <CodeBlock snippet={snippets.bwyu} />
            <P>你是否对上述这样的泛型代码感到困惑？</P>
            <P>
              如果你刚接触TypeScript 或者
              刚接触泛型，亦或者正在努力理解泛型，那么你就很多人刚刚学习Java时一模一样。
            </P>
            <P>
              与TypeScript一样，Java编程语言也支持泛型。当我在大学学习Java时，我是一个初级程序员，泛型对我来说感觉非常困难。所以我当时放弃了对泛型的理解，在不知道自己在做什么的情况下就使用了它们。直到大学毕业后找到一份正式工作，我才理解了泛型
            </P>
            <EmojiSeparator
              emojis={['question', 'cryingCat', 'question']}
              description={<>大学学习 Java 时，我放弃了理解泛型</>}
            />
            <P>
              也许你和大学的我一样，觉得TypeScript泛型太难了。如果是这样，这个教程就是为你准备的!
              我将尝试帮助你去真正地理解泛型。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>如果您已经了解泛型，那么本教程中不会有任何新内容。</P>
            </>
          )
        }
      },
      {
        title: (
          <>
            让我们聊聊 <Code>makeState()</Code>
          </>
        ),
        content: (
          <>
            <P>
              我在下面创建了一个名为<Code>makeState()</Code>{' '}
              的函数。我们将使用这个函数来讨论泛型
            </P>
            <CodeBlock snippet={snippets.cupt} />
            <P>
              当你运行 <Code>makeState()</Code>时, 它返回两个函数{' '}
              <Code>getState()</Code> 和 <Code>setState()</Code>.
              你可以使用这些函数来设置和获取名为state的变量 <Code>state</Code>.
            </P>
            <P>
              让我们来试试吧!
              当你运行下面的代码时，什么会被打印到控制台？先试着猜一下，然后按下运行按钮.
              （注：请进入原文进行操作）
              <Highlight>
                按下 <RunButtonText /> 按钮
              </Highlight>
              .
            </P>
            <CodeBlock
              snippet={snippets.cbeq}
              pointToRunButton
              result={
                <>
                  1<br />2
                </>
              }
            />
            <P>它打印了1，然后是2。很简单，对吗？</P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                如果你使用过React，你可能已经意识到makeState()与useState()钩子函数相似。
              </P>
              <P></P>
              <ReadMore
                showReadMoreTextWhenVisible
                readMoreText="如果是这样，点击这里查看"
                preview={readMore => (
                  <P>
                    你感到困惑吗？有些人可能会疑惑。"为什么我们在另一个函数里面有函数？"或者"
                    <Code>{`{ getState, setState }`}</Code>
                    的语法是什么？
                    {readMore}
                  </P>
                )}
                rest={
                  <>
                    <Ul>
                      <UlLi>
                        上面的代码在函数makeState()里面有函数getState(),
                        setState()。这是因为我使用了闭包，它是JavaScript中最重要的概念之一。
                        - <Code>{`{ getState, setState }`}</Code>
                        语法是JavaScript的ES2015特性中的解构赋值
                      </UlLi>
                    </Ul>
                  </>
                }
              />
            </>
          )
        }
      },
      {
        title: <>如果我们使用一个字符串呢？</>,
        content: (
          <>
            <P>
              现在，如果我们不使用1或2这样的数字，而是使用'foo'这样的字符串，会发生什么？先试着猜一下，然后按下编译按钮。
              <Highlight>
                press the <RunButtonText compile /> button
              </Highlight>
              .
            </P>
            <CodeBlock
              compile
              resultError
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex > 2 && tokenIndex < 4
              }
              shouldHighlightResult={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex > 2 && tokenIndex < 4
              }
              snippet={snippets.stkh}
              result={
                <>
                  Argument of type '"foo"' is not assignable to parameter of
                  type 'number'.
                </>
              }
            />
            <P>编译失败了，因为setState()需要传入一个数字。</P>
            <CodeBlock
              snippet={snippets.nnyl}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 8 && tokenIndex > 4 && tokenIndex < 8
              }
            />
            <P>为了解决这个问题，我们可以将state和x的类型从数字改为字符串。</P>
            <CodeBlock
              snippet={snippets.gkgi}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 9 && tokenIndex > 4 && tokenIndex < 8) ||
                (lineIndex === 2 && tokenIndex > 4 && tokenIndex < 6)
              }
            />
            <P>
              现在它可以工作了!
              <Highlight>
                Press <RunButtonText />.
              </Highlight>
            </P>
            <CodeBlock snippet={snippets.xeax} result={<>foo</>} />
          </>
        )
      },
      {
        title: <>挑战：两个不同的state状态</>,
        content: (
          <>
            <P>现在，我们已经掌握了基本知识，这里有一个给你的挑战:</P>
            <P>
              <strong>问题:</strong> 问题：我们能否修改makeState()，使其能够创建{' '}
              <strong>两种</strong>{' '}
              不同的状态：一种只允许接收数字，另一种只允许接收字符串？
            </P>
            <P>我的意思是:</P>
            <CodeBlock snippet={snippets.bfka} />
            <P>
              在前面，我们的第一个makeState()创建了纯数字的状态，第二个makeState()创建了纯字符串的状态。然而，它不能同时创建纯数字的状态和纯字符串的状态。
            </P>
            <P>我们如何修改makeState()来实现我们的目标？</P>
          </>
        )
      },
      {
        title: <>尝试 1: 它能正常工作吗?</>,
        content: (
          <>
            <P>这里是第一种尝试，一起看看</P>
            <CodeBlock
              snippet={snippets.ystu}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 7 && tokenIndex > 4 && tokenIndex < 10) ||
                (lineIndex === 1 && tokenIndex > 4 && tokenIndex < 10)
              }
            />
            <P>
              这样做是行不通的。
              你最终会创建一个同时允许数字和字符串的状态，这不是我们想要的。相反，我们希望makeState()支持创建
              <strong>两种</strong>
              不同的状态：一种是只允许数字，另一种是只允许字符串。
            </P>
            <CodeBlock snippet={snippets.qqic} />
          </>
        )
      },
      {
        title: <>尝试 2: 使用泛型</>,
        content: (
          <>
            <P>这就是泛型的作用，请看下面的例子:</P>
            <CodeBlock
              snippet={snippets.brze}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 7 && tokenIndex > 4 && tokenIndex < 8) ||
                (lineIndex === 1 && tokenIndex > 4 && tokenIndex < 6) ||
                (lineIndex === 0 && tokenIndex > 1 && tokenIndex < 5)
              }
            />
            <P>
              <Code>makeState()</Code> 现在被定义为{' '}
              <Code>makeState&lt;S&gt;()</Code>. 你可以把 <Code>&lt;S&gt;</Code>{' '}
              看作是你在调用该函数时必须传入的另一个东西。
              <strong> 但你不是传递一个值，而是传递一个类型给它。</strong>
            </P>
            <P>
              例如，当你调用makeState()时，你可以把类型数字<Code>number</Code>{' '}
              作为 <Code>S</Code>传递。
            </P>
            <CodeBlock snippet={snippets.jdhu} />
            <P>
              然后，在<Code>makeState()</Code>的函数定义里面，S将变成数字类型。:
            </P>
            <CodeBlock snippet={snippets.rebo} />
            <P>
              因为state将是数字类型，而setState只接受数字，所以它创建了一个纯数字的状态。
            </P>
            <CodeBlock
              snippet={snippets.gjgg}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex > 5 && tokenIndex < 7
              }
            />
            <P>
              另一方面，为了创建一个纯字符串的state，你可以在调用makeState()时将字符串作为S传递。
            </P>
            <CodeBlock
              snippet={snippets.hkgv}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex > 5 && tokenIndex < 7
              }
            />
            <P>
              <strong>注意:</strong> 我们称 <Code>makeState&lt;S&gt;()</Code> 为
              "泛型函数"，因为它实际上是泛型的--你可以选择让它只包含数字或只包含字符串。如果它接受一个类型参数，你就知道它是一个通用函数
            </P>
            <CodeBlock
              snippet={snippets.brze}
              caption={
                <>
                  <Code>makeState&lt;S&gt;()</Code> 是一个泛型函数
                </>
              }
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>你可能想知道。为什么我们将类型参数命名为 "S"？</P>
              <P>
                答案是。它实际上可以是任何名字，但通常人们使用一个词的第一个字母来描述该类型所代表的内容。在这种情况下，我选择了
                "S"，因为它描述的是 "S "状态的类型。以下名称也很常见。
              </P>
              <Ul>
                <UlLi>
                  <Code>T</Code> (代表 <strong>“T”</strong>
                  ype)
                </UlLi>
                <UlLi>
                  <Code>E</Code> (代表 <strong>“E”</strong>
                  lement)
                </UlLi>
                <UlLi>
                  <Code>K</Code> (代表 <strong>“K”</strong>
                  ey)
                </UlLi>
                <UlLi>
                  <Code>V</Code> (代表 <strong>“V”</strong>
                  alue)
                </UlLi>
              </Ul>
            </>
          )
        }
      },
      {
        title: <>问题: 你可以创建一个布尔类型的state</>,
        content: (
          <>
            <P>
              但是等一下，如果你把boolean传给S，你就可以创建一个只有boolean的状态。
            </P>
            <CodeBlock snippet={snippets.llvc} />
            <P>
              假设我们不希望makeState()能够创建非数字或非字符串的state（如布尔值）。我们怎样才能确保这一点呢？
            </P>
            <EmojiSeparator
              emojis={['question', 'chickEgg', 'question']}
              description={<>如何让makeState() 只接受数字或字符串？</>}
            />
            <P>
              <strong>解决办法:</strong> 当你声明 <Code>makeState()</Code>
              ,时，你把类型参数 <Code>&lt;S&gt;</Code> 改为{' '}
              <Code>&lt;S extends number | Œstring&gt;</Code>.
              这是你唯一需要做的改变。
            </P>
            <CodeBlock
              snippet={snippets.mngc}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 0 && tokenIndex > 2 && tokenIndex < 12
              }
            />
            <P>
              通过这样做，当你调用<Code>makeState()</Code>
              时，你只能将数字、字符串或任何其他扩展了数字或字符串的类型作为S传递。
            </P>
            <P>
              我们看看当你试图将布尔值作为S传递时会发生什么
              <Highlight>
                Press <RunButtonText compile /> below
              </Highlight>
              .
            </P>
            <CodeBlock
              snippet={snippets.dngl}
              compile
              resultError
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 17 && tokenIndex > 5 && tokenIndex < 7) ||
                (lineIndex === 1 && tokenIndex > 0)
              }
              shouldHighlightResult={(lineIndex, tokenIndex) =>
                lineIndex === 17 && tokenIndex > 5 && tokenIndex < 7
              }
              result={
                <>
                  Type 'boolean' does not satisfy the constraint 'string |
                  number'.
                </>
              }
            />
            <P>
              它产生了一个错误，而这正是我们想要的。我们已经成功地阻止了makeState()创建非数字或非字符串状态。
            </P>
            <P>
              正如你刚才看到的，你可以指定泛型函数的类型参数是你允许的范围。
            </P>
          </>
        )
      },
      {
        title: <>默认类型</>,
        content: (
          <>
            <P>
              每次调用<Code>makeState()</Code>时都要指定{' '}
              <Code>&lt;number&gt;</Code> 或 <Code>&lt;string&gt;</Code>{' '}
              这样的类型，这很烦人。
            </P>
            <P>
              所以我有个想法。我们能不能让<Code>&lt;number&gt;</Code>
              成为makeState()的默认类型参数？我们想让它变成这样，如果S没有被指定，它将被默认设置为number。
            </P>
            <CodeBlock snippet={snippets.xfwf} />
            <P>
              为了实现这一点，我们可以通过在最后添加<Code>=number</Code>{' '}
              来指定S的默认类型。这有点像为普通函数参数设置默认值，不是吗？
            </P>
            <CodeBlock
              snippet={snippets.thxf}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 2 && tokenIndex > 10 && tokenIndex < 14
              }
            />
            <P>通过这样做，你可以在不指定类型的情况下创建一个纯数字的状态。</P>
            <CodeBlock snippet={snippets.gzwe} />
          </>
        )
      },
      {
        color: 'green',
        title: '快速回顾：就像普通函数参数一样',
        content: (
          <>
            <P>
              我们已经完成了本文约三分之二的内容。在我们继续之前，让我们做一个简单的回顾。
            </P>
            <P>
              你应该记住的是，<strong>泛型就像普通的函数参数</strong>{' '}
              。不同的是，普通函数参数处理的是<strong>值</strong>{' '}
              ，而泛型处理的是<strong>类型参数</strong> 。
            </P>
            <Hr />
            <P>
              <strong>例 1:</strong>{' '}
              例如，这里有一个普通的函数，可以传入任何类型的值。
            </P>
            <CodeBlock snippet={snippets.wpru} />
            <P>类似地，你可以声明一个带有类型参数的泛型函数。</P>
            <CodeBlock snippet={snippets.bqvz} />
            <Hr />
            <P>
              <strong>例 2:</strong>{' '}
              在常规函数中，你可以这样指定一个参数的类型。
            </P>
            <CodeBlock snippet={snippets.qini} />
            <P>同样地，你可以指定泛型函数的类型参数允许的内容:</P>
            <CodeBlock snippet={snippets.kbld} />
            <Hr />
            <P>
              <strong>例 3:</strong>{' '}
              在常规函数中，你可以这样指定一个参数的默认值:
            </P>
            <CodeBlock snippet={snippets.pjcw} />
            <P>同样地，你可以为一个泛型函数指定默认类型:</P>
            <CodeBlock snippet={snippets.nyih} />
            <Hr />
            <P>
              泛型并不可怕。它们就像普通的函数参数，但它处理的是类型，而不是值。如果你理解了这么多，你就可以继续看下去了！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            让我们谈谈 <Code>makePair</Code>
          </>
        ),
        content: (
          <>
            <P>
              让我们来看看新的函数 <Code>makePair()</Code>. 它类似于{' '}
              <Code>makeState()</Code>,
              但它不是存储一个单一的值，而是存储一对值，如{' '}
              <Code>{`{ first: ?, second: ? }`}</Code>， 现在，它只支持数字。
            </P>
            <CodeBlock snippet={snippets.ugeb} />
            <P>
              让我们试试吧,当你运行下面的代码时，控制台会打印出什么？先试着猜一下，然后按下运行按钮。
              <Highlight>
                press the <RunButtonText /> button
              </Highlight>
              .
            </P>
            <CodeBlock
              snippet={snippets.jejx}
              result={
                <>
                  {`{ first: 1, second: 2 }`}
                  <br />
                  {`{ first: 3, second: 4 }`}
                </>
              }
            />
            <P>
              现在，就像我们对 <Code>makeState()</Code>, 所做的那样，让我们把{' '}
              <Code>makePair()</Code> 变成一个通用函数。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            泛型<Code>makePair</Code>
          </>
        ),
        content: (
          <>
            <P>
              这里有一个泛型版本的<Code>makePair</Code>.
            </P>
            <Ul>
              <UlLi>它需要两个类型参数F和S（代表 “F”irst 和 “S”econd）。</UlLi>
              <UlLi>第一个的类型将是F。</UlLi>
              <UlLi>第二个的类型将是S。</UlLi>
            </Ul>
            <CodeBlock snippet={snippets.rxdm} />
            <P>
              这里有一个用法的例子。调用makePair并且传入
              <Code>&lt;number, string&gt;</Code>
              ，它要求第一个参数类型是数字，第二个参数类型是字符串。
            </P>
            <CodeBlock snippet={snippets.gozc} />
            <Hr />
            <P>总而言之，你可以创建一个接受多个类型参数的通用函数。</P>
            <CodeBlock snippet={snippets.qgxj} />
            <P>当然，你也可以像以前一样使用extends关键字或默认类型。</P>
            <CodeBlock snippet={snippets.nbvo} />
            <P>
              你甚至可以让第二种类型（S）与第一种类型（F）相关。这里有一个例子。
            </P>
            <CodeBlock snippet={snippets.xekh} />
          </>
        )
      },
      {
        title: <>泛型接口（Generic interfaces）和类型别名（type aliases）</>,
        content: (
          <>
            <P>
              让我们回到我们之前的<Code>makePair()</Code>
              的实现。现在，看一下正确的类型。
              <Code>pair</Code>:
            </P>
            <CodeBlock
              snippet={snippets.mrub}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex > 4
              }
            />
            <P>
              上面的代码可以按原样工作，但如果我们想的话，我们可以把
              <Code>{`{ first: F, second: S }`}</Code>{' '}
              变成一个接口或类型别名，这样它就可以被重用了。
            </P>
            <P>
              让我们首先把配对的类型提取到一个泛型接口中。我将使用A和B作为类型参数名，以区别于
              <Code>makePair()</Code>的类型参数。
            </P>
            <CodeBlock snippet={snippets.lldl} />
            <P>然后我们可以使用这个接口来声明类型。</P>
            <CodeBlock snippet={snippets.cqrm} />
            <P>
              通过提取到一个泛型接口（一个接受类型参数的接口），我们可以在必要时在其他地方重新使用它。
            </P>
            <Hr />
            <P>
              或者，我们也可以把它提取到一个通用类型别名中。对于对象类型，类型别名基本上与接口相同，所以你可以使用你喜欢的任何一种。
            </P>
            <CodeBlock snippet={snippets.qgea} />
            <P>
              总而言之，你可以创建通用接口和类型别名，就像你可以创建泛型函数一样。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                要了解更多关于接口和类型别名的信息，请阅读{' '}
                <A href="https://stackoverflow.com/a/52682220/114157">
                  StackOverflow的答案
                </A>
                . 从TypeScript 3.7开始，它增加了对
                <A href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html">
                  递归类型别名的支持
                </A>
                , 类型别名可以涵盖接口的几乎所有使用情况
              </P>
            </>
          )
        }
      },
      {
        title: <>泛型类</>,
        content: (
          <>
            <P>
              我们要讲的最后一个是泛型类。首先，让我们重温一下
              <Code>makeState()</Code>
              的代码。这是不使用扩展或泛型类型参数的通用版本。
            </P>
            <CodeBlock
              snippet={snippets.brze}
              caption={
                <>
                  Let’s revisit <Code>makeState()</Code>
                </>
              }
            />
            <P>
              我们可以把<Code>makeState()</Code>
              变成一个叫做State的泛型类，如下列代码。它看起来与
              <Code>makeState()</Code>相似，对吗？
            </P>
            <CodeBlock snippet={snippets.mroc} />
            <P>要使用泛型类，只需要在初始化的时候传入一个类型参数。</P>
            <CodeBlock snippet={snippets.zdbq} />
            <P>
              总而言之，泛型类就像泛型函数一样。泛型函数在我们调用它时需要一个类型参数，但泛型类在我们实例化它时需要一个类型参数。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                你需要在TypeScript配置（tsconfig.json）上设置{' '}
                <Code>"strictPropertyInitialization": false</Code>{' '}
                以使上述代码能够编译。
              </P>
            </>
          )
        }
      },
      {
        title: <>这就是你所需要知道的!</>,
        content: (
          <>
            <EmojiSeparator emojis={['sparkles', 'smilingCat', 'sparkles']} />
            <P>
              感谢阅读! 泛型所需要了解的就是这些。希望能让你不那么害怕泛型。
            </P>
          </>
        ),
        footer: {
          content: <AboutMe />
        }
      }
    ]}
  />
)

export default Page
