import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { Worker } from "../models/worker.model.js";
import { User } from "../models/user.model.js";

// Endpoint to hire a worker
const hireWorker = asyncHandler(async (req, res) => {
  try {
    //ahiya body ne badle bije thi levi jose

    const { workerId, userId } = req.body;
    // const userId = req.user;

    // Validate input
    if (!userId || !workerId) {
      return res
        .status(400)
        .json(new ApiError(400, "user and worker id is required"));
    }

    // Find user and worker
    const user = await User.findById(userId);
    const worker = await Worker.findById(workerId);

    if (!user || !worker) {
      return res
        .status(404)
        .json(new ApiError(404, "user and worker not found"));
    }

    // Update user's hiring history
    user.hiringHistory.push({ worker: workerId });
    await user.save();

    // Update worker's request history
    worker.requests.push({ user: userId });
    await worker.save();

    res.status(200).json(new ApiResponse(200, {}, "Worker hired successfully"));
  } catch (error) {
    res.status(500).json(new ApiError(500, "Internal server error"));
  }
});

export { hireWorker };
