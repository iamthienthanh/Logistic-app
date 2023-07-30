import { Table, Input } from "antd";
import { useState, useEffect } from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import ConfirmModal from "../../components/ConfirmModal";
import EditApplicant from "../../components/Admin/Applicant/EditApplicant"
import axios from "axios";
import { END_POINT } from "../../utils/constant";

const dataFetch = [
  {
    name: {
      first: "Nguyen",
      last: "A",
    },
    date: "01/01/2021",
    department: "Kỹ thuật",
    job: "BA",
    location: "Hồ Chí Minh",
    status: "Duyệt",
  },
  {
    name: {
      first: "Tran",
      last: "B",
    },
    date: "05/02/2022",
    department: "Kỹ thuật",
    job: "QC",
    location: "Hà Nội",
    status: "Loại",
  },
  {
    name: {
      first: "Ho",
      last: "C",
    },
    date: "11/11/2021",
    department: "Kỹ thuật",
    job: "FED",
    location: "Hà Nội",
    status: "Đang đợi",
  },
];
function AdminApplicant() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [valueCompare, setValueCompare] = useState("");
  const [dataForEdit, setDataForEdit] = useState({});
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const columns = [
    {
      title: "Tên ứng viên",
      dataIndex: "name",
      sorter: (a, b) => {
        if (a.name.last < b.name.last) return -1;
        if (a.name.last > b.name.last) return 1;
      },
      render: (name) => `${name.first} ${name.last}`,
    },
    {
      title: "Ngày nộp hồ sơ",
      dataIndex: "date",
      sorter: true,
    },
    {
      title: "Phòng ban",
      dataIndex: "department",
      filters: [
        {
          text: "Kĩ thuật",
          value: "technical",
        },
        {
          text: "Nhân sự",
          value: "human",
        },
      ],
    },
    {
      title: "Vị trí làm việc",
      dataIndex: "job",
      filters: [
        {
          text: "noname",
          value: "technical",
        },
        {
          text: "noname",
          value: "human",
        },
      ],
    },
    {
      title: "Địa điểm làm việc",
      dataIndex: "location",
      filters: [
        {
          text: "Hồ Chí Minh",
          value: "Hồ Chí Minh",
        },
        {
          text: "Hà Nội",
          value: "Hà Nội",
        },
      ],
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      filters: [
        {
          text: "Đang đợi",
          value: "Đang đợi",
        },
        {
          text: "Duyệt",
          value: "Duyệt",
        },
        {
          text: "Loại",
          value: "Loại",
        },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => (
        <>
          {status === "Duyệt" || status === "Loại" ? (
            status === "Duyệt" ? (
              <div className="text-green-600 font-bold bg-green-200 text-center rounded-lg py-1">
                Duyệt
              </div>
            ) : (
              <div className="text-red-600 font-bold bg-red-200 text-center rounded-lg py-1">
                Loại
              </div>
            )
          ) : (
            <div className="text-yellow-600 font-bold bg-yellow-200 text-center rounded-lg py-1">
              Đang đợi
            </div>
          )}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      render: (_, record) => (
        <div className="flex flex-row gap-y-1 gap-x-3">
          <button className="flex items-baseline gap-x-1 " onClick={() => handleClickEdit(record)}>
            <AiFillEdit className="translate-y-[1px]" />
            Sửa
          </button>
          <button
            className="flex items-baseline gap-x-1 "
            onClick={() => {
              setIsDeleteVisible(true);
              setValueCompare(record.name.first);
            }}
          >
            <AiOutlineDelete className="translate-y-[1px]" />
            Xóa
          </button>
        </div>
      ),
    },
  ];
  const fetchData = async () => {
    setLoading(true);
    try {
      // const {data:response} = await axios.get(
      //     `${END_POINT}/applicant`
      // )
      // console.log(response)
      setLoading(false);

      setData(dataFetch); //response.data
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClickEdit = (record) => {
    setIsEditVisible(true);
    const [dataEdit] = data.filter((ele) => ele.name === record.name);
    setDataForEdit(dataEdit);
  };
  const acceptDelete = async () => {
    setLoading(true);
    setIsDisable(true);
    try {
      await setTimeout(() => {
        //thay bằng DELETE request
        setLoading(false);
        setIsDeleteVisible(false);
        setIsDisable(false);
        // const newArray = data.filter(ele => ele.name.first !== valueCompare)
        // setData(newArray)
      }, 2000);
    } catch {}
  };
  return (
    <div>
      <div className="flex justify-between mb-4">
        <span className="text-3xl font-bold uppercase">Ứng viên</span>

        <Input.Search className="w-1/3 lg:w-[400px]" placeholder="Search" />
        <div className="w-[200px]"></div>
      </div>
      <Table
        rowKey={(record) => record._id}
        columns={columns}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        // onChange={handleTableChange}
      />
      {/* phần Modal sửa xóa */}
      {isEditVisible && (
        <EditApplicant
          isVisible={isEditVisible}
          onClose={() => setIsEditVisible(false)}
          disable={isDisable}
          data={dataForEdit}
          refetchData={fetchData}
        />
      )}
      <ConfirmModal
        isVisible={isDeleteVisible}
        text={`xóa ứng viên`}
        onClose={() => setIsDeleteVisible(false)}
        loading={loading}
        disable={isDisable}
        onOk={acceptDelete}
      />
    </div>
  );
}

export default AdminApplicant;
