import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { MainContext } from "../../context/MainContext";
export default function Service() {
  const { setMetadata } = useContext(MainContext);
   useEffect(() => {
    setMetadata((prev) => {
      return {
        ...prev,
        title: "Chuyển phát nhanh | TKTL",
      };
    });
    
  }, []);
  return (
    <div className="overflow-hidden">
      <section>
        <div className="h-full   md:h-[650px] lg:h-[700px] w-full  pt-12">
          <img
            className="w-full h-full  object-cover"
            src="https://jtexpress.vn/themes/jtexpress/assets/images/overplan.png"
            alt=""
          />
        </div>
        <div className="text-left md:mx-7 mx-3 mt-2">
          <h1 className="text-[30px] mb-[12px] font-bold text-[#f0b90c]">
            Tổng quan dịch vụ
          </h1>
          <span className="  text-base md:text-lg text-justify">
            Sở hữu những ưu điểm vượt trội so với các dịch vụ chuyển phát nhanh
            hiện có trên thị trường, J&amp;T Express thấu hiểu mọi nhu cầu và
            mang đến cho khách hàng 5 dịch vụ với những tiện ích đặc biệt nhất.
          </span>
        </div>
      </section>
      <section>
        <div className="h-full sm:h-[500px] md:h-[620px] lg:h-[700px] w-full  pt-10">
          <img
            className=" w-full h-full object-cover "
            src="https://jtexpress.vn/themes/jtexpress/assets/images/service-2-mobile.jpg"
            alt=""
          />
        </div>
        <div className="text-left md:mx-7 mx-3 mt-2 ">
          <h1 className="text-[30px] mb-[12px] font-bold text-[#f0b90c]">
            Chuyển phát tiêu chuẩn
          </h1>
          <span className=" text-[20px] text-justify">
            <span className="inline-block mt-4 mb-10 ">
              <p>
                Dịch vụ chuyển phát tiêu chuẩn - J&amp;T Express là dịch vụ được
                thiết kế cho tất cả đối tượng khách hàng, đặc biệt là những ai
                đang tham gia kinh doanh thương mại điện tử, các chủ shop bán
                lẻ, khách hàng hay sử dụng các kênh mạng xã hội để bán hàng và
                mua sắm,...
                <br />
                Dựa trên những tiêu chuẩn về tốc độ giao hàng và các yếu tố khác
                (giá cả, tiện lợi,...), J&amp;T Express tự hào nâng cao hơn,
                mang lại tiêu chuẩn giao hàng vượt trội hơn khi so sánh với các
                dịch vụ khác cùng phân cấp trên thị trường với đặc tính{" "}
                <b className="font-boldItalic text-yellow-500">
                  3 tiết kiệm: tiết kiệm giá thành, tiết kiệm thời gian và tiết
                  kiệm công sức.
                </b>
              </p>
            </span>
          </span>
        </div>
      </section>
      <section>
        <div className="h-full sm:h-[500px] md:h-[620px] lg:h-[700px] w-full  pt-12">
          <img
            className="  w-full h-full object-cover"
            src="https://jtexpress.vn/themes/jtexpress/assets/images/service-3-mobile.jpg"
            alt=""
          />
        </div>
        <div className="text-center  md:mx-7 mx-3">
          <h1 className="text-[30px] mb-[12px] font-bold text-[#f0b90c]">
            Chuyển phát tiêu chuẩn
          </h1>
          <span className=" text-[20px] text-justify">
            <span className="inline-block mt-4 mb-2 ">
              <p>
                Đáp ứng mọi nhu cầu vận chuyển hàng hoá (thương mại điện tử, đồ
                dùng cá nhân,...), J&T Fast là dịch vụ Chuyển phát nhanh cam kết
                nâng cao tối đa trải nghiệm giao nhận hàng của bạn. Với độ phủ
                sóng rộng khắp 63 tỉnh thành, J&T Fast mang đến bạn giải pháp
                vận chuyển 6 đảm bảo:
              </p>
            </span>
          </span>
          <div>
            <div className="flex items-start justify-start mb-2">
              <IoShieldCheckmarkOutline className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Đảm bảo</span>
                <span className="text-black text-lg ml-1   ">
                  giao nhanh, đúng hẹn
                </span>
                &nbsp;
              </span>
            </div>
            <div className="flex items-start justify-start mb-2">
              <IoShieldCheckmarkOutline className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Đảm bảo</span>
                <span className="text-black text-lg ml-1   ">
                  nhận giao cả hàng hóa trọng lượng lớn, cồng kềnh
                </span>
                &nbsp;
              </span>
            </div>
            <div className="flex items-start justify-start mb-2">
              <IoShieldCheckmarkOutline className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Đảm bảo</span>
                <span className="text-black text-lg ml-1   ">
                  ặt giao hàng dễ dàng trên nhiều nền tảng (hotline, app,
                  website,...)
                </span>
                &nbsp;
              </span>
            </div>
            <div className="flex items-start justify-start mb-2">
              <IoShieldCheckmarkOutline className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Đảm bảo</span>
                <span className="text-black text-lg ml-1   ">
                  tra cứu tình trạng đơn hàng chuẩn xác
                </span>
                &nbsp;
              </span>
            </div>
            <div className="flex items-start justify-start mb-2">
              <IoShieldCheckmarkOutline className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Đảm bảo</span>
                <span className="text-black text-lg ml-1   ">
                  đối soát tài chính thông minh
                </span>
                &nbsp;
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mt-7">
            <Link to="/tra-cuu">
              <button className="bg-[#FF0000] rounded-[2px] font-bold text-white w-[160px] h-[56px] mr-2 flex items-center justify-center cursor-pointer">
                <img
                  src="https://jtexpress.vn/themes/jtexpress/assets/images/list_book_icon.png"
                  alt="list_book_icon"
                />
                <span className="ml-2 text-lg">Bảng giá</span>
              </button>
            </Link>
            <Link to="/chuyen-phat-tieu-chuan">
              <button className="rounded-2 border border-[#FF0000] font-bold w-[160px] h-[56px] text-[#FF0000] ml-2 z-[10000]">
                <span className="ml-2 text-lg"> Xem chi tiết</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="h-full sm:h-[500px] md:h-[620px] lg:h-[700px] w-full  pt-12">
          <img
            className="  w-full h-full object-cover"
            src="https://jtexpress.vn/themes/jtexpress/assets/images/service-4-mobile.jpg"
            alt=""
          />
        </div>
        <div className="text-center  md:mx-7 mx-3">
          <h1 className="text-[30px] mb-[12px] font-bold text-[#f0b90c]">
            Siêu dịch vụ giao hàng
          </h1>
          <span className=" text-[20px] text-justify">
            <span className="inline-block mt-4 mb-2 ">
              <p>
                J&T Super dịch vụ chuyển phát cao cấp, biến việc chuyển phát
                thông thường của bạn trở nên đẳng cấp và đầy tính trải nghiệm.
                Nếu bạn đang tìm một dịch vụ vận chuyển đảm bảo các yếu tố hoả
                tốc, ổn định, bảo mật và hưởng nhiều đặc quyền, đây chắc chắn là
                siêu dịch vụ bạn không thể bỏ qua
              </p>
            </span>
          </span>
          <div>
            <div className="flex items-start justify-start mb-2">
              <AiOutlineCheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Hỏa tốc:</span>
                <span className="text-black text-lg ml-1   ">
                  Trải nghiệm giao hàng hỏa tốc trong ngày từ Bắc ra Nam trở nên
                  dễ dàng hơn bao giờ hết
                </span>
                &nbsp;
              </span>
            </div>
            <div className="flex items-start justify-start mb-2">
              <AiOutlineCheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Bảo mật:</span>
                <span className="text-black text-lg ml-1   ">
                  Bao bì chuyên dụng, đóng gói cẩn trọng, tuyệt đối an toàn
                </span>
                &nbsp;
              </span>
            </div>
            <div className="flex items-start justify-start mb-2">
              <AiOutlineCheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Ưu tiên:</span>
                <span className="text-black text-lg ml-1   ">
                  Ưu tiên giải quyết mọi khiếu nại trong 24 giờ
                </span>
                &nbsp;
              </span>
            </div>

            <div className="flex items-start justify-start mb-2">
              <AiOutlineCheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Đặc quyền:</span>
                <span className="text-black text-lg ml-1   ">
                  Đội ngũ shipper đào tạo chuyên nghiệp, đường dây nóng phục vụ
                  riêng biệt và nhiều đặc quyền khác
                </span>
                &nbsp;
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mt-7">
            <Link to="/tra-cuu">
              <button className="bg-[#FF0000] rounded-[2px] font-bold text-white w-[160px] h-[56px] mr-2 flex items-center justify-center cursor-pointer">
                <img
                  src="https://jtexpress.vn/themes/jtexpress/assets/images/list_book_icon.png"
                  alt="list_book_icon"
                />
                <span className="ml-2 text-lg">Bảng giá</span>
              </button>
            </Link>
            <Link to="/chuyen-phat-tieu-chuan">
              <button className="rounded-2 border border-[#FF0000] font-bold w-[160px] h-[56px] text-[#FF0000] ml-2 z-[10000]">
                <span className="ml-2 text-lg"> Xem chi tiết</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="h-full sm:h-[500px] md:h-[620px] lg:h-[700px] w-full  pt-12">
          <img
            className="  w-full h-full object-cover"
            src="https://jtexpress.vn/themes/jtexpress/assets/images/service-5-mobile.jpg"
            alt=""
          />
        </div>
        <div className="text-center  md:mx-7 mx-3">
          <h1 className="text-[30px] mb-[12px] font-bold text-[#f0b90c]">
            Giao hàng tươi sống
          </h1>
          <span className=" text-[20px] text-justify">
            <span className="inline-block mt-4 mb-2 ">
              <p>
                Nếu bạn đang cần tìm một dịch vụ chuyển phát các mặt hàng tươi
                sống (thịt, cá, thuỷ hải sản, rau củ quả tươi,...) với thời hiệu
                nhanh chóng, bảo quản cẩn thận, đảm bảo tính nguyên trạng của
                hàng hóa thì J&T Fresh dành cho bạn.
              </p>
            </span>
          </span>
          <div>
            <div className="flex items-start justify-start mb-2">
              <AiOutlineCheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg "> Quy trình chuyên nghiệp:</span>
                <span className="text-black text-lg ml-1   ">
                  Hàng hóa tươi sống cần được vận chuyển với quy trình đặc thù
                  và chuyên nghiệp. J&T Fresh “nâng niu" đóng gói, bảo quản cẩn
                  trọng và cam kết về tính nguyên trạng
                </span>
                &nbsp;
              </span>
            </div>
            <div className="flex items-start justify-start mb-2">
              <AiOutlineCheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Thời hiệu nhanh chóng:</span>
                <span className="text-black text-lg ml-1   ">
                  Giao hàng tới người nhận trong thời gian sớm nhất, để hàng hóa
                  luôn tươi và an toàn
                </span>
                &nbsp;
              </span>
            </div>
            <div className="flex items-start justify-start mb-2">
              <AiOutlineCheckCircle className="w-6 h-6 flex-shrink-0" />
              <span className=" text-[#D60009] ml-2 text-left">
                <span className="text-lg ">Chuyên môn hóa đóng gói:</span>
                <span className="text-black text-lg ml-1   ">
                  Mỗi mặt hàng tươi sống có cách đóng gói và bảo quản khác nhau
                  với da dạng dụng cụ thùng xốp, túi đá, giấy chống thấm, lưới
                  xốp,... để luôn giữ trạng thái tươi ngon và vệ sinh.
                </span>
                &nbsp;
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mt-7">
            <Link to="/tra-cuu">
              <button className="bg-[#FF0000] rounded-[2px] font-bold text-white w-[160px] h-[56px] mr-2 flex items-center justify-center cursor-pointer">
                <img
                  src="https://jtexpress.vn/themes/jtexpress/assets/images/list_book_icon.png"
                  alt="list_book_icon"
                />
                <span className="ml-2 text-lg">Bảng giá</span>
              </button>
            </Link>
            <Link to="/chuyen-phat-tieu-chuan">
              <button className="rounded-2 border border-[#FF0000] font-bold w-[160px] h-[56px] text-[#FF0000] ml-2 z-[10000]">
                <span className="ml-2 text-lg"> Xem chi tiết</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="relative overflow-hidden w-full h-[414px]">
          <img
            className="  w-full h-full object-cover "
            src="https://jtexpress.vn/themes/jtexpress/assets/images/sec7inservice.png"
            alt=""
          />
          <img
            className="  object-cover w-full md:w-auto h-full z-10 absolute bottom-[-10px] left-[50%] translate-x-[-50%]"
            src="https://jtexpress.vn/themes/jtexpress/assets/images/insec7service.png"
            alt=""
          />
        </div>
        <div className="md:mx-44 sm:mx-36 mx-12 mt-2">
          <div className="text-center ">
            <h1 className="text-[28px] mb-[8px] font-bold text-[#f0b90c]">
              Tải ứng dụng J&T Express
            </h1>
            <span className="  text-base md:text-lg text-justify">
              Tải ngay App J&T Express - Giao Hàng Nhanh. Hưởng trọn bộ tính
              năng giao hàng chỉ với 1 chạm
            </span>
          </div>
          <div className="flex items-center flex-col mt-5 ">
            <div className="flex flex-row items-center ">
              <Link
                className="w-[134px] h-[40px] my1920:w-[198px] my1920:h-[57px] mr-4"
                to="https://apps.apple.com/us/app/j-t-vnm-vip/id1474072185"
              >
                {" "}
                <img
                  className="w-full h-full object-cover"
                  src="https://jtexpress.vn/storage/app/uploads/public/627/5ca/259/6275ca259876b348340439.png"
                  alt=""
                />
              </Link>
              <Link
                className="w-[134px] h-[40px] my1920:w-[198px] my1920:h-[57px]"
                to="https://play.google.com/store/apps/details?id=com.msd.VIPyueNanClient&hl=vi&gl=US"
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://jtexpress.vn/storage/app/uploads/public/627/5ca/bd7/6275cabd7222d202962202.png"
                  alt="ch-play"
                />
              </Link>
            </div>
            <div className="flex items-center flex-col">
              <img
                src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=https://jtexpress.vn/vi/download&choe=UTF-8"
                title="Link to Download"
                className="h-[150px] w-[150px]"
                alt=""
              />
              <p className="font-bold text-base">QUÉT MÃ ĐỂ DOWNLOAD</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
