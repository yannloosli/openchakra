import React from 'react'
import { useSelector } from 'react-redux'
import { getSelectedComponentParent } from 'src/core/selectors/components'
import ElementListItem from 'src/components/inspector/elements-list/ElementListItem'
import useDispatch from 'src/hooks/useDispatch'

const ParentInspector = () => {
  const parentComponent = useSelector(getSelectedComponentParent)
  const dispatch = useDispatch()

  const onSelect = () => {
    dispatch.components.select(parentComponent.id)
  }

  const onHover = () => {
    dispatch.components.hover(parentComponent.id)
  }

  const onUnhover = () => {
    dispatch.components.unhover()
  }

  return (
    <ElementListItem
      type={parentComponent.type}
      onMouseOver={onHover}
      onMouseOut={onUnhover}
      onSelect={onSelect}
    />
  )
}

export default ParentInspector
