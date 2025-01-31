import React from 'react'
import { MenuItem, Box } from '@chakra-ui/react'
import { FaSave } from 'react-icons/fa'

interface Props {
  saveProject?: () => void
}

const SaveMenuItem = ({ saveProject }: Props) => {
  return (
    <MenuItem
      onClick={() => {
        if (saveProject) {
          saveProject()
        }
      }}
    >
      <Box mr={2} as={FaSave} />
      Save components
    </MenuItem>
  )
}

export default SaveMenuItem
