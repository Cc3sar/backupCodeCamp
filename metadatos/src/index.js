import app from './app'
import appConfig from './config/env';

app.listen(appConfig.PORT, _ => console.log(`Server on PORT ${ appConfig.PORT }`));