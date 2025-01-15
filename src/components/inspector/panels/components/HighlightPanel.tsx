import { memo } from 'react'
import ChildrenControl from 'src/components/inspector/controls/ChildrenControl'
import TextControl from 'src/components/inspector/controls/TextControl'

const HighlightPanel = () => (
  <>
    <ChildrenControl />
    <TextControl label="Query" name="query" />
  </>
)

export default memo(HighlightPanel)
