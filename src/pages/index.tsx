import React from 'react'
import BubbleQuotes from 'src/components/BubbleQuotes'
import { P } from 'src/components/ContentTags'
import { siteTitle, baseUrl, siteDescription, siteOgImage } from 'src/lib/meta'
import Head from 'next/head'
import Page from 'src/components/Page'
import ArticleList from 'src/components/ArticleList'

export const FirstParagraph = () => (
  <>
    <P>
      <strong>你好!</strong> 你好！这个教程是为了帮助初学者程序员学习
      TypeScript。我的教程可能对学习 TypeScript 的经验丰富的程序员没那么有用。
    </P>
    <P>
      <strong> 为什么要针对初学者程序员？</strong>随着 TypeScript
      越来越流行，越来越多的初学者程序员将会学习它。但是，我注意到许多现有的教程对初学者程序员来说并不那么友好。这是我尝试提供一种更友好的替代方案。
    </P>
  </>
)

const Index = () => {
  return (
    <Page index>
      <Head>
        <title key="title">{siteTitle}</title>
        <meta property="og:title" content={siteTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={baseUrl} />
        <meta property="og:description" content={siteDescription} />
        <meta name="description" content={siteDescription} />
        <meta property="og:image" content={siteOgImage} />
      </Head>
      <BubbleQuotes
        size="lg"
        quotes={[
          {
            type: 'bird',
            backgroundColor: 'lightYellow1',
            children: (
              <>
                <FirstParagraph />
              </>
            )
          }
        ]}
      />
      <ArticleList />
    </Page>
  )
}

export default Index
