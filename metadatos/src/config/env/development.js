require("dotenv").config();

const devConfig = {
    "PORT": process.env.PORT,

    "mongoDebug": true
}

export default devConfig;