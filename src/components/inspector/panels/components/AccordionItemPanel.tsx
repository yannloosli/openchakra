import React from 'react'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'

const AccordionItemPanel = () => {
  return (
    <>
      <SwitchControl label="Is open" name="isOpen" />
      <SwitchControl label="Default open" name="defaultIsOpen" />
    </>
  )
}

export default AccordionItemPanel
