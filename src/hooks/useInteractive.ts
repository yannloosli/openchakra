import { useRef, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import useDispatch from './useDispatch'
import { useDrag } from 'react-dnd'
import {
  getIsSelectedComponent,
  getIsHovered,
  getIsSortHovered,
  getSortPosition,
} from '../core/selectors/components'
import { getShowLayout, getFocusedComponent } from '../core/selectors/app'

export const useInteractive = (
  component: IComponent,
  index: number,
  enableVisualHelper: boolean = false,
  withoutComponentProps = false,
) => {
  const dispatch = useDispatch()
  const showLayout = useSelector(getShowLayout)
  const isComponentSelected = useSelector(getIsSelectedComponent(component.id))
  const isHovered = useSelector(getIsHovered(component.id))
  const isSortHovered = useSelector(getIsSortHovered(component.id))
  const sortPosition = useSelector(getSortPosition())
  const focusInput = useSelector(getFocusedComponent(component.id))

  const [, drag] = useDrag({
    type: component.type,
    item: {
      id: component.id,
      type: component.type,
      isMoved: true,
      index,
    },
  })

  const ref = useRef<HTMLDivElement>(null)
  let props = {
    ...(withoutComponentProps ? {} : component.props),
    onMouseOver: (event: MouseEvent) => {
      event.stopPropagation()
      dispatch.components.hover(component.id)
    },
    onMouseOut: () => {
      dispatch.components.unhover()
    },
    onClick: (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      dispatch.components.select(component.id)
    },
    onDoubleClick: (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (focusInput === false) {
        dispatch.app.toggleInputText()
      }
    },
  }

  if (showLayout && enableVisualHelper) {
    props = {
      ...props,
      border: `1px dashed #718096`,
      padding: props.p || props.padding ? props.p || props.padding : 4,
    }
  }

  if (isHovered || isComponentSelected) {
    props = {
      ...props,
      boxShadow: `${focusInput ? '#ffc4c7' : '#4FD1C5'} 0px 0px 0px 2px inset`,
    }
  }

  if (isSortHovered) {
    props = {
      ...props,
      ...(sortPosition === 'top'
        ? { borderTop: '4px solid blue' }
        : { borderBottom: '4px solid blue' }),
    }
  }

  return { props, ref: drag(ref), drag, isHovered }
}
