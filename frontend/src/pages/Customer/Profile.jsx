import React, { useEffect, useRef, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SideBar from "../../components/SideBarCustomer";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineEdit
} from "react-icons/ai";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import axios from "axios";

export default function Profile() {
  const oldPwRef = useRef(null);
  const newPwRef = useRef(null);
  const verify_passwordRef = useRef(null);
  const [eyeOp, setEyeOp] = useState(false);
  const [eyeNp, setEyeNp] = useState(false);
  const [eyeCf, setEyeCf] = useState(false);
  const [cPassword, setCPassword] = useState({
    oldPw: "",
    newPw: "",
    verify_password: "",
  });
  const { setMetadata,accessToken } = useContext(MainContext);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
   
  const [information, setInformation] = useState({
    name: "Nguyễn Văn Thật",
    address: "B5/3 Phường An Phú Tp Thủ Đức",
    tax:"55123124142",
    phone:"090875827",
    email:"buidangkhoa252001@gmail.com"
  });
  const handleOpen = () => {
    setOpen(!open);
  };
  const hideemail = (valuee) => {
    let email = valuee; //anas.behhari@gmail.com
    let hiddenEmail = "";
    for (let i = 0; i < email.length; i++) {
      if (i > 2 && i < email.indexOf("@")) {
        hiddenEmail += "*";
      } else {
        hiddenEmail += email[i];
      }
    }

    return hiddenEmail;
  };
  const hidepassword = (valuep) => {
    let password = valuep; //anas.behhari@gmail.com
    let hiddenPassword = "";
    for (let i = 0; i < password.length; i++) {
      hiddenPassword += "*";
    }

    return hiddenPassword;
  };
  const handleEyeOp = () => {
    setEyeOp(!eyeOp);
  };
  const handleEyeNp = () => {
    setEyeNp(!eyeNp);
  };
  const handleEyeCf = () => {
    setEyeCf(!eyeCf);
  };

  const handleShowModal = () => {
    setIsModalVisible(true);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCPassword({ ...cPassword, [name]: value });
    console.log(cPassword);
  };
  const handleCloseModal = (e) => {
    oldPwRef.current.value = "";
    newPwRef.current.value = "";
    verify_passwordRef.current.value = "";
    setIsModalVisible(false);
  };
  useEffect(() => {
    if (handleCloseModal) {
      setIsSubmit(false);
      setCPassword({
        oldPw: "",
        newPw: "",
        verify_password: "",
      });
      setEyeOp(false);
      setEyeNp(false);
      setEyeCf(false);
      setFormErrors({});
    }
  }, [isModalVisible]);
  const handleSubmit = async(e) => {
    e.preventDefault();
 /*    setFormErrors(validate); */
    try {
      const res = await axios.put(
        "http://localhost:8000/api/auth/change-pw" ,
        
          cPassword
        ,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      setIsSubmit(true);
    } catch (err) {
    setFormErrors(validate(err.response.data.message[0]));
    }
  };
const validate = (message) => {
    const { oldPw, verify_password, newPw } = cPassword;
    const errors = {};
    if (!oldPw) {
      errors.oldPw = "Vui lòng nhập trường này";
    }
    if (oldPw && message==="c") {
      errors.oldPw = "Sai mật khẩu,vui lòng nhập lại";
    }
    if (!newPw) {
      errors.newPw = "This field is required";
    }
    if (newPw && newPw.length <= 5) {
      errors.newPw = "Password length at least than 6";
    }
    if (!verify_password) {
      errors.verify_password = "This field is required";
    }
    if (verify_password && verify_password.length <= 5) {
      errors.verify_password = "Password length greater than 6";
    }
    if (verify_password && newPw && verify_password !== newPw) {
      errors.verify_password = "Not same with the new password";
    }
    return errors;
  };
   useEffect(() => {
    setMetadata((prev) => {
      return {
        ...prev,
        title: "Trang cá nhân | TKTL",
      };
    });
     }, []);
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      /* const handleChangePassword = async () => {
        try{
          const res = await axios.put(
            `${REACT_APP_API_BASE_URL}/auth/change-pw`,
            cPassword,
            {
              header: { accessToken: `Bearer ${TOKEN}` },
            }
          );
        }
        catch(err){

        }
      }; */
      /*  handleChangePassword() */
      alert("Update password success");
      setIsModalVisible(false);
      setIsSubmit(false);
      oldPwRef.current.value = "";
      newPwRef.current.value = "";
      verify_passwordRef.current.value = "";
    }
  }, [formErrors, cPassword, isSubmit]);
  const handleForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
    console.log(information);
  };

  return (
    <div>
      <>
        <div
          className={`${
            isModalVisible ? `block` : `hidden`
          } overflow-y-auto overflow-x-hidden fixed  z-50 w-full top-0 left-0   h-full bg-[#1114]`}
        >
          <div className="relative min-w-[350px] top-[15%] sm:min-w-[550px]  md:mx-auto flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow  min-w-[350px] sm:min-w-[400px] mx-1 border-[1px]">
              <div className="flex item-center justify-end ">
                <span
                  className="cursor-pointer mr-1 text-base font-bold"
                  onClick={handleCloseModal}
                >
                  X
                </span>
              </div>

              <div className="pb-6 pt-[6px] px-6 ">
                <h3 className="mb-3 text-2xl font-bold  ">
                  Thay đổi
                </h3>
                <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-2 text-sm font-medium ">
                      Mật khẩu cũ
                    </label>
                    <div className="relative">
                      <input
                        ref={oldPwRef}
                        type={eyeOp ? "text" : "password"}
                        name="oldPw"
                        defaultValue={cPassword.oldPw}
                        onChange={handleChangePassword}
                        placeholder="Add your password"
                       className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white relative"
                      />
                      {eyeOp ? (
                        <AiOutlineEye
                          onClick={handleEyeOp}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer "
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={handleEyeOp}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer"
                        />
                      )}
                    </div>
                    <p className="text-red-400">{formErrors.oldPw}</p>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium ">
                      Mật khẩu mới
                    </label>
                    <div className="relative">
                      <input
                        ref={newPwRef}
                        type={eyeNp ? "text" : "password"}
                        name="newPw"
                        defaultValue={cPassword.newPw}
                        onChange={handleChangePassword}
                        placeholder="Add your new password"
                        className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white relative"
                      />
                      {eyeNp ? (
                        <AiOutlineEye
                          onClick={handleEyeNp}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer "
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={handleEyeNp}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer"
                        />
                      )}
                    </div>
                    <p className="text-red-400">{formErrors.newPw}</p>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium ">
                      Xác nhận mật khẩu mới
                    </label>
                    <div className="relative">
                      <input
                        ref={verify_passwordRef}
                        type={eyeCf ? "text" : "password"}
                        name="verify_password"
                        defaultValue={cPassword.verify_password}
                        placeholder="Confirm new password"
                        onChange={handleChangePassword}
                        className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white relative"
                      />
                      {eyeCf ? (
                        <AiOutlineEye
                          onClick={handleEyeCf}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer "
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={handleEyeCf}
                          className="absolute right-2 top-[10px] w-5 h-5 cursor-pointer"
                        />
                      )}
                    </div>
                    <p className="text-red-400">{formErrors.verify_password}</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-[#00003B] bg-yellow-500 hover:bg-yellow-600 focus:outline-none  font-semibold rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    Thay đổi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className=" relative">
        <div className=" relative ">
              <div className="flex justify-start flex-col  border-b-2  pl-4 pb-3 pt-3">
                <div className="text-xl font-bold mb-1 lg:text-2xl mt-2">
                  Hồ Sơ Của Tôi
                </div>
                <div className="text-base">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
              </div>
              <form className=" lg:mx-5 sm:mx-4 md:mx-5 mx-[8px] my-4 ">
                <div className=" grid grid-cols-2 justify-items-center  ">
                  <div className="col-span-1">
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Tên:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="name"
                          onChange={handleForm}
                          defaultValue={information.name}
                        />
                      </div>
                    </div>
                    {/* <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start flex-row">
                       
                          <div className=" mr-3 text-yellow-600 lg:text-lg text-base">
                            Mật khẩu:
                          </div>
                           <div
                              className="text-xs text-center text-yellow-500 cursor-pointer lg:text-base"
                              onClick={handleShowModal}
                            >
                             <AiOutlineEdit/>
                           </div>

                        </div>
            
                      <div className="flex  ">
                        <input
                          className="select-none outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="password"
                          
                          defaultValue="12312321"
                        />
                      </div>
                    </div> */}
                     <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Email:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="email"
                          onChange={handleForm}
                          defaultValue={information.email}
                        />
                      </div>
                    </div>
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-xl text-base">
                          Địa chỉ:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="address"
                          onChange={handleForm}
                          defaultValue={information.address}
                        />
                      </div>
                    </div>
                  
                    
                  </div>
                  <div className="col-span-1 ">
                      {/* col 2*/}
                  {/*  <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Email:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="email"
                          onChange={handleForm}
                          defaultValue={information.email}
                        />
                      </div>
                    </div> */}
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Số điện thoại:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="phone"
                          onChange={handleForm}
                          defaultValue={information.phone}
                        />
                      </div>
                    </div>
                    <div className="flex mb-6 sm:py-1 flex-col  ">
                      <div className="flex items-center   justify-start ">
                        <label className=" mr-3 text-yellow-600 lg:text-lg text-base">
                          Mã số thuế:
                        </label>
                      </div>
                      <div className="flex  ">
                        <input
                          className="outline-none border-[1px] sm:px-2 rounded-md py-[6px] px-1 border-gray-200 text-base  max-w-[160px] md:min-w-[260px] sm:min-w-[210px] line-clamp-1"
                          type="text"
                          name="tax"
                          onChange={handleForm}
                          defaultValue={information.tax}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="flex mb-3 ">
                    <div className="flex items-center w-2/5  justify-end ">
                      <label className="text-gray-500 mr-3  "></label>
                    </div>
                    <div className="flex ">
                      <button className="py-2 px-4 mt-2 mb-4 round-md font-extrabold bg-[#ffd124]  hover:translate-y-[-1px] transition-all text-[#00003B] rounded-sm">
                        Cập nhật
                      </button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
    /*   </div> */
   /*  </div> */
  );
}
