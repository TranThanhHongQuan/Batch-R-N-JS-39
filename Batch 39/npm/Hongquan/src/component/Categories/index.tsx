import React from 'react'
import Addcategories from './AddCategories.tsx'
type TCotegory = {
  id: string;
  name: string;
  image: string;
}
type TCotegories = TCotegory[];


const Categories = () => {
    const [categories,setCategories] = React.useState<TCotegories>([])
    console.log(categories)
  React.useState(()=>{
    const fetchData = async () =>
        {
            const url = 'https://api.escuelajs.co/api/v1/categories';
            const options ={
                method: 'GET',
            };
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data)
            setCategories(data)
        };
        fetchData();
  },[]);
  return (
    <div>
        <div><Addcategories/></div>
        <h1 className='text-3xl'>Categories</h1>
        <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">ID</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
            {categories.map((category) => 
            {
                return (
                    <tr>
                    <td className="py-2 px-4 border-b border-gray-200">{category.id}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{category.name}</td>
                    <td className="py-2 px-4 border-b border-gray-200">Xóa Sửa</td>
                  </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Categories;
