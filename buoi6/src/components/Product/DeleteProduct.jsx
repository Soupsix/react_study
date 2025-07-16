import React from 'react'
import { deleteProduct } from '../../services/productService';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const DeleteProduct = ({ idProduct, onReload }) => {

  const deleteItem = async () => {
    const result = await deleteProduct(idProduct);
    return result
  }

  const handleDelete =  () => {
    //async là một khoá để khai báo bất đồng bộ
    //await chỉ hoạt động với async, nó sẽ đợi hàm async hoàn thành và trả về kết quả
    // await fetch(`http://localhost:3002/products/${idProduct}`, {
    //     method:'DELETE',
    // });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        onReload();
      }
    });
    
  }

  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default DeleteProduct