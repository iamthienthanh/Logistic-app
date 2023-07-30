import React from 'react'
import { Tabs } from 'antd';
import MienNam from './Area/TieuChuan/MienNam';
import MienNamNhanh from './Area/Nhanh/MienNam.nhanh';
import MienNamSuper from './Area/Super/MienNam.super';

const { TabPane } = Tabs;
export default function BangGia() {
    return (
        <div className='price_list ' style={{ 
			maxWidth: "1200px",
			margin:"auto"
		 }}>
            <div className='p-7'>
                <div className="flex rounded-[2px] h-[43px] items-center w-full my-[20px] mb-[40px]">
                    <form className="w-full mb-[10px] lg:mb-0" data-request="onSearchPriceList" id="form-price-list">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-[20px]">
                            <div className="flex items-center border border-[#b2b2b2] w-full input_block_tab">
                                <input className="bg-transparent focus:outline-none ml-2 w-full h-[43px]" id="price-from" placeholder="Gửi từ Tỉnh/Thành phố" type="text" />
                            </div>
                            <div className="flex flex-row items-center w-full lg:w-[180px]">
                                <button className="w-full lg:w-[180px] mr-0 lg:mr-2 bg-[#e5a663] h-[45px] rounded-[2px] text-white">
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <h5 className="uppercase  text-center mb-4 text-[20px] text-[#F0B90B]" name={1}>
                    CƯỚC VẬN CHUYỂN DỊCH VỤ TIÊU CHUẨN
                </h5>
                <div className='border border-[#ffbb0f] rounded-[5px] area'>
                    <div className='rounded-[5px] bg-[#f2f2f2]'>
                        <h2 className='text-center text-xl p-5 border-b-2 border-[#F0B90B] text-[#ffbb0f]'>KHU VỰC MIỀN NAM</h2>
                    </div>
                    <MienNam />
                </div>

                <h5 className="uppercase text-center mb-4 mt-10 text-[20px] text-[#F0B90B]" name={1}>
                    CƯỚC VẬN CHUYỂN NHANH
                </h5>
                <div className='border border-black rounded-[10px] area'>
                    <div className='rounded-[5px] bg-[#f2f2f2]'>
                        <h2 className='text-center text-xl p-5 border-b-2 border-[#F0B90B] text-[#ffbb0f]'>KHU VỰC MIỀN NAM</h2>
                    </div>
                    <MienNamNhanh />
                </div>

                <h5 className="uppercase  text-center mb-4 mt-10 text-[20px] text-[#F0B90B]" name={1}>
                    CƯỚC VẬN CHUYỂN DỊCH VỤ SUPER
                </h5>
                <div className='border border-black rounded-[10px] area '>
                    <div className='rounded-[5px] bg-[#f2f2f2]'>
                        <h2 className='text-center text-xl p-5 border-b-2 border-[#F0B90B] text-[#ffbb0f]'>KHU VỰC MIỀN NAM</h2>
                    </div>
                    <MienNamSuper />
                </div>


            </div>
        </div>

    )
}
