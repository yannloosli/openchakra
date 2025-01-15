import React, { memo } from 'react'
import TextControl from 'src/components/inspector/controls/TextControl'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'

const SliderMarkPanel = () => {
  return (
    <>
      <ChildrenControl />
      <TextControl name="value" label="Value" />
    </>
  )
}

export default memo(SliderMarkPanel)
