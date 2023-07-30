import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBarDriver from "../../components/SideBarDriver";
import { FaTruckMoving } from "react-icons/fa";
import {
  AiOutlineGift,
  AiOutlineUser,
  AiTwotoneCalendar,
} from "react-icons/ai";

import { BiTargetLock } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;
const PurchaseDriver = () => {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState();
  const [status, setStatus] = useState("waiting");
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  const order1 = {
    orderId: 232321,
    /*  service: {
      type: Schema.Types.ObjectId,
      ref: "delivery_services",
    }, */
    products: [
      {
        name: "oppo",
        quantity: 2,
        unit: "KG",
      },
    ],
    customer: {
      name: "Khoa",
      address: "B5/10",
      description: null,
      customer_type: "passer",
      rank_passers: {
        point: 0,
        level: "unrank",
      },
      companyTaxcode_business: null,
      accepted_business: false,
    },
    /*    trips: [
      {
        type: Schema.Types.ObjectId,
        ref: "trips",
      },
    ], */
    receiver: {
      name: "Nguyen Van Toan",
      phone: "09947273",
      identity: {
        type: String,
        required: true,
        unique: true,
      },
      street: "duong 9 ",
      ward: "Lac Dao",
      district: "Phan Thiet",
      province: "Binh Thuan",
    },
    total_price: 1000000,
    status: "waiting",
  };
  /*  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(
          `${REACT_APP_API_BASE_URL}/tracking/order/` + id
        );
        console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  }); */
  const handleStatus = () => {};
  const navigate = useNavigate();
  const [key, setKey] = useState("tất cả");
  function handleTabs(key) {
    setKey(key);
    navigate(`/khach-hang/dat-hang?type=${key}`);
  }

  return (
    <div className="">
      <div className="bg-gray-100 relative ">
        
          <div className="custom-tab shadow-[#000000] container mx-auto text-xl w-[100%] bg-white ">
            <Tabs
              defaultActiveKey="tất cả"
              onChange={handleTabs}
              centered
              size="large"
              tabPosition="top"
              type="line"
              className="pt-2 px-4 lg:px-4"
              tabBarStyle={{ color: "#ffbb00" }}
            >
              <TabPane tab="Tất cả" key="tất cả"></TabPane>
              <TabPane tab="Chờ xác nhận" key="chờ xác nhận"></TabPane>
              <TabPane tab="Chờ lấy hàng" key="chờ lấy hàng"></TabPane>
              <TabPane tab="Đang giao" key="đang giao"></TabPane>
              <TabPane tab="Đã giao" key="đã giao"></TabPane>
              <TabPane tab="Đã hủy" key="đã hủy"></TabPane>
            </Tabs>
          </div>

          <div className="  flex items-center text-gray-400 focus-within:text-gray-600 my-1">
            <IoSearchOutline className="w-5 h-5 absolute ml-4 pointer-events-none " />
            <input
              type="text"
              name="search"
              placeholder="Tìm kiếm sản phẩm,id đơn hàng"
              autoComplete="off"
              className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-yellow-500 focus:ring-2"
            />
          </div>

          <div className="flex flex-col mt-2 bg-white rounded-sm shadow-xl">
            <div className="  overflow-auto mb-3 w-[100%]">
              <div className="flex justify-between items-center border-gray-300 border-b-[1px] py-2 ">
                <div className="flex flex-nowrap items-center mx-2">
                  <div className=" text-lg sm:text-lg font-bold ml-2 text-[#00003B]">
                    {order1.orderId}
                  </div>
                </div>
                <div className=" flex flex-nowrap items-center mx-2 flex-row">
                  <FaTruckMoving className=" sm:mr-2 mr-[3px]" />
                  <Link
                    className=" text-[10px] font-medium  sm:mr-4 sm:text-sm  hover:translate-y-[-1px] transition-all hover:text-yellow-500  cursor-pointer "
                    to="/khach-hang/dat-hang/don-hang/123"
                  >
                    Chưa giao
                  </Link>
                </div>
              </div>
              <div className="flex items-center py-2 border-gray-300 border-b-[1px]">
                <div className="ml-3 flex flex-col ">
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlineGift className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">Đơn hàng:</div>
                    <div className="text-base md:text-lg">Điện thoại Oppo</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <AiOutlineUser className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">
                      Tên người nhận:
                    </div>
                    <div className="text-base md:text-lg">Nguyễn Văn Trí</div>
                  </div>
                  <div className="ml-2 flex items-center py-1">
                    <AiTwotoneCalendar className="mr-1 w-5 h-5  md:w-7 md:h-7 " />
                    <div className="text-base md:text-lg mr-1">
                      Ngày tạo đơn:
                    </div>
                    <div className="text-base md:text-lg">1/7/2020</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end  sm:mr-4 mb-1 mt-5">
                {/*                 <div className="flex justify-end mb-2 mr-2">
                  <button className="p-2 max-w-[100px] ml-3 flex items-center placeholder:font-semibold bg-yellow-500  border-button_color border-2  hover:translate-y-[-1px] transition-all  rounded-sm">
                    <TiDeleteOutline />
                    <div className="text-[#00003B] text-sm">Hủy đơn</div>
                  </button>
                </div> */}
                <div className="flex justify-end mb-1 mr-2">
                  <Link className=" " to="/tai-xe/thong-bao/don-hang">
                    <button
                      onClick={handleStatus()}
                      className="p-2 ml-3 items-center max-w-[140px] flex font-semibold bg-yellow-500  border-button_color border-2  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm"
                    >
                      <BiTargetLock />
                      <div>Nhận đơn</div>
                    </button>
                  </Link>
                </div>
                <div className="flex justify-end mb-1 mr-2">
                  <Link className=" " to="/khach-hang/dat-hang/123">
                    <button className="p-2 ml-3 max-w-[140px] items-center flex font-semibold bg-yellow-500  border-button_color border-2  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                      <MdOutlineEditCalendar className="mr-1" />
                      <div> Chi tiết đơn</div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default PurchaseDriver;
