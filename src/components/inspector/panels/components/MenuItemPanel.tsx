import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'
import IconControl from 'src/components/inspector/controls/IconControl'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import TextControl from 'src/components/inspector/controls/TextControl'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src//hooks/useForm'
import usePropsSelector from 'src//hooks/usePropsSelector'

const MenuItemPanel = () => {
    const { setValueFromEvent } = useForm()
    const role = usePropsSelector('role')

    return (
        <>
            <FormControl label="Role" htmlFor="role">
                <Select
                    name="role"
                    id="role"
                    size="sm"
                    value={role || 'role'}
                    onChange={setValueFromEvent}
                >
                    <option>menuitem</option>
                    <option>menuitemradio</option>
                    <option>menuitemcheckbox</option>
                </Select>
            </FormControl>
            <ChildrenControl />
            <IconControl name="icon" label="Icon" />
            <TextControl name="iconSpacing" label="Icon Spacing" />
            <SwitchControl label="Disabled" name="isDisabled" />
        </>
    )
}

export default memo(MenuItemPanel)
