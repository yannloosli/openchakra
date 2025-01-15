import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'
import 'split-pane-react/esm/themes/default.css';
import App from './app'
import { store } from 'src/core/store'
import { Provider } from 'react-redux'
import theme from '@chakra-ui/theme'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'

const Root = () => (
    <ChakraProvider resetCSS theme={theme}>
        <Provider store={store}>
            <React.Suspense fallback={<div>Loading... </div>}>
                <App />
            </React.Suspense>
        </Provider>
    </ChakraProvider>
)

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Root />);
}
