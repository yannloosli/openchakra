import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { RangeSlider } from '@chakra-ui/react'
import { useDropComponent } from 'src/hooks/useDropComponent'

const acceptedTypesStat: ComponentType[] = [
  'RangeSliderTrack',
  'RangeSliderThumb',
]

export const RangeSliderPreview = ({ component, index }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, index)
  const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesStat)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <RangeSlider ref={drop(ref)} {...props} p={0}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} index={index} componentName={key} />
      ))}
    </RangeSlider>
  )
}

export default RangeSliderPreview
