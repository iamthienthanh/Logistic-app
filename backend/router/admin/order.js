import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { createOrderValidate } from "../../validation/order.js"
import { verifyToken } from '../../middleware/index.js'
import { genarateOrderID } from "../../service/order.js"
import opencage from "opencage-api-client"
const OPENCAGE_API_KEY='7f8d6f65dfd846748331d3c5e0a52070'
import DeliveryService from '../../model/DeliveryService.js'
import Order from "../../model/Order.js"
import User from "../../model/User.js"
import Receiver from "../../model/Receiver.js"

const orderAdminRoute = express.Router()

/**
 * @route GET /api/admin/order
 * @description get list of order
 * @access private
 */
orderAdminRoute.get('/', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const {orderId, customerName, customerPhone, customerEmail} = req.query
        const order = await Order.find({}).limit(pageSize).skip(pageSize*page).sort('-updatedAt')
        if (order)
            var length = order.length
            return sendSuccess(res, 'get order information successfully.', {length, order})
        return sendError(res, 'order information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})


/**
 * @route GET /api/admin/order/:orderId
 * @description get an order
 * @access private
 */
orderAdminRoute.get('/:orderId', async (req, res) => {
    try {
        const {orderId} = req.params
        const order = await Order.find({orderId})
        if (order)
            return sendSuccess(res, 'get order information successfully.', order)
        return sendError(res, 'order information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/order/create
 * @description admin create a new order for offline customer
 * @access public
 */
orderAdminRoute.post('/create',
    async (req, res) => {
        const errors = createOrderValidate(req.body)
        if (errors) return sendError(res, errors)
        const {customerPhone, customerEmail, serviceName, receiver, origin, destination } = req.body
        const {name, phone, identity, street, ward, district, province} = receiver
        try {
            const customer = await User.findOne({
                $or: [
                    {phone: customerPhone},
                    {email: customerEmail}
                ]
            })
            if (!customer) return sendError(res, 'customer not found')
            const customerId = customer.role._id
            const service = await DeliveryService.findOne({name: serviceName })
            if (!service) return sendError(res, 'the service is not exist.')
            
            var data = await opencage.geocode({q: `${origin}`, key: OPENCAGE_API_KEY})            
            if (data.status.code == 200 && data.results.length > 0) {
                if (! data.results[0].geometry) {
                    return sendError(res, "origin is not found")
                }                       
            }
            data = await opencage.geocode({q: `${destination}`, key: OPENCAGE_API_KEY})            
            if (data.status.code == 200 && data.results.length > 0) {
                if (! data.results[0].geometry) {
                    return sendError(res, "destination is not found")
                }                       
            }
            const orderId = await genarateOrderID()
            var _receiver = null
            _receiver = await Receiver.findOne({identity : identity})
            if (! _receiver){            
                _receiver = await Receiver.create({name, phone, identity, street, ward, district, province})
            }          
            const order = await Order.create({ orderId, service, customer: customerId, receiver:_receiver, origin, destination})            
            return sendSuccess(res, 'create new order successfully',order)
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
 })


/**
 * @route PUT /api/admin/order/:orderId
 * @description update status order by orderId
 * @access private
 */
orderAdminRoute.put('/:orderId', async (req, res) => {
    try {
        const {orderId} = req.params
        const {status} = req.body
        const order = await Order.findOneAndUpdate({orderId}, {status: status})
        if (order)
            return sendSuccess(res, 'update order information successfully.', order)
        return sendError(res, 'order information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route DELETE /api/admin/order/:orderId
 * @description admin delete order by orderId
 * @access private
 */
 orderAdminRoute.delete('/:orderId', async (req, res) => {
    try {
        const {orderId} = req.params
        const order = await Order.findOneAndRemove({orderId})
        if (order)
            return sendSuccess(res, 'delete order information successfully.', order)
        return sendError(res, 'order information is not found.')
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default  orderAdminRoute