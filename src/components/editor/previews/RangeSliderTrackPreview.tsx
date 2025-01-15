import React from 'react'
import { RangeSliderTrack, Box } from '@chakra-ui/react'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'

const RangeSliderTrackPreview: React.FC<IPreviewProps> = ({ component, index }) => {
  const { props } = useInteractive(component, index, false)

  return (
    <RangeSliderTrack {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} index={index} componentName={key} />
      ))}
    </RangeSliderTrack>
  )
}

export default RangeSliderTrackPreview
