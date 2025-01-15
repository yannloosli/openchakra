import React from 'react'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { Tooltip, Box } from '@chakra-ui/react'

interface Props {
    component: IComponent
    index: number
}

const TooltipPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return component.children.length > 0 ? (
        <Tooltip ref={drop(ref)} index={index} {...props}>
            <span>
                <ComponentPreview componentName={component.children[0]} index={index} />
            </span>
        </Tooltip>
    ) : (
        <Box pos="relative" ref={drop(ref)} {...props}></Box>
    )
}

export default TooltipPreview
