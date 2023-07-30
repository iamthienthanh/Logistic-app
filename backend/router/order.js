import express from "express"
import opencage from "opencage-api-client"
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import { createOrderValidate } from "../validation/order.js"
import { verifyToken, verifyCustomer} from '../middleware/index.js'
import { genarateOrderID } from "../service/order.js"
import DeliveryService from '../model/DeliveryService.js'
import Order from "../model/Order.js"
import Product from "../model/Product.js"
import Receiver from "../model/Receiver.js"
const OPENCAGE_API_KEY='7f8d6f65dfd846748331d3c5e0a52070'

const orderRoute = express.Router()

/**
 * @route POST /api/order/create
 * @description customer create a new order
 * @access public
 */
orderRoute.post('/create',
    verifyToken,
    verifyCustomer,
    async (req, res) => {
        const errors = createOrderValidate(req.body)
        if (errors) return sendError(res, errors)
        const { serviceName, receiver, origin, destination } = req.body
        const {name, phone, identity} = receiver
        try {
            const customerId = req.user.role._id
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
                _receiver = await Receiver.create({name, phone, identity})
            }          
            const order = await Order.create({ orderId, service, customer: customerId, receiver:_receiver, origin, destination})            
            return sendSuccess(res, 'create new order successfully', order)
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    })


/**
 * @route GET /api/order/
 * @description customer get list of their order
 * @access private
 */
orderRoute.get('/',
    verifyToken,
    verifyCustomer,
    async (req, res) => {
        try {            
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
            const page = req.query.page ? parseInt(req.query.page) : 0
            const customerId = req.user.role._id
            const order = await Order.find({customer: customerId}).limit(pageSize).skip(pageSize*page).sort('-updatedAt')
            const length = await Order.count({customer: customerId})
            return sendSuccess(res, 'get order successfully', {length, order})
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
})


/**
 * @route GET /api/order/:orderId
 * @description customer see their order by orderId  
 * @access private
 */
orderRoute.get('/:orderId',
    verifyToken,
    verifyCustomer,
    async (req, res) => {
        try {
            const customerId = req.user.role._id
            const {orderId} = req.params
            const order = await Order.find({orderId: orderId, customer: customerId})
            if (order)
                return sendSuccess(res, 'get order successfully', order)
            return sendError(res, 'no information')
        } catch (error) {
            console.log(error)
            return sendServerError(res)
        }
    }
)

/**
 * @route GET /api/order/tracking/:lstOrderId
 * @description get list of order
 * @access public
 */
orderRoute.get('/tracking/:lstOrderId', async (req, res) => {
    try {
        const lstOrderId = req.params.lstOrderId.split('&')
        const orders = await Order.find({
            orderId: { $in: lstOrderId }
        })
        return sendSuccess(res, 'request successfully', { orders, success: orders.length, failure: lstOrderId.length - orders.length })
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default orderRoute