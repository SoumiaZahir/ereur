// ** React Imports
import { Ref, useState, forwardRef, ReactElement, ChangeEvent } from 'react'

//**Buutoons Imports */

//**Picker Import */
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

// ** MUI Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomInput from '../picker/PickersCustomInput'
import Box from '@mui/material/Box'
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
import { MerchandiserVisite } from '../TableStickyHeader'
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

//**initialisattion de pickker*/

// const [date, setDate] = useState<DateType>(new Date())
// const [time, setTime] = useState<DateType>(new Date())
interface visiteMarshandiser {
  merchandiser: string
  visite: Visite
}
interface Visite {
  h_db: string
  h_fin: string
  pointDeVente: string
  statut: string
  date: string
}

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
    <Card>
      <Dialog
        fullWidth
        open={show}
        maxWidth='sm'
        scroll='body'
        onClose={handleClose}
        onBackdropClick={handleClose}
        TransitionComponent={Transition}
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(8)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <CustomCloseButton onClick={handleClose}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
          <Box sx={{ mb: 4, textAlign: 'left' }}>
            <Typography variant='h3' sx={{ mb: 3 }}>
              Modifier une Visite
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='Point de Vente' defaultValue={visite.pointDeVente} />
            </Grid>
            <Grid item xs={12} sm={6} marginTop={4} >
              <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
                <Grid item>
                <dfn title='Rechercher un point de vente '>
              <IconButton aria-label='capture screenshot'>
                <Icon
                  icon='tabler:home-search'
                  onClick={() => {
                    setShowDetailPoint(true)
                  }}
                />
              </IconButton>
              </dfn>
              <dfn title='Ajouter un point de vente'>
              <IconButton aria-label='capture screenshot'>
                <Icon
                  icon='tabler:home-plus'
                  onClick={() => {
                    setTogglePoint(true)
                  }}
                />
              </IconButton>
              </dfn>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='Marshandiser' defaultValue={merchandiser} />
            </Grid>
            <Grid item xs={12} sm={6} marginTop={4} >
              <Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
                <Grid item>
                <dfn title='Rechercher Marshandiser'>
              <IconButton>
                <Icon icon='tabler:user-search' onClick={() => setShowDetail(true)} />
              </IconButton>
              </dfn>
              <dfn title='Ajouter Marshandiser'>
              <IconButton>
                <Icon icon='tabler:user-plus' onClick={() => setToggle(true)} />
              </IconButton>
              </dfn>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
            <DatePicker
              timeIntervals={15}
              showTimeSelectOnly
              dateFormat='h:mm aa'
              id='time-only-picker'
              popperPlacement='auto'
              onChange={(date) => console.log(date)} // Add placeholder onChange handler here
              customInput={<CustomInput label='heure_debut' />}
            />

            </Grid>
            <Grid item xs={12} sm={6}>
            <DatePicker
              timeIntervals={15}
              showTimeSelectOnly
              dateFormat='h:mm aa'
              id='time-only-picker'
              popperPlacement='auto'
              onChange={(date) => console.log(date)} // Add placeholder onChange handler here
              customInput={<CustomInput label='heure_fin' />}
            />

            </Grid>
            <Grid item xs={12} sm={6}>
              <PickersBasic/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Status</FormLabel>
                <RadioGroup aria-label='status' name='status' value={visite.statut} onChange={handleChangeStatus} row>
                  <FormControlLabel value='todo' control={<Radio />} label='A Faire' />
                  <FormControlLabel value='doing' control={<Radio />} label='En cours' />
                  <FormControlLabel value='done' control={<Radio />} label='Fini' />
                  <FormControlLabel value='absent' control={<Radio />} label='Absent' />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
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
      </Dialog>
      <DialogAddUser toggle={toggle} setToggle={setToggle} />
      <DetailUser showDetail={showDetail} setShowDetail={setShowDetail} />
      <DialogAddPoint togglePoint={togglePoint} setTogglePoint={setTogglePoint} />
      <DetailPointDeVente showDetailPoint={showDetailPoint} setShowDetailPoint={setShowDetailPoint} />
    </Card>
  )
}

export default DialogEditVisite
