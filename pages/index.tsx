import Layout from "../components/Layout/Layout";
import { AddButton } from "../ui/buttons/IconButton";

export default function Home() {
  return (
    <>
      <Layout headerTitle={"Inicio"}>
        <AddButton></AddButton>
      </Layout>
    </>
  );
}
