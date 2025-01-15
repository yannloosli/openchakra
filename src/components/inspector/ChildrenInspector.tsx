import React from 'react'
import { useSelector } from 'react-redux'
import { getSelectedComponentChildren } from 'src/core/selectors/components'
import ElementsList from 'src/components/inspector/elements-list/ElementsList'
import useDispatch from 'src/hooks/useDispatch'

const ChildrenInspector = () => {
  const childrenComponent = useSelector(getSelectedComponentChildren)
  const dispatch = useDispatch()

  const moveChildren = (
    componentId: string,
    fromIndex: number,
    toIndex: number,
  ) => {
    dispatch.components.moveSelectedComponentChildren({
      droppedId: componentId,
      targetId: childrenComponent[toIndex].id,
      position: `${fromIndex}-${toIndex}`,
    })
  }

  const onSelectChild = (id: IComponent['id']) => {
    dispatch.components.select(id)
  }

  const onHoverChild = (id: IComponent['id']) => {
    dispatch.components.hover(id)
  }

  const onUnhoverChild = () => {
    dispatch.components.unhover()
  }

  return (
    <ElementsList
      elements={childrenComponent}
      moveItem={moveChildren}
      onSelect={onSelectChild}
      onHover={onHoverChild}
      onUnhover={onUnhoverChild}
    />
  )
}

export default ChildrenInspector
