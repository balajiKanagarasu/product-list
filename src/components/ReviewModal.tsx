"use client";
import { IProduct } from "@/common/interface";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Table, TableContainer, Tbody, Td, Th, Thead, TRow } from "./Table";

interface IProps {
  productInfo: IProduct;
  setModalData: Dispatch<SetStateAction<IProduct | null>>;
}

const ReviewModal = ({ productInfo, setModalData }: IProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  /**
   * To update the product data.
   */
  useEffect(() => {
    if (productInfo) {
      setIsDialogOpen(true);
    }
  }, [productInfo]);

  /**
   * To handle the Dialog close.
   */
  const handleClose = () => {
    setIsDialogOpen(false);
    setModalData(null);
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "80%", // Adjust the width as needed
          maxWidth: "none", // Optional: Remove the default maxWidth constraint
        },
      }}
    >
      <DialogTitle className="text-xl font-bold border-b">
        Reviews for {productInfo?.title}
      </DialogTitle>
      <DialogContent>
        <div className="p-2 pb-0">
          <TableContainer>
            <Table>
              <Thead>
                <TRow>
                  <Th>Reviewer Name</Th>
                  <Th>Reviewer Email</Th>
                  <Th>Rating</Th>
                  <Th>Comment</Th>
                  <Th>Date</Th>
                </TRow>
              </Thead>
              <Tbody>
                {productInfo?.reviews?.map(
                  (review: any, reviewIndex: number) => (
                    <TRow key={`${review?.reviewerEmail}_${reviewIndex}`}>
                      <Td>{review.reviewerName}</Td>
                      <Td>
                        <Tooltip title={review.reviewerEmail}>
                          {review.reviewerEmail}
                        </Tooltip>
                      </Td>
                      <Td>{review.rating}</Td>
                      <Td>
                        <Tooltip title={review.comment}>
                          {review.comment}
                        </Tooltip>
                      </Td>
                      <Td>{new Date(review.date).toLocaleDateString()}</Td>
                    </TRow>
                  )
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;
