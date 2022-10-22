import { AddProductForm } from '../../components/AddProductForm';
import Layout from '../../components/Layout';

export default function AddProduct() {
  return (
    <>
      <Layout headerTitle={'Nuevo producto'}>
        <AddProductForm />
      </Layout>
    </>
  );
}
