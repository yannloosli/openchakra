import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'
import 'split-pane-react/esm/themes/default.css';

import { wrapper } from '~core/store'
import AppErrorBoundary from '~components/errorBoundaries/AppErrorBoundary'
import { AppProps } from 'next/app'

const Main = ({ Component, pageProps }: AppProps) => (
    <ChakraProvider>
      <AppErrorBoundary>
        <Component {...pageProps} />
      </AppErrorBoundary>
    </ChakraProvider>
)

//export default wrapper.withRedux(Main)
export default wrapper.withRedux(Main)
