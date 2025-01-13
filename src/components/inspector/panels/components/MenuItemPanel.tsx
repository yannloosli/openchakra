import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import IconControl from '~components/inspector/controls/IconControl'
import SwitchControl from '~components/inspector/controls/SwitchControl'
import TextControl from '~components/inspector/controls/TextControl'
import FormControl from '~components/inspector/controls/FormControl'
import { useForm } from '~/hooks/useForm'
import usePropsSelector from '~/hooks/usePropsSelector'

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
