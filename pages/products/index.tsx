import Layout from "../../components/Layout";
import { IconButton } from "../../ui/Buttons";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <Layout headerTitle={"Productos"}>
        <Link href="/products/add-product">
          <IconButton
            onClick={() => console.log("new peoduct")}
            icon={<PlusIcon width={20} />}
            primary={true}
          />
        </Link>
      </Layout>
    </>
  );
}
