import { createIcon } from '@chakra-ui/icons'

// using `path`
export const PersonIcon = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 200 200',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <><path fill="url(#a)" d="M32 66h172v172H32z" transform="rotate(-15 32 66)" />,
    <path fill="url(#b)" d="M414 30h96v96h-96z" transform="rotate(15 414 30)" />,
    <path fill="url(#c)" d="M243 252h112v112H243z" /><path fill="url(#d)" d="M410 305h59v69h-59z" transform="rotate(-29 410 305)" /><path fill="url(#e)" d="M344 162h80v80h-80z" /><path fill="url(#f)" d="M485 134h58v51h-58z" /><path fill="url(#g)" d="M56 255h85v85H56z" transform="rotate(-30 56 255)" /><path fill="url(#h)" d="M326 93h48v48h-48z" transform="rotate(-15 326 93)" /><path fill="url(#i)" d="M224 113h114v114H224z" /><path fill="url(#j)" d="M369 270h38v38h-38z" /><path fill="url(#k)" d="M197 33h80v80h-80z" /><path fill="url(#l)" d="M469 202h80v80h-80z" /><path fill="url(#m)" d="M186 227h59v59h-59z" transform="rotate(12 186 227)" /><path fill="url(#n)" d="M96 332h48v47H96z" /><path fill="url(#o)" d="M367 321h64v64h-64z" transform="rotate(18 367 321)" /><path fill="url(#p)" d="M485 322h48v48h-48z" /><path fill="url(#q)" d="M173 332h64v64h-64z" /></>
  ),
  
})

