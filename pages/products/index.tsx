import Layout from '../../components/Layout';
import { IconButton } from '../../ui/Buttons';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useProducts } from '../../lib/api-hooks';
import styled from 'styled-components';

const Product = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  background-color: ${({ theme }) => theme.colors.g1};
  border-radius: ${({ theme }) => theme.rounded.sm};
  padding: 10px;
  margin-top: 5px;
`;

export const ProductTitle = styled.h4`
  color: ${({ theme }) => theme.colors.g10};
  margin: 0;
  font-size: 15px;
  font-weight: 400;
`;

export const Description = styled.h6`
  color: ${({ theme }) => theme.colors.g8};
  margin: 0;
  font-weight: 400;
`;

export default function Products() {
  const { products, isLoading } = useProducts();
  console.log(products);
  return (
    <>
      <Layout headerTitle={'Productos'}>
        <Link href="/products/add-product">
          <IconButton icon={<PlusIcon width={20} />} />
        </Link>
        <>
          {products &&
            products.map((product, index) => {
              return (
                <Product key={index}>
                  <ProductTitle>{product.name}</ProductTitle>
                  <Description>{product.description}</Description>
                </Product>
              );
            })}
        </>
      </Layout>
    </>
  );
}
