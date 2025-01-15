import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { Slider, Box } from '@chakra-ui/react'
import { useDropComponent } from 'src/hooks/useDropComponent'

const acceptedTypesStat: ComponentType[] = [
  'SliderTrack',
  'SliderThumb',
  'SliderMark',
]

export const SliderPreview = ({ component, index }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, index, true)
  const { drop, isOver } = useDropComponent(component.id, index, acceptedTypesStat)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box ref={drop(ref)} {...props}>
      <Slider {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} index={index} componentName={key} />
        ))}
      </Slider>
    </Box>
  )
}

export default SliderPreview
