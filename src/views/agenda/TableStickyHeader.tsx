import { useState, ChangeEvent } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

// import DialogEditVisit from "./visite/DialogEditVisit"

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


function createVisite(pointDeVente: string, h_db: string, h_fin: string, statut: string, conform: boolean | null,date:string): Visite {
  return { pointDeVente, h_db, h_fin, statut, conform,date };
}

const MarshandiserVisites: MerchandiserVisite[] = [
  {
    merchandiser: "Soumia",
    visites: [
      createVisite("Morocco Mall", "8:00", "12:00", "to do", null,"2024-11-25"),
      createVisite("Marjane Ain Sbaa", "13:00", "15:00", "done", true,"2024-11-26"),
      createVisite("Carrefour", "18:00", "21:00", "absent", true,"2024-11-27"),
      createVisite("Bim", "8:00", "12:00", "done", false,"2024-11-28"),
    ]
  },
  {
    merchandiser: "Jihan",
    visites: [
      createVisite("Morocco Mall", "8:00", "12:00", "to do", null,"2024-11-25"),
      createVisite("Marjane Ain Sbaa", "13:00", "15:00", "absent", true,"2024-11-26"),
      createVisite("Carrefour", "18:00", "21:00", "doing", true,"2024-11-27"),
      createVisite("Bim", "8:00", "12:00", "done", false,"2024-11-28"),
    ]
  },
  {
    merchandiser: "Aymen",
    visites: [
      createVisite("Morocco Mall", "8:00", "12:00", "doing", null,"2024-11-25"),
      createVisite("Marjane Ain Sbaa", "13:00", "15:00", "doing", true,"2024-11-26"),
      createVisite("Carrefour", "18:00", "21:00", "doing", true,"2024-11-27"),
      createVisite("Bim", "8:00", "12:00", "absent", false,"2024-11-28"),
    ]
  }
];



const TableStickyHeader = () => {

  return (
    <>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label='customized table'>
          <TableHead sx={{ backgroundColor: "#EBDEF0" }}>
            <TableRow >
              <TableCell sx={{ color: "#9B59B6" }}>Poste</TableCell>
              <TableCell sx={{ color: "#9B59B6" }}>Visite 1</TableCell>
              <TableCell sx={{ color: "#9B59B6" }}>Visite 2</TableCell>
              <TableCell sx={{ color: "#9B59B6" }}>Visite 3</TableCell>
              <TableCell sx={{ color: "#9B59B6" }}>Visite 4</TableCell>
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
                    <VisiteComponent
                      merchandiser={row.merchandiser}
                      visite={singleVisite}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableStickyHeader;
