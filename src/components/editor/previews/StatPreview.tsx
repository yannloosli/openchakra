import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import { useDropComponent } from 'src/hooks/useDropComponent'
import {
    Stat,
    StatGroup,
    StatHelpText,
} from '@chakra-ui/react'
import ComponentPreview from 'src/components/editor/ComponentPreview'

const acceptedTypesStat: ComponentType[] = [
    'StatLabel',
    'StatNumber',
    'StatHelpText',
]

const acceptedTypesGroup: ComponentType[] = ['Stat']

const acceptedTypesHelp: ComponentType[] = ['StatArrow']

const StatGroupPreview: React.FC<IPreviewProps> = ({ component, index }) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesGroup)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <StatGroup ref={drop(ref)} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </StatGroup>
    )
}

export const StatPreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesStat)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Stat ref={drop(ref)} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </Stat>
    )
}

export const StatHelpTextPreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesHelp)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <StatHelpText ref={drop(ref)} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </StatHelpText>
    )
}

export default StatGroupPreview
