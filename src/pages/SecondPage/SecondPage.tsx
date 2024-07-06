import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DepartmentList from '../../components/DepartmentList/DepartmentList';
import { Container, DataGridContainer } from './SecondPage.styles';
import { Typography } from '@mui/material';

interface Post {
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 350 },
  { field: 'body', headerName: 'Body', width: 1050 },
];

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container>
      <DataGridContainer>
        <DataGrid rows={posts} columns={columns} />
      </DataGridContainer>
      <Typography variant="h5">
          Departments:
        </Typography>
      <DepartmentList />
    </Container>
  );
};

export default SecondPage;
