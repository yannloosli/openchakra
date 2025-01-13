const ALERT_COMPONENTS: (ComponentType | MetaComponentType)[] = [
  'Alert',
  'AlertDescription',
  'AlertIcon',
  'AlertTitle',
]
const TABLE_COMPONENTS: (ComponentType | MetaComponentType)[] = [
  'Table',
  'Thead',
  'Tbody',
  'Tfoot',
  'Tr',
  'Th',
  'Td',
  'TableCaption',
  'TableContainer',
]

const MENU_COMPONENTS: (ComponentType | MetaComponentType)[] = [
  'Menu',
  'MenuList',
  'MenuButton',
  'MenuItem',
  'MenuGroup',
  'MenuDivider',
  'MenuOptionGroup',
  'MenuItemOption',
]

export const COMPONENTS: (ComponentType | MetaComponentType)[] = [
  ...ALERT_COMPONENTS,
  'Avatar',
  'AvatarBadge',
  'AvatarGroup',
  'Badge',
  'Box',
  'Button',
  'Center',
  'Checkbox',
  'CircularProgress',
  'CloseButton',
  'Code',
  'Container',
  'Divider',
  'Flex',
  'FormControl',
  'FormLabel',
  'FormHelperText',
  'FormErrorMessage',
  'Grid',
  'Heading',
  'Highlight',
  'Icon',
  'IconButton',
  'Image',
  'Input',
  'InputGroup',
  'InputRightAddon',
  'InputLeftAddon',
  'Link',
  'List',
  'ListItem',
  'Popover',
  'PopoverTrigger',
  'PopoverContent',
  'PopoverHeader',
  'PopoverBody',
  'PopoverFooter',
  'PopoverArrow',
  'PopoverCloseButton',
  'PopoverAnchor',
  'Modal',
  'ModalOverlay',
  'ModalContent',
  'ModalHeader',
  'ModalFooter',
  'ModalBody',
  'ModalCloseButton',
  'Menu',
  'MenuButton',
  'MenuList',
  'MenuItem',
  'MenuItemOption',
  'MenuGroup',
  'MenuOptionGroup',
  'MenuDivider',
  'Slider',
  'SliderTrack',
  'SliderFilledTrack',
  'SliderThumb',
  'SliderMark',
  'Progress',
  'Radio',
  'RadioGroup',
  'SimpleGrid',
  'Spinner',
  'Select',
  'Skeleton',
  'SkeletonCircle',
  'SkeletonText',
  'RangeSLider',
  'RangeSliderTrack',
  'RangeSliderFilledTrack',
  'RangeSliderThumb',
  'Stack',
  'Switch',
  'Tag',
  'TagLabel',
  'TagLeftIcon',
  'TagRightIcon',
  'TagCloseButton',
  'Text',
  'Kbd',
  'Textarea',
  'Accordion',
  'Editable',
  'AspectRatio',
  'Breadcrumb',
  'BreadcrumbItem',
  'BreadcrumbLink',
  ...MENU_COMPONENTS,
  'NumberInput',
  'AccordionItem',
  'AccordionButton',
  'AccordionPanel',
  'AccordionIcon',
  'InputRightElement',
  'InputLeftElement',
  ...TABLE_COMPONENTS,
  'Tab',
  'TabList',
  'TabPanel',
  'TabPanels',
  'Tabs',
  'Stat',
  'StatLabel',
  'StatNumber',
  'StatHelpText',
  'StatArrow',
  'StatGroup',
  'Tooltip',
  // Allow meta components
  'AlertMeta',
  'FormControlMeta',
  'AccordionMeta',
  'ListMeta',
  'InputGroupMeta',
  'BreadcrumbMeta',
  'TabsMeta',
  'StatMeta',
  'TableMeta',
  'TableRowMeta',
  'ConditionalMeta',
  'ModalMeta',
  'CardMeta',
  'TagMeta',
  'PopoverMeta',
  'RangeSliderMeta',
  'SliderMeta',
  'MenuMeta',
  // Allow custom components
  'Conditional',
  'Loop',
]

export const AccordionWhitelist: (
  | ComponentType
  | MetaComponentType
)[] = COMPONENTS.filter(name => !ALERT_COMPONENTS.includes(name))

export const MenuWhitelist: (
  | ComponentType
  | MetaComponentType
)[] = COMPONENTS.filter(name => !ALERT_COMPONENTS.includes(name))

export const rootComponents = COMPONENTS
  // Remove specific components
  .filter(
    name =>
      ![
        'AlertIcon',
        'AlertDescription',
        'AlertTitle',
        'AvatarBadge',
        'AccordionButton',
        'AccordionPanel',
        'AccordionIcon',
        'AccordionItem',
        'BreadcrumbItem',
        'BreadcrumbLink',
      ].includes(name),
  )
