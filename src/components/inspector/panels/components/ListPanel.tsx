import React, { memo } from 'react'
import FormControl from 'src/components/inspector/controls/FormControl'
import { Select } from '@chakra-ui/react'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'

const CodePanel = () => {
  const { setValueFromEvent } = useForm()
  const styleType = usePropsSelector('styleType')

  return (
    <>
      <FormControl label="Style type" htmlFor="styleType">
        <Select
          name="styleType"
          id="styleType"
          size="sm"
          value={styleType || 'md'}
          onChange={setValueFromEvent}
        >
          <option>none</option>
          <option>disc</option>
          <option>circle</option>
          <option>square</option>
          <option>decimal</option>
          <option>georgian</option>
          <option>cjk-ideographic</option>
          <option>kannada</option>
        </Select>
      </FormControl>
    </>
  )
}

export default memo(CodePanel)
