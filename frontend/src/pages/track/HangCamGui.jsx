import React from 'react'

export default function HangCamGui() {
    const Line = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: "1px",
                width: "100%"
            }}
        />
    );
    return (
        <div className='p-7' style={{ 
			maxWidth: "1200px",
			margin:"auto"
		 }} >
            <div className='flex flex-row justify-center mb-10 '>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f2/c3d/6181f2c3d5dfd015796068.png" alt="hinh chat cam" />
                <div >
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>1. Súng đạn, bom mìn, dao kiếm, công cụ hổ trợ</h1>
                    <span>Vũ khí, dao các loại, đạn dược, trang thiết bị kỹ thuật quân sự, quân trang, quân dụng, trang bị quân sự khác, hiện vật thuộc di tích văn hóa lịch sử và bộ phận được tách rời của các vật này</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f3/cf4/6181f3cf44386080763394.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>2. Vật hoặc chất dể nổ dễ cháy</h1>
                    <span >Các loại vật/chất dể cháy nổ thông dụng như: bình ga, pháo các loại.</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f3/f69/6181f3f69e678618973993.png" alt="hinh chat cam" />
                <div >
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>3. Văn hóa phẩm đồi trụy, phản động chống phá nhà nước</h1>
                    <span>Các loại văn hóa phẩm đồi trụy, phản động, ấn phẩm tài liệu nhằm phá hoại trật tự công cộng chống lại Nhà nước, mê tính dị đoan, có hại tới giáo dục nhân cách, sức khỏe của trẻ em.</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f4/115/6181f4115f60a876141163.png" alt="hinh chat cam" />
                <div >
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>4. Các chất ma túy và các chất kích thích thần kinh</h1>
                    <span>Các chất ma túy, chất kích thích thần kinh(bao gồm cả tiền chất, nguyên vật liệu chế tạo ra ma túy, chất kích thích), hóa chất có tính độc hại mạnh và thuốc lá điếu sản xuất ở nước ngoài.</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f4/3c5/6181f43c50cbe102066903.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>5. Các loại hàng nhà nước cấm kinh doanh hoặc nhập khẩu</h1>
                    <span>Các loại vật phẩm hàng hóa mà Nhà nước cấm lưu thông, cấm kinh doanh, cấm nhập khẩu.</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f4/589/6181f4589d1b9948996710.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>6. Thư trong bưu kiện (Thư gửi kèm trong hàng hóa)</h1>
                    <span>Thư trong bưu kiện (Thư gửi kèm trong hàng hóa)</span>
                </div>
            </div>
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f4/115/6181f4115f60a876141163.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>7. Sinh vật sống</h1>
                    <span>Sinh vật sống là thực vật, động vật; động vật hoang dã, quý hiếm cần được bảo vệ (bất luận ở trạng thái nào).</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f4/f75/6181f4f753662718205707.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>8. Tiền bạc giấy tờ có giá trị</h1>
                    <span>Tiền Việt Nam, tiền nước ngoài và các giấy tờ giá trị như tiền.</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f5/0f0/6181f50f0fedb537599093.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>9. Kim khí quý (vàng, bạc, đá quý)</h1>
                    <span>Các loại kim khí quý(vàng, bạc, bạch kim...) các loại đá quý hay sản phẩm khác được chế biến từ kim khí, đá quý.</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f5/3c9/6181f53c95d18593496964.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>10. Bưu gửi chứa nhiều bưu gửi, gửi nhiều địa chỉ nhận</h1>
                    <span>Bưu gửi chứa nhiều bưu gửi, gửi nhiều địa chỉ khác nhau.</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f6/60b/6181f660be9b7208581924.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>11. Vật phẩm, ấn phẩm hàng cấm nhập theo thông báo LM bưu chính TG</h1>
                    <span>Vật phẩm, ấn phẩm hàng cấm nhập vào nước nhận theo thông báo của liên minh bưu chính thế giới (UPU).</span>
                </div>
            </div>
            <Line color="#f4f4f4" />
            <div className='flex flex-row justify-center mb-10 mt-5'>
                <img style={{height:"94px"}} className='mr-6' src="https://jtexpress.vn/storage/app/uploads/public/618/1f6/89e/6181f689e706f896043069.png" alt="hinh chat cam" />
                <div className='w-[1100px]'>
                    <h1 className='text-[#ffbb0f] text-2xl font-bold'>12. Vật phẩm, hàng hóa trong thư, ấn phẩm, học phẩm dùng cho người mù</h1>
                    <span>Vật phẩm, ấn phẩm hàng cấm nhập vào nước nhận theo thông báo của liên minh bưu chính thế giới (UPU).</span>
                </div>
            </div>
        </div>
    )
}
