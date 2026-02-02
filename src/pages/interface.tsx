import React from 'react'
import PostPage from 'src/components/PostPage'
import { P, Code, Highlight, Ul, UlLi, Hr } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CodeBlock from 'src/components/CodeBlock'
import * as snippets from 'src/lib/snippets'
import RunButtonText from 'src/components/RunButtonText'

const Page = () => (
  <PostPage
    articleKey="interface"
    cards={[
      {
        title: <>TypeScript 接口（Interface）完全指南</>,
        content: (
          <>
            <P>
              在 TypeScript
              中，接口（Interface）是定义对象结构的强大工具。如果你已经学习了类型（Type），你可能会疑惑：接口和类型有什么区别？什么时候应该使用接口？
            </P>
            <P>
              本教程将通过实际例子帮助你理解接口的核心概念，以及它在实际开发中的应用场景。
            </P>
            <EmojiSeparator
              emojis={['sparkles', 'type', 'sparkles']}
              description={<>让我们一起学习 TypeScript 接口</>}
            />
          </>
        ),
        footer: {
          content: (
            <>
              <P>如果您已经熟悉接口，那么本教程中不会有太多新内容。</P>
            </>
          )
        }
      },
      {
        title: <>什么是接口？</>,
        content: (
          <>
            <P>
              接口是 TypeScript
              中用来定义对象形状（shape）的一种方式。它描述了一个对象应该有哪些属性和方法。
            </P>
            <P>让我们从一个简单的例子开始：</P>
            <CodeBlock snippet={snippets.ifBasic} />
            <P>
              在这个例子中，我们定义了一个 <Code>User</Code>{' '}
              接口，它要求对象必须有 <Code>name</Code> 和 <Code>age</Code>{' '}
              两个属性。
            </P>
            <P>
              现在让我们创建一个符合这个接口的对象。
              <Highlight>
                按下 <RunButtonText compile /> 按钮
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ifBasicUsage}
              compile
              result="编译成功！"
            />
            <P>
              编译成功了！因为 <Code>user</Code> 对象符合 <Code>User</Code>{' '}
              接口的定义。
            </P>
          </>
        )
      },
      {
        title: <>接口 vs 类型别名</>,
        content: (
          <>
            <P>
              你可能注意到，接口和类型别名（Type
              Alias）看起来很相似。让我们比较一下：
            </P>
            <CodeBlock snippet={snippets.ifVsType} />
            <P>
              对于简单的对象类型，接口和类型别名几乎可以互换使用。但它们有一些重要的区别：
            </P>
            <Ul>
              <UlLi>
                <strong>接口可以被扩展（extends）</strong> -
                这是接口最强大的特性之一
              </UlLi>
              <UlLi>
                <strong>接口可以被声明合并</strong> - 同名接口会自动合并
              </UlLi>
              <UlLi>
                <strong>类型别名更灵活</strong> - 可以表示联合类型、交叉类型等
              </UlLi>
            </Ul>
            <P>接下来我们会详细探讨这些区别。</P>
          </>
        )
      },
      {
        title: <>接口扩展（Interface Extension）</>,
        content: (
          <>
            <P>
              接口最强大的特性之一就是可以扩展其他接口。这让我们可以基于现有接口创建新接口，避免重复代码。
            </P>
            <CodeBlock snippet={snippets.ifExtends} />
            <P>
              在这个例子中，<Code>Employee</Code> 接口扩展了 <Code>Person</Code>{' '}
              接口，继承了它的所有属性，并添加了新的 <Code>employeeId</Code>{' '}
              属性。
            </P>
            <P>
              让我们试试使用这个扩展的接口：
              <Highlight>
                按下 <RunButtonText compile />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ifExtendsUsage}
              compile
              result="编译成功！"
            />
            <P>你也可以同时扩展多个接口：</P>
            <CodeBlock snippet={snippets.ifMultipleExtends} />
          </>
        )
      },
      {
        title: <>可选属性</>,
        content: (
          <>
            <P>
              有时候，我们希望某些属性是可选的。在接口中，我们可以使用{' '}
              <Code>?</Code> 来标记可选属性。
            </P>
            <CodeBlock snippet={snippets.ifOptional} />
            <P>
              在这个例子中，<Code>email</Code> 是可选的，所以创建{' '}
              <Code>Product</Code> 对象时可以不提供这个属性。
            </P>
            <P>
              让我们看看两种情况：
              <Highlight>
                按下 <RunButtonText compile />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ifOptionalUsage}
              compile
              result="编译成功！"
            />
            <P>
              两种情况都编译成功了，因为 <Code>description</Code> 是可选的。
            </P>
          </>
        )
      },
      {
        title: <>只读属性</>,
        content: (
          <>
            <P>
              如果你想让某个属性在创建后不能被修改，可以使用{' '}
              <Code>readonly</Code> 关键字。
            </P>
            <CodeBlock snippet={snippets.ifReadonly} />
            <P>
              现在让我们尝试修改只读属性，看看会发生什么：
              <Highlight>
                按下 <RunButtonText compile />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ifReadonlyError}
              compile
              resultError
              result="Cannot assign to 'id' because it is a read-only property."
            />
            <P>
              编译失败了！TypeScript{' '}
              阻止了我们修改只读属性，这有助于防止意外的数据修改。
            </P>
          </>
        )
      },
      {
        title: <>函数类型</>,
        content: (
          <>
            <P>
              接口不仅可以描述对象的属性，还可以描述函数。让我们看看如何在接口中定义函数类型：
            </P>
            <CodeBlock snippet={snippets.ifFunction} />
            <P>
              在这个例子中，<Code>Calculator</Code> 接口定义了一个{' '}
              <Code>calculate</Code> 方法，它接受两个数字参数并返回一个数字。
            </P>
            <P>
              让我们实现这个接口：
              <Highlight>
                按下 <RunButtonText />
              </Highlight>
            </P>
            <CodeBlock snippet={snippets.ifFunctionUsage} result="15" />
          </>
        )
      },
      {
        title: <>索引签名（Index Signatures）</>,
        content: (
          <>
            <P>
              有时候，我们不知道对象会有哪些具体的属性名，但知道属性的类型。这时可以使用索引签名。
            </P>
            <CodeBlock snippet={snippets.ifIndexSignature} />
            <P>
              在这个例子中，<Code>StringDictionary</Code>{' '}
              可以有任意数量的字符串属性，每个属性的值都必须是字符串。
            </P>
            <P>
              让我们使用这个接口：
              <Highlight>
                按下 <RunButtonText compile />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ifIndexSignatureUsage}
              compile
              result="编译成功！"
            />
            <P>你也可以结合固定属性和索引签名：</P>
            <CodeBlock snippet={snippets.ifMixedSignature} />
          </>
        )
      },
      {
        title: <>声明合并（Declaration Merging）</>,
        content: (
          <>
            <P>
              接口有一个独特的特性：如果你声明了两个同名的接口，TypeScript
              会自动将它们合并。
            </P>
            <CodeBlock snippet={snippets.ifMerging} />
            <P>
              在这个例子中，两个 <Code>Window</Code>{' '}
              接口声明会被合并成一个，包含所有属性。
            </P>
            <P>
              这个特性在扩展第三方库的类型定义时特别有用。让我们看看实际使用：
              <Highlight>
                按下 <RunButtonText compile />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ifMergingUsage}
              compile
              result="编译成功！"
            />
            <P>
              <strong>注意：</strong>{' '}
              类型别名不支持声明合并，这是接口和类型别名的一个重要区别。
            </P>
          </>
        )
      },
      {
        title: <>实现接口（Implementing Interfaces）</>,
        content: (
          <>
            <P>
              类（Class）可以实现（implement）接口，这确保类符合接口定义的结构。
            </P>
            <CodeBlock snippet={snippets.ifImplements} />
            <P>
              在这个例子中，<Code>Dog</Code> 类实现了 <Code>Animal</Code>{' '}
              接口，必须包含 <Code>name</Code> 属性和 <Code>makeSound</Code>{' '}
              方法。
            </P>
            <P>
              让我们看看如果类没有正确实现接口会发生什么：
              <Highlight>
                按下 <RunButtonText compile />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ifImplementsError}
              compile
              resultError
              result="Class 'Cat' incorrectly implements interface 'Animal'. Property 'makeSound' is missing in type 'Cat'."
            />
            <P>编译失败了！TypeScript 确保类正确实现了接口的所有成员。</P>
          </>
        )
      },
      {
        title: <>接口与泛型</>,
        content: (
          <>
            <P>接口可以和泛型结合使用，创建更灵活、可重用的类型定义。</P>
            <CodeBlock snippet={snippets.ifGeneric} />
            <P>
              在这个例子中，<Code>Response</Code>{' '}
              是一个泛型接口，可以用于不同类型的数据响应。
            </P>
            <P>
              让我们使用这个泛型接口：
              <Highlight>
                按下 <RunButtonText />
              </Highlight>
            </P>
            <CodeBlock
              snippet={snippets.ifGenericUsage}
              result={
                <>
                  {`{ success: true, data: { id: 1, name: 'Alice' } }`}
                  <br />
                  {`{ success: false, error: 'Not found' }`}
                </>
              }
            />
            <P>泛型接口让我们可以创建类型安全且灵活的代码结构。</P>
          </>
        )
      },
      {
        color: 'green',
        title: '实战建议：何时使用接口？',
        content: (
          <>
            <P>
              在实际开发中，选择使用接口还是类型别名常常让人困惑。这里有一些实用建议：
            </P>
            <P>
              <strong>优先使用接口的场景：</strong>
            </P>
            <Ul>
              <UlLi>
                <strong>定义对象的形状</strong> - 特别是公共 API 或库的接口
              </UlLi>
              <UlLi>
                <strong>需要扩展或继承</strong> - 接口的 extends 语法更清晰
              </UlLi>
              <UlLi>
                <strong>类的实现</strong> - 类只能 implement 接口，不能
                implement 类型别名
              </UlLi>
              <UlLi>
                <strong>需要声明合并</strong> - 扩展第三方库类型时很有用
              </UlLi>
            </Ul>
            <P>
              <strong>优先使用类型别名的场景：</strong>
            </P>
            <Ul>
              <UlLi>
                <strong>联合类型</strong> - 如{' '}
                <Code>type Status = 'pending' | 'success' | 'error'</Code>
              </UlLi>
              <UlLi>
                <strong>交叉类型</strong> - 如 <Code>type A = B & C</Code>
              </UlLi>
              <UlLi>
                <strong>映射类型</strong> - 如 <Code>Readonly&lt;T&gt;</Code>、
                <Code>Partial&lt;T&gt;</Code>
              </UlLi>
              <UlLi>
                <strong>元组类型</strong> - 如{' '}
                <Code>type Point = [number, number]</Code>
              </UlLi>
            </Ul>
            <Hr />
            <P>
              <strong>团队约定：</strong>{' '}
              许多团队选择统一使用接口或类型别名来保持代码风格一致。最重要的是在项目中保持一致性。
            </P>
          </>
        )
      },
      {
        title: <>总结</>,
        content: (
          <>
            <EmojiSeparator emojis={['sparkles', 'check', 'sparkles']} />
            <P>恭喜你！现在你已经掌握了 TypeScript 接口的核心概念：</P>
            <Ul>
              <UlLi>接口的基本定义和使用</UlLi>
              <UlLi>接口扩展和多重继承</UlLi>
              <UlLi>可选属性和只读属性</UlLi>
              <UlLi>函数类型和索引签名</UlLi>
              <UlLi>声明合并的特性</UlLi>
              <UlLi>类实现接口</UlLi>
              <UlLi>泛型接口的使用</UlLi>
            </Ul>
            <P>
              接口是 TypeScript{' '}
              类型系统的重要组成部分，掌握它将帮助你编写更安全、更易维护的代码。
            </P>
            <P>继续实践，在实际项目中应用这些知识，你会越来越熟练！</P>
          </>
        )
      }
    ]}
  />
)

export default Page
