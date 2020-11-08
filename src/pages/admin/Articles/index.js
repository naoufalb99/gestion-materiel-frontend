import React from "react";
import Layout from "../../../components/Layout";
import { Table, Td, Tr, Th } from "../../../components/Table";

const Articles = () => {
  return (
    <Layout>
      <Table>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Date</Th>
          <Th>Categorie</Th>
        </Tr>
        <Tr>
          <Td>5552</Td>
          <Td>Hmad</Td>
          <Td>15/02/1998</Td>
          <Td>test3</Td>
        </Tr>
        <Tr>
          <Td>test1</Td>
          <Td>test2</Td>
          <Td>test3</Td>
          <Td>test3</Td>
        </Tr>
        <Tr>
          <Td>test1</Td>
          <Td>test2</Td>
          <Td>test3</Td>
          <Td>test3</Td>
        </Tr>
        <Tr>
          <Td>test1</Td>
          <Td>test2</Td>
          <Td>test3</Td>
          <Td>test3</Td>
        </Tr>
      </Table>
    </Layout>
  );
};

export default Articles;
