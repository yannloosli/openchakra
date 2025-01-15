import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import { Box, Highlight } from '@chakra-ui/react'

const HighlightPreview: React.FC<IPreviewProps> = ({ component, index }) => {
  const { props, ref } = useInteractive(component, index, true)

  return (
    <Box {...props} ref={ref}>
      <Highlight {...component.props} styles={component.props} />
    </Box>
  )
}

export default HighlightPreview
