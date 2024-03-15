import { useState, ChangeEvent } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Icon from 'src/@core/components/icon'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// import DialogEditVisit from "./visite/DialogEditVisit"
import SidebarProduit from './visite/ProduitVisite';
import VisiteComponent from './visite/Visite';

export interface Visite {
  pointDeVente: string;
  h_db: string;
  h_fin: string;
  statut: string;
  conform: boolean | null;
  date: string
}

export interface MerchandiserVisite {
  merchandiser: string;
  visites: Visite[];
}


function createVisite(pointDeVente: string, h_db: string, h_fin: string, statut: string, conform: boolean | null): Visite {
  return { pointDeVente, h_db, h_fin, statut, conform };
}

const MarshandiserVisites: MerchandiserVisite[] = [
  {
    merchandiser: "Soumia",
    visites: [
      createVisite("Morocco Mall", "8:00", "12:00", "to do", null),
      createVisite("Marjane Ain Sbaa", "13:00", "15:00", "doing", true),
      createVisite("Carrefour", "18:00", "21:00", "doing", true),
      createVisite("Bim", "8:00", "12:00", "done", false),
    ]
  },
  {
    merchandiser: "Jihan",
    visites: [
      createVisite("Morocco Mall", "8:00", "12:00", "doing", false),
      createVisite("Marjane Ain Sbaa", "13:00", "15:00", "to do", null),
      createVisite("Carrefour", "18:00", "21:00", "done", false),
      createVisite("Bim", "8:00", "12:00", "absent", null),
    ]
  },
  {
    merchandiser: "Aymen",
    visites: [
      createVisite("Morocco Mall", "8:00", "12:00", "to do", null),
      createVisite("Marjane Ain Sbaa", "13:00", "15:00", "doing", true),
      createVisite("Carrefour", "18:00", "21:00", "absent", null),
      createVisite("Bim", "8:00", "12:00", "doing", true),
    ]
  }
];



const TableStickyHeader = () => {
  const [showEdit,setShowEdit]=useState<boolean>(false)
  const [visiteMarshandiser, setVisiteMarshandiser] = useState<MerchandiserVisite | null>(null);
  const [showProduit,setShowProduit]=useState<boolean>(false)

const handleEditClick = (_visite: Visite, merchandiser:string) => {
  setShowEdit(true);
  setVisiteMarshandiser({
    merchandiser,
    visites: [_visite]
  });
};
const handleShowProduit=()=>{
  setShowProduit(true)
}


  const renderEventComponent = (event: Visite, merchandiser: string) => {
    switch (event.statut) {
      case 'to do':
        return (
          <Card sx={{ backgroundColor: '#E0F2FE', alignItems: 'center' }}>
            <Grid container sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <Icon icon='tabler:edit' fontSize='1.625rem' color='#860C90' onClick={()=>handleEditClick(event,merchandiser)} />
              <Icon icon='tabler:slideshow' fontSize='1.625rem' color='#860C90' onClick={handleShowProduit}/>
            </Grid>
            <CardHeader title={event.pointDeVente} />
            <CardContent>
              <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
                {event.h_db} - {event.h_fin}
              </Typography>
              <Typography variant='body2'>
                {/* Image rendering */}
              </Typography>
            </CardContent>
          </Card>
        );
      case 'doing':
        return (
          <Card sx={{ backgroundColor: '#FFEDD5', position: 'relative' }}>
            {event.conform ? (
                <Card sx={{ position: 'absolute', top: 0, bottom: 0, backgroundColor: '#BEF264', width: '18px' }}>
                  <p style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', color: 'black' }}>
                    conform
                  </p>
                </Card>
              ) : (
                <Card sx={{ position: 'absolute',  top: 0, bottom: 0, backgroundColor: '#F11C1C ', width: '18px' }}>
                  <p style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', color: 'black' }}>
                    Non Conforme
                  </p>
                </Card>
              )}
            <Grid container sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <Icon icon='tabler:edit' fontSize='1.625rem' color='#860C90' onClick={()=>handleEditClick(event,merchandiser)} />
              <Icon icon='tabler:slideshow' fontSize='1.625rem' color='#860C90' onClick={handleShowProduit} />
            </Grid>
            <CardHeader title={event.pointDeVente} />
            <CardContent>
              <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
                {event.h_db} - {event.h_fin}
              </Typography>
              <Typography variant='body2'>
                {/* Image rendering */}
              </Typography>
            </CardContent>
          </Card>
        );
      case 'done':
        return (
          <Card sx={{ backgroundColor: '#D1FAE5', position: 'relative' }}>
            <Grid container sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <Icon icon='tabler:edit' fontSize='1.625rem' color='#860C90'onClick={()=>handleEditClick(event,merchandiser)} />
              <Icon icon='tabler:slideshow' fontSize='1.625rem' color='#860C90' onClick={handleShowProduit} />
            </Grid>
            {event.conform ? (
              <Card
                sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: '#BEF264', width: '18px' }}
              >
                <p
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', marginTop: '30px', color: '#0DC707' }}
                >
                  Conforme
                </p>
              </Card>
            ) : (
              <Card
                sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: '#F11C1C ', width: '18px' }}
              >
                <p style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', marginTop: '25px', color: 'white' }}>
                  Non Confme
                </p>
              </Card>
            )}
            <CardHeader title={event.pointDeVente} />
            <CardContent>
              <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
                {event.h_db} - {event.h_fin}
              </Typography>
              <Typography variant='body2'>
                {/* Image rendering */}
              </Typography>
            </CardContent>
          </Card>
        );
      case 'absent':
        return (
          <Card sx={{ backgroundColor: '#f74033' }}>
            <Grid container sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <Icon icon='tabler:edit' fontSize='1.625rem' color='white' onClick={()=>handleEditClick(event,merchandiser)} />
              <Icon icon='tabler:slideshow' fontSize='1.625rem' color='white' onClick={handleShowProduit} />
            </Grid>
            <CardHeader title={<Typography sx={{ color: 'white' ,fontSize:"18px"}}>{event.pointDeVente}</Typography>}/>
            <CardContent>
              <Typography variant='body2' sx={{ marginBottom: 3.25,color:"white" }}>
                {event.h_db} - {event.h_fin}
              </Typography>
              <Typography variant='body2'>
                {/* Image rendering */}
              </Typography>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label='customized table'>
        <TableHead sx={{backgroundColor:"#F4ECF7"}}>
          <TableRow >
            <TableCell sx={{color:"#9B59B6"}}>Poste</TableCell>
            <TableCell sx={{color:"#9B59B6"}}>Visite 1</TableCell>
            <TableCell sx={{color:"#9B59B6"}}>Visite 2</TableCell>
            <TableCell sx={{color:"#9B59B6"}}>Visite 3</TableCell>
            <TableCell sx={{color:"#9B59B6"}}>Visite 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MarshandiserVisites.map((row, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {row.merchandiser}
              </TableCell>
              {row.visites.map((singleVisite, i) => (
                <TableCell sx={{ width: '25%' }} key={i}>
                  {/* {renderEventComponent(event, row.merchandiser)} */}
                  {<VisiteComponent merchandiser={row.merchandiser} visite={singleVisite} />}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <SidebarProduit showProduit={showProduit} setShowProduit={setShowProduit} /> */}
      {/* <DialogEditVisit showEdit={showEdit} setShowEdit={setShowEdit} visiteMarshandiser={visiteMarshandiser}  /> */}
    </TableContainer>
  );
};

export default TableStickyHeader;
