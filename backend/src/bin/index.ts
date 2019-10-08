import sequelize from '../config/database';

const RefreshDB = async () => {
  await sequelize.truncate();
  await sequelize.dropAllSchemas({ logging: true });
  console.log('Data base was droped');
  await sequelize.sync();
  sequelize.close();
  console.log('Data base was Sync');
};

(async () => {
  await RefreshDB();
})();
