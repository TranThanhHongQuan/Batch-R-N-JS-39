import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'

const schema = yup
  .object({
    name: yup.string().min(6,"ít nhất tối thiểu phải 6 ký tự").required("Tên là bắt buộc"),
    image: yup.string().url("URL không hợp lệ").optional(),
  })
  .required()

const AddCategories = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      
      const onSubmit = async (data) => {
        console.log(data)
        try {
            const url = 'https://api.escuelajs.co/api/v1/categories/'
            const response = await axios.post(url, data)
            console.log('response', response)
        } catch (error) {
            if (error.response) {
                console.log('Dữ liệu phản hồi lỗi:', error.response.data);
                console.log('Trạng thái phản hồi lỗi:', error.response.status);
                console.log('Tiêu đề phản hồi lỗi:', error.response.headers);
            } else if (error.request) {
                console.log('Yêu cầu lỗi:', error.request);
            } else {
                console.log('Lỗi:', error.message);
            }
        }
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" placeholder='Name' {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input id="image" placeholder='Image' {...register("image")} />
        <p>{errors.image?.message}</p>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddCategories
