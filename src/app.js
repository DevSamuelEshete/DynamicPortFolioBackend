const express = require("express");
const express_session = require("express-session");

const biosRouter = require("./routes/bios.routes");

const env = require("./config/dotenv.config");
const error_handler = require("./middleware/err_handler.middleware");

const { connectToMongoDB } = require("./db/mongo.db");

const app = express();
connectToMongoDB();

app.use(express.json());
app.use(
  express_session({
    secret: env.session_secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: env.node_env === "production" ? true : false,
      maxAge: env.max_age,
    },
  }),
);

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "PortFolio API Running Successfuly." });
});

app.use("/bios", biosRouter);

app.use(error_handler);

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port} in ${env.node_env} mode.`);
});
