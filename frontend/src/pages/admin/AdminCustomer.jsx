import React, { useState, useRef } from 'react'
import { Button, Input, Table, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import EditCustomer from '../../components/Admin/Customer/EditCustomer';
import ConfirmModal from '../../components/ConfirmModal';
import { TOKEN } from "./adminToken";

export default function AdminCustomer() {
  const [id,setId] = useState()
  const [dataEdit, setDataEdit] = useState()
  const [openEdit,setOpenEdit] = useState(false)
  const [openDel,setOpenDel] = useState(false)
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false)

  const defaultData = [
    {
      id: 1,
      name: "Le Van C",
      position: "Vãng lai",
      type: "Doanh nghiệp",
      timeStart: "5-5-1998",
    },
    {
      id: 2,
      name: "Tran Van B",
      position: "Vãng lai",
      type: "Trung gian",
      timeStart: "2-3-1996",
    },
    {
      id: 3,
      name: "Nguyen Van A",
      position: "Phổ thông",
      type: "Doanh nghiệp",
      timeStart: "2-5-2000",
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
      position: tableData[1].innerHTML,
      type: tableData[2].innerHTML,
      timeStart: tableData[3].innerHTML,
    }
    setDataEdit(oldData);
    setId(id)
    setOpenEdit(true);
  }

  const handleDel= (e,id)=>{
    setOpenDel(true)
    setId(id)
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
      title: "Tên khách hàng",
      dataIndex: "name",
      key: "name",
      width: "20.5%",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      ...getColumnSearchProps('name'),
    },
    {
      title: "Cấp",
      dataIndex: "position",
      key: "position",
      width: "20.5%",
      filters: [
        {
          text: <span>Vãng lai </span>,
          value: 'Vãng lai',
        },
        {
          text: <span>Phổ thông</span>,
          value: 'Phổ thông',
        },
        {
          text: <span>Vip</span>,
          value: 'Vip',
        }
      ],
      onFilter: (value, record) => record.position.startsWith(value),
      filterSearch: true,
    },
    {
      title: "Loại Khách Hàng",
      dataIndex: "type",
      key: "type",
      width: "20.5%",
      filters: [
        {
          text: <span>Doanh nghiệp</span>,
          value: 'Doanh nghiệp',
        },
        {
          text: <span>Trung gian</span>,
          value: 'Trung gian',
        },
        {
          text: <span>Vãng lai</span>,
          value: 'Vãng lai',
        }
      ],
      onFilter: (value, record) => record.type.startsWith(value),
      filterSearch: true,
    },
    // {
    //   title: "Địa chỉ",
    //   dataIndex: "address",
    //   key: "address",
    //   width: "14%",
    //   filters: [
    //     {
    //       text: <span>Hồ Chí Minh</span>,
    //       value: 'HCM',
    //     },
    //     {
    //       text: <span>Hà Nội</span>,
    //       value: 'Hà Nội',
    //     },
    //     {
    //       text: <span>Bình Dương</span>,
    //       value: 'Bình Dương',
    //     },
    //   ],
    //   onFilter: (value, record) => record.address.startsWith(value),
    //   filterSearch: true,
    // },
    {
      title: "Ngày đăng ký",
      dataIndex: "timeStart",
      key: "timeStart",
      width: "20.5%",
      sorter: (a, b) =>new Date(a.timeStart) -new Date(b.timeStart),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '',
      dataIndex: "action",
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
            }}/>
            Xóa
          </button>
        </div>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value)
    const suiData = defaultData.filter(e=>{
      
      return e.name.toLowerCase().includes(value.toLowerCase())||e.type.toLowerCase().includes(value.toLowerCase())||
      e.position.toLowerCase().includes(value.toLowerCase())
    });
    setData(suiData)
    console.log(data);
    if(value===""||value===undefined){
      setData(defaultData)
    }
  };


  const acceptEditNewCustomer = async (e) => {
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
          position: tableData[1].value,
          type: tableData[2].value,
          timeStart: tableData[3].value,  
        }
        console.log(newData);
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
       <Search
          placeholder="Search"
          onSearch={onSearch}
          style={{
            width: 400,
            margin: "auto",
            display: "block",
            marginBottom:"20px"
          }}
        />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
      >
      </Table>


      <EditCustomer
        isVisible={openEdit}
        onOk={acceptEditNewCustomer}
        loading={loading}
        disable={isDisable}
        dataEdit={dataEdit}
        onClose={() => setOpenEdit(false)}
      />

      <ConfirmModal
        isVisible={openDel}
        text={`xóa khách hàng`}
        onClose={() => setOpenDel(false)}
        loading={loading}
        disable={isDisable}
        onOk={acceptDelete}
      />
    </div>
  )
}