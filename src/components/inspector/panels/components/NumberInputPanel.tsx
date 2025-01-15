import React, { memo } from 'react'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SizeControl from 'src/components/inspector/controls/SizeControl'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import TextControl from 'src/components/inspector/controls/TextControl'
import NumberControl from 'src/components/inspector/controls/NumberControl'

const NumberInputPanel = () => {
  const size = usePropsSelector('size')

  return (
    <>
      <SizeControl label="Size" options={['sm', 'md', 'lg']} value={size} />
      <TextControl label="Value" name="value" />
      <NumberControl name="step" label="Step" />
      <NumberControl name="precision" label="Precision" />

      <SwitchControl label="Invalid" name="isInvalid" />
      <SwitchControl label="Read Only" name="isReadOnly" />
      <SwitchControl label="Width" name="width" />
    </>
  )
}

export default memo(NumberInputPanel)
