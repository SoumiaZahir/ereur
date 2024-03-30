// ** React Imports
import { Ref, useState, forwardRef, ReactElement, ChangeEvent } from 'react'

//**Buutoons Imports */

//**Picker Import */
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomInput from '../PickersCustomInput'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import PageHeader from 'src/@core/components/page-header'
import Box, { BoxProps } from '@mui/material/Box'

//**form import */
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import DialogAddUser from '../user/DialogAddUser'
import DetailUser from '../user/DetailUser'
import DialogAddPoint from '../pointDeVente/DialogAddPoint'
import DetailPointDeVente from '../pointDeVente/DetailPointDeVente'
import { MerchandiserVisite, Visite } from '../TableStickyHeader'
import PickersBasic from '../picker/PickersBasic'
// import DatePicker from 'react-datepicker'

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

//**initialisattion de pickker*/

// const [date, setDate] = useState<DateType>(new Date())
// const [time, setTime] = useState<DateType>(new Date())
interface visiteMarshandiser {
  merchandiser: string
  visite: Visite
}
// interface Visite {
//   h_db: string
//   h_fin: string
//   pointDeVente: string
//   statut: string
//   date: string
// }

interface DialogEditVisiteArgs {
  visite: Visite
  merchandiser: MerchandiserVisite['merchandiser']
  show: boolean
  setShow: any
}
// {merchandiser,visite}:visiteMarshandiser,{showEdit,setShowEdit}:{showEdit:boolean,setShowEdit:any}
const DialogEditVisite = ({ visite, merchandiser, show, setShow }: DialogEditVisiteArgs) => {
  // ** States
  const [status, setStatus] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const [togglePoint, setTogglePoint] = useState<boolean>(false)
  const [showDetailPoint, setShowDetailPoint] = useState<boolean>(false)

  const handleClose = () => {
    setShow(false)
  }

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value)
  }

  return (
    <Drawer
      open={show} // Contrôle l'ouverture et la fermeture du Drawer
      anchor='right' // Ancre le Drawer à droite
      variant='temporary' // Permet au Drawer de s'ouvrir et de se fermer
      // Appelé lorsque le Drawer est fermé
      ModalProps={{ keepMounted: true }} // Permet au Drawer d'être rendu dans le DOM même s'il est fermé
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: 700, sm: 700 }, // Largeur du Drawer pour les tailles d'écran xs et sm
          marginTop: '290px', // Marge haute du Drawer
          paddingBottom: '20px', // Marge basse du Drawer
          height: '60%', // Hauteur du Drawer
          overflow: 'hidden'
        }
      }}
    >
      <div>
        <Header>
          <Icon icon='tabler:device-mobile-cog' fontSize={35} />
          <PageHeader title={<Typography variant='h1'>Modifier Visite</Typography>} />
          <IconButton
            size='small'
            onClick={handleClose}
            sx={{
              p: '0.438rem',
              borderRadius: 1,
              color: 'text.primary',
              backgroundColor: 'action.selected',
              '&:hover': {
                backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
              }
            }}
          >
            <Icon icon='tabler:x' fontSize='1.125rem' />
          </IconButton>
        </Header>

        <Box marginLeft={7}>
          {/* Point De Vente */}
          <Grid container spacing={4}>
            {/* IPDV PICKER */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='pontDeVente-label'>Point De Vente</InputLabel>
                <Select
                  labelId='pontDeVente-label'
                  id='pontDeVente'
                  label='pontDeVente'
                  sx={{ mb: 2, width: '100%', height: '50px' }}
                  value={visite.pointDeVente}
                >
                  <MenuItem value={10}>pontDeVente 1</MenuItem>
                  <MenuItem value={20}>pontDeVente 2</MenuItem>
                  <MenuItem value={30}>pontDeVente 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* IconButton pour rechercher un point de vente */}
            <Grid item>
              <dfn title='Rechercher un point de vente '>
                <IconButton
                  aria-label='capture screenshot'
                  style={{
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    padding: '6px',
                    backgroundColor: '#F2F3F4'
                  }}
                >
                  <Icon
                    icon='tabler:search'
                    style={{ fontSize: '2rem' }}
                    onClick={() => {
                      setShowDetailPoint(true)
                    }}
                  />
                </IconButton>
              </dfn>
            </Grid>
            {/* IconButton pour ajouter un point de vente */}
            <Grid item>
              <dfn title='Ajouter un point de vente'>
                <IconButton
                  aria-label='capture screenshot'
                  style={{
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    padding: '6px',
                    backgroundColor: '#F2F3F4'
                  }}
                >
                  <Icon
                    icon='tabler:plus'
                    style={{ fontSize: '2rem' }}
                    onClick={() => {
                      setTogglePoint(true)
                    }}
                  />
                </IconButton>
              </dfn>
            </Grid>
          </Grid>

          {/* Marshandiser */}
          <Grid container spacing={4}>
            {/* IPDV PICKER */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='pontDeVente-label'>Marshandiser</InputLabel>
                <Select
                  labelId='pontDeVente-label'
                  id='pontDeVente'
                  label='pontDeVente'
                  sx={{ mb: 2, width: '100%', height: '50px' }}
                  value={merchandiser}
                >
                  <MenuItem value={10}>Marshandiser 1</MenuItem>
                  <MenuItem value={20}>Marshandiser 2</MenuItem>
                  <MenuItem value={30}>Marshandiser 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* IconButton pour rechercher un Marshandiser */}
            <Grid item>
              <dfn title='Rechercher un point de vente '>
                <IconButton
                  aria-label='capture screenshot'
                  style={{
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    padding: '6px',
                    backgroundColor: '#F2F3F4'
                  }}
                >
                  <Icon icon='tabler:search' style={{ fontSize: '2rem' }} onClick={() => setShowDetail(true)} />
                </IconButton>
              </dfn>
            </Grid>
            {/* IconButton pour ajouter un Marshandiser */}
            <Grid item>
              <dfn title='Ajouter un point de vente'>
                <IconButton
                  aria-label='capture screenshot'
                  style={{
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    padding: '6px',
                    backgroundColor: '#F2F3F4'
                  }}
                >
                  <Icon icon='tabler:plus' style={{ fontSize: '2rem' }} onClick={() => setToggle(true)} />
                </IconButton>
              </dfn>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {/* Heure de début */}
            <Grid item>
              <DatePicker
                showTimeSelect
                timeIntervals={15}
                showTimeSelectOnly
                dateFormat='h:mm aa'
                id='time-only-picker'
                popperPlacement='auto'
                onChange={(date: Date) => console.log(date)} // Dummy onChange handler
                customInput={<CustomInput label='heure_debut' />}
              />
            </Grid>

            {/* Heure de fin */}
            <Grid item>
              <DatePicker
                showTimeSelect
                timeIntervals={15}
                showTimeSelectOnly
                dateFormat='h:mm aa'
                id='time-only-picker'
                popperPlacement='auto'
                onChange={date => console.log(date)} // Add onChange handler here
                customInput={<CustomInput label='heure_fin' />}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <PickersBasic />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Status</FormLabel>
              <RadioGroup aria-label='status' name='status' value={status} onChange={handleChangeStatus} row>
                <FormControlLabel value='todo' control={<Radio />} label='A Faire' />
                <FormControlLabel value='doing' control={<Radio />} label='En cours' />
                <FormControlLabel value='done' control={<Radio />} label='Fini' />
                <FormControlLabel value='absent' control={<Radio />} label='Absent' />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Box>

        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 1 }} onClick={handleClose}>
            Submit
          </Button>
          <Button variant='tonal' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </div>

      <DialogAddUser toggle={toggle} setToggle={setToggle} />
      <DetailUser showDetail={showDetail} setShowDetail={setShowDetail} />
      <DialogAddPoint togglePoint={togglePoint} setTogglePoint={setTogglePoint} />
      <DetailPointDeVente showDetailPoint={showDetailPoint} setShowDetailPoint={setShowDetailPoint} />
    </Drawer>
  )
}

export default DialogEditVisite
