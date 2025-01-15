import React from 'react'
import { Popover, PopoverTrigger, Box, PopoverContent } from '@chakra-ui/react'
import { useInteractive } from '../../../hooks/useInteractive'
import { useDropComponent } from '../../../hooks/useDropComponent'
import ComponentPreview from '../ComponentPreview'
import { AccordionWhitelist } from '../../../utils/editor'
import index from 'src/core/models'

const acceptedTypes: ComponentType[] = [
    'PopoverTrigger',
    'PopoverContent',
    'Button',
]

const PopoverPreview: React.FC<IPreviewProps> = ({ component, index }) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypes)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Box ref={drop(ref)} {...props}>
            <Popover {...props}>
                {component.children.map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
            </Popover>
        </Box>
    )
}

export const PopoverTriggerPreview: React.FC<{ component: IComponent, index: number }> = ({
    component,
    index
}) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, AccordionWhitelist)
    const children = component.children

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <PopoverTrigger ref={drop(ref)} {...props}>
            {!children.length ? (
                <Box />
            ) : (
                <Box>
                    <ComponentPreview index={index} componentName={children[0]} />
                </Box>
            )}
        </PopoverTrigger>
    )
}

export const PopoverContentPreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, AccordionWhitelist)

    if (isOver) {
        props.bg = 'teal.50'
    }

    const boxProps: any = {}

    return (
        <Box {...boxProps} ref={drop(ref)}>
            <PopoverContent {...props}>
                {component.children.map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
            </PopoverContent>
        </Box>
    )
}

export default PopoverPreview
