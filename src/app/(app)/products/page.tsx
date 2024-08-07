import { IProduct } from "@/common/interface";
import ProductTableComponent from "@/components/ProductTableComponent";
import { getProductDetails } from "@/services";

const ProductsPage = async () => {
  const productsRes: IProduct[] | [{ message: string }] =
    await getProductDetails();

  return <ProductTableComponent productsRes={productsRes} />;
};

export default ProductsPage;
