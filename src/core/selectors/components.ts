import map from 'lodash/map'
import { RootState } from 'src/core/store'

export const getComponents = (state: RootState) =>
  state.components.present.components

export const getComponentBy = (nameOrId: string | IComponent['id']) => (
  state: RootState,
) => state.components.present.components[nameOrId]

export const getSelectedComponent = (state: RootState) =>
  state.components.present.components[state.components.present.selectedId]

export const getComponentParams = (state: RootState) =>
  state.components.present.components['root'].params

export const getComponentParamNames = (state: RootState) =>
  state.components.present.components['root'].params?.map(param => param.name)

export const getPropsForSelectedComponent = (
  state: RootState,
  propsName: string,
) =>
  state.components.present.components[state.components.present.selectedId]
    .props[propsName]

export const getSelectedComponentId = (state: RootState) =>
  state.components.present.selectedId

export const getIsSelectedComponent = (componentId: IComponent['id']) => (
  state: RootState,
) => state.components.present.selectedId === componentId

export const getSelectedComponentChildren = (state: RootState) => {
  return getSelectedComponent(state).children.map(child =>
    getComponentBy(child)(state),
  )
}

export const getSelectedComponentParent = (state: RootState) =>
  state.components.present.components[getSelectedComponent(state).parent]

export const getHoveredId = (state: RootState) =>
  state.components.present.hoveredId

export const getIsHovered = (id: IComponent['id']) => (state: RootState) =>
  getHoveredId(state) === id

export const getIsSortHovered = (id: IComponent['id']) => (state: RootState) =>
  state.components.present.sortHoveredId === id

export const getSortPosition = () => (state: RootState) =>
  state.components.present.sortPosition

export const getComponentNames = (state: RootState) => {
  const names = map(
    state.components.present.components,
    comp => comp.componentName,
  ).filter(comp => !!comp)

  return Array.from(new Set(names))
}
