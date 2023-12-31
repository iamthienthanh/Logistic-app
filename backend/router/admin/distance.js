import express from "express";
import {
  sendError,
  sendServerError,
  sendSuccess,
} from "../../helper/client.js";
import Distance from "../../model/Distance.js";
import DeliveryService from "../../model/DeliveryService.js";
import { createDistanceValidate } from "../../validation/distance.js";

const distanceAdminRoute = express.Router();

/**
 * @route POST /api/admin/distance/create/:serviceId
 * @description create delivery road for delivery service
 * @access private
 */
distanceAdminRoute.post("/create/:serviceId", async (req, res) => {
  const errors = createDistanceValidate(req.body);
  if (errors) return sendError(res, errors);

  const { fromProvince, toProvince, zonecode, dist } = req.body;

  try {
    const isExist = await Distance.exists({ fromProvince, toProvince });
    if (isExist) {
      return sendError(res, "Distance already exists.");
    }
    const service = await DeliveryService.exists({ _id: req.params.serviceId });
    if (service) {
      const distance = await Distance.create({
        fromProvince,
        toProvince,
        zonecode,
        dist,
      });

      await DeliveryService.findOneAndUpdate(
        { _id: service._id },
        { $push: { distances: distance } }
      );
    }
    return sendSuccess(res, "create distance successfully.");
  } catch (error) {
    return sendServerError(res);
  }
});

/**
 * @route PUT /api/admin/distance/:id
 * @description update details of an existing distance
 * @access private
 */
distanceAdminRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  const errors = createDistanceValidate(req.body);
  if (errors) return sendError(res, errors);
  let { fromProvince, toProvince, zonecode, dist } = req.body;
  try {
    const distance = await Distance.findById(id);
    if (distance) {
      await Distance.findByIdAndUpdate(id, {
        fromProvince: fromProvince,
        toProvince: toProvince,
        zonecode: zonecode,
        dist: dist,
      });
      return sendSuccess(res, "Update distance successfully.", {
        fromProvince: fromProvince,
        toProvince: toProvince,
        zonecode: zonecode,
        dist: dist,
      });
    }
    return sendError(res, "distance does not exist.");
  } catch (error) {
    return sendServerError(res);
  }
});

/**
 * @route DELETE /api/admin/distance/:id
 * @description delete an existing distance
 * @access private
 */
distanceAdminRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Distance.exists({ _id: id });
    if (!isExist) return sendError(res, "distance does not exist.");
    await DeliveryService.findOneAndUpdate({distances: id}, { $pull: { distances: id } });
    await Distance.findByIdAndRemove(id)
      .then(() => {
        return sendSuccess(res, "Delete distance successfully.");
      })
      .catch((err) => {
        return sendError(res, err);
      });
  } catch (error) {
    return sendServerError(res);
  }
});

export default distanceAdminRoute;
