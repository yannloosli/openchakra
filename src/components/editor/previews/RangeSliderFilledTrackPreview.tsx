import React from 'react'
import { useInteractive } from '~hooks/useInteractive'
import ComponentPreview from '~components/editor/ComponentPreview'
import { RangeSliderFilledTrack } from '@chakra-ui/react'
import { useDropComponent } from '~hooks/useDropComponent'

export const RangeSliderFilledTrackPreview = ({ component, index }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, index, false)
  const { drop, isOver } = useDropComponent(component.id, index, ref)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <RangeSliderFilledTrack ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} index={index} componentName={key} />
      ))}
    </RangeSliderFilledTrack>
  )
}

export default RangeSliderFilledTrackPreview
