import { init } from '@rematch/core'
import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { ComponentsStateWithUndo } from './models/components'
import { AppState } from './models/app'
import { CustomComponentsState } from './models/customComponents'
import models from './models'
import filterUndoableActions from 'src/utils/undo'

export type RootState = {
  app: AppState
  components: ComponentsStateWithUndo
  customComponents: CustomComponentsState
}

const version = parseInt(process.env.NEXT_PUBLIC_VERSION || '1', 10)

const persistConfig = {
  key: `openchakra_v${version}`,
  storage,
  whitelist: ['present'],
  version,
  throttle: 500,
}

const persistPlugin = {
  onStoreCreated(store: any) {
    if (typeof window !== 'undefined') {
      persistStore(store)
    }
  },
}

export const storeConfig = {
  models,
  redux: {
    // @ts-ignore
    combineReducers: reducers => {
      return combineReducers({
        ...reducers,
        components: persistReducer(
          persistConfig,
          undoable(reducers.components, {
            limit: 20,
            filter: filterUndoableActions,
          }),
        ),
      })
    },
  },
  plugins: [persistPlugin],
}

// @ts-ignore
export const store = init(storeConfig)
