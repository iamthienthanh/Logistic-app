import Error from "../helper/error.js"

export const createOrderValidate = data => {
    const error = new Error()

    error.isOnlyRequiredOneOf([{field: data.serviceId, name:'serviceId'}, {field: data.serviceName,name:'serviceName'}])
    
    
    return error.get()
}