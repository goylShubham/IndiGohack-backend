const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: process.env.PORT,
    DATABASE: {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PWD: process.env.DB_PWD,
        NAME: process.env.DB_NAME,
        DIALECT: process.env.DB_DIALECT,
    },
    APP_SECRET: process.env.APP_SECRET,
};
