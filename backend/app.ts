import app from './src/server/server';
import localEnv from './src/config/local';

app.listen(parseInt(localEnv.BACK_END_PORT), localEnv.HOSTNAME, () => {
  console.log(`Server runing on http://${localEnv.HOSTNAME}:${localEnv.BACK_END_PORT}`);
});
