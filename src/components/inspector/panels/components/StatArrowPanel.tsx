import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'

const StatArrowPanel = () => {
  const { setValueFromEvent } = useForm()
  const type = usePropsSelector('type')

  return (
    <>
      <FormControl label="Type" htmlFor="type">
        <Select
          name="type"
          id="type"
          size="sm"
          value={type || ''}
          onChange={setValueFromEvent}
        >
          <option>increase</option>
          <option>decrease</option>
        </Select>
      </FormControl>
    </>
  )
}

export default memo(StatArrowPanel)
