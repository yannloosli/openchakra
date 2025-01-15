import React, { memo } from 'react'
import { Accordion } from '@chakra-ui/react'
import PaddingPanel from 'src/components/inspector/panels/styles/PaddingPanel'
import DimensionPanel from 'src/components/inspector/panels/styles/DimensionPanel'
import BorderPanel from 'src/components/inspector/panels/styles/BorderPanel'
import DisplayPanel from 'src/components/inspector/panels/styles/DisplayPanel'
import TextPanel from 'src/components/inspector/panels/styles/TextPanel'
import AccordionContainer from 'src/components/inspector/AccordionContainer'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import GradientControl from 'src/components/inspector/controls/GradientControl'
import EffectsPanel from './styles/EffectsPanel'
import ChildrenInspector from 'src/components/inspector/ChildrenInspector'
import ParentInspector from 'src/components/inspector/ParentInspector'
import CustomPropsPanel from './CustomPropsPanel'
import ParametersPanel from './ParametersPanel'

interface Props {
  isRoot: boolean
  showChildren: boolean
  parentIsRoot: boolean
}

const StylesPanel: React.FC<Props> = ({
  isRoot,
  showChildren,
  parentIsRoot,
}) => (
  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionContainer title="Parameters">
      <ParametersPanel />
    </AccordionContainer>
    {!isRoot && (
      <AccordionContainer title="Custom props">
        <CustomPropsPanel />
      </AccordionContainer>
    )}

    {!isRoot && !parentIsRoot && (
      <AccordionContainer title="Parent">
        <ParentInspector />
      </AccordionContainer>
    )}

    {showChildren && (
      <AccordionContainer title="Children">
        <ChildrenInspector />
      </AccordionContainer>
    )}

    {!isRoot && (
      <>
        <AccordionContainer title="Layout">
          <DisplayPanel />
        </AccordionContainer>
        <AccordionContainer title="Spacing">
          <PaddingPanel type="margin" />
          <PaddingPanel type="padding" />
        </AccordionContainer>
        <AccordionContainer title="Size">
          <DimensionPanel />
        </AccordionContainer>
        <AccordionContainer title="Typography">
          <TextPanel />
        </AccordionContainer>
      </>
    )}

    <AccordionContainer title="Backgrounds">
      <ColorsControl
        withFullColor
        label="Color"
        name="backgroundColor"
        enableHues
      />
      {!isRoot && (
        <GradientControl
          withFullColor
          label="Gradient"
          name="bgGradient"
          options={[
            'to top',
            'to top right',
            'to top left',
            'to bottom right',
            'to bottom',
            'to bottom left',
            'to right',
            'to left',
          ]}
          enableHues
        />
      )}
    </AccordionContainer>

    {!isRoot && (
      <>
        <AccordionContainer title="Border">
          <BorderPanel />
        </AccordionContainer>

        <AccordionContainer title="Effect">
          <EffectsPanel />
        </AccordionContainer>
      </>
    )}
  </Accordion>
)

export default memo(StylesPanel)
