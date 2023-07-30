import { Form, Formik } from 'formik';
import { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';

const RecruitForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [validationMsg, setValidationMsg] = useState({});

    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.email = 'Vui lòng nhập email của bạn !';
        } else if (!isEmail(email)) {
            msg.email = 'Email không hợp lệ';
        }

        if (isEmpty(name)) {
            msg.name = 'Vui lòng nhập họ và tên ';
        }

        if (isEmpty(phone)) {
            msg.phone = 'Vui lòng nhập số điện thoại ';
        }

        if (isEmpty(birthday)) {
            msg.birthday = 'Vui lòng nhập ngày sinh của bạn ';
        }

        setValidationMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateAll();
        if (!isValid) return;
        console.log({
            name,
            email,
            phone,
            birthday,
        });
        setName('');
        setEmail('');
        setPhone('');
        setBirthday('');
    };

    return (
        <Formik>
            {() => {
                return (
                    <div className="bg-[#fff] p-4 sm:p-7 lg:p-14 w-[90%] lg:w-auto rounded-lg absolute top-[50%] left-[50%]  translate-y-[-50%]  translate-x-[-50%]">
                        <h3 className="mb-2 text-3xl font-bold lg:mb-5">Đăng ký ứng tuyển</h3>
                        <Form onSubmit={handleSubmit} className="gap-4 lg:grid lg:grid-cols-2">
                            <FormGroup className="flex flex-col mb-0 lg:mb-3">
                                <Label for="name">Họ và tên</Label>
                                <Input
                                    className="py-2 border placeholder:pl-2 xl:w-[260px] lg:w-[200px]"
                                    id="name"
                                    type="text"
                                    name=""
                                    value={name}
                                    placeholder="Họ và tên"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <p className="mt-2 text-sm text-red-400 ">{validationMsg.name}</p>
                            </FormGroup>

                            <FormGroup className="flex flex-col mb-0 lg:mb-3">
                                <Label for="email">Email *</Label>
                                <Input
                                    className="py-2 border placeholder:pl-2 xl:w-[260px] lg:w-[200px]"
                                    type="email *"
                                    name="email"
                                    id="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p className="mt-2 text-sm text-red-400 ">{validationMsg.email}</p>
                            </FormGroup>

                            <FormGroup className="flex flex-col mb-0 lg:mb-3">
                                <Label for="phone">Số điện thoại *</Label>
                                <Input
                                    className="py-2 border placeholder:pl-2 xl:w-[260px] lg:w-[200px]"
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    value={phone}
                                    placeholder="Số điện thoại"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <p className="mt-2 text-sm text-red-400 ">{validationMsg.phone}</p>
                            </FormGroup>

                            <FormGroup className="flex flex-col mb-0 lg:mb-3">
                                <Label for="birthday">Năm sinh *</Label>
                                <Input
                                    className="py-2 border placeholder:pl-2 xl:w-[260px] lg:w-[200px]"
                                    type="date"
                                    name="birthday"
                                    id="birthday"
                                    value={birthday}
                                    placeholder="Năm sinh"
                                    onChange={(e) => setBirthday(e.target.value)}
                                />
                                <p className="mt-2 text-sm text-red-400 ">{validationMsg.birthday}</p>
                            </FormGroup>

                            <FormGroup className=" col-span-full">
                                <button type="submit" className="w-[100%] bg-[#e5a663] py-2 sm:mt-5 rounded-lg">
                                    Gửi đăng ký ứng tuyển
                                </button>
                            </FormGroup>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default RecruitForm;
