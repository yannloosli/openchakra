import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { SliderThumb, Box } from '@chakra-ui/react'

export const SliderThumbPreview = ({ component, index }: IPreviewProps) => {
  const { props } = useInteractive(component, index, false)

  return (
    <Box display="inline-block" {...props}>
      <SliderThumb {...component.props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} index={index} componentName={key} />
        ))}
      </SliderThumb>
    </Box>
  )
}

export default SliderThumbPreview
