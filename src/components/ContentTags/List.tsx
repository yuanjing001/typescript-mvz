/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import useTheme from 'src/hooks/useTheme'

const commonListCss = css`
  padding: 0;
  list-style: none;
  list-style-image: none;
`

const commonListItemCss = css`
  &::before {
    /* 样式取自 medium.com，
    移除了 position: absolute 因为它无法与 emoji 垂直对齐 */
    display: inline-block;
    width: 3.5em;
    margin-left: -3.5em;
    text-align: right;
    box-sizing: border-box;
    vertical-align: top;
  }
`

// https://stackoverflow.com/a/52173021/114157
type DefaultUlProps = JSX.IntrinsicElements['ul']
interface UlProps extends DefaultUlProps {
  size?: 'md' | 'lg'
}

export const Ul = ({ size = 'md', ...props }: UlProps) => {
  const { spaces } = useTheme()
  return (
    <ul
      {...props}
      css={[
        commonListCss,
        size === 'lg' &&
          css`
            margin: ${spaces(1.75)} 0;
          `
      ]}
    />
  )
}

type DefaultOlProps = JSX.IntrinsicElements['ol']
interface OlProps extends DefaultOlProps {
  size?: 'md' | 'lg'
}

export const Ol = ({ size, ...props }: OlProps) => {
  const { spaces } = useTheme()
  return (
    <ol
      {...props}
      css={[
        commonListCss,
        size === 'lg' &&
          css`
            margin: ${spaces(1.75)} 0;
          `,
        css`
          counter-reset: text;
        `
      ]}
    />
  )
}

export const UlLi = ({ ...props }: JSX.IntrinsicElements['li']) => {
  return (
    <li
      {...props}
      css={[
        commonListItemCss,
        css`
          margin: 0 0 ${2 / 3}em 1em;
          &::before {
            padding-right: 0.6em;
            padding-top: 0.2em;
            content: '•';
            font-size: 0.8em;
          }
        `
      ]}
    />
  )
}

export const OlLi = (props: JSX.IntrinsicElements['li']) => {
  return (
    <li
      {...props}
      css={[
        commonListItemCss,
        css`
          margin: 0 0 ${2 / 3}em 1.4em;
          &::before {
            padding-right: 0.4em;
            counter-increment: text;
            content: counter(text) '.';
          }
        `
      ]}
    />
  )
}
