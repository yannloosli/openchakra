import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from 'src/components/inspector/controls/FormControl'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'

const TableCaptionPanel = () => {
  const { setValueFromEvent } = useForm()

  const placement = usePropsSelector('placement')

  return (
    <>
      <ChildrenControl />

      <FormControl label="Placement" htmlFor="placement">
        <Select
          name="placement"
          id="placement"
          size="sm"
          value={placement || 'bottom'}
          onChange={setValueFromEvent}
        >
          <option>top</option>
          <option>bottom</option>
        </Select>
      </FormControl>
    </>
  )
}

export default memo(TableCaptionPanel)
