import React from 'react'
import { Select } from '@chakra-ui/react'
import { useForm } from 'src/hooks/useForm'
import SizeControl from 'src/components/inspector/controls/SizeControl'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import FormControl from 'src/components/inspector/controls/FormControl'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'

const TagPanel = () => {
  const { setValueFromEvent } = useForm()

  const size = usePropsSelector('size')
  const variant = usePropsSelector('variant')
  const rounded = usePropsSelector('rounded')

  return (
    <>
      <SizeControl
        options={['sm', 'md', 'lg']}
        name="size"
        label="Size"
        value={size}
      />
      <FormControl htmlFor="variant" label="Variant">
        <Select
          id="variant"
          onChange={setValueFromEvent}
          name="variant"
          size="sm"
          value={variant || ''}
        >
          <option>solid</option>
          <option>outline</option>
          <option>subtle</option>
        </Select>
      </FormControl>

      <ColorsControl label="Color Scheme" name="colorScheme" />

      <SizeControl
        name="rounded"
        label="Border radius"
        value={rounded}
        options={['sm', 'md', 'lg', 'full']}
      />

      <SwitchControl label="Inline" name="isInline" />
    </>
  )
}

export default TagPanel
