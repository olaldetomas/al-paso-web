import Layout from "../components/Layout";
import { IconButton } from "../ui/buttons";
import { PlusIcon } from "@heroicons/react/24/solid";
import styled from "styled-components";
import { Input, PrefixInput, Select, TextArea } from "../ui/fields";

export const StyledIconButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <Layout headerTitle={"Inicio"}>
        <StyledIconButton icon={<PlusIcon width={20} />}></StyledIconButton>
        <Input placeholder="Nombre"></Input>
        <Select placeholder="Categoria" options={options} />
        <TextArea placeholder="Descripcion" />
        <PrefixInput placeholder="$ 000.00" type="number" />
      </Layout>
    </>
  );
}
