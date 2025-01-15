import React, { memo } from 'react'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'

const BoxPanel = () => (
  <ColorsControl
    withFullColor
    label="Color"
    name="backgroundColor"
    enableHues
  />
)

export default memo(BoxPanel)
