// ** React Imports
import { Ref, useState, forwardRef, ReactElement, ChangeEvent } from 'react'

//**Buutoons Imports */

//**Picker Import */
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** MUI Imports
import Icon from 'src/@core/components/icon'
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Fade, { FadeProps } from '@mui/material/Fade'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import PageHeader from 'src/@core/components/page-header'
import Box, { BoxProps } from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

// {merchandiser,visite}:visiteMarshandiser,{showEdit,setShowEdit}:{showEdit:boolean,setShowEdit:any}
const Information = ({ showInfo, setShowInfo }: { showInfo: boolean; setShowInfo: any }) => {
  const handleClose = () => {
    setShowInfo(false)
  }

  return (
    <Drawer
      open={showInfo}
      anchor='right'
      variant='temporary'
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: 300, sm: 300 },
          paddingBottom: '20px',
          height: '100%', // Adjust the height for increased height
          overflow: 'hidden'
        }
      }}
    >
      <div>
        <Header>
          <Typography variant='h3'>Plus d'information</Typography>
          <IconButton size='small' onClick={handleClose}>
            <Icon icon='tabler:x' /> {/* Increase icon size */}
          </IconButton>
        </Header>
        <Box marginLeft={5}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Card sx={{ backgroundColor: '#E0F2FE', marginRight: '18px', width: '40px', height: '40px' }}>
              <CardContent></CardContent>
            </Card>
            <Typography color='inherit'>Visite planifier</Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Card sx={{ backgroundColor: '#FFEDD5', marginRight: '18px', width: '40px', height: '40px' }}>
              <CardContent></CardContent>
            </Card>
            <Typography color='inherit'>Visite en cours</Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Card sx={{ backgroundColor: '#D1FAE5', marginRight: '8px', width: '40px', height: '40px' }}>
              <CardContent></CardContent>
            </Card>
            <Typography color='inherit'>Visite terminer</Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Card sx={{ backgroundColor: '#f74033', marginRight: '8px', width: '40px', height: '40px' }}>
              <CardContent></CardContent>
            </Card>
            <Typography color='inherit'>Visite absent</Typography>
          </div>
          <hr />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Icon icon='tabler:clock-cancel' style={{ color: 'red', fontSize: '2rem' }} />
            <Typography color='inherit' style={{ marginLeft: '8px' }}>
              Duree non respecter
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Icon icon='tabler:alarm-snooze' style={{ color: 'red', fontSize: '2rem' }} />

            <Typography color='inherit' style={{ marginLeft: '8px' }}>
              Retard
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Icon icon='tabler:arrows-sort' style={{ color: 'red', fontSize: '2rem' }} />

            <Typography color='inherit' style={{ marginLeft: '8px' }}>
              Ordre non respect
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Icon icon='tabler:shopping-cart-off' style={{ color: 'red', fontSize: '2rem' }} />

            <Typography color='inherit' style={{ marginLeft: '8px' }}>
              Probleme de repture
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Icon icon='tabler:shopping-cart-exclamation' style={{ color: 'red', fontSize: '2rem' }} />

            <Typography color='inherit' style={{ marginLeft: '8px' }}>
              Probleme de Stock
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Icon icon='tabler:camera-exclamation' style={{ color: 'red', fontSize: '2rem' }} />
            <Typography color='inherit ' style={{ marginLeft: '8px' }}>
              Probleme de Facing
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <Icon icon='tabler:rosette-discount' color={'#860C90'} fontSize={'2rem'} />
            <Typography color='inherit' style={{ marginLeft: '8px' }}>
              Promontions
            </Typography>
          </div>
        </Box>
      </div>
    </Drawer>
  )
}

export default Information
