import app from './src/server/server';
import envLocal from './src/config/local';

app.listen(parseInt(envLocal.BACK_END_PORT), envLocal.HOSTNAME, () => {
  console.log(`Server runing on http://${envLocal.HOSTNAME}:${envLocal.BACK_END_PORT}`);
});
