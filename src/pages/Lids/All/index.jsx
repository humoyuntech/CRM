import { useState } from 'react';
import GenericTable from '../../../components/Generics/Table'
import { Container } from './style'
import { Breadcrumb } from "../../../components/Generics/BreadCrumb";
export const AllLids = () => {
  const [open, setOpen] = useState(false);

  const headCells = [
    { id: "name", label: "O'quvchining ismi" },
    { id: "group", label: "Guruh / Fan" },
    { id: "date", label: "Dars kuni va vaqti" },
    { id: "addedDate", label: "Qo’shilgan sana" },
    { id: "admin", label: "Moderator" },
  ];
  let rows = [
    {
      id: 1,
      name: "Khumoyun",
      group: "Frontend",
      date: "21.05.2025",
      addedDate: "21.05.2025",
      admin: "Humo Admin",
    },
    {
      id: 2,
      name: "Bexruz",
      group: "Frontend",
      date: "21.05.2025",
      addedDate: "21.05.2025",
      admin: "Humo Admin",
    },
    {
      id: 3,
      name: "Ilhom",
      group: "Frontend",
      date: "21.05.2025",
      addedDate: "21.05.2025",
      admin: "Humo Admin",
    },
  ];

  return (
  <Container>
      <Breadcrumb>
        <button onClick={() => setOpen(!open)}>Filter</button>
        <button onClick={() => setOpen(!open)}>Import</button>
        <button onClick={() => setOpen(!open)}>Buyurtma berish</button>
      </Breadcrumb>
      <GenericTable open={open} headCells={headCells} rows={rows} />
    </Container>
  )
}

export default AllLids