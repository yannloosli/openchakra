import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { RangeSliderThumb, Box } from '@chakra-ui/react'

export const RangeSliderThumbPreview = ({ component, index }: IPreviewProps) => {
  const { props } = useInteractive(component, index, false)

  return (
    <Box display="inline-block" {...props}>
      <RangeSliderThumb {...component.props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} index={index} componentName={key} />
        ))}
      </RangeSliderThumb>
    </Box>
  )
}

export default RangeSliderThumbPreview
