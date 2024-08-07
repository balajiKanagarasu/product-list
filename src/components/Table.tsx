import * as css from "@emotion/react";
import styled from "@emotion/styled";

// Define styles for the table
const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  position: relative;
  background-color: #fff;
`;

const Thead = styled.thead`
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: inherit;
`;

const Tbody = styled.tbody`
  background-color: #fff;
  &:hover {
    background-color: #ebebee;
  }
`;

const Th = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
  border-bottom: 1px solid #ededed;
`;

// Define a style for alternate row colors
const TRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #ededed; 
  }
  &:nth-of-type(even) {
    background-color: #ffffff; /* White background for even rows */
  }
  &:HOVER {
    background-color: rgb(191 219 254 / var(--tw-bg-opacity)); 
  }
`;

const THRow = styled.tr`
  background-color: #fff; 
`;

const TableContainer = styled.div`
  max-height: calc(100vh - 175px);
  width: 100%;
  overflow: auto; /* To handle overflow on smaller screens */
`;

export { Table, Thead, Tbody, Th, Td, TRow, THRow, TableContainer };
