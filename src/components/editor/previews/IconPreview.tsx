import React from 'react'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'
import icons from 'src/iconsList'
import { Box } from '@chakra-ui/react'

const IconPreview = ({ component, index }: IPreviewProps) => {
  const {
    props: { color, boxSize, icon, ...props },
    ref,
  } = useInteractive(component, index, true)
  const { isOver } = useDropComponent(component.id, index, ref)

  if (isOver) {
    props.bg = 'teal.50'
  }

  if (icon) {
    if (Object.keys(icons).includes(icon)) {
      const Icon = icons[icon as keyof typeof icons]

      return (
        <Box {...props} index={index} display="inline">
          <Icon path="" color={color} boxSize={boxSize} />
        </Box>
      )
    }

    return null
  }

  return null
}

export default IconPreview
