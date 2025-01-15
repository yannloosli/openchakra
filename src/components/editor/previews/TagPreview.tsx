import React from 'react'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from '@chakra-ui/react'
import icons from 'src/iconsList'

interface Props {
    component: IComponent,
    index: number
}

const TagPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }
    return (
        <Tag ref={drop(ref)} index={index} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </Tag>
    )
}

export const TagCloseButtonPreview = ({ component, index}: Props) => {
    const { props: { icon, ...props }, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return <TagCloseButton ref={ref} {...props} />
}

export const TagLabelPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return <TagLabel ref={ref} {...props} />
}

export const TagLeftIconPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    if (props.as) {
        if (Object.keys(icons).includes(props.as)) {
            const Icon = icons[props.as as keyof typeof icons]
            props.children = <Icon path="" />
        } else {
            props.children = undefined
        }
    }

    return <TagLeftIcon ref={ref} {...props} p={0} />
}

export const TagRightIconPreview = ({ component, index }: Props) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    if (props.as) {
        if (Object.keys(icons).includes(props.as)) {
            const Icon = icons[props.as as keyof typeof icons]
            props.children = <Icon path="" />
        } else {
            props.children = undefined
        }
    }

    return <TagRightIcon ref={ref} {...props} p={0} />
}

export default TagPreview
