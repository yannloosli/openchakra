import React, { memo } from 'react'
import TextControl from 'src/components/inspector/controls/TextControl'

const GridItemPanel = () => {
  return (
    <>
      <TextControl label="Area" name="area" />
      <TextControl label="Column Span" name="colSpan" />
      <TextControl label="Column Start" name="colStart" />
      <TextControl label="Column End" name="colEnd" />
      <TextControl label="Row Span" name="rowSpan" />
      <TextControl label="Row Start" name="rowStart" />
      <TextControl label="Row End" name="rowEnd" />
    </>
  )
}

export default memo(GridItemPanel)
