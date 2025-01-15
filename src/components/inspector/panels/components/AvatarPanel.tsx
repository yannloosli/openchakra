import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import TextControl from 'src/components/inspector/controls/TextControl'

const AvatarPanel = () => {
  const { setValueFromEvent } = useForm()
  const size = usePropsSelector('size')

  return (
    <>
      <FormControl label="Size" htmlFor="size">
        <Select
          name="size"
          id="size"
          size="sm"
          value={size || ''}
          onChange={setValueFromEvent}
        >
          <option>2xs</option>
          <option>xs</option>
          <option>sm</option>
          <option>md</option>
          <option>lg</option>
          <option>xl</option>
          <option>2xl</option>
        </Select>
      </FormControl>

      <SwitchControl label="Show border" name="showBorder" />
      <TextControl name="name" label="Name" />
      <TextControl name="src" label="Source" />
    </>
  )
}

export default memo(AvatarPanel)
