
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { createProductFetch } from '../../services/productService';
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


const CreateProduct = ({ onReload }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [dataCategory, setDataCategory] = useState([]);
    const [data, setData] = useState([]);

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
                })
        }
        fetchApi()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault(); //Ngặn chặn sự kiện mặc định của form
        // fetch('http://localhost:3002/products', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // closeModal();
        // onReload();
        // Swal.fire({
        //     title: "Good job!",
        //     text: "Create a new product successfully ",
        //     icon: "success"
        // });
        const result = await createProductFetch(data);
        if(result) {
            setIsOpen(false); //đóng modal lại
            onReload() //Render lại
            Swal.fire({
            title: "Good job!",
            text: "Create a new product successfully ",
            icon: "success"
        });
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
            <button onClick={openModal}>Create new product</button>

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
                                    />
                                </td>
                            </tr>

                            {dataCategory.length > 0 ? (
                                <tr>
                                    <td>Category</td>
                                    <td>
                                        <select name='category' onChange={handleChange}>
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
                                    <input type='text' name='price' onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Giảm giá</td>
                                <td>
                                    <input type='text' name='discountPercentage' onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng còn lại</td>
                                <td>
                                    <input type='text' name='stock' onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Đường dẫn ảnh</td>
                                <td>
                                    <input type='text' name='thumbnail' onChange={handleChange} />
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

export default CreateProduct