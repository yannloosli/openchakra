import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import { useDropComponent } from 'src/hooks/useDropComponent'
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { AccordionWhitelist } from 'src/utils/editor'

const acceptedTypes: ComponentType[] = ['AccordionItem']

const AccordionPreview: React.FC<IPreviewProps> = ({ component, index }) => {
  const { props, ref } = useInteractive(component, index, true)
  const { drop, isOver } = useDropComponent(component.id, index, acceptedTypes)

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }
  delete props['defaultIndex']

  return (
    <Box ref={drop(ref)} {...boxProps}>
      <Accordion {...props} defaultIndex={0}>
        {component.children.map((key: string, i) => (
          <ComponentPreview key={key} componentName={key} index={i} />
        ))}
      </Accordion>
    </Box>
  )
}

export const AccordionButtonPreview = ({ component, index }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, index, true)
  const { drop, isOver } = useDropComponent(
    component.id,
    index,
    AccordionWhitelist,
  )

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <AccordionButton ref={drop(ref)} {...props}>
      {component.children.map((key, i) => (
        <ComponentPreview key={key} componentName={key} index={i} />
      ))}
    </AccordionButton>
  )
}

export const AccordionItemPreview = ({ component, index }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, index, true)
  const { drop, isOver } = useDropComponent(
    component.id,
    index,
    ref,
    AccordionWhitelist,
  )

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box ref={drop(ref)} {...boxProps}>
      <AccordionItem {...props}>
        {component.children.map((key, i) => (
          <ComponentPreview key={key} componentName={key} index={i} />
        ))}
      </AccordionItem>
    </Box>
  )
}

export const AccordionPanelPreview = ({ component, index }: IPreviewProps) => {
  const { props, ref } = useInteractive(component, index, true)
  const { drop, isOver } = useDropComponent(
    component.id,
    index,
    AccordionWhitelist,
  )

  let boxProps: any = {}

  if (isOver) {
    props.bg = 'teal.50'
  }

  return props.showpreview ? (
    <Box ref={drop(ref)} {...boxProps}>
      <AccordionPanel {...props}>
        {component.children.map((key, i) => (
          <ComponentPreview key={key} componentName={key} index={i} />
        ))}
      </AccordionPanel>
    </Box>
  ) : (
    <></>
  )
}

export default AccordionPreview
