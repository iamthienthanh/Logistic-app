import Error from "../helper/error.js"


export const createPriceValidate = data => {
    const error = new Error()

    error.isRequired(data.kg, 'kg')
    .isRequired(data.ton, 'ton')
    .isRequired(data.m3, 'm3')
    
    return error.get()
}
