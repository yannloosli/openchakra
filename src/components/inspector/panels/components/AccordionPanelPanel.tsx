import React, { memo } from 'react'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'

const AccordionPanelPanel = () => (
  <SwitchControl label="Show Panel" name="showpreview" />
)

export default memo(AccordionPanelPanel)
