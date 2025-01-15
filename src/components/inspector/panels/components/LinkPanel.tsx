import React, { memo } from 'react'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import TextControl from 'src/components/inspector/controls/TextControl'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'

const LinkPanel = () => {
  return (
    <>
      <ChildrenControl />
      <TextControl name="href" label="Href" />
      <SwitchControl label="External" name="isExternal" />
    </>
  )
}

export default memo(LinkPanel)
