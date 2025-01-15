import React from 'react'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import TextControl from 'src/components/inspector/controls/TextControl'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'

const TabPanel = () => {
  return (
    <>
      <ChildrenControl />
      <SwitchControl label="Is Disabled" name="isDisabled" />
      <SwitchControl label="Is Selected" name="isSelected" />
      <TextControl name="panelId" label="Panel Id" />
    </>
  )
}

export default TabPanel
