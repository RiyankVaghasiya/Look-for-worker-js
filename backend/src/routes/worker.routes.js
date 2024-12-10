import { Router } from "express";
import {
  getWorkerDetails,
  changeCurrentPassword,
  // getCurrentUser,
  // getUserChannelProfiles,
  // getWatchHistory,
  loginWorker,
  logoutWorker,
  editWorkerDetails,
  // refreshAccessToken,
  registerWorker,
  isloggedIn,
  // updateUserAvatar,
  // updateUserCoverImage,
} from "../controllers/worker.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT, verifyWorker } from "../middlewares/auth.middleware.js";
import multer from "multer";

const workerRouter = Router();

workerRouter.route("/register").post(upload.single("file"), registerWorker);
workerRouter.route("/login").post(loginWorker);
workerRouter.route("/logout").post(verifyWorker, logoutWorker);
workerRouter.route("/getWorkerprofile").get(verifyWorker, getWorkerDetails);
workerRouter.route("/check-login").get(isloggedIn);
workerRouter.route("/editWorkerInfo").post(verifyWorker, editWorkerDetails);
workerRouter
  .route("/editworkerCredentials")
  .post(verifyWorker, changeCurrentPassword);

//secured routes
// router.route("/refresh-token").post(refreshAccessToken);
// router.route("/change-password").post(verifyJWT, changeCurrentPassword);
// router.route("/current-user").get(verifyJWT, getCurrentUser);

// router
//   .route("/avatar")
//   .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
// router
//   .route("/cover-image")
//   .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

// router.route("/c/:username").get(verifyJWT, getUserChannelProfiles);
// router.route("/history").get(verifyJWT, getWatchHistory);
export { workerRouter };
