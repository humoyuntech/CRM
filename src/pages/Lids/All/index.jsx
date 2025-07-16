import GenericTable from '../../../components/Generics/Table'
import { Container } from './style'

export const AllLids = () => {
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
        <GenericTable headCells={headCells} rows={rows} />
    </Container>
  )
}

export default AllLids