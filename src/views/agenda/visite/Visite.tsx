import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Icon from 'src/@core/components/icon'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { MerchandiserVisite, Visite } from '../TableStickyHeader'
import DialogEditVisite from './DialogEditVisit'
import SidebarProduit from './ProduitVisite'


interface VisitesStatusesColors {
  'to do': string
  doing: string
  done: string
  absent: string
  default: string
}
const visitesStatusesColors: VisitesStatusesColors = {
  'to do': '#E0F2FE',
  doing: '#FFEDD5',
  done: '#D1FAE5',
  absent: '#f74033',
  default: '#fff'
}

function VisiteComponent({
  visite,
  merchandiser
}: {
  visite: Visite
  merchandiser: MerchandiserVisite['merchandiser']
}) {
  const visiteBgColor =
    visitesStatusesColors[visite.statut as keyof typeof visitesStatusesColors] || visitesStatusesColors.default

  const [show, setShow] = useState(false)
  const [showProduit, setShowProduit] = useState(false)
  return (
    <>
      <Card sx={{ backgroundColor: visiteBgColor, alignItems: 'center', position: 'relative' }}>
        {/* && (['doing','done'].includes(visite.statut)) */}
        {visite.statut == 'done' || visite.statut == 'doing' ? (
          visite.conform ? (
            <Card sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, backgroundColor: '#BEF264', width: '18px' }}>
              <p style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', color: 'black' }}>conform</p>
            </Card>
          ) : (
            <Card sx={{ position: 'absolute', top: 0, bottom: 0, backgroundColor: '#F11C1C ', width: '18px' }}>
              <p style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', color: 'black' }}>Non Conforme</p>
            </Card>
          )
        ) : null}
        <Grid container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Icon
            icon='tabler:edit'
            fontSize='1.625rem'
            color='#860C90'
            onClick={() => {
              setShow(true)
            }}
          />
          <Icon
            icon='tabler:slideshow'
            fontSize='1.625rem'
            color='#860C90'
            onClick={() => {
              setShowProduit(true)
            }}
          />
        </Grid>
        <CardHeader title={visite.pointDeVente} />
        <CardContent>
          <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
            {visite.h_db} - {visite.h_fin}
          </Typography>
          <Typography variant='body2'>{/* Image rendering */}</Typography>
        </CardContent>

        <DialogEditVisite merchandiser={merchandiser} visite={visite} setShow={setShow} show={show} />
        <SidebarProduit showProduit={showProduit} setShowProduit={setShowProduit} />
      </Card>
    </>
  )
}

export default VisiteComponent
