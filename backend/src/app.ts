import app from './server/server';
import localEnv from './config/local';

app.listen(parseInt(localEnv.BACK_END_PORT), () => {
  console.log(
    `Server runing on http://${localEnv.HOSTNAME}:${localEnv.BACK_END_PORT}`
  );
});
