import React, { useState, useRef } from 'react'
import 'antd/dist/antd.css';
import { Button, Input, Table, Space, DatePicker, Form, InputNumber, Select } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import AddNewStaff from '../../components/Admin/Staff/AddNewStaff';
import ConfirmModal from '../../components/ConfirmModal';
import EditStaff from '../../components/Admin/Staff/EditStaff';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import { TOKEN } from "./adminToken";

export default function AdminStaff() {
  const [idItem,setId] = useState()

  const [dataEdit, setDataEdit] = useState()
  const [openEdit, setOpenEdit] = useState(false)

  const [openDel, setOpenDel] = useState(false)

  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false)
  const [open, setOpen] = useState(false);
  const defaultData = [
    {
      id: 1,
      name: "Le Van C",
      department: "Vận chuyển",
      position: "nhân viên",
      staff_type: "Tài xế",
      timeStart: "5-5-1998",
      address: "HCM-Q7"
    },
    {
      id: 2,
      name: "Tran Van B",
      department: "IT",
      position: "nhân viên",
      staff_type: "Admin",
      timeStart: "2-3-1996",
      address: "HCM-Q2"
    },
    {
      id: 3,
      name: "Nguyen Van A",
      department: "Nhân sự",
      position: "nhân viên",
      staff_type: "Nhân viên",
      timeStart: "2-5-2000",
      address: "HCM-Q1"
    },
  ]
  const [data, setData] = useState(defaultData)

  // ____
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const handledit = (e,id) => {
    const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('td');
    const oldData = {
      name: tableData[0].innerHTML,
      department: tableData[1].innerHTML,
      position: tableData[2].innerHTML,
      staff_type: tableData[3].innerHTML,
      timeStart: tableData[2].innerHTML,
      address: tableData[4].innerHTML
    }
    setDataEdit(oldData);
    setId(id)
    setOpenEdit(true);
  }

  const handleDel = (e,id) => {
    setId(id)
    setOpenDel(true)
    console.log(idItem);
  }



  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
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
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
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
            type="link"
            size="small"
            onClick={() => {
              confirm({
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
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "14%",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      ...getColumnSearchProps('name'),
    },
    {
      title: "department",
      dataIndex: "department",
      key: "department",
      width: "14%",
      filters: [
        {
          text: <span>Vận chuyểm</span>,
          value: 'Vận chuyển',
        },
        {
          text: <span>IT</span>,
          value: 'IT',
        },
        {
          text: <span>Nhân sự</span>,
          value: 'Nhân sự',
        },
      ],
      onFilter: (value, record) => record.department.startsWith(value),
      filterSearch: true,
    },

    {
      title: "Vị trí",
      dataIndex: "position",
      key: "position",
      width: "14%",
      filters: [
        {
          text: <span>Nhân viên </span>,
          value: 'nhân viên',
        },
        {
          text: <span>Leader</span>,
          value: 'leader',
        },
        {
          text: <span>Phó giám đốc</span>,
          value: 'phó giám đốc',
        },
        {
          text: <span>Giám đốc</span>,
          value: 'giám đốc',
        },
      ],
      onFilter: (value, record) => record.position.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Công việc",
      dataIndex: "staff_type",
      key: "staff_type",
      width: "14%",
      filters: [
        {
          text: <span>Admin</span>,
          value: 'Admin',
        },
        {
          text: <span>Tài xế</span>,
          value: 'Tài xế',
        },
        {
          text: <span>Nhân viên</span>,
          value: 'Nhân viên',
        },
        {
          text: <span>Shipper</span>,
          value: 'Shipper',
        },
        {
          text: <span>Thủ kho</span>,
          value: 'Thủ kho',
        },
      ],
      onFilter: (value, record) => record.staff_type.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      width: "14%",
      filters: [
        {
          text: <span>Hồ Chí Minh</span>,
          value: 'HCM',
        },
        {
          text: <span>Hà Nội</span>,
          value: 'Hà Nội',
        },
        {
          text: <span>Bình Dương</span>,
          value: 'Bình Dương',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Ngày bắt đầu làm việc",
      dataIndex: "timeStart",
      key: "timeStart",
      width: "14%",
      onFilter: (value, record) => record.timeStart.indexOf(value) === 0,
      sorter: (a, b) => new Date(a.timeStart) - new Date(b.timeStart),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '',
      dataIndex: "id",
      // width: "14%",
      render: (e,data) => (
        <div className="flex flex-row justify-around">
          <button className="flex flex-row " role="button" onClick={(e)=>handledit(e,data.id)}>
            <AiFillEdit style={{
              marginTop: "0.2rem",
              marginRight: "0.5rem"
            }} />
            Sửa
          </button>
          <button className="flex flex-row " role="button" onClick={(e)=>handleDel(e,data.id)}>
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

  const { Search } = Input;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    console.log(value)
    setData(defaultData.filter(e=>{
      return e.name.toLowerCase().includes(value.toLowerCase())||e.staff_type.toLowerCase().includes(value.toLowerCase())||
      e.position.toLowerCase().includes(value.toLowerCase())||e.department.toLowerCase().includes(value.toLowerCase())
      ||e.address.toLowerCase().includes(value.toLowerCase())
    }))
    console.log(data);
    if(value===""||value===undefined){
      setData(defaultData)
    }
  };

  const acceptAddNewStaff = async (e) => {
    setLoading(true)
    setIsDisable(true)

    try {
      await setTimeout(() => {
        setLoading(false)
        setOpen(false)
        setIsDisable(false)
        const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('input');
        const newData = {
          name: tableData[0].value,
          department: tableData[1].value,
          position: tableData[4].value,
          staff_type: tableData[5].value,
          timeStart: tableData[2].value,
          address: tableData[3].value
        }

      }, 2000)
    }
    catch {

    }
  }

  const acceptEditNewStaff = async (e) => {
    setLoading(true)
    setIsDisable(true)

    try {
      await setTimeout(() => {
        setLoading(false)
        setOpenEdit(false)
        setIsDisable(false)
        const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('input');
        const newData = {
          name: tableData[0].value,
          department: tableData[1].value,
          position: tableData[4].value,
          type: tableData[5].value,
          timeStart: tableData[2].value,
          address: tableData[3].value
        }
        // console.log(newData);

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
        setLoading(false)
        setOpenDel(false)
        setIsDisable(false)
      }, 2000)
    }
    catch {

    }
  }

  return (
    <div>
      <div className='flex justify-end mb-5'>
        <Search
          placeholder="Search"
          onSearch={onSearch}
          style={{
            width: 400,
            margin: "auto",
            display: "block",
          }}
        />
        <button
          className="p-2 w-32 hover:opacity-80  border-black border-2 "
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


      <AddNewStaff
        isVisible={open}
        onOk={acceptAddNewStaff}
        loading={loading}
        disable={isDisable}
        onClose={() => setOpen(false)}
      />

      <EditStaff
        isVisible={openEdit}
        onOk={acceptEditNewStaff}
        loading={loading}
        disable={isDisable}
        dataEdit={dataEdit}
        onClose={() => setOpenEdit(false)}
      />

      <ConfirmModal
        isVisible={openDel}
        text={`xóa nhân viên`}
        onClose={() => setOpenDel(false)}
        loading={loading}
        disable={isDisable}
        onOk={acceptDelete}
      />



    </div>
  )
}