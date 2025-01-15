import React from 'react'
import { Box } from '@chakra-ui/react'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'

const ConditionalPreview: React.FC<IPreviewProps> = ({ component, index }) => {
  const acceptedTypes = ['Box'] as ComponentType[]
  const { props, ref } = useInteractive(component, index)
  const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypes)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box pos="relative" {...props} ref={drop(ref)}>
      {props.show === 'show-both' || props.show === undefined ? (
        <>
          <ComponentPreview index={index} componentName={component?.children[0]} />
          <ComponentPreview index={index} componentName={component?.children[1]} />
        </>
      ) : props.show === 'show-true' ? (
        <ComponentPreview index={index} componentName={component?.children[0]} />
      ) : (
        <ComponentPreview index={index} componentName={component?.children[1]} />
      )}
    </Box>
  )
}

export default ConditionalPreview
