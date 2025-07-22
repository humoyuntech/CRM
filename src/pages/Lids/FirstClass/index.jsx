import { useState } from 'react';
import GenericTable from '../../../components/Generics/Table'
import { Container, Action } from './style'
import { Breadcrumb } from "../../../components/Generics/BreadCrumb";
import GenericButton from '../../../components/Generics/Button';
import GenericSelect from '../../../components/Generics/Select';
import AllLidsModal from "./modal";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

export const FirstClass = () => {

const [open, setOpen] = useState(false);
const [modalOpen, setModal] = useState(false);
const [modalProps, setModalProps] = useState({});

const onEdit = (e, res) => {
e.stopPropagation();
setModal(!modalOpen);
setModalProps(res);
};

const headCells = [
{ id: "name", label: "O'quvchining ismi" },
{ id: "group", label: "Guruh / Fan" },
{ id: "date", label: "Dars kuni va vaqti" },
{ id: "addedDate", label: "Qo’shilgan sana" },
{ id: "admin", label: "Moderator" },
{
    id: "action",
    label: "",
    render: (res) => (
    <Action>
        <Action.Edit onClick={(e) => onEdit(e, res)} />
        {/* <Action.Move onClick={onMove} /> */}
    </Action>
    ),
},
];


let rows = [
    {
        id: 1,
        name: "Khumoyun",
        group: "Frontend",
        days: "toq kunlari",
        date: "21.05.2025",
        addedDate: "21.05.2025",
        admin: "Humo Admin",
        level: "Beginer",
    },
    {
        id: 2,
        name: "Bexruz",
        group: "Frontend",
        days: "toq kunlari",
        date: "21.05.2025",
        addedDate: "21.05.2025",
        admin: "Humo Admin",
        level: "Beginer",
    },
    {
        id: 3,
        name: "Ilhom",
        group: "Frontend",
        days: "toq kunlari",
        date: "21.05.2025",
        addedDate: "21.05.2025",
        admin: "Humo Admin",
        level: "Beginer",
    },
];

const data1 = [
    { value: "uzbek", title: "Uzbek" },
    { value: "russian", title: "Russian" },
    { value: "english", title: "English" },
  ];

const onToggleModal = () => {
    setModal(!modalOpen);
    setModalProps(null);
  };

const onSave = () => {
// setModal(!modalOpen);
};

  return (
    <Container>
      <AllLidsModal
        data={modalProps}
        open={modalOpen}
        onClose={onToggleModal}
        onSave={onSave}
      />
      <Breadcrumb>
        <GenericButton type="import" onClick={() => setOpen(!open)}>
          Import
        </GenericButton>
        <GenericButton type="filter" onClick={() => setOpen(!open)}>
          Filter
        </GenericButton>
      </Breadcrumb>
      <GenericTable open={open} headCells={headCells} rows={rows}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={["year", "month", "day"]}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
        <GenericSelect data={data1} />
        <GenericSelect data={data1} />
      </GenericTable>
    </Container>
  );
};


export default FirstClass;