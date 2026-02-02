/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PostPage from 'src/components/PostPage'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import { Code, P, Highlight, Ul, UlLi } from 'src/components/ContentTags'
import * as snippets from 'src/lib/snippets'
import TodoWithData, { Todo } from 'src/components/TodoWithData'
import RunButtonText from 'src/components/RunButtonText'
import CodeBlock from 'src/components/CodeBlock'
import BubbleQuotes from 'src/components/BubbleQuotes'
import ResultHighlight from 'src/components/ResultHighlight'
import PlaceLabel from 'src/components/PlaceLabel'
import InternalLink from 'src/components/InternalLink'

const compileSuccess = 'Compiled successfully!'
const section1 = '类型、只读属性和映射类型'
const section2 = '数组类型、字面量类型和交叉类型'
const section3 = '联合类型和可选属性'
const placesExample: Todo[] = [
  { id: 1, text: 'Do laundry', done: false, place: 'home' as const },
  { id: 2, text: 'Email boss', done: false, place: 'work' as const },
  {
    id: 3,
    text: 'Go to gym',
    done: false,
    place: { custom: 'Gym' }
  },
  {
    id: 4,
    text: 'Buy milk',
    done: false,
    place: { custom: 'Supermarket' }
  },
  {
    id: 5,
    text: 'Read a book',
    done: false
  }
]

const UnionTypesSummary = () => (
  <>
    <Ul>
      <UlLi>如果我们有一个联合类型的变量（比如说place）...</UlLi>
      <UlLi>并在if/else中检查其值...</UlLi>
      <UlLi>
        那么TypeScript就会对变量在if/else的每个分支的可能值进行智能处理。
      </UlLi>
    </Ul>
    <CodeBlock
      snippet={snippets.ntup}
      narrowText
      shouldHighlight={lineIndex =>
        lineIndex === 8 || lineIndex === 11 || lineIndex === 14
      }
    />
  </>
)

const ArrowWrapper = ({ children }: { children: React.ReactNode }) => (
  <span
    css={css`
      margin-left: 0.25em;
      margin-right: 0.25em;
      font-size: 1.2em;
      transform: translateY(-0.1em);
    `}
  >
    {children}
  </span>
)

const Page = () => (
  <PostPage
    articleKey="todo"
    cards={[
      {
        title: <>通过构建 todo 应用学习 TypeScript</>,
        content: (
          <>
            <P>
              通过建立一个todo应用程序来学习一个JavaScript库是一个非常好的想法，很多教程中都有类似的章节，包括用Vue、React等框架来构建的todo应用。
            </P>
            <P>
              但TypeScript教程呢？谈到TypeScript，涉及构建todo应用的教程并不多，所以这篇文章就是据此来写的,帮助已经知道如何用
              JS构建一个todo应用的开发者来学习TypeScript。
            </P>
            <P>
              在本教程中，我将通过下图所示的一个示例todo应用来教授TypeScript的一些有趣部分。
              <Highlight></Highlight>
            </P>
            <TodoWithData
              caption={<>todo app:</>}
              promptArrowText={<>↑ 尝试选中和取消选中复选框!</>}
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
            />
            <P>在我们开始之前，这里有一些细节：</P>
            <Ul>
              <UlLi>
                本教程不依赖于任何特定的前端库，所以你是否知道React、Vue或其他一些库并不重要。只要你有基本的JS知识，你就能跟上。没有必要事先了解TypeScript。
              </UlLi>
              <UlLi>
                为了节省时间，我不打算谈论如何设置TypeScript项目--你应该阅读其他教程。
              </UlLi>
              <UlLi>
                同时为了节省时间，我只介绍TypeScript中最基本的概念。我的目标不是要面面俱到，而是要让你想要去学习更多相关知识。
              </UlLi>
            </Ul>
            <P>
              这篇文章总共有<strong>3个部分</strong>。以下是每一节所涵盖的主题。
            </P>
            <Ul>
              <UlLi>
                <strong>Section 1:</strong> {section1}
              </UlLi>
              <UlLi>
                <strong>Section 2:</strong> {section2}
              </UlLi>
              <UlLi>
                <strong>Section 3:</strong> {section3}
              </UlLi>
            </Ul>
            <P>让我们开始吧!</P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                如果您已经了解 TypeScript 基础知识，那么本教程中不会有任何新内容
              </P>
            </>
          )
        }
      },
      {
        title: (
          <>
            <strong>第 1 部分</strong>（共 3 部分）
          </>
        ),
        heading: section1,
        color: 'darkGreen'
      },
      {
        title: <>将数据转化为用户界面</>,
        content: (
          <>
            <P>
              让我们先来看看<strong>数据</strong>
              。像React或Vue这样的UI库本质上所做的事情是将数据转化为UI。例如，在React中，你把数据指定为道具或状态，它就会根据这些数据渲染出UI。
            </P>
            <EmojiSeparator
              emojis={['data', 'singleArrow', 'ui']}
              description={<>UI库将数据转换为 UI</>}
            />
            <P>
              现在，让我们来看看下面这个todo应用程序。你能猜到与这个用户界面相关的数据是什么吗？
            </P>
            <TodoWithData
              caption={<>哪些数据与该 UI 相关?</>}
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
            />
            <P>
              <strong>答：</strong>{' '}
              它是一个对象数组，每个对象都有id、text和done。
            </P>
            <CodeBlock snippet={snippets.dxfc} />
            <P>下面是每个todo对象里面的内容：</P>
            <Ul>
              <UlLi>
                <Code>
                  <strong>id</strong>
                </Code>{' '}
                是每个todo项目的ID。这通常是由后端数据库生成的。
              </UlLi>
              <UlLi>
                <Code>
                  <strong>text</strong>
                </Code>{' '}
                包含每个todo项目的文本。
              </UlLi>
              <UlLi>最重要的是，完成的项目状态为真，否则为假。</UlLi>
            </Ul>
            <P>
              让我们把这个应用程序和它的相关数据一起显示出来。试着勾选和不勾选每个复选框，并看看做了什么变化。
            </P>
            <TodoWithData
              showData
              caption={
                <>
                  <Highlight>↓ 勾选或取消勾选复选框</Highlight>
                  <br />
                  看看会发生什么done变化
                </>
              }
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
              comment={`// "done" changes when you check/uncheck`}
              highlightLineIndexOffset={2}
              shouldHighlight={tokenIndex => tokenIndex === 15}
            />
            <P>
              正如你所看到的，当你check/uncheck一个复选框时，它会更新底层数据（done的属性），反过来，用户界面也会被更新。这就是React和Vue等UI库的工作方式。
            </P>
            <EmojiSeparator
              emojis={[
                'ui',
                'singleArrow',
                'updatedData',
                'singleArrow',
                'updatedUi'
              ]}
              description={
                <>当用户与 UI 交互时，数据会更新，反过来，UI 也会更新</>
              }
            />
            <P>接下来我们看一下数据是如何更新的。</P>
          </>
        )
      },
      {
        title: (
          <>
            让我们实现一下<Code>toggleTodo()</Code>
          </>
        ),
        content: (
          <>
            <P>
              为了实现check/uncheck的功能，我们需要编写代码来切换单个todo项目的已完成属性。
            </P>
            <P>
              让我们把这个函数命名为toggleTodo()。下面看一下它应该如何工作。
            </P>
            <Ul>
              <UlLi>当你在一个单一的todo对象上调用toggleTodo()时</UlLi>
              <UlLi>
                它需要返回一个新的todo对象，该对象的done属性为相反的布尔值。
              </UlLi>
            </Ul>
            <CodeBlock snippet={snippets.vpco} />
            <P>
              现在，让我介绍我们的初级开发人员--黄小丫。他将为我们实现toggleTodo()。
            </P>
            <EmojiSeparator
              emojis={['chickEgg']}
              size="lg"
              description={
                <>
                  我是<strong>小丫，</strong> 一名初级开发者!
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>toggleTodo()已经帮你们实现了。你能看一下吗？</P>
                    </>
                  )
                }
              ]}
            />
            <CodeBlock
              snippet={snippets.reel}
              caption={
                <>
                  <Emoji type="chickEgg" />
                  黄小鸭实现的
                  <Code>toggleTodo()</Code>
                </>
              }
            />
            <P>
              让我们检查一下小黄鸭的实现是否正确。看一下下面的测试案例。你认为输出会是什么？先试着猜一下，然后按下下面的运行按钮。
              <Highlight>
                点击 <RunButtonText /> 按钮.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.lund}
              result={
                <>
                  Expected:
                  <br />
                  <ResultHighlight>{`{ id: 1, text: '…', done: false }`}</ResultHighlight>
                  Actual:
                  <br />
                  <ResultHighlight>{`{ text: '…', done: false }`}</ResultHighlight>
                </>
              }
              pointToRunButton
            />
            <P>
              done属性正确的变成了false，但它缺少id属性。所以小黄鸭的实现是不正确的。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        哎呀! <Emoji type="sweat" /> 我忘记了这个{' '}
                        <Code>id</Code> 属性了!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>别担心，小丫！我们一起看一下是正确的实现:</P>
            <CodeBlock
              snippet={snippets.yxjg}
              caption={<>正确的代码实现</>}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex >= 0 && tokenIndex <= 4
              }
            />
            <P>
              <strong>现在，问题来了</strong>{' '}
              我们怎样才能防止小黄鸭犯这样的错误？
            </P>
            <EmojiSeparator
              emojis={['sweat', 'chickEgg', 'sweat']}
              description={<>知错就改</>}
            />
            <P>
              这就是 <strong>TypeScript</strong> 的用武之地。
            </P>
          </>
        )
      },
      {
        title: <>类型检查</>,
        content: (
          <>
            <P>
              使用TypeScript，我们可以通过做类型检查来防止犯小黄鸭刚刚的错误
            </P>
            <P>
              首先，为我们使用的数据创建一个类型。在我们的例子中，我们需要为一个todo项目创建一个类型。我们将这个类型称为Todo，并使用以下TypeScript语法来定义它。
            </P>
            <CodeBlock snippet={snippets.lieq} />
            <P>
              我们可以使用这个类型来检查一个变量是否确实是一个todo项目。做这种检查的TypeScript语法是：
              <Code>变量名: Todo</Code>.下面是一个例子～
              <Highlight>
                按下 <RunButtonText compile />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.bnli}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 0 && tokenIndex >= 1 && tokenIndex <= 4
              }
              compile
              result={compileSuccess}
              tokenIndexIndentWorkaround={1}
            />
            <P>它编译成功了，因为foo的类型与Todo的类型相符。</P>
            <P>
              现在，下面这个例子会怎样呢?{' '}
              <Highlight>
                按下 <RunButtonText compile />.
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.tgvw}
              tokenIndexIndentWorkaround={1}
              compile
              resultError
              result={
                <>{`Property 'id' is missing in type '{ text: string; done: true; }' but required in type 'Todo'.`}</>
              }
            />
            <P>答案是编译失败，因为缺乏id属性。</P>
            <P>
              TypeScript能够让你根据指定的类型对变量进行类型检查，这有助于你尽早发现错误。
            </P>
          </>
        )
      },
      {
        title: <>在toggleTodo()中使用TypeScript</>,
        content: (
          <>
            <P>
              现在，让我们用TypeScript来防止小黄鸭犯错误。回顾一下，这里是我们之前创建的Todo类型（id是必须的）。
            </P>
            <CodeBlock snippet={snippets.lieq} />
            <P>
              首先，我们指定toggleTodo()的输入必须是Todo。我们通过在参数todo旁边添加:Todo来做到这一点。
            </P>
            <CodeBlock
              snippet={snippets.csum}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 5 && tokenIndex <= 7
              }
            />
            <P>
              接下来，我们指定toggleTodo()的返回类型也必须是Todo。我们通过在参数列表后添加:Todo来做到这一点。
            </P>
            <CodeBlock
              snippet={snippets.ywiv}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 9 && tokenIndex <= 11
              }
            />
            <P>
              现在，让我们复制并粘贴小黄鸭写的代码--没有id属性的代码--看看会发生什么。
              <Highlight>
                按下 <RunButtonText compile /> .
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ntau}
              compile
              resultError
              result={`Property 'id' is missing in type '{ text: string; done: boolean; }' but required in type 'Todo'.`}
            />
            <P>
              它编译失败了，因为返回的对象缺少id属性，因此不符合Todo的类型。因此，TypeScript可以防止小黄鸭犯的错误!
            </P>
            <P>
              为了确保这一点，让我们用正确的代码再试一次。我已经在返回的对象中添加了id属性。{' '}
              <Highlight>
                按下 <RunButtonText compile /> .
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ampt}
              compile
              result={compileSuccess}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex >= 0 && tokenIndex <= 4
              }
            />
            <P>
              它编译成功了!
              正如你所看到的，TypeScript在防止错误和让你知道一切都有正确的类型方面非常出色。
            </P>
          </>
        )
      },
      {
        title: <>糟糕的重构</>,
        content: (
          <>
            <P>现在，代码已经正常运行了，小黄鸭决定重构toggleTodo()。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        我认为我可以对toggleTodo()进行如下重构。你能看一下吗？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Highlight>
                按下
                <RunButtonText compile />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.uxlb}
              compile
              result={compileSuccess}
            />
            <P>
              编译成功了，但它实际上是一个糟糕的重构。为什么呢？因为它改变了原来的todo对象。
              <Highlight>
                <RunButtonText /> :
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.wymp}
              narrowText
              result={
                <>
                  Before toggleTodo(), argument is:
                  <br />
                  <ResultHighlight>{`{ id: 1, text: '…', done: true }`}</ResultHighlight>
                  <br />
                  After toggleTodo(), argument is:
                  <br />
                  <ResultHighlight>{`{ id: 1, text: '…', done: false }`}</ResultHighlight>
                </>
              }
            />
            <P>
              在对其运行toggleTodo()后，argument发生了变化。这不是好事，因为我们之前已经说过，toggleTodo()必须返回一个
              <strong>新的todo对象</strong>
              。它不应该修改参数（输入）的todo对象。
            </P>
            <CodeBlock
              snippet={snippets.qbgu}
              shouldHighlight={lineIndex => lineIndex === 1}
            />
            <P>
              这就是为什么尽管它的编译正确，但小黄鸭的重构仍然是一个糟糕的重构。
            </P>
            <CodeBlock
              snippet={snippets.njgr}
              shouldHighlight={lineIndex => lineIndex === 4}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        哎呀，我又搞砸了! <Emoji type="sweat" />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              别担心，小鸭子！问题是，我们如何使用 TypeScript 来防止这样的错误？
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <Code>只读</Code> 属性
          </>
        ),
        content: (
          <>
            <P>
              为了防止一个函数修改其输入，你可以在TypeScript中使用readonly关键字。在这里，readonly关键字被添加到Todo的所有属性中。
            </P>
            <CodeBlock
              snippet={snippets.yhto}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex >= 1 && lineIndex <= 3 && tokenIndex === 1
              }
            />
            <P>
              现在，让我们尝试使用上面的定义再次编译小鸭子的代码Todo。这次会发生什么？
            </P>
            <CodeBlock
              snippet={snippets.dqwb}
              compile
              resultError
              result={
                <>Cannot assign to 'done' because it is a read-only property</>
              }
              shouldHighlightResult={(lineIndex, tokenIndex) =>
                lineIndex === 2 && tokenIndex === 2
              }
            />
            <P>
              编译失败!
              这是因为done被定义为一个只读属性，而TypeScript阻止你更新只读属性。
            </P>
            <P>
              我们再次看到，
              <Highlight>TypeScript可以防止小黄鸭犯错误</Highlight>
            </P>
            <P>
              顺便说一下，我们还讲使用先前的实现，因为它没有修改输入的todo项目。
            </P>
            <CodeBlock
              snippet={snippets.vgnq}
              shouldHighlight={lineIndex => lineIndex === 6 || lineIndex === 7}
            />
          </>
        )
      },
      {
        title: (
          <>
            <Code>ReadOnly&lt;...&gt;</Code> 映射类型
          </>
        ),
        content: (
          <>
            <P>
              在TypeScript中，还有一种方法可以使一个对象类型的所有属性成为只读类型。
            </P>
            <CodeBlock snippet={snippets.yhto} />
            <P>上面的代码等价于：</P>
            <CodeBlock
              snippet={snippets.nxyl}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 1 && tokenIndex >= 7 && tokenIndex <= 8) ||
                (lineIndex === 5 && tokenIndex >= 1)
              }
            />
            <P>
              在TypeScript中，如果你在一个对象类型上使用
              <Code>Readonly&lt;...&gt;</Code>
              关键字，它会使它的所有属性都是只读的。这通常比手动添加readonly到每个属性更容易。
            </P>
            <P>下面是另一个例子:</P>
            <CodeBlock snippet={snippets.qaqa} />
            <P>
              在TypeScript中，你可以使用Readonly&lt;...&gt;这样的关键字来将一个类型转换为另一个类型。在这种情况下，Readonly&lt;...&gt;接收一个对象类型（如Todo）并创建一个具有只读属性的新对象类型。
            </P>
            <EmojiSeparator
              emojis={['readonly']}
              description={<>TypeScript 允许你将一种类型转换为另一种类型</>}
            />
            <P>
              而像Readonly&lt;...&gt;这样的关键词被称为映射类型。映射类型有点像函数，除了输入/输出是TypeScript类型。
            </P>
            <P>
              有许多内置的映射类型（如Required&lt;...&gt;，Partial&lt;...&gt;等）。你也可以创建你自己的映射类型。我不会在本文详细介绍这些主题，你可以自己搜索。
            </P>
          </>
        )
      },
      {
        color: 'green',
        subtitle: <>第一部分小结：</>,
        title: <>类型(Types)就像轻量级的自动单元测试</>,
        content: (
          <>
            <P>到目前为止，我们已经学到了以下内容:</P>
            <P>
              <strong>
                1. 我们可以定义一个类型以确保一个函数的输入和输出是正确的类型
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.frtm}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 0 && tokenIndex <= 2) ||
                (lineIndex === 8 &&
                  ((tokenIndex >= 5 && tokenIndex <= 7) || tokenIndex === 11))
              }
            />
            <P>
              <strong>
                2. 我们可以使用readonly关键字来确保一个对象的属性不被修改。
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.npah}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex >= 1 && lineIndex <= 3 && tokenIndex === 1
              }
            />
            <P>
              在JavaScript中，你需要写单元测试来测试这些东西，但TypeScript可以自动检查它们。所以在某种意义上，TypeScript的类型就像轻量级的单元测试，在你每次保存（编译）代码的时候都会运行。(当然，这个比喻是简化的。你还是应该用TypeScript写测试！)
            </P>
            <P>
              当你使用一个UI库并需要转换数据时，这一点特别有用。例如，如果你使用React，你将需要在状态更新中转换数据。当你把数据从一个父组件传递给它的子组件时，你也可能需要转换数据。TypeScript可以减少这些情况下产生的bug。
            </P>
            <EmojiSeparator
              emojis={['data', 'transformTypechecked', 'updatedData']}
              description={<>TypeScript 可以减少转换/传递数据时的错误</>}
            />

            <P>
              最后，我们了解到，我们可以使用像Readonly这样的映射类型，将一种类型转换为另一种类型。
            </P>
            <CodeBlock
              snippet={snippets.nxyl}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 1 && tokenIndex >= 7 && tokenIndex <= 8) ||
                (lineIndex === 5 && tokenIndex >= 1)
              }
            />
            <P>接下来，让我们看一些不一样的例子</P>
          </>
        )
      },
      {
        title: (
          <>
            <strong>第2部分</strong>（共 3 部分）
          </>
        ),
        heading: section2,
        color: 'darkGreen'
      },
      {
        title: <>将所有项目标记为完成状态</>,
        content: (
          <>
            <P>
              让我们来谈谈我们的todo应用程序的一个新功能。"将所有项目标记为完成状态"。
            </P>
            <TodoWithData
              showData
              caption={
                <>
                  ↓ 尝试选中 <Highlight>所有</Highlight>
                </>
              }
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
              showMarkAllAsCompleted
              highlightLineIndexOffset={1}
              shouldHighlight={tokenIndex => tokenIndex === 15}
            />
            <P>在选中所有后，所有项目的属性 done 最后都变成了 true。</P>
            <P>
              让我们用TypeScript来实现这个功能。我们将编写一个名为completeAll()的函数，它接收一个todo项目数组，并返回一个新的todos数组，其中属性done都是true。
            </P>
            <CodeBlock snippet={snippets.tdbp} />
            <P>
              在实现它之前，让我们指定这个函数的输入/输出类型，以防止出现错误。
            </P>
          </>
        )
      },
      {
        title: <>为completeAll()添加类型</>,
        content: (
          <>
            <P>对于completeAll()，我们将使用Todo类型的Readonly版本。</P>
            <CodeBlock snippet={snippets.mxqy} />
            <P>
              首先，我们要指定 completeAll() 的参数类型，即 Todo
              项目的数组。为了指定一个数组类型，我们在类型旁边加上[]，如下所示。
            </P>
            <CodeBlock
              snippet={snippets.lgci}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 5 && tokenIndex <= 9
              }
            />
            <P>
              第二，让我们指定返回类型。它也将是一个Todo项目的数组，所以我们将使用和上面一样的语法。
            </P>
            <CodeBlock
              snippet={snippets.mnmy}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 11 && tokenIndex <= 15
              }
            />
            <P>
              第三，我们要确保completeAll()返回一个新的数组，而不是修改原始数组。
            </P>
            <CodeBlock
              snippet={snippets.kuzw}
              shouldHighlight={lineIndex => lineIndex === 1}
            />
            <P>
              因为我们之前用Readonly&lt;...&gt;定义了Todo，所以数组中的每个todo项目都已经是只读的。然而，
              <strong>数组本身还不是只读的。</strong>
            </P>
            <P>
              为了使数组本身成为只读的，我们需要给Todo[]添加readonly关键字，像下面这样。
            </P>
            <CodeBlock
              snippet={snippets.szan}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 2 && tokenIndex >= 2
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        所以对于数组，我们使用readonly关键字，而不是Readonly&lt;...&gt;映射的类型？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              是的，我们对数组使用readonly关键字。这样做，TypeScript将防止你意外地修改数组。
            </P>
            <CodeBlock
              resultError
              defaultErrorHighlight
              snippet={snippets.mwrj}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 4 && tokenIndex <= 3) ||
                (lineIndex === 7 && tokenIndex <= 2)
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>太棒了！那么，我们现在可以开始实施了吗？</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              事实上。在实现completeAll()之前，我们还想做一件事。让我们来看看那是什么!
            </P>
          </>
        )
      },
      {
        title: <>CompletedTodo类型</>,
        content: (
          <>
            <P>
              看一下下面的代码。除了Todo类型之外，我们还定义了一个新的类型，叫做CompletedTodo。
            </P>
            <CodeBlock
              snippet={snippets.rlya}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 9 && tokenIndex >= 0 && tokenIndex <= 4) ||
                (lineIndex === 6 && tokenIndex >= 0 && tokenIndex <= 3)
              }
            />
            <P>
              新的CompletedTodo几乎与Todo相同，只是它拥有done: true而不是done:
              boolean。
            </P>
            <P>
              在TypeScript中，你可以在指定一个类型时使用精确的值（如true或false）。这被称为
              <strong>字面量类型</strong>.
            </P>
            <EmojiSeparator
              emojis={['doneTrue']}
              description={<>指定类型时可以使用精确值。这称为字面量类型。</>}
            />
            <P>
              让我们来看看一个例子。在下面的代码中，我们把CompletedTodo添加到一个done：false的todo项目上。让我们看看当你按下编译时发生了什么
            </P>
            <CodeBlock
              snippet={snippets.zswn}
              compile
              resultError
              result={<>Type 'false' is not assignable to type 'true'.</>}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 3 && tokenIndex <= 5
              }
              shouldHighlightResult={lineIndex => lineIndex === 4}
            />
            <P>
              它编译失败了，因为done的值不是true。通过使用字面量类型，你可以准确地指定一个属性允许的值。
            </P>
            <P>
              回到 completeAll()，我们可以指定 completeAll() 的返回类型是一个
              CompletedTodo 的数组。
            </P>
            <CodeBlock
              snippet={snippets.oone}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 3 && tokenIndex >= 2 && tokenIndex <= 6
              }
            />
            <P>
              通过这样做，TypeScript将迫使你返回一个done属性都是true的todo项目数组--如果不是，将导致编译错误。
            </P>
          </>
        )
      },
      {
        title: <>交叉类型</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        <strong>问题:</strong>{' '}
                        Todo和CompletedTodo之间似乎有一些重复的代码。我们能重构他们吗？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              好问题！如果你仔细观察，会发现Todo和CompletedTodo有相同的id和text类型。
            </P>
            <CodeBlock
              snippet={snippets.xrwn}
              shouldHighlight={lineIndex =>
                lineIndex === 2 ||
                lineIndex === 3 ||
                lineIndex === 9 ||
                lineIndex === 10
              }
            />
            <P>
              我们可以通过使用TypeScript的一个功能，即交叉类型，来减少重复代码。
            </P>
            <P>
              在TypeScript中，你可以使用 <Code>&amp;</Code>{' '}
              符号来创建两种类型的交集类型。
            </P>
            <EmojiSeparator
              emojis={['a', 'ampersand', 'b']}
              description={
                <>
                  <Code>&amp;</Code> 创建了两种类型的交叉类型。
                </>
              }
            />
            <P>交叉类型A&B是一个具有A和B的所有属性的类型，下面是一个例子。</P>
            <CodeBlock
              snippet={snippets.wdjp}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 4 && tokenIndex >= 7
              }
            />
            <P>
              此外，如果第二种类型比第一种类型更具体，那么第二种类型将覆盖第一种。这里有一个例子。
            </P>
            <CodeBlock
              snippet={snippets.qnwc}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 10 && tokenIndex >= 7 && tokenIndex <= 13
              }
            />
            <P>
              我们可以应用这个想法来更新CompletedTodo的定义。我们将用Todo来定义CompletedTodo，像这样:
            </P>
            <CodeBlock
              snippet={snippets.rmuo}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 7 && tokenIndex >= 7) ||
                lineIndex === 8 ||
                lineIndex === 9
              }
            />
            <P>
              通过上述操作，你可以定义CompletedTodo，使其具有与Todo除了done以外相同的属性，而不需要重复代码。
            </P>
            <P>
              摘要：就像JavaScript有布尔运算符，如
              &&，TypeScript有类型运算符，如 &，让你结合两种类型。
            </P>
          </>
        )
      },
      {
        title: <>最终实现 completeAll()</>,
        content: (
          <>
            <P>
              我们终于准备好实现 completeAll()了。下面是代码
              <Highlight>
                试着按下
                <RunButtonText compile />
              </Highlight>
              !
            </P>
            <CodeBlock
              snippet={snippets.hszk}
              compile
              result={compileSuccess}
              shouldHighlight={lineIndex => lineIndex >= 3 && lineIndex <= 6}
            />
            <P>
              它已经成功编译了! 让我们在一个示例的todo列表上运行这个函数。
              <Highlight>
                按下 <RunButtonText />:
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.okva}
              result={
                <ResultHighlight>
                  {`[
  { id: 1, text: '…', done: true },
  { id: 2, text: '…', done: true }
]`}
                </ResultHighlight>
              }
            />
            <P>
              正如预期的那样，<Code>done</Code>都变成了<Code>true</Code>。
            </P>
            <P>
              现在，让我们看看如果我们犯了一个错误，把<Code>done</Code>设置为
              <Code>false</Code>会怎么样。
            </P>
            <CodeBlock
              snippet={snippets.whae}
              compile
              result={
                <>
                  Types of property 'done' are incompatible.
                  <br />
                  Type 'false' is not assignable to type 'true'.
                </>
              }
              resultError
              shouldHighlight={lineIndex => lineIndex === 6}
              shouldHighlightResult={lineIndex => lineIndex === 6}
            />
            <P>
              它编译失败了，因为 CompletedTodo 必须拥有
              done：true属性。再一次，TypeScript提前发现了一个错误。
            </P>
            <P>
              这一节就到此为止吧
              通过使用completeAll()和React这样的UI库，我们可以构建我们之前看到的“Mark
              all as completed”的功能。
            </P>
            <TodoWithData
              showData
              defaultData={[
                { id: 1, text: 'First todo', done: false },
                { id: 2, text: 'Second todo', done: false }
              ]}
              showMarkAllAsCompleted
              highlightLineIndexOffset={1}
              shouldHighlight={tokenIndex => tokenIndex === 15}
            />
          </>
        )
      },
      {
        color: 'green',
        subtitle: <>第二部分小结:</>,
        title: <>TypeScript可以处理数组和精确值</>,
        content: (
          <>
            <P>在本节中，我们已经了解到TypeScript可以处理数组和精确值。</P>
            <P>
              <strong>
                1.
                我们可以通过添加[]来指定一个数组类型。我们也可以将一个数组设置为只读的。
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.ruga}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 2 && tokenIndex >= 2 && tokenIndex <= 6) ||
                (lineIndex === 1 && tokenIndex >= 2)
              }
            />
            <P>
              <strong>
                2. 我们可以使用字面量类型来准确地指定一个属性允许使用的值。
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.bpmz}
              shouldHighlight={lineIndex => lineIndex === 3}
            />
            <P>
              3.
              最后，我们了解到，我们可以使用交叉类型来覆盖一些属性，用来消除重复的代码。
            </P>
            <CodeBlock
              snippet={snippets.rmuo}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 7 && tokenIndex >= 7) ||
                lineIndex === 8 ||
                lineIndex === 9
              }
            />
            <P>
              在下一节（也是最后一节），我们将看一下TypeScript最强大的功能之一，联合类型Unions。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <strong>第 3 部分</strong>（共 3 部分）
          </>
        ),
        heading: section3,
        color: 'darkGreen'
      },
      {
        title: <>新功能:地点标签</>,
        content: (
          <>
            <P>让我们为我们的todo应用程序添加一个新功能位置标签。</P>
            <P>每个待办事项现在都可以选择用以下预定义的标签之一来标记。</P>
            <Ul>
              <UlLi>
                <PlaceLabel place="home" />
              </UlLi>
              <UlLi>
                <PlaceLabel place="work" />
              </UlLi>
            </Ul>
            <P>每个待办事项也可以用自定义的、用户定义的标签来标记。</P>
            <Ul>
              <UlLi>
                <PlaceLabel place={{ custom: 'Gym' }} />,{' '}
                <PlaceLabel place={{ custom: 'Supermarket' }} />,
                用户可以创建任何他们想要的自定义地点标签。
              </UlLi>
            </Ul>
            <P>
              用户可以使用这一功能来确定哪些任务需要在家里、在工作场所或其他地方完成。它是可选的，所以可以有一个没有地点标签的todo项目。
            </P>
            <P>下面是一个示例：</P>
            <TodoWithData
              caption={
                <>
                  现在可以选择为每个待办事项添加地点标签
                  <strong>place tag</strong>
                </>
              }
              defaultData={placesExample}
            />
            <P>
              让我们看一下相关的数据。每个todo现在可以有一个可选的place属性，它决定了place标签。
            </P>
            <Ul>
              <UlLi>
                <Code>
                  place: <strong>'home'</strong>
                </Code>{' '}
                → <PlaceLabel place="home" />
              </UlLi>
              <UlLi>
                <Code>
                  place: <strong>'work'</strong>
                </Code>{' '}
                → <PlaceLabel place="work" />
              </UlLi>
            </Ul>
            <P>对于自定义地点，地点属性将是一个包含字符串自定义属性的对象。</P>
            <Ul>
              <UlLi>
                <Code>
                  place: <strong>{`{ custom: 'Gym' }`}</strong>
                </Code>{' '}
                → <PlaceLabel place={{ custom: 'Gym' }} />
              </UlLi>
              <UlLi>
                <Code>
                  place: <strong>{`{ custom: 'Supermarket' }`}</strong>
                </Code>{' '}
                → <PlaceLabel place={{ custom: 'Supermarket' }} />
              </UlLi>
            </Ul>
            <P>如果一个项目没有地方标签，那么地方属性也可以没有。</P>
            <P>下面是我们前面例子的相关数据:</P>
            <TodoWithData
              showData
              defaultData={placesExample}
              shouldAlwaysHighlight={lineIndex =>
                lineIndex === 5 ||
                lineIndex === 11 ||
                lineIndex === 17 ||
                lineIndex === 23
              }
            />
            <P>
              为了在TypeScript中实现这一点，我们首先需要更新我们对Todo类型的定义。让我们接下来看看这个吧。
            </P>
            <CodeBlock
              snippet={snippets.yztr}
              shouldHighlight={lineIndex => lineIndex === 0}
            />
          </>
        )
      },
      {
        title: <>联合类型</>,
        content: (
          <>
            <P>
              为了实现位置标签，我们可以使用TypeScript的一个功能，即联合类型。
              <strong>union types</strong>.
            </P>
            <P>
              在TypeScript中，你可以使用语法A |
              B来创建一个联合类型，它表示一个类型是A或B。
            </P>
            <EmojiSeparator
              emojis={['a', 'verticalBar', 'b']}
              description={
                <>
                  <Code>A | B</Code> is a <strong>union type</strong>, which
                  means either <Code>A</Code> or <Code>B</Code>.
                </>
              }
            />
            <P>
              例如，如果你创建一个等于 number|string
              的类型，它可以是数字或字符串。
            </P>
            <CodeBlock
              snippet={snippets.mzyn}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 1 && tokenIndex >= 7
              }
            />
            <P>
              在我们的todo应用程序中，我们将首先创建一个新的Place类型，作为一个联合类型，如下所示。
            </P>
            <CodeBlock
              narrowText
              caption={
                <>
                  <Code>Place</Code> can be either <Code>'home'</Code>,{' '}
                  <Code>'work'</Code>, or an object containing a string{' '}
                  <Code>custom</Code> property
                </>
              }
              snippet={snippets.umjt}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 0 && tokenIndex >= 6
              }
            />
            <P>下面是一个使用Place类型的例子。</P>
            <CodeBlock narrowText snippet={snippets.fawy} />
            <P>我们现在可以把Place类型分配给Todo的地点属性:</P>
            <CodeBlock
              caption={
                <>
                  Assign <Code>Place</Code> to <Code>Todo</Code>’s{' '}
                  <Code>place</Code> property
                </>
              }
              snippet={snippets.npgx}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 4 && tokenIndex >= 3
              }
            />
            <P>
              That’s it! Next, we’ll take a look at{' '}
              <strong>optional properties</strong>.
            </P>
          </>
        )
      },
      {
        title: <>可选属性</>,
        content: (
          <>
            <P>
              我们前面简单地提到，像家或工作这样的地点标签是可选的--我们可以有没有地点标签的todo项目。
            </P>
            <P>
              在我们之前的例子中，"读一本书
              "没有任何地点标签，所以它没有任何地点属性。
            </P>
            <TodoWithData
              showData
              customSnippet={snippets.hquv}
              caption={
                <>
                  Place tags are optional: “Read a book” didn’t have any place
                  tag, so NO <Code>place</Code> property
                </>
              }
              defaultData={placesExample}
              shouldAlwaysHighlight={lineIndex => lineIndex === 6}
            />
            <P>
              TypeScript
              能否描述这些可选属性？当然可以。在TypeScript中，你可以在属性名称后面添加一个问号(?)来使该属性成为可选项。
            </P>
            <CodeBlock
              snippet={snippets.yvpp}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 2 && tokenIndex <= 1
              }
            />
            <P>
              在我们的例子中，不使用place: Place，我们可以使用place?:
              Place来使其成为可选项。
              <Code>
                <strong>place?</strong>: Place
              </Code>{' '}
              to make it optional:
            </P>
            <CodeBlock
              narrowText
              snippet={snippets.rvyq}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 7 && tokenIndex <= 1
              }
            />
            <P>现在，我们准备在一个函数中使用这些类型。</P>
          </>
        )
      },
      {
        title: <>实现placeToString()</>,
        content: (
          <>
            <P>正如上文所说，React或Vue等UI库将数据转化为UI。</P>
            <EmojiSeparator
              emojis={['data', 'singleArrow', 'ui']}
              description={<>UI libraries transform data into UI</>}
            />
            <P>
              对于地方标签，我们需要将每个地方的数据转化为地方标签用户界面。
            </P>
            <EmojiSeparator
              size="sm"
              customChildren={
                <>
                  <Code>'home'</Code>{' '}
                  <ArrowWrapper>
                    <Emoji type="singleArrow" noVerticalTransform />
                  </ArrowWrapper>{' '}
                  <PlaceLabel place="home" />
                </>
              }
            />
            <EmojiSeparator
              size="sm"
              customChildren={
                <>
                  <Code>'work'</Code>{' '}
                  <ArrowWrapper>
                    <Emoji type="singleArrow" noVerticalTransform />
                  </ArrowWrapper>{' '}
                  <PlaceLabel place="work" />
                </>
              }
            />
            <EmojiSeparator
              size="sm"
              customChildren={
                <>
                  <Code
                    css={css`
                      font-size: 0.8em;
                    `}
                  >{`{ custom: 'Gym' }`}</Code>{' '}
                  <ArrowWrapper>
                    <Emoji type="singleArrow" noVerticalTransform />
                  </ArrowWrapper>{' '}
                  <PlaceLabel place={{ custom: 'Gym' }} />
                </>
              }
              description={
                <>
                  <div
                    css={css`
                      margin-top: 0.5em;
                    `}
                  >
                    Transform <Code>Place</Code> into a place label UI
                  </div>
                </>
              }
            />
            <P>
              要做到这一点，我们想实现一个叫做placeToString()的函数，它的输入和输出如下
            </P>
            <Ul>
              <UlLi>输入应该是一个地方。例如：'work'。</UlLi>
              <UlLi>
                返回值应该是一个字符串（有一个表情符号），将用于标签用户界面
              </UlLi>
            </Ul>
            <P> 下面是示例:</P>
            <CodeBlock snippet={snippets.qnrh} />
            <P>
              然后，我们可以使用它的返回值来渲染地方标签UI：
              <PlaceLabel place="home" />, <PlaceLabel place="work" />,{' '}
              <PlaceLabel place={{ custom: 'Gym' }} />
              等等地方。例如，在React中，你可以定义一个功能组件并在其中调用placeToString()。
            </P>
            <P>
              现在让我们来实现placeToString()。下面是启动代码--你能弄清楚里面的内容吗？
            </P>
            <CodeBlock snippet={snippets.ybhj} />
          </>
        )
      },
      {
        title: <>小黄鸭的实现</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        I tried to implement <Code>placeToString()</Code>. Could
                        you take a look?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              Let’s see if Little Duckling’s implementation compiles.{' '}
              <Highlight>
                按下 <RunButtonText compile />!
              </Highlight>
            </P>
            <CodeBlock
              narrowText
              snippet={snippets.vgja}
              compile
              resultError
              result={`Property 'custom' does not exist on type '{ custom: string; } | "work"'.`}
              shouldHighlightResult={(lineIndex, tokenIndex) =>
                lineIndex === 7 && tokenIndex >= 7
              }
            />
            <P>
              编译失败了!
              TypeScript注意到，这里有一个逻辑错误。具体来说，在else里面，TypeScript知道place是
              <Code>'work'</Code>或者 <Code>{`{ custom: string }`}</Code>:
            </P>
            <CodeBlock
              narrowText
              snippet={snippets.dhor}
              shouldHighlight={lineIndex =>
                lineIndex === 5 || lineIndex === 8 || lineIndex === 12
              }
            />
            <P>情况是这样的:</P>
            <Ul>
              <UlLi>
                在else里面，<Code>place</Code> 不是<Code>'work'</Code>就是{' '}
                <Code>{`{ custom: string }`}</Code>
              </UlLi>
              <UlLi>
                而<Code>place.custom</Code>在 <Code>place</Code> 为
                <Code>'work'</Code>时是无效的。
              </UlLi>
            </Ul>
            <P>这就是为什么TypeScript给了你一个编译错误。</P>
            <CodeBlock
              snippet={snippets.eega}
              shouldHighlight={lineIndex => lineIndex === 2}
            />
            <P>
              当然，修复方法是添加
              <Code>else if (place === 'work')</Code>.{' '}
              <Highlight>
                按下 <RunButtonText compile />!
              </Highlight>
            </P>
            <CodeBlock
              narrowText
              snippet={snippets.szco}
              compile
              result={compileSuccess}
              shouldHighlight={(lineIndex, tokenIndex) =>
                (lineIndex === 4 && tokenIndex >= 3) ||
                lineIndex === 5 ||
                (lineIndex === 6 && tokenIndex <= 1)
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'chickEgg',
                  children: (
                    <>
                      <P>
                        哎呀！
                        <Emoji type="sweat" /> 我忘了检查！{' '}
                        <Code>place === 'work'</Code>!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>不用担心，小黄鸭! TypeScript能够及早发现这个错误。</P>
            <P>
              <strong>摘要:</strong>{' '}
              正如我们刚才所看到的，联合类型在与条件语句（如<Code>if/else</Code>
              ）结合时很强大
            </P>
            <UnionTypesSummary />
            <P>这就是全部! 让我们快速总结一下我们所学到的东西。</P>
          </>
        )
      },
      {
        color: 'green',
        subtitle: <>第三部分：小结:</>,
        title: <>联合类型非常强大</>,
        content: (
          <>
            <P>在本节中，我们学习了联合类型和可选属性：</P>
            <P>
              <strong>
                1. 我们可以使用语法A |
                B来创建一个联合类型，它表示一个要么是A要么是B的类型。
              </strong>
            </P>
            <CodeBlock
              narrowText
              caption={
                <>
                  <Code>Place</Code> can be either <Code>'home'</Code>,{' '}
                  <Code>'work'</Code>, or an object containing a string{' '}
                  <Code>custom</Code> property
                </>
              }
              snippet={snippets.umjt}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 0 && tokenIndex >= 6
              }
            />
            <P>
              <strong>
                2.
                我们可以在属性名称后面添加一个问号（？），使该属性成为可选属性。
              </strong>
            </P>
            <CodeBlock
              snippet={snippets.npog}
              shouldHighlight={(lineIndex, tokenIndex) =>
                lineIndex === 5 && tokenIndex <= 1
              }
            />
            <P>
              最后，当联合类型与条件语句（如if/else）相结合时，其功能非常强大。
            </P>
            <UnionTypesSummary />
            <P>
              联合类型是TypeScript的最佳理念之一。你应该经常使用它们。
              联合类型还有其他强大的功能（区分的联合，将它们与映射类型相结合，等等），这里不在介绍。
            </P>
          </>
        )
      },
      {
        title: <>Conclusion and next steps</>,
        content: (
          <>
            <EmojiSeparator emojis={['sparkles', 'chickEgg', 'sparkles']} />
            <P>
              感谢阅读！现在你应该对 TypeScript
              有了足够的了解，可以开始一个项目了。
            </P>
            <Ul>
              <UlLi>
                下一步要学什么：一旦你对 TypeScript
                更加熟悉，下一步就应该学习泛型。这里有一篇关于它的文章，名为
                <InternalLink href="/generics">
                  为放弃理解泛型的人提供的 TypeScript 泛型教程
                </InternalLink>
              </UlLi>
            </Ul>{' '}
          </>
        )
      }
    ]}
  />
)

export default Page
