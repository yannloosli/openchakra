import { RootState } from 'src/core/store'

export const getCustomComponents = (state: RootState) =>
  state.customComponents.components

export const getNewTheme = (state: RootState) => state.customComponents.newTheme

export const getThemePath = (state: RootState) =>
  state.customComponents.themePath

export const getCustomComponentBy = (
  nameOrId: IComponent['type'] | IComponent['id'],
) => (state: RootState) => state.customComponents.components[nameOrId]

export const getSelectedCustomComponentId = (state: RootState) =>
  state.customComponents.selectedId

export const getIsSelectedCustomComponent = (
  componentId: IComponent['type'],
) => (state: RootState) => state.customComponents.selectedId === componentId

export const getCustomComponentNames = (state: RootState) =>
  Object.keys(state.customComponents.components)

export const getCustomComponentPaths = (state: RootState) =>
  Object.values(state.customComponents.components)
