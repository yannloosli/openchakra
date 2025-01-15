import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'

import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'

const BadgePanel = () => {
  const { setValueFromEvent } = useForm()
  const variant = usePropsSelector('variant')

  return (
    <>
      <ChildrenControl />

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
    </>
  )
}

export default memo(BadgePanel)
