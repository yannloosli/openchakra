import React from 'react'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Box,
} from '@chakra-ui/react'

interface Props {
    component: IComponent,
    index: number
}

const PopoverPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }
    let prop = { ...props }
    delete prop['isOpen']
    return (
        <Popover isOpen={props.showpreview} ref={drop(ref)} index={index} {...prop}>
            <div>
                {component.children
                    .filter((key: string, index: number) => index === 0)
                    .map((key: string) => (
                        <ComponentPreview key={key} index={index} componentName={key} />
                    ))}
            </div>
            {component.children
                .filter((key: string, index: number) => index !== 0)
                .map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
        </Popover>
    )
}

export const PopoverCloseButtonPreview = ({ component, index }: Props) => {
    const {
        props: { icon, ...props },
        ref,
    } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return <PopoverCloseButton ref={ref} {...props} />
}

export const PopoverHeaderPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return <PopoverHeader ref={ref} {...props} />
}

export const PopoverContentPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <PopoverContent ref={drop(ref)} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </PopoverContent>
    )
}

export const PopoverTriggerPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return component.children.length > 0 ? (
        <PopoverTrigger ref={drop(ref)} {...props}>
            <span>
                <ComponentPreview index={index} componentName={component.children[0]} />
            </span>
        </PopoverTrigger>
    ) : (
        <Box pos="relative" ref={drop(ref)} {...props} />
    )
}

export const PopoverFooterPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <PopoverFooter ref={drop(ref)} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </PopoverFooter>
    )
}

export const PopoverArrowPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return <PopoverArrow ref={ref} {...props} />
}

export const PopoverBodyPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return <PopoverBody ref={ref} {...props} />
}

export default PopoverPreview
