import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import usePropsSelector from 'src/hooks/usePropsSelector'

const DividerPanel = () => {
  const { setValueFromEvent } = useForm()
  const orientation = usePropsSelector('orientation')

  return (
    <>
      <FormControl label="Orientation" htmlFor="orientation">
        <Select
          name="orientation"
          id="orientation"
          size="sm"
          value={orientation || 'horizontal'}
          onChange={setValueFromEvent}
        >
          <option>horizontal</option>
          <option>vertical</option>
        </Select>
      </FormControl>
      <ColorsControl
        withFullColor
        label="Border color"
        name="borderColor"
        enableHues
      />
    </>
  )
}

export default memo(DividerPanel)
