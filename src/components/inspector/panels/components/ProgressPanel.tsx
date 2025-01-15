import React from 'react'
import {
  SliderTrack,
  SliderFilledTrack,
  Slider,
  SliderThumb,
} from '@chakra-ui/react'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import SizeControl from 'src/components/inspector/controls/SizeControl'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'

const ProgressPanel = () => {
  const { setValue } = useForm()

  const value = usePropsSelector('value')
  const size = usePropsSelector('size')

  return (
    <>
      <FormControl label="Value">
        <Slider
          onChange={value => setValue('value', value)}
          min={0}
          max={100}
          step={1}
          defaultValue={value}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>

      <SwitchControl label="Has stripe" name="hasStripe" />
      <SwitchControl label="Is animated" name="isAnimated" />

      <ColorsControl label="Color Scheme" name="colorScheme" />

      <SizeControl label="Size" options={['sm', 'md', 'lg']} value={size} />
    </>
  )
}

export default ProgressPanel
