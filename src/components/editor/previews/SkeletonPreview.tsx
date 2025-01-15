import React from 'react'
import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import ComponentPreview from 'src/components/editor/ComponentPreview'
import { useDropComponent } from 'src/hooks/useDropComponent'
import { useInteractive } from 'src/hooks/useInteractive'

const SkeletonPreview: React.FC<{ component: IComponent, index: number }> = ({
    component,
    index
}) => {
    const { props, ref } = useInteractive(component, index, true)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Box ref={drop(ref)} {...props} m={0}>
            <Skeleton {...component.props}>
                {component.children.map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
            </Skeleton>
        </Box>
    )
}

export const SkeletonTextPreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    let boxProps: any = {}

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Box ref={drop(ref)} {...boxProps}>
            <SkeletonText {...props}>
                {component.children.map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
            </SkeletonText>
        </Box>
    )
}

export const SkeletonCirclePreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index, true)
    const { drop, isOver } = useDropComponent(component.id, index, ref)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Box display="inline-block" ref={drop(ref)} index={index} {...props}>
            <SkeletonCircle {...component.props}>
                {component.children.map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
            </SkeletonCircle>
        </Box>
    )
}

export default SkeletonPreview
