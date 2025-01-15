import React from 'react';
import ReactDOM from 'react-dom/client';
import { Flex, Box } from '@chakra-ui/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Global } from '@emotion/react'
import useShortcuts from 'src/hooks/useShortcuts'
import Header from 'src/components/Header'
import Loader from 'src/components/Loader'
import Sidebar from 'src/components/sidebar/Sidebar'
import Editor from 'src/components/editor/Editor'
import { InspectorProvider } from 'src/contexts/inspector-context'
import Inspector from 'src/components/inspector/Inspector'
import ResponsiveToolBar from 'src/components/ResponsiveToolBar'
import { useSelector } from 'react-redux'
import { getEditorWidth } from 'src/core/selectors/app'

const root = ReactDOM.createRoot(document.getElementById('root')!);

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
            <Header />
            <DndProvider backend={HTML5Backend}>
                <Flex h="calc(100vh - 3rem)">
                    <Sidebar />
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
{/*                     <style>
                        {`
              .inspector, .header, .sidebar, .themer, .customPropsMenu, .paramSelector, .paramsMenu, .chakra-popover__popper {
                font-family: sans-serif !important;
              }
              .editor {
                background-color: var(--chakra-colors-chakra-body-bg) !important;
              }
              .chakra-slider__thumb {
                color: var(--chakra-colors-black) !important;
              }
              `}
                    </style> */}
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
