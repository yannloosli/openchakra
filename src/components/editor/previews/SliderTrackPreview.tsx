import React from 'react'
import { SliderTrack, Box } from '@chakra-ui/react'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'

const SliderTrackPreview: React.FC<IPreviewProps> = ({ component, index }) => {
  const { props } = useInteractive(component, index, false)

  return (
    <SliderTrack {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} index={index} componentName={key} />
      ))}
    </SliderTrack>
  )
}

export default SliderTrackPreview
