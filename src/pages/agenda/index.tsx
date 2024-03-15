import TableStickyHeader from '../../views/agenda/TableStickyHeader'
import PickersBasic from 'src/views/agenda/picker/PickersBasic'
import DialogAddCard from 'src/views/agenda/visite/DialogAddCard'
import Filter from 'src/views/agenda/Filter'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import { useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'

function Index() {
  const [show, setShow] = useState<boolean>(false)
  const theme = useTheme()
  const { direction } = theme

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <PageHeader title={<Typography variant='h1'>Agenda</Typography>} />
        <Grid container justifyContent={{ xs: 'center', sm: 'flex-start' }}>
          <Grid xs={12} sm={4} md={3} sx={{ mb: 2 }}>
            <Button
              variant='contained'
              onClick={() => {
                setShow(true)
              }}
            >
              <Icon fontSize='1.25rem' icon='tabler:plus' />
              Nouvelle Visite
            </Button>
          </Grid>
          <Grid  xs={12} sm={8} md={9} container justifyContent='flex-end' spacing={1} sx={{ mb: 2 }}>
            <Grid >
              <PickersBasic />
            </Grid>
            <Grid >
              <Filter />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <TableStickyHeader />
      </Grid>
      <DialogAddCard show={show} setShow={setShow} />
    </Box>
  )
}

export default Index
