// ** React Imports
import { Ref, useState, forwardRef, ReactElement, ChangeEvent } from 'react'

//**Buutoons Imports */

//**Picker Import */
import DatePicker from 'react-datepicker'

// ** MUI Imports
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

const DialogAddCard = ({ show, setShow }: { show: any; setShow: any }) => {
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
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h3' sx={{ mb: 3 }}>
              Ajouter une Nouvelle Visite
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='pontDeVente-label'>Point De Vente</InputLabel>
                <Select labelId='pontDeVente-label' id='pontDeVente' label='pontDeVente' sx={{ mb: 2, width: '100%' }}>
                  <MenuItem value={10}>pontDeVente 1</MenuItem>
                  <MenuItem value={20}>pontDeVente 2</MenuItem>
                  <MenuItem value={30}>pontDeVente 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} justify-content={'flex-end'}>
              <IconButton aria-label='capture screenshot'>
                <Icon
                  icon='tabler:home-search'
                  onClick={() => {
                    setShowDetailPoint(true)
                  }}
                />
              </IconButton>
              <IconButton aria-label='capture screenshot'>
                <Icon
                  icon='tabler:home-plus'
                  onClick={() => {
                    setTogglePoint(true)
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='marchendiser-label'>Marchendiser</InputLabel>
                <Select labelId='marchendiser-label' id='marchandiser' label='Marchandiser'>
                  <MenuItem value={10}>Marchandiser 1</MenuItem>
                  <MenuItem value={20}>Marchandiser 2</MenuItem>
                  <MenuItem value={30}>Marchandiser 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <IconButton>
                <Icon icon='tabler:user-search' onClick={() => setShowDetail(true)} />
              </IconButton>
              <IconButton>
                <Icon icon='tabler:user-plus' onClick={() => setToggle(true)} />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                showTimeSelect
                // selected={time}
                timeIntervals={15}
                showTimeSelectOnly
                dateFormat='h:mm aa'
                id='time-only-picker'
                popperPlacement='auto'
                // onChange={(date: Date) => setTime(date)}
                customInput={<CustomInput label='heure_debut' />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                showTimeSelect
                // selected={time}
                timeIntervals={15}
                showTimeSelectOnly
                dateFormat='h:mm aa'
                id='time-only-picker'
                popperPlacement='auto'
                // onChange={(date: Date) => setTime(date)}
                customInput={<CustomInput label='heure_fin' />}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              // selected={date}
              id='basic-input'
              popperPlacement='auto'
              // onChange={(date: Date) => setDate(date)}
              placeholderText='Click to select a date'
              customInput={<CustomInput label='Date Visite' />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Status</FormLabel>
              <RadioGroup aria-label='status' name='status' value={status} onChange={handleChangeStatus} row>
                <FormControlLabel value='todo' control={<Radio />} checked label='A Faire' />
                <FormControlLabel value='doing' control={<Radio />} label='En cours' />
                <FormControlLabel value='done' control={<Radio />} label='Fini' />
                <FormControlLabel value='absent' control={<Radio />} label='Absent' />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label='Save Card for future billing?'
              sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
            />
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

export default DialogAddCard
