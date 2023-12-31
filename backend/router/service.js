import express from "express";
import { sendError, sendServerError, sendSuccess } from "../helper/client.js";
import DeliveryService from "../model/DeliveryService.js";

const serviceRoute = express.Router();

/**
 * @route GET /api/service
 * @description get service information
 * @access public
 */
serviceRoute.get("/", async (req, res) => {
  try {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
 const { keyword, sortBy, target, tip } = req.query;
    var query = {};
    var keywordCondition = keyword
      ? {
          $or: [
            { name: { $regex: keyword, $options: "i" } },
            { sub_detail: { $regex: keyword, $options: "i" } },
            { target: { $regex: keyword, $options: "i" } },
            { tip: { $regex: keyword, $options: "i" } },
          ],
        }
      : {};
    if (target) {
      query.type = target;
    }
    if (tip) {
      query.location = tip;
    }
    const length = await DeliveryService.count();
    const service = await DeliveryService.find({ $and: [query, keywordCondition] })
      .limit(pageSize)
      .skip(pageSize * page)
      .sort(`${sortBy}`)
      .populate("quotes")
      .populate("features")
      .populate("participants");
    if (service)
      return sendSuccess(res, "get service information successfully.", {length, service});
    return sendError(res, "Service information is not found.");
  } catch (error) {
    return sendServerError(res);
  }
});


/**
 * @route GET /api/service/:id
 * @description get a single service information
 * @access public
 */

serviceRoute.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const service = await DeliveryService.findOne({ _id: id })
    .populate("quotes", "features", "participants"); //?
    if (!service) return sendError(res, "Service does not exist.");
    if (service)
      return sendSuccess(res, "get service information successfully.", service);
    return sendError(res, "Service information is not found.");
  } catch (error) {
    return sendServerError(res);
  }
});

export default serviceRoute;
