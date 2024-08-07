"use client";
import { columns } from "@/app/columns";
import { IProduct } from "@/common/interface";
import { fetchReviews } from "@/services";
import React, { useState } from "react";
import { DataTable } from "./DataTable";
import ProductReviewModal from "./ReviewModal";

const ProductTableComponent = ({ productsRes }: any) => {
  const [modalData, setModalData] = useState<any>(null);

  /**
   * Function responsible to fetch the product review details
   */
  const fetchReviewData = async (row: any) => {
    try {
      const reviewsRes = await fetchReviews(row?.original?.id);
      setModalData({ ...reviewsRes });
    } catch (error) {
      setModalData(null);
    }
  };
  const newColumns = columns(fetchReviewData);

  return (
    <React.Fragment>
      <ProductReviewModal
        productInfo={modalData as any}
        setModalData={setModalData}
      />
      <DataTable
        headerText="Product List"
        columns={newColumns}
        data={productsRes as IProduct[]}
      />
    </React.Fragment>
  );
};

export default ProductTableComponent;
