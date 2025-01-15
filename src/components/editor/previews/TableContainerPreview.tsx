import React from 'react'
import { useInteractive } from 'src/hooks/useInteractive'
import { useDropComponent } from 'src/hooks/useDropComponent'
import {
    Box,
    Table,
    TableContainer,
    Tbody,
    Tfoot,
    Thead,
    Tr,
} from '@chakra-ui/react'
import ComponentPreview from 'src/components/editor/ComponentPreview'

const acceptedTypesTableContainer: ComponentType[] = ['Table']

const TableContainerPreview: React.FC<IPreviewProps> = ({ component, index }) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(
        component.id,
        index,
        ref,
        acceptedTypesTableContainer,
    )

    let boxProps: any = {}

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Box ref={drop(ref)} {...boxProps}>
            <TableContainer {...props}>
                {component.children.map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
            </TableContainer>
        </Box>
    )
}

const acceptedTypesTable: ComponentType[] = [
    'TableCaption',
    'Thead',
    'Tbody',
    'Tfoot',
]

export const TablePreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index, true)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesTable)

    let boxProps: any = { border: '1px solid red' }

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Box ref={drop(ref)} {...props} border="1px solid green">
            <Table {...component.props}>
                {component.children.map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
            </Table>
        </Box>
    )
}

const acceptedTypesThead: ComponentType[] = ['Tr']

export const TheadPreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesThead)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Thead ref={drop(ref)} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </Thead>
    )
}

const acceptedTypesTr: ComponentType[] = ['Th', 'Td']

export const TrPreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesTr)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Box ref={drop(ref)} {...props} border="1px solid green">
            <Tr {...component.props}>
                {component.children.map((key: string) => (
                    <ComponentPreview key={key} index={index} componentName={key} />
                ))}
            </Tr>
        </Box>
    )
}

export const TbodyPreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesThead)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Tbody ref={drop(ref)} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </Tbody>
    )
}

export const TfootPreview = ({ component, index }: IPreviewProps) => {
    const { props, ref } = useInteractive(component, index)
    const { drop, isOver } = useDropComponent(component.id, index, ref, acceptedTypesThead)

    if (isOver) {
        props.bg = 'teal.50'
    }

    return (
        <Tfoot ref={drop(ref)} {...props}>
            {component.children.map((key: string) => (
                <ComponentPreview key={key} index={index} componentName={key} />
            ))}
        </Tfoot>
    )
}

export default TableContainerPreview
