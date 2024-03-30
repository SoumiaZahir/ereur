// ** Next Import
import Link from 'next/link'

// LOGO
import FelisImage from 'public/images/logo/Felis.png'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

interface Props {
  navHover: boolean
  collapsedNavWidth: number
  hidden: LayoutProps['hidden']
  navigationBorderWidth: number
  toggleNavVisibility: () => void
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  navMenuBranding?: LayoutProps['verticalLayoutProps']['navMenu']['branding']
  menuLockedIcon?: LayoutProps['verticalLayoutProps']['navMenu']['lockedIcon']
  menuUnlockedIcon?: LayoutProps['verticalLayoutProps']['navMenu']['unlockedIcon']
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(3.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>({
  fontWeight: 700,
  lineHeight: '24px',
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
})

const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { navCollapsed } = settings

  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 34) / 8
      }
    } else {
      return 6
    }
  }

  const MenuLockedIcon = () => userMenuLockedIcon || <Icon icon='tabler:circle-dot' />

  const MenuUnlockedIcon = () => userMenuUnlockedIcon || <Icon icon='tabler:circle' />

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userNavMenuBranding ? (
        userNavMenuBranding(props)
      ) : (
        <LinkStyled href='/'>
          {/* <img src={FelisImage} alt="Felis" width={34}  /> */}
          {/* <img src={require('public/images/logo/Felis.png')} alt='' /> */}
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width={34}
            viewBox='0 0 500.000000 500.000000'
            preserveAspectRatio='xMidYMid meet' >
            <g transform='translate(0.000000,500.000000) scale(0.100000,-0.100000)' fill='#800080' stroke='none'>
              <path
                d='M2018 4265 c-14 -8 -35 -30 -47 -48 -40 -66 -52 -148 -63 -447 -19
                  -505 -17 -543 47 -676 44 -92 108 -162 198 -218 91 -56 170 -81 329 -105 125
                  -19 128 -19 259 0 73 10 158 26 189 35 149 43 270 145 339 285 58 118 75 210
                  68 373 -20 475 -38 662 -71 740 -21 50 -60 76 -115 76 -56 0 -138 -45 -234
                  -128 -81 -70 -91 -73 -168 -56 -82 17 -186 17 -269 0 -38 -8 -73 -10 -85 -5
                  -11 4 -51 35 -90 69 -121 105 -220 141 -287 105z m151 -122 c20 -15 69 -58
                  109 -97 82 -79 88 -81 212 -52 87 21 213 17 298 -9 29 -9 62 -13 74 -9 11 3
                  55 38 97 77 128 119 197 152 221 107 22 -41 50 -332 56 -583 5 -214 4 -262
                  -10 -321 -45 -189 -165 -308 -371 -368 -69 -20 -103 -23 -240 -23 -136 0 -171
                  3 -238 23 -171 49 -274 129 -333 258 -52 112 -59 180 -45 432 20 357 32 526
                  38 547 17 61 66 68 132 18z'
              />
              <path
                d='M2561 3216 c-13 -14 -36 -30 -52 -36 -24 -10 -33 -9 -62 9 -47 29
                    -84 28 -99 -4 -15 -34 11 -71 69 -97 49 -22 91 -19 151 9 34 16 50 15 121 -12
                    58 -21 112 -12 157 27 74 65 17 130 -68 78 -44 -26 -49 -26 -102 15 -54 41
                    -84 44 -115 11z'
              />
              <path
                d='M3496 3668 c-21 -30 -20 -62 6 -197 25 -132 18 -210 -26 -306 -109
                  -239 -325 -418 -582 -484 -245 -63 -468 -54 -714 31 -206 71 -214 73 -360 72
                  -125 0 -141 -2 -223 -31 -120 -42 -189 -85 -277 -173 -85 -85 -130 -155 -167
                  -262 -37 -102 -39 -271 -6 -370 70 -207 267 -396 509 -487 120 -45 184 -59
                  364 -76 182 -17 269 -14 425 16 466 91 906 423 1117 842 57 115 115 295 139
                  438 18 106 21 149 16 294 -8 248 -33 350 -152 628 -21 48 -42 87 -46 87 -4 0
                  -15 -10 -23 -22z m122 -515 c21 -150 24 -229 13 -343 -54 -544 -364 -974 -876
                  -1216 -171 -80 -390 -134 -548 -134 -111 0 -344 27 -427 50 -234 65 -437 222
                  -527 410 -33 67 -37 85 -41 175 -3 77 0 116 13 160 60 209 218 364 431 425
                  148 43 242 35 449 -35 164 -56 226 -71 350 -85 218 -26 503 25 684 122 189
                  101 367 303 433 492 12 35 25 63 29 60 4 -2 11 -39 17 -81z'
              />
              <path
                d='M1736 1142 c-4 -11 -4 -27 0 -36 6 -15 23 -16 143 -14 l136 3 0 30 0
    30 -137 3 c-126 2 -137 1 -142 -16z'
              />
              <path
                d='M2084 1146 c-3 -8 -4 -23 -2 -33 3 -16 15 -18 118 -18 l115 0 0 30 0
    30 -113 3 c-92 2 -113 0 -118 -12z'
              />
              <path
                d='M2407 1153 c-4 -3 -7 -80 -7 -170 l0 -163 106 0 105 0 -3 28 c-3 26
    -6 27 -68 32 l-65 5 -3 138 -3 137 -28 0 c-15 0 -31 -3 -34 -7z'
              />
              <path d='M2700 990 l0 -171 33 3 32 3 0 165 0 165 -32 3 -33 3 0 -171z' />
              <path
                d='M2934 1151 c-34 -15 -64 -61 -64 -98 0 -43 30 -72 100 -97 28 -10 54
    -25 57 -34 9 -22 -11 -46 -43 -52 -20 -4 -30 -12 -32 -28 -3 -19 1 -22 35 -22
    36 0 78 20 95 44 4 6 8 29 8 52 0 48 -15 65 -80 90 -25 9 -54 25 -65 36 -20
    19 -20 19 5 39 24 20 43 21 97 4 16 -5 24 -2 32 14 10 17 7 23 -14 37 -30 20
    -101 28 -131 15z'
              />
              <path
                d='M2087 1053 c-4 -3 -7 -57 -7 -120 l0 -113 120 0 120 0 0 30 0 29 -87
    3 c-87 3 -88 3 -91 30 -3 27 -3 27 65 30 l68 3 3 32 3 32 -68 3 c-62 3 -68 5
    -71 26 -2 15 -10 22 -26 22 -12 0 -26 -3 -29 -7z'
              />
              <path
                d='M1840 915 l0 -95 35 0 34 0 3 62 c3 61 4 63 33 68 24 4 31 11 33 33
    l3 27 -70 0 -71 0 0 -95z'
              />
              <path d='M2863 874 c-6 -16 15 -37 29 -28 4 3 8 14 8 25 0 23 -28 26 -37 3z' />
            </g>
          </svg>
          {/* <svg width={34} viewBox='0 0 32 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              fill={theme.palette.primary.main}
              d='M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z'
            />
            <path
              fill='#161616'
              opacity={0.06}
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z'
            />
            <path
              fill='#161616'
              opacity={0.06}
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              fill={theme.palette.primary.main}
              d='M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z'
            /> */}
          {/* </svg> */}
          <HeaderTitle variant='h4' sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 2.5 }) }}>
            {themeConfig.templateName}
          </HeaderTitle>
        </LinkStyled>
      )}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, color: 'text.secondary', backgroundColor: 'transparent !important' }}
        >
          <Icon icon='tabler:x' fontSize='1.25rem' />
        </IconButton>
      ) : userMenuLockedIcon === null && userMenuUnlockedIcon === null ? null : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
          sx={{
            p: 0,
            color: 'text.primary',
            backgroundColor: 'transparent !important',
            '& svg': {
              fontSize: '1.25rem',
              ...menuCollapsedStyles,
              transition: 'opacity .25s ease-in-out'
            }
          }}
        >
          {navCollapsed ? MenuUnlockedIcon() : MenuLockedIcon()}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
