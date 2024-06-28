/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from 'src/components/Container'
import useTheme from 'src/hooks/useTheme'

const Footer = () => {
  const { fontSizes, spaces, colors } = useTheme()

  return (
    <Container
      cssOverrides={css`
        font-size: ${fontSizes(0.85)};
        margin-bottom: ${spaces(5)};
        color: ${colors('brown')};
      `}
    >
      希望以上文章帮助你更好掌握 TS
    </Container>
  )
}

export default Footer
