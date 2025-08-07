/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Modal } from "../../../components/Generics/Modal";
import GenericInput from "../../../components/Generics/Input";
import Subtitle from "../../../components/Generics/Subtitle";
import Title from "../../../components/Generics/Title";
import MultipleSelect from "../GroupsList/Multiselect";

export const AllLidsModal = (props) => {
  const { data } = props;

  console.log(data, "data");
  return (
    <Modal {...props}>
      <Title size="34px">Lid Qo'shish</Title>
      {/* Kursning yo’nalishi */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Kursning yo’nalishi
      </Subtitle>
      <GenericInput fontWeight={500} width={500} value={data?.name} />

      {/* Filial */}
      <Subtitle mt={16} mb={8} color={"#929FAF"}>
        Filial
      </Subtitle>
      <MultipleSelect />
    </Modal>
  );
};

export default AllLidsModal;
