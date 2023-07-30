import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined
} from "@ant-design/icons";
import {
  MdGroup,
  MdConnectWithoutContact,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineMessage, AiOutlinePartition } from "react-icons/ai";
import { BsFillPersonFill, BsPaperclip } from "react-icons/bs";
import {ImProfile} from "react-icons/im"
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../assets/icons/logo-J&T.svg";
import { MainContext } from "../../../context/MainContext";
import AdminDropDownAvatar from "./AdminDropDownAvatar";
const { Header, Sider, Content } = Layout;

export default function AdminPage() {
  const {user} = useContext(MainContext)
  const navigate = useNavigate()
   
  const [collapsed, setCollapsed] = useState(false);
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(
      <div>
        <Link to="about">Về chúng tôi</Link>
      </div>,
      "1",
      <MdGroup />
    ),
    getItem(
      <div>
        <Link to="contact-us">Liên hệ</Link>
      </div>,
      "2",
      <MdConnectWithoutContact />
    ),

    getItem(
      <div>
        <Link to="commitment">Cam kết</Link>
      </div>,
      "3",
      <FaHandshake />
    ),
    getItem(
      <div>
        <Link to="message">Gửi tin nhắn</Link> {/*contact message*/}
      </div>,
      "4",
      <AiOutlineMessage />
    ),
    getItem(
      <div>
        <Link to="service">Dịch cụ vận chuyển</Link>
      </div>,
      "5",
      <MdOutlineDeliveryDining />
    ),

    getItem(
      <div>
        <Link to="partner">Đối tác</Link>
      </div>,
      "6",
      <FaHandshake />
    ),
    getItem(
      <div>
        <Link to="viec-lam">Việc làm</Link>
      </div>,
      "7",
      <BsPaperclip />
    ),
    getItem(
      <div>
        <Link to="ung-vien">Ứng viên</Link>
      </div>,
      "8",
      <ImProfile />
    ),
    getItem(
      <div>
        <Link to="phong-ban">Phòng ban</Link>
      </div>,
      "9",
      <AiOutlinePartition />
    ),
    getItem(
      <div>

        <Link to="warehouse">Kho bãi</Link>


      </div>,
      "10",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>

        <Link to="car">Phương tiện</Link>

      </div>,
      "11",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>

        <Link to="road">Hành trình</Link>

      </div>,
      "12",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>
        <Link to="staff_regis">Thêm nhân viên mới</Link>
      </div>,
      "13",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>

        <Link to="staff">Nhân viên</Link>

      </div>,
      "14",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>

        <Link to="order">Đơn hàng</Link>

      </div>,
      "15",
      <DesktopOutlined> </DesktopOutlined>
    ),
    getItem(
      <div>

        <Link to="phi-bao-tri">Bảo trì, sửa chữa</Link>

      </div>,
      "16",
      <DesktopOutlined> </DesktopOutlined>
    ),

    // getItem("User", "sub1", <UserOutlined />, [getItem("Tom", "3"), getItem("Bill", "4"), getItem("Alex", "5")]),
  ];
   if(user&&user.role.staff_type==="admin"){
     return (
       <Layout
         className=""
         style={{
           minHeight: "100vh",
         }}
       >
         <Sider
           trigger={null}
           collapsible
           collapsed={collapsed}
           className="uppercase " //hidden xl:block
           style={{
             background: "#fff",
           }}
         >
           <div className="logo">
             <img src={logo} alt="" className="w-full h-full"></img>
           </div>
           <Menu theme="" mode="inline" defaultSelectedKeys={[""]} items={items} />
         </Sider>
         <Layout className="site-layout">
           <Header
             className="site-layout-background"
             style={{
               padding: 0,
               background: "#fff",
             }}
           >
             <div className="flex flex-row justify-between pr-10">
               {React.createElement(
                 collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                 {
                   className: "trigger",
                   onClick: () => setCollapsed(!collapsed),
                   style: {
                     padding: " 0 24px",
                     fontSize: "18px",
                     lineHeight: "64px",
                     cursor: "pointer",
                     transition: "color 0.3s",
                     color: "orange",
                   },
                 }
               )}
               <AdminDropDownAvatar></AdminDropDownAvatar>
             </div>
           </Header>
           <Content
             className="site-layout-background"
             style={{
               margin: "24px 12px",
               // padding: 24,
               minHeight: 280,
             }}
           >
             <Outlet></Outlet>
           </Content>
         </Layout>
       </Layout>
     );
   }
    return <Navigate to="/dang-nhap-nhan-vien" />;
}
