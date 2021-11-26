import mongoose from 'mongoose';
import logger from '../utils/logger';
import 'dotenv/config';

async function connect() {
  const dbUri = process.env.dbUri!;
  try {
    await mongoose.connect(dbUri);
    logger.info(`Database Connected`);
  } catch (error) {
    logger.error(`Could not connect to db`);
    process.exit(1);
  }
}

export default connect;
