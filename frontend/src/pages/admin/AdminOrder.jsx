import React, { useState, useRef, useEffect, useContext } from 'react'
import { MainContext } from '../../context/MainContext';
import { Button, Input, Table, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import AddNewOrder from '../../components/Admin/Order/AddNewOrder'
import ConfirmModal from '../../components/ConfirmModal';
import EditOrder from '../../components/Admin/Order/EditOrder';
import axios from 'axios';
import SplitProduct from '../../components/Admin/Order/SplitProduct';
import { TOKEN } from "./adminToken";


export default function AdminOrder() {
    const { accessToken } = useContext(MainContext)
    // console.log(accessToken)
    const api = "http://localhost:8000/api/admin/order";
    const apiListOrder = "http://localhost:8000/api/order/tracking/"
    const [id, setId] = useState()
    const [dataEdit, setDataEdit] = useState()
    const [openEdit, setOpenEdit] = useState(false)
    const [openDel, setOpenDel] = useState(false)
    const [loading, setLoading] = useState(false);
    const [isDisable, setIsDisable] = useState(false)

    const [openSplit, setOpenSplit] = useState(false)
    const [dataSplit, setDataSplit] = useState()

    const [open, setOpen] = useState(false)
    const [change,setChange] = useState(1);


    const [data, setData] = useState([
        {
            orderId: "string",
            service: "string",
            total_price: "string",
            status: "string",
            origin: "string",
            destination: "string",
            receiver: "string",
            customer: "",
        }

    ])
    // ____
    // const [data, setData] = useState()
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    // Get data from api
    const getDataFromApi = async () => {
        try {
            const res = await axios({
                url: api,
                method: "get",
                headers: { authorization: `Bearer ${accessToken}` },
            });
            // console.log(res);
            if (res.status === 200) {
                setData(res.data.data);
                console.log(data);
                //    const id = res.map(e=>e.orderId);
                //    console.log(id);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    // Post data:
    const postDataToApi = async (items) => {
        try {
            const res = await axios({
                url: "http://localhost:8000/api/admin/order/create",
                method: "post",
                headers: { authorization: `Bearer ${accessToken}` },
                data: items
            });
            console.log(res);
            if (res.status === 200) {
                setData(res.data.data);
                console.log(id);
            }
        }
        catch (error) {
            // console.log(error);
        }
    }

    // Edit data:
    const editDataToApi = async (items, id) => {
        try {
            const res = await axios({
                url: `${api}/${id}`,
                method: "put",
                headers: { authorization: `Bearer ${accessToken}` },
                data: items
            });
            console.log(res);
            if (res.status === 200) {
                // setData(res.data.data)
            }
        }
        catch (error) {
            // console.log(error);
        }
    }

    // Delete data
    const delDataToApi = async (id) => {
        try {
            const res = await axios({
                url: `${api}/${id}`,
                method: "delete",
                headers: { authorization: `Bearer ${accessToken}` },
            });
            // console.log(res);
            if (res.status === 200) {
                // setData(res.data.data)
            }
        }
        catch (error) {
            // console.log(error);
        }
    }



    useEffect(() => {
        getDataFromApi()
        // console.log("Bears" + accessToken);
    }, [change])

    const handleSearch = (selectedKeys, status, dataIndex) => {
        status();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const handledit = (e, id) => {
        // const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('td');
        const items = data.filter(e => {
            return e._id === id;
        })
        console.log(items);
        const oldData = {
            // receiver: tableData[0].innerHTML,
            // total_price: tableData[1].innerHTML,
            // destination: tableData[2].innerHTML,
            // service: tableData[3].innerHTML,
            // origin: tableData[4].innerHTML,
            status: items[0].status,
            // product: items[0].product
        }
        setDataEdit(oldData);
        setId(id)
        setOpenEdit(true);
        // console.log(oldData);
    }

    const handleDel = (e, id) => {
        setId(id)
        // console.log(id);
        setOpenDel(true)
    }

    // const handleSplit = (dataIndex, id) => {
    //     // console.log(data);
    //     // dataIndex.push({
    //     //     bill:dataIndex.length+1,
    //     // })
    //     setOpenSplit(true)
    //     const newData = data.filter(e => e.id === id);
    //     const index = data.findIndex(e => e.id === id);
    //     newData[0].product = dataIndex;
    //     console.log(index);
    //     const getData = data.slice(0, data.length)
    //     getData.splice(index, 1, newData[0])
    //     setDataSplit(dataIndex)
    //     // setData(getData)
    //     // console.log(getData);
    // }



    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, status, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, status, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        destination="primary"
                        onClick={() => handleSearch(selectedKeys, status, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        destination="link"
                        size="small"
                        onClick={() => {
                            status({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });




    const columns = [
        {
            title: "Tên người nhận",
            dataIndex: "receiver",
            key: "receiver",
            width: "14.2%",
            onFilter: (value, record) => record.receiver.indexOf(value) === 0,
            sorter: (a, b) => a.receiver.length - b.receiver.length,
            sortDirections: ['descend'],
            ...getColumnSearchProps('receiver'),
        },
        {
            title: "Tổng tiền",
            dataIndex: "total_price",
            key: "total_price",
            width: "14.2%",
            ...getColumnSearchProps('total_price'),
        },
        {
            title: "Điểm đến",
            dataIndex: "destination",
            key: "destination",
            width: "14.2%",
            ...getColumnSearchProps('destination'),
        },
        {
            title: "Thiết bị",
            dataIndex: "service",
            key: "service",
            width: "14.2%",
            ...getColumnSearchProps('service'),
        },
        // {
        //     title: "Sản phẩm",
        //     dataIndex: "product",
        //     // key: "id",
        //     width: "14.2%",
        //     render: (product, dataSource) => (
        //         <>
        //             {/* <li className='m-auto ml-0'>Sản phẩm</li> */}
        //             <Button type="Button" className='btn btn-primary' onClick={(e) => handleSplit(product, dataSource.id)}>Tách</Button>
        //             <ul>
        //                 {product.map(e => (
        //                     <li className='m-auto mt-4'>Lô hàng {e.bill}</li>
        //                 ))}
        //             </ul>
        //         </>
        //     )
        // },
        {
            title: "Xuất phát",
            dataIndex: "origin",
            key: "origin",
            width: "14.2%",
            ...getColumnSearchProps('origin'),
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: "status",
            width: "12%",
            filters: [
                {
                    text: 'Xác nhận',
                    value: 'Xác nhận',
                },
                {
                    text: 'Từ chối',
                    value: 'Từ chối',
                },
            ],
            onFilter: (value, record) => record.status === value,
            render: (status) => (
                <>
                    {status === "Xác nhận" ?
                        <div className="text-green-600 font-bold bg-green-200 text-center rounded-lg py-1">Xác nhận</div>
                        :
                        <div className='text-red-600 font-bold bg-red-300 text-center rounded-lg py-1'>Từ chối</div>
                    }
                </>
            )
        },
        {
            title: '',
            dataIndex: "action",
            width: "14.2%",
            render: (e, data) => (
                <div className="flex flex-row justify-around">
                    <button className="flex flex-row " role="button" onClick={(e) => handledit(e, data._id)}>
                        <AiFillEdit style={{
                            marginTop: "0.2rem",
                            marginRight: "0.5rem"
                        }} />
                        Sửa
                    </button>
                    <button className="flex flex-row " role="button" onClick={(e) => handleDel(e, data._id)}>
                        <AiOutlineDelete style={{
                            marginTop: "0.2rem",
                            marginRight: "0.5rem"
                        }} />
                        Xóa
                    </button>
                </div>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const acceptAddNewOrder = async (e) => {
        setLoading(true)
        setIsDisable(true)
        const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('input')
        const newItem = {
            receiver: {
                "name": tableData[0].value,
                "phone": tableData[7].value,
                "identity": tableData[3].value,
            },
            total_price: tableData[5].value,
            destination: tableData[2].value,
            serviceName: tableData[4].value,
            origin: tableData[1].value,
            // status: tableData[3].value,
            customerEmail: tableData[6].value
        }
        try {
            await setTimeout(() => {
                postDataToApi(newItem)
                console.log(newItem);
                setLoading(false)
                setOpen(false)
                setIsDisable(false)

            }, 2000)
        }
        catch {

        }
    }

    const acceptDelete = async () => {
        setLoading(true)
        setIsDisable(true)
        try {
            await setTimeout(() => {
                delDataToApi(id)
                setChange(change+1)
                // console.log(id);
                setLoading(false)
                setOpenDel(false)
                setIsDisable(false)
            }, 2000)
        }
        catch {

        }
    }

    const acceptEditNewOrder = async (e) => {
        setLoading(true)
        setIsDisable(true)
        const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('select')
        const items = {
            status:tableData[0].value,
        }

        try {
            await setTimeout(() => {
                setChange('edit')
                getDataFromApi()
                editDataToApi(items,id)
                setLoading(false)
                setOpenEdit(false)
                setIsDisable(false)

            }, 2000)
        }
        catch {

        }
    }


    return (
        <div>
            <div className='flex justify-end mb-4'>
                <button
                    className="p-2 w-32 hover:opacity-80 border-black border-2 "
                    onClick={() => setOpen(true)}
                >
                    +Thêm
                </button>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
            >
            </Table>


            <AddNewOrder
                isVisible={open}
                onClose={() => setOpen(false)}
                onOk={acceptAddNewOrder}
                loading={loading}
                disable={isDisable}
            />

            <EditOrder
                isVisible={openEdit}
                onOk={acceptEditNewOrder}
                loading={loading}
                disable={isDisable}
                data={dataEdit}
                onClose={() => setOpenEdit(false)}
            />

            {/* <SplitProduct
                isVisible={openSplit}
                onOk={acceptSplit}
                loading={loading}
                disable={isDisable}
                data={dataSplit}
                onClose={() => setOpenSplit(false)}
            /> */}

            <ConfirmModal
                isVisible={openDel}
                text={`xóa order`}
                onClose={() => setOpenDel(false)}
                loading={loading}
                disable={isDisable}
                onOk={acceptDelete}
            />

        </div>
    )
}