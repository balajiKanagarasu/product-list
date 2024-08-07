import { IProduct } from "@/common/interface";
import axios, { AxiosResponse } from "axios";

export const baseInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

/**
 * Function responsible to fetch all product details.
 */
export const getProductDetails = async (): Promise<
  IProduct[] | [{ message: any }]
> => {
  try {
    const response: AxiosResponse<{ products: IProduct[] }, any> =
      await baseInstance.get("/products");
    return response?.data?.products;
  } catch (error: any) {
    return [{ message: error?.message }];
  }
};

/**
 * Function responsible to fetch product reviews by their Id.
 * @param productId
 */
export const fetchReviews = async (
  productId: number
): Promise<IProduct | { message: any } | undefined> => {
  try {
    if (productId) {
      const response: AxiosResponse<IProduct, any> = await baseInstance.get(
        `/products/${productId}`
      );
      return response?.data;
    }
  } catch (error: any) {
    return { message: error?.message };
  }
};
