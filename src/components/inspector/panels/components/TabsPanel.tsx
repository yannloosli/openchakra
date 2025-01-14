import React from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from "src/components/inspector/controls/FormControl"
import { useForm } from "src/hooks/useForm"
import ColorsControl from "src/components/inspector/controls/ColorsControl"
import usePropsSelector from "src/hooks/usePropsSelector"
import SwitchControl from "src/components/inspector/controls/SwitchControl"
import TextControl from "src/components/inspector/controls/TextControl"

const TabsPanel = () => {
  const { setValueFromEvent } = useForm()

  const variant = usePropsSelector('variant')
  const orientation = usePropsSelector('orientation')
  const size = usePropsSelector('size')
  const align = usePropsSelector('align')

  return (
    <>
      <SwitchControl label="Manual" name="isManual" />
      <SwitchControl label="Fitted" name="isFitted" />
      <SwitchControl label="Lazy" name="isLazy" />

      <FormControl label="Variant" htmlFor="variant">
        <Select
          name="variant"
          id="variant"
          size="sm"
          value={variant || ''}
          onChange={setValueFromEvent}
        >
          <option>line</option>
          <option>enclosed</option>
          <option>enclosed-colored</option>
          <option>soft-rounded</option>
          <option>solid-rounded</option>
          <option>unstyled</option>
        </Select>
      </FormControl>

      <FormControl label="Align" htmlFor="align">
        <Select
          name="align"
          id="align"
          size="sm"
          value={align || ''}
          onChange={setValueFromEvent}
        >
          <option>center</option>
          <option>end</option>
          <option>start</option>
        </Select>
      </FormControl>

      <FormControl label="Orientation" htmlFor="orientation">
        <Select
          name="orientation"
          id="orientation"
          size="sm"
          value={orientation || ''}
          onChange={setValueFromEvent}
        >
          <option>horizontal</option>
          <option>vertical</option>
        </Select>
      </FormControl>

      <FormControl label="Size" htmlFor="size">
        <Select
          name="size"
          id="size"
          size="sm"
          value={size || ''}
          onChange={setValueFromEvent}
        >
          <option>sm</option>
          <option>md</option>
          <option>lg</option>
        </Select>
      </FormControl>
      <ColorsControl label="Color Scheme" name="colorScheme" />
      <TextControl name="defaultIndex" label="Default Index" />
    </>
  )
}

export default TabsPanel
