import exports from "express";
import { test} from "../controllers/user.js";

const router = express.Router();
router.get('/test', test);


module.exports = router;
