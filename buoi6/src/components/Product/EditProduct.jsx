
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import { editProduct } from '../../services/productService';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const EditProduct = ({ idProduct, onReload }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [dataCategory, setDataCategory] = useState([]);
    const [data, setData] = useState({});

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        const fetchApi = () => {
            fetch('http://localhost:3002/category')
                .then((res) => res.json())
                .then((data) => {
                    setDataCategory(data)
                    console.log(`Test create: `, data)
                });
        };
        const fetchApiProductId = () => {
            fetch(`http://localhost:3002/products/${idProduct}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    console.log(`Test edit product: `, data)
                });
        };
        fetchApi();
        fetchApiProductId();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault(); //Ngặn chặn sự kiện mặc định của form
        // fetch(`http://localhost:3002/products/${idProduct}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // closeModal();
        // onReload();

        const result = await editProduct(idProduct, data);
        if (result) {
            Swal.fire({
                title: "Edit succesfully",
                text: "Product has been updated",
                icon: "success",
            });
            closeModal();
            onReload();
        } else{
            Swal.fire({
                title:"Error!",
                text: "There was an error while updating product",
                icon:"error",
            })
        }
    }

    const handleChange = (e) => {
        // console.log(e.target.name);
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setData({ ...data, [name]: value })
    }

    console.log(data);

    return (
        <div>
            <button onClick={openModal}>Edit product</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tiêu đề</td>
                                <td>
                                    <input type='text'
                                        name='title'
                                        onChange={handleChange}
                                        value={data.title}
                                    />
                                </td>
                            </tr>

                            {dataCategory.length > 0 ? (
                                <tr>
                                    <td>Category</td>
                                    <td>
                                        <select name='category' onChange={handleChange} value={data.category}>
                                            {(dataCategory || []).map((item, index) => (
                                                <option key={index}>{item.name}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan="2">Loading...</td>
                                </tr>
                            )}
                            <tr>
                                <td>Giá</td>
                                <td>
                                    <input type='text' name='price' onChange={handleChange} value={data.price} />
                                </td>
                            </tr>
                            <tr>
                                <td>Giảm giá</td>
                                <td>
                                    <input type='text' name='discountPercentage' onChange={handleChange} value={data.discountPercentage} />
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng còn lại</td>
                                <td>
                                    <input type='text' name='stock' onChange={handleChange} value={data.stock} />
                                </td>
                            </tr>
                            <tr>
                                <td>Đường dẫn ảnh</td>
                                <td>
                                    <input type='text' name='thumbnail' onChange={handleChange} value={data.thumbnail} />
                                </td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>
                                    <textarea name="description"
                                        id=""
                                        cols="30"
                                        rows="5"
                                        onChange={handleChange}
                                        value={data.description}
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>Huỷ</button>
                                    <button type='submit' value="Tạo mới">Tạo mới</button>
                                </td>
                            </tr>

                        </tbody>

                    </table>
                </form>
            </Modal>
        </div>
    )
}

export default EditProduct