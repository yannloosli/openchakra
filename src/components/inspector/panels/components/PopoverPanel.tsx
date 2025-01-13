import React, { memo } from 'react'
import { Select, Input } from '@chakra-ui/react'
import FormControl from '~components/inspector/controls/FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import SwitchControl from '~components/inspector/controls/SwitchControl'
import NumberControl from '~components/inspector/controls/NumberControl'

const PopoverPanel = () => {
  const { setValueFromEvent } = useForm()
  const trigger = usePropsSelector('trigger')
  const placement = usePropsSelector('placement')

  return (
    <>
      <SwitchControl label="Open" name="isOpen" />
      <SwitchControl label="Show Popover" name="showpreview" />
      <FormControl htmlFor="placement" label="Placement">
        <Select
          id="placement"
          onChange={setValueFromEvent}
          name="placement"
          size="sm"
          value={placement || ''}
        >
          <option>bottom</option>
          <option>top</option>
          <option>right</option>
          <option>auto</option>
          <option>left</option>
          <option>auto-start</option>
          <option>top-start</option>
          <option>right-start</option>
          <option>bottom-start</option>
          <option>left-start</option>
          <option>auto-end</option>
          <option>top-end</option>
          <option>right-end</option>
          <option>bottom-end</option>
          <option>left-end</option>
        </Select>
      </FormControl>
      <SwitchControl label="Is open" name="isOpen" />
      <SwitchControl label="Default Is Open" name="defaultIsOpen" />
      <FormControl label="trigger" htmlFor="trigger">
        <Select
          name="trigger"
          id="trigger"
          size="sm"
          value={trigger || 'click'}
          onChange={setValueFromEvent}
        >
          <option>hover</option>
          <option>click</option>
        </Select>
      </FormControl>
      <SwitchControl label="Return Focus On Close" name="returnFocusOnClose" />
      <SwitchControl label="Close On Blur" name="closeOnBlur" />
      <SwitchControl label="Close On Esc" name="closeOnEsc" />
      <NumberControl name="gutter" label="Gutter" />
      <SwitchControl label="Use Portal" name="usePortal" />
    </>
  )
}

export default memo(PopoverPanel)
