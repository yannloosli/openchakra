import React, { memo } from 'react'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import InputSuggestion from 'src/components/inspector/inputs/InputSuggestion'
import { theme } from '@chakra-ui/react'
import { ComboboxOption } from '@reach/combobox'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'
import IconControl from 'src/components/inspector/controls/IconControl'

const IconPanel = () => {
  const { setValueFromEvent } = useForm()

  const boxSize = usePropsSelector('boxSize')

  return (
    <>
      <IconControl label="Icon" name="icon" />

      <FormControl label="Size" htmlFor="boxSize">
        <InputSuggestion
          value={boxSize}
          handleChange={setValueFromEvent}
          name="boxSize"
        >
          {Object.keys(theme.sizes).map((option, index) => (
            <ComboboxOption key={index} value={option} />
          ))}
        </InputSuggestion>
      </FormControl>

      <ColorsControl withFullColor label="Color" name="color" enableHues />
    </>
  )
}

export default memo(IconPanel)
