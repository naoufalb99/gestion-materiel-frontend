import React from "react";
import Button from "../../../components/Button";
import PageHeading from "../../../components/PageHeading";
import { Table, Td, Tr, Th } from "../../../components/Table";
import routes from "../../../config/routes";

const Articles = () => {
  return (
    <>
      <PageHeading title="Articles">
        <Button to={routes.ADMIN_ARTICLES_ADD.path}>Add Article</Button>
      </PageHeading>
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
    </>
  );
};

export default Articles;
