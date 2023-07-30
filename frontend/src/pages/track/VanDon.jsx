import { useState } from 'react';
import { END_POINT } from '../../utils/constant';
import axios from 'axios';
import moment from 'moment';

export default function VanDon() {
	const [billCode, setBillCode] = useState();
	const [showResult, setShowResult] = useState(false);
	const [data, setData] = useState(false); // list order

	const handleSubmit = async () => {
		if (!billCode) {
			alert('Vui lòng nhập mã vận đơn');
			return;
		}

		const { data } = await axios.get(`${END_POINT}/tracking/order/${billCode}`);

		if (data.data.success) {
			setShowResult(true);
			setData(data.data.orders);
		} else {
			alert('Mã vận đơn không tồn tại');
		}
	};

	return (
		<div className="p-7" style={{ 
			maxWidth: "1200px",
			margin:"auto"
		 }}>
			<textarea
				value={billCode}
				onChange={(e) => setBillCode(e.target.value)}
				className="border border-[#ced4da] focus:outline-none w-full rounded-[2px] px-[20px] py-[16px] h-[80px]"
				name="billcode"
				placeholder="Ví dụ: 841000072647 & 840000598444"
			/>
			<div>
				<span className="text-[#161D25] block my-[24px]">
					Nhập mã vận đơn của bạn (cách nhau bởi dấu phẩy), tối đa 10 vận đơn.
				</span>
				<button
					onClick={handleSubmit}
					className="w-full bg-[#e5a663] h-[55px] rounded-[2px] text-white font-semibold text-lg"
				>
					Tra cứu vận đơn
				</button>
			</div>

			{data && data.length > 0 && (
				<div id="bill" className="px-4 lg:px-0">
					{data.map((order) => (
						<div className="mt-14 bg-[#FFF2F4] min-h-[100px] rounded-[10px] flex items-center">
							<div className="text-center mx-10">
								<p className="text-[16px] font-medium mb-1">
									{moment(order.created_at).format('HH:mm')}
								</p>
								<p className="text-[#FF0000] text-[16px] font-medium mb-0">
									{moment(order.created_at).format('DD/MM/YYYY')}
								</p>
							</div>

							<div className="">
								<p className="mb-1 text-[18px]">Order id: {order.orderId}</p>
								<p className="mb-1 text-[18px]">Service id: {order.service}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
