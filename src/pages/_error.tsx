import React from 'react'
import BubbleQuotes from 'src/components/BubbleQuotes'
import { P } from 'src/components/ContentTags'
import { siteTitle, siteOgImage } from 'src/lib/meta'
import Head from 'next/head'
import Page from 'src/components/Page'
import ArticleList from 'src/components/ArticleList'

const PageNotFound = () => {
  return (
    <Page index>
      <Head>
        <title key="title">Page Not Found</title>
        <meta property="og:title" content="Page Not Found" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Page Not Found" />
        <meta name="description" content="Page Not Found" />
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
                <P>
                  <strong>页面未找到！</strong>
                </P>
                <P>看看下面的文章吧：</P>
              </>
            )
          }
        ]}
      />
      <ArticleList />
    </Page>
  )
}

export default PageNotFound
