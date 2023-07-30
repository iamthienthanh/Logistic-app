import { Table, Input } from 'antd'
import { useState } from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
const columns = [
    {
        title: 'Tên nhà kho',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
    },
   
    {
        title: 'Địa chỉ',
        dataIndex: 'location',
    },
    {
        title: 'Hàng tồn kho',
        dataIndex: 'inventory_product_shipments',
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: '',
        dataIndex: "action",
        render: (a, b) => (
            <div className='flex flex-row gap-y-1 gap-x-3'>
                <button
                    className="flex items-baseline gap-x-1 "
                // onClick={}
                >
                    <AiFillEdit className='translate-y-[1px]' />Sửa
                </button >
                <button
                    className="flex items-baseline gap-x-1 "
                // onClick={() => {
                //     setIsDeleteVisible(true)
                //     setValueCompare(b.name)

                // }}
                >
                    <AiOutlineDelete className='translate-y-[1px]' />Xóa
                </button>

            </div>
        )
    }

];
const dataFetch = [
    {
        name: "Nha kho Hoa Binh",
        phone: "09999888887",
        location: "123/41/51 duong Ly Thuong Kiet, P12, Q10, Hồ Chí Minh",
        inventory_product_shipments: "laptop"
    },
    {
        name: "123",
        phone:"1234567890",
        location: "Hà Nội",
        inventory_product_shipments: "phone"
    },
    {
        name: 'XYZ',
        phone:"0909883425",
        location: "Hà Nội",
        inventory_product_shipments: "plugger"
    },
]
function AdminWarehouse() {
    const [data, setData] = useState(dataFetch)
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    return (
        <div>
            <div className="flex justify-between mb-4">
                <span className="text-3xl font-bold uppercase">Warehouse</span>

                <Input.Search
                    className='w-1/3 lg:w-[400px]'
                    placeholder="Search" />
                <button className="px-5 py-2 border border-neutral-800 text-center hover:bg-slate-300">
                    + Thêm mới
                </button>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={pagination}
                loading={loading}
            // onChange={handleTableChange}
            />
        </div>
    );
}

export default AdminWarehouse;