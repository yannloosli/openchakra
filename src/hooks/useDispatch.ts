import { useDispatch as useReduxDispatch } from 'react-redux'
import { RematchDispatch } from '@rematch/core'
import models from 'src/core/models'

const useDispatch = () => {
  return useReduxDispatch() as RematchDispatch<typeof models>
}

export default useDispatch
