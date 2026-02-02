/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'

const RunButtonText = ({ compile }: { compile?: boolean }) => (
  <span
    css={css`
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    `}
  >
    <span
      css={css`
        display: inline-block;
        animation: bounce 1s ease-in-out infinite;
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
      `}
    >
      👆
    </span>
    {compile ? '点击编译' : '点击运行'} <Emoji type="run" />
  </span>
)

export default RunButtonText
