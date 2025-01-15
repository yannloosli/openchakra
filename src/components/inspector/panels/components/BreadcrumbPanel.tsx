import React, { memo } from 'react'
import TextControl from 'src/components/inspector/controls/TextControl'

const BreadcrumbPanel = () => {
  return (
    <>
      <TextControl name="separator" label="Separator" />
      <TextControl name="spacing" label="Spacing" />
    </>
  )
}

export default memo(BreadcrumbPanel)
