import React, { memo } from 'react'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import IconControl from 'src/components/inspector/controls/IconControl'

const ListIconPanel = () => {
  return (
    <>
      <IconControl label="Icon" name="icon" />
      <ColorsControl name="color" label="Color" />
    </>
  )
}

export default memo(ListIconPanel)
