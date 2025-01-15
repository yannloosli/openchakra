import React, { memo } from 'react'
import { Select, Input } from '@chakra-ui/react'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SizeControl from 'src/components/inspector/controls/SizeControl'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'
import IconControl from 'src/components/inspector/controls/IconControl'

const MenuButtonPanel = () => {
  const { setValueFromEvent } = useForm()
  const ast = usePropsSelector('as')
  const size = usePropsSelector('size')
  const variant = usePropsSelector('variant')

  return (
    <>
      <FormControl htmlFor="as" label="as">
        <Select
          id="as"
          onChange={setValueFromEvent}
          name="as"
          size="sm"
          value={ast || ''}
        >
          <option>Button</option>
          <option>IconButton</option>
        </Select>
      </FormControl>
      <SizeControl name="size" label="Size" value={size} />

      <FormControl htmlFor="variant" label="Variant">
        <Select
          id="variant"
          onChange={setValueFromEvent}
          name="variant"
          size="sm"
          value={variant || ''}
        >
          <option>outline</option>
          <option>ghost</option>
          <option>unstyled</option>
          <option>link</option>
          <option>solid</option>
        </Select>
      </FormControl>
      <ColorsControl label="Color Scheme" name="colorScheme" />
      {ast === 'Button' ? (
        <>
          <ChildrenControl />
          <IconControl label="Left icon" name="leftIcon" />
          <IconControl label="Right icon" name="rightIcon" />
        </>
      ) : (
        <>
          <IconControl name="icon" label="Icon" />
          <SwitchControl label="Round" name="isRound" />
        </>
      )}
    </>
  )
}

export default memo(MenuButtonPanel)
