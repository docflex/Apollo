/*=============================================
=      IMPORTING NECESSARY DEPENDENCIES      =
=============================================*/

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/*=============================================
=           IMPORTING API ENDPOINTS           =
=============================================*/

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/*=============================================
=            ADDING DATA TO MONGO            =
=============================================*/

import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliiateStat.js";

import {
    dataUser,
    dataProduct,
    dataProductStat,
    dataTransaction,
    dataOverallStat,
    dataAffiliateStat,
} from "./data/index.js";

/*=============================================
=        ADDING SERVER CONFIGURATIONS        =
=============================================*/

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*=============================================
=            ADDING API ENDPOINTS            =
=============================================*/

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/*=============================================
=               MONGOOSE SETUP               =
=============================================*/

const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
        /* ONLY RUN THE BELOW CODE ONCE */
        // Product.insertMany(dataProduct);
        // ProductStat.insertMany(dataProductStat);
        // User.insertMany(dataUser);
        // Transaction.insertMany(dataTransaction);
        // OverallStat.insertMany(dataOverallStat);
        // AffiliateStat.insertMany(dataAffiliateStat);
    })
    .catch((error) => console.log(`Did Not Connect. Reason ${error}`));
