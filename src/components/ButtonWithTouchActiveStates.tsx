/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'

type ButtonWithTouchActiveStatesProps<
  T = JSX.IntrinsicElements['button']
> = T & {
  activeBackgroundColor: string
}

const ButtonWithTouchActiveStates = ({
  activeBackgroundColor,
  ...props
}: ButtonWithTouchActiveStatesProps) => {
  const [isActive, setIsActive] = useState(false)
  const activate = () => {
    if (!props.disabled) {
      // 注意：最初尝试在这里调用回调并执行 e.preventDefault()
      // 以防止鼠标点击事件发生，使回调在点击开始时触发而不是结束时触发，
      // 但这样做有 bug，所以最终移除了
      setIsActive(true)
    }
  }
  const deactivate = () => {
    setIsActive(false)
  }
  return (
    <button
      {...props}
      css={
        isActive &&
        css`
          background: ${activeBackgroundColor} !important;
        `
      }
      onTouchStart={activate}
      onTouchEnd={deactivate}
      onTouchCancel={deactivate}
    />
  )
}

export default ButtonWithTouchActiveStates
