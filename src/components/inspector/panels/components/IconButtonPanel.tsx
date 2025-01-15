import React, { memo } from 'react'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import VariantsControl from 'src/components/inspector/controls/VariantsControl'
import SizeControl from 'src/components/inspector/controls/SizeControl'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import IconControl from 'src/components/inspector/controls/IconControl'

const IconButtonPanel = () => {
  const size = usePropsSelector('size')
  const variant = usePropsSelector('variant')

  return (
    <>
      <IconControl name="icon" label="Icon" />
      <SizeControl name="size" label="Size" value={size} />
      <ColorsControl label="Color" name="colorScheme" />
      <SwitchControl label="Loading" name="isLoading" />
      <SwitchControl label="Round" name="isRound" />
      <VariantsControl label="Variant" name="variant" value={variant} />
    </>
  )
}

export default memo(IconButtonPanel)
