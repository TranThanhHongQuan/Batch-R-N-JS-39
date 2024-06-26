import React from 'react';
import { Table,Button,Space } from 'antd';
import type { TableProps } from 'antd';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios';

interface DataType {
  id: number;
  title: string;
  price: number;
  description: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Actions',
    key: 'action',
    render: () => {
      return (
        <Space>
        <Button type='dashed'>Edit</Button>
        <Button type='dashed' danger>Delete</Button>
      </Space>
      )
      
    }
  },

];


const Product = () => {
  const getProduct = async() =>{
    return axios.get('https://api.escuelajs.co/api/v1/products').then(res => res.data)
  }
    const { isPending, error, data } = useQuery<DataType[],Error>({
      queryKey: ['products'],
      queryFn:getProduct
        
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
      <div>
          <Table columns={columns} dataSource={data} />;
      </div>
      
      )
  }

export default Product;