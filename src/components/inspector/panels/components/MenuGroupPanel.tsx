import React, { memo } from 'react'
import TextControl from 'src/components/inspector/controls/TextControl'

const MenuGroupPanel = () => {
  return (
    <>
      <TextControl name="title" label="Title" />
    </>
  )
}

export default memo(MenuGroupPanel)
