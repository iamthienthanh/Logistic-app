import express from "express";
import { sendError, sendServerError, sendSuccess } from "../helper/client.js";
import DeliveryService from "../model/DeliveryService.js";
import Distance from "../model/Distance.js";
import { zoneCodeValidate } from "../validation/distance.js";

const distanceRoute = express.Router();

/**
 * @route GET /api/distance
 * @description get distance information
 * @access public
 */
distanceRoute.get("/", async (req, res) => {
  try {
    const { fromProvince, toProvince } = req.query;
    const length = await Distance.count();
    const distance = await Distance.find({
      fromProvince: fromProvince,
      toProvince: toProvince,
    });
    if (distance)
      return sendSuccess(res, "get distance information successfully.", {
        length,
        distance,
      });
    return sendError(res, "distance information is not found.");
  } catch (error) {
    return sendServerError(res);
  }
});

/**
 * @route GET /api/distance/:id
 * @description get a single distance information
 * @access private
 */

distanceRoute.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const distance = await Distance.findById({ _id: id });
    if (!distance) return sendError(res, "Distance does not exist.");
    if (distance)
      return sendSuccess(
        res,
        "get distance information successfully.",
        distance
      );
    return sendError(res, "Distance information is not found.");
  } catch (error) {
    return sendServerError(res);
  }
});

/**
 * @route GET /api/distance/service/:serviceId
 * @description get distance information for a given service id
 * @access public
 */

distanceRoute.get("/service/:serviceId", async (req, res) => {
  try {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const { serviceId } = req.params;
    const service = await DeliveryService.findById({ _id: serviceId });
    if (!service) return sendError(res, "Service does not exist.");

    if (service) {
      const ids = [];
      for (let i = 0; i < service.distances.length; i++) {
        if (service.distances.length) {
          ids.push(service.distances[i]);
        }
      }
      const length = await Distance.count();
      const distance = await Distance.find({ _id: ids })
        .limit(pageSize)
        .skip(pageSize * page);
      return sendSuccess(res, "get distance information successfully.", {
        length,
        distance,
      });
    }
    return sendError(res, "Distance information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route PUT /api/distance/:id
 * @description distance zonecode submit
 * @access private
 */
distanceRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  const errors = zoneCodeValidate(req.body);
  if (errors) return sendError(res, errors);
  let { zonecode } = req.body;
  try {
    const distance = await Distance.findById(id);
    if (distance) {
      await Distance.findByIdAndUpdate(id, { zonecode: zonecode });
      return sendSuccess(res, "Update distance successfully.", {
        zonecode: zonecode,
      });
    }
    return sendError(res, "Distance does not exist.");
  } catch (error) {
    return sendServerError(res);
  }
});

export default distanceRoute;
