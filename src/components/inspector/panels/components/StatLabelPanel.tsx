import React, { memo } from 'react'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'

const StatLabelPanel = () => {
  return (
    <>
      <ChildrenControl />
    </>
  )
}

export default memo(StatLabelPanel)
