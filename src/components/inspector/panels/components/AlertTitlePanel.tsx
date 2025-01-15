import React, { memo } from 'react'
import SizeControl from 'src/components/inspector/controls/SizeControl'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'
import usePropsSelector from 'src/hooks/usePropsSelector'

const AlertTitlePanel = () => {
  const fontSize = usePropsSelector('fontSize')

  return (
    <>
      <ChildrenControl />
      <SizeControl name="fontSize" label="fontSize" value={fontSize} />
    </>
  )
}

export default memo(AlertTitlePanel)
