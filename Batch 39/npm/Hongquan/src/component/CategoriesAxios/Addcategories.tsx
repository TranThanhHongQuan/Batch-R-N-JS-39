import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'
const schema = yup
  .object({
    name: yup.string().min(6,"ít nhất tối thiểu phải 6 ký tự").required(),
    image: yup.string().optional(),
  })
  .required()
const Addcategories = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      
      const onSubmit = async (data) => {
        console.log(data)
        // gọi api để thêm mới danh mục
        try {
            const url = 'https://api.escuelajs.co/api/v1/categories/'
            const response = await axios.post(url,
                {name : data.name,
                image: data.image}
            )
            console.log('response',response)
        } catch (error) {
            console.log(error)
        }
      }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' {...register("name")} />
      <p>{errors.name?.message}</p>
      <input placeholder='Image' {...register("image")} />
      <p>{errors.image?.message}</p>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Addcategories
