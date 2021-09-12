import mongoose from 'mongoose';
import appConfig from './env';

mongoose.Promise = Promise;

mongoose.connection.on("connected", _ => {
    console.log("MongoDB Connection Established");
});

mongoose.connection.on("reconnected", _ => {
    console.log("MongoDB Connection Reestablished");
});

mongoose.connection.on("disconnected", _ => {
    console.log("MongoDB Connection Disconnected");
});

mongoose.connection.on("close", _ => {
    console.log("MongoDB Connection Closed");
});

mongoose.connection.on("error", error => {
    console.log("MongoDB ERROR: " + error);
    process.exit(1);
});

mongoose.set("debug", appConfig.mongoDebug);

const connectMongo = async _ => {
    const connectionUrl = appConfig.dbUrl;

    await mongoose.connect(connectionUrl, {
        //autoReconnect: true,
        //reconnectTries: 1000000,
        //reconnectInterval: 3000,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
};

export default connectMongo;