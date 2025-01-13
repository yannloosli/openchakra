import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Global } from '@emotion/react'
import Metadata from '~components/Metadata'
import useShortcuts from '~hooks/useShortcuts'
import Header from '~components/Header'
import Loader from '~components/Loader'
import Sidebar from '~components/sidebar/Sidebar'
import EditorErrorBoundary from '~components/errorBoundaries/EditorErrorBoundary'
import Editor from '~components/editor/Editor'
import { InspectorProvider } from '~contexts/inspector-context'
import Inspector from '~components/inspector/Inspector'
import ResponsiveToolBar from '~components/ResponsiveToolBar'
import { useSelector } from 'react-redux'
import { getEditorWidth } from '~core/selectors/app'

const App = () => {
  const editorWidth = useSelector(getEditorWidth)

  useShortcuts()

  return (
    <>
      <Global
        styles={() => ({
          html: { minWidth: '860px', backgroundColor: '#1a202c' },
        })}
      />
      <Loader />
      <Metadata />
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Flex h="calc(100vh - 3rem)">
          <Sidebar />
          <EditorErrorBoundary>
            <Box bg="#edf2f6" flex={1} position="relative">
              <ResponsiveToolBar />
              <Flex
                w={editorWidth}
                transition="all ease 0.5s"
                h="100%"
                align="center"
                justify="center"
                alignItems="stretch"
                pt={12}
                m="0 auto"
              >
                <Editor />
              </Flex>
            </Box>
          </EditorErrorBoundary>
          <style>
            {
              '\
              .inspector select, .inspector input, .themer select, .themer input, .themer hr, .themer .chakra-tabs__tablist, .themer .chakra-modal__header, .themer chakra-tabs__tab-panels, .themer .chakra-accordion__item, .chakra-popover__popper{\
                border-color:var(--chakra-colors-gray-200) !important;\
              }\
              .inspector, .header, .sidebar, .themer, .customPropsMenu, .paramSelector, .paramsMenu, .chakra-popover__popper {\
                font-family:sans-serif !important;\
              }\
              .editor {\
                background-color:var(--chakra-colors-chakra-body-bg) !important;\
              }\
              .chakra-slider__thumb {\
                color:var(--chakra-colors-black) !important;\
              }\
              '
            }
          </style>
          <Box
            maxH="calc(100vh - 3rem)"
            flex="0 0 15rem"
            bg="#f7fafc"
            overflowY="auto"
            overflowX="visible"
            borderLeft="1px solid #cad5de"
            className="inspector"
          >
            <InspectorProvider>
              <Inspector />
            </InspectorProvider>
          </Box>
        </Flex>
      </DndProvider>
    </>
  )
}

export default App
