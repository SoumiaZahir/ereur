// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Divider from '@mui/material/Divider'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiStepper, { StepperProps } from '@mui/material/Stepper'
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import PageHeader from 'src/@core/components/page-header'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Alert from '@mui/material/Alert'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Step Components

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'
import Box, { BoxProps } from '@mui/material/Box'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'
import PlaningManuelle from './PlaningManuelle'

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const steps = [
  {
    title: 'Lundi'
  },
  {
    title: 'Mardi'
  },
  {
    title: 'Mercredi'
  },
  {
    title: 'Jeudi'
  },
  {
    title: 'Vendredi'
  },
  {
    title: 'Samedi'
  },
  {
    title: 'Dimanche'
  }
]

const Stepper = styled(MuiStepper)<StepperProps>(({ theme }) => ({
  margin: 'auto',
  maxWidth: '100%',
  justifyContent: 'space-around',

  '& .MuiStep-root': {
    cursor: 'pointer',
    textAlign: 'center',
    '&:not(:last-child)': {
      paddingBottom: theme.spacing(8)
    },
    '&.Mui-completed + svg': {
      color: theme.palette.primary.main
    },
    '& + svg': {
      display: 'none',
      color: theme.palette.text.disabled
    },

    '& .MuiStepLabel-label': {
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      '& .step-title': {
        fontWeight: 400
      },
      '& svg': {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(0.75),
        fill: theme.palette.text.primary
      },
      '&.Mui-active .MuiTypography-root': {
        color: theme.palette.primary.main // Couleur du texte en jaune lorsque l'étape est en cours
      },
      '&.Mui-completed .MuiTypography-root': {
        color: 'green' // Couleur du texte en vert lorsque l'étape est complétée
      },
      '&.Mui-active svg': {
        fill: theme.palette.primary.main
      },
      '&.Mui-completed svg': {
        fill: theme.palette.primary.main
      }
    },

    [theme.breakpoints.up('md')]: {
      paddingBottom: '0 !important',
      '& + svg': {
        display: 'block'
      },
      '& .MuiStepLabel-label': {
        display: 'block'
      }
    }
  }
}))

const CheckoutWizard = ({
  togglePlaningManuelle,
  setTogglePlaningManuelle
}: {
  togglePlaningManuelle: boolean
  setTogglePlaningManuelle: any
}) => {
  // ** States
  const [activeStep, setActiveStep] = useState<number>(0)

  // ** Hooks & Var
  const { settings } = useSettings()
  const smallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const { direction } = settings

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PlaningManuelle handleNext={handleNext} />
      case 1:
        return <PlaningManuelle handleNext={handleNext} />
      case 2:
        return <PlaningManuelle handleNext={handleNext} />
      case 3:
        return <PlaningManuelle handleNext={handleNext} />
      case 4:
        return <PlaningManuelle handleNext={handleNext} />
      case 5:
        return <PlaningManuelle handleNext={handleNext} />
      case 6:
        return <PlaningManuelle handleNext={handleNext} />
      default:
        return null
    }
  }

  const renderContent = () => {
    return getStepContent(activeStep)
  }
  const handleClose = () => {
    setTogglePlaningManuelle(false)
  }

  return (
    <Drawer
      open={togglePlaningManuelle} // Contrôle l'ouverture et la fermeture du Drawer
      anchor='right' // Ancre le Drawer à droite
      variant='temporary' // Permet au Drawer de s'ouvrir et de se fermer
      onClose={handleClose} // Appelé lorsque le Drawer est fermé
      ModalProps={{ keepMounted: true }} // Permet au Drawer d'être rendu dans le DOM même s'il est fermé
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: 1300, sm: 1300 }, // Largeur du Drawer pour les tailles d'écran xs et sm
          marginTop: '90px', // Marge haute du Drawer
          paddingBottom: '20px', // Marge basse du Drawer
          height: '86%' // Hauteur du Drawer
        }
      }}
    >
      <div>
        <Box sx={{ flexGrow: 1 }} width={'100%'}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
              <Header>
                <PageHeader
                  title={
                    <Typography variant='h1' sx={{ display: 'flex', alignItems: 'center' }}>
                      <Icon icon='tabler:calendar-month' fontSize={34} />
                      Cree Un Planing
                    </Typography>
                  }
                />
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
            </Grid>
            <Card sx={{ width: '100%' }} className='match-height'>
              <CardContent sx={{ py: 11.5, width: '100%' }}>
                <StepperWrapper>
                  <Stepper
                    activeStep={activeStep}
                    connector={
                      !smallScreen ? (
                        <Icon
                          fontSize='1.5rem'
                          icon={direction === 'ltr' ? 'tabler:chevron-right' : 'tabler:chevron-left'}
                        />
                      ) : null
                    }
                  >
                    {steps.map((step, index) => {
                      return (
                        <Step key={index} onClick={() => setActiveStep(index)} sx={{}}>
                          <StepLabel icon={<></>}>
                            <Typography className='step-title' variant='h1'>
                              {step.title}
                            </Typography>
                          </StepLabel>
                        </Step>
                      )
                    })}
                  </Stepper>
                </StepperWrapper>
              </CardContent>

              <Divider sx={{ m: '0 !important' }} />

              <CardContent>{renderContent()}</CardContent>
            </Card>
          </Grid>
        </Box>
      </div>
    </Drawer>
  )
}

export default CheckoutWizard
