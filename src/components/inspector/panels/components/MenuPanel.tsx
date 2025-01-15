import React, { memo } from 'react'
import { Select, Input } from '@chakra-ui/react'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'

const MenuPanel = () => {
  const { setValueFromEvent } = useForm()
  const placement = usePropsSelector('placement')

  return (
    <>
      <SwitchControl label="Show Menu" name="showpreview" />
      <SwitchControl label="isOpen" name="isOpen" />
      <SwitchControl label="Auto Select" name="autoSelect" />
      <SwitchControl label="Close On Blur" name="closeOnBlur" />
      <SwitchControl label="Close On Select" name="closeOnSelect" />
      <FormControl htmlFor="placement" label="Placement">
        <Select
          id="placement"
          onChange={setValueFromEvent}
          name="placement"
          size="sm"
          value={placement || ''}
        >
          <option>auto</option>
          <option>auto-end</option>
          <option>auto-start</option>
          <option>bottom</option>
          <option>bottom-end</option>
          <option>bottom-start</option>
          <option>top</option>
          <option>top-end</option>
          <option>top-start</option>
          <option>right</option>
          <option>right-end</option>
          <option>right-start</option>
          <option>left</option>
          <option>left-end</option>
          <option>left-start</option>
          <option>end</option>
          <option>end-end</option>
          <option>end-start</option>
          <option>start</option>
          <option>start-end</option>
          <option>start-start</option>
        </Select>
      </FormControl>
      <SwitchControl label="isLazy" name="isLazy" />
    </>
  )
}

export default memo(MenuPanel)
