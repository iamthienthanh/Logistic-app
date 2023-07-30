import { Table, Input } from 'antd'
import { useState } from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
const columns = [
    {
        title: 'Loại xe',
        dataIndex: 'type',
    },
   
    {
        title: 'Biển số xe',
        dataIndex: 'plate',
    },
    {
        title: 'Dung tích',
        dataIndex: 'volumn',
    },
    {
        title: 'Trọng tải',
        dataIndex: 'tonnage',
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
        type: "truck",
        plate: "09997-41A",
        volumn: "112",
        tonnage: "123"
    },
    {
        type: "motorbike",
        plate: "0H57-41A64",
        volumn: "112",
        tonnage: "123"
    },
    {
        type: "truck",
        plate: "Ag638-12",
        volumn: "112",
        tonnage: "123"
    },
]
function AdminCar() {
    const [data, setData] = useState(dataFetch)
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    return (
        <div>
            <div className="flex justify-between mb-4">
                <span className="text-3xl font-bold uppercase">Car</span>

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

export default AdminCar;