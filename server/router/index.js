import express from "express";
import passport from "passport";
import controller from "../controllers/social";
import passportconfig from "../middleware/passport";

const router = express();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Responding... on 5001" });
});

router.post("/google", passport.authenticate("googleLogin"), controller.google);

export default router;
