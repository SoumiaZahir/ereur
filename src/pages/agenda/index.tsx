import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'
import Planing from 'src/views/agenda/visite/planingManuelle/index'
import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
// Make sure these imports are correct
import TableStickyHeader from '../../views/agenda/TableStickyHeader'
import PickersBasic from 'src/views/agenda/picker/PickersBasic'
import DialogAddCard from 'src/views/agenda/visite/DialogAddCard'
import Filter from 'src/views/agenda/Filter'
import PlaningManuelle from 'src/views/agenda/visite/planingManuelle/PlaningManuelle'
import Information from 'src/views/agenda/visite/plusInformation/information'

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}))

function Index() {
  const [show, setShow] = useState<boolean>(false)
  const [togglePlaningManuelle, setTogglePlaningManuelle] = useState<boolean>(false)
  const [showInfo, setShowInfo] = useState<boolean>(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <PageHeader title={<Typography variant='h1'>Agenda</Typography>} />
        </Grid>
        <Grid item xs={12}>
          <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ gap: 4, display: 'flex', alignItems: 'center' }}>
              <Button
                variant='contained'
                onClick={() => {
                  setShow(true)
                }}
                startIcon={<Icon fontSize='1.25rem' icon='tabler:plus' />}
                sx={{ marginTop: '15px' }}
              >
                Nouvelle Visite
              </Button>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Card sx={{ backgroundColor: '#E0F2FE', marginRight: '8px', width: '24px', height: '24px' }}>
                        <CardContent></CardContent>
                      </Card>
                      <Typography color='inherit'>Visite planifier</Typography>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Card sx={{ backgroundColor: '#FFEDD5', marginRight: '8px', width: '24px', height: '24px' }}>
                        <CardContent></CardContent>
                      </Card>
                      <Typography color='inherit'>Visite en cours</Typography>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Card sx={{ backgroundColor: '#D1FAE5', marginRight: '8px', width: '24px', height: '24px' }}>
                        <CardContent></CardContent>
                      </Card>
                      <Typography color='inherit'>Visite terminer</Typography>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Card sx={{ backgroundColor: '#f74033', marginRight: '8px', width: '24px', height: '24px' }}>
                        <CardContent></CardContent>
                      </Card>
                      <Typography color='inherit'>Visite absent</Typography>
                    </div>
                    <hr />
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Icon icon='tabler:clock-cancel' style={{ color: 'red' }} />
                      <Typography color='inherit'>Duree non respecter</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Icon icon='tabler:alarm-snooze' style={{ color: 'red' }} />

                      <Typography color='inherit'>Retard</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Icon icon='tabler:arrows-sort' style={{ color: 'red' }} />

                      <Typography color='inherit'>Ordre non respect</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Icon icon='tabler:shopping-cart-off' style={{ color: 'red' }} />

                      <Typography color='inherit'>Probleme de repture</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Icon icon='tabler:shopping-cart-exclamation' style={{ color: 'red' }} />

                      <Typography color='inherit'>Probleme de Stock</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Icon icon='tabler:camera-exclamation' style={{ color: 'red' }} />
                      <Typography color='inherit'>Probleme de Facing</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Icon icon='tabler:rosette-discount' color={'#860C90'} />
                      <Typography color='inherit'>Promontions</Typography>
                    </div>
                  </React.Fragment>
                }
              >
                <Button>
                  <Icon
                    fontSize='1.25rem'
                    icon='tabler:info-square-filled'
                    style={{ fontSize: '2.75rem', color: '#2b16d0', marginTop: '1rem' }}
                    onClick={() => setShowInfo(true)}
                  />
                </Button>
              </HtmlTooltip>
            </Box>
            <Box sx={{ gap: 4, display: 'flex', alignItems: 'center' }}>
              <Button
                variant='contained'
                startIcon={<Icon fontSize='1.25rem' icon='tabler:plus' />}
                sx={{ marginTop: '15px' }}
                onClick={() => {
                  setTogglePlaningManuelle(true)
                }}
              >
                Cree Planing
              </Button>
              <Button
                variant='contained'
                startIcon={<Icon fontSize='1.25rem' icon='tabler:plus' />}
                sx={{ marginTop: '15px' }}
              >
                Import Planing
              </Button>
              <PickersBasic />
              <Filter />
            </Box>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <TableStickyHeader />
        </Grid>
      </Grid>
      <DialogAddCard show={show} setShow={setShow} />
      <Planing togglePlaningManuelle={togglePlaningManuelle} setTogglePlaningManuelle={setTogglePlaningManuelle} />
      <Information showInfo={showInfo} setShowInfo={setShowInfo} />
    </Box>
  )
}

export default Index
