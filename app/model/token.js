module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const TokenSchema = new Schema({
    token: {
    	type: String
    },
    login_time: {
      type: Date,
      reqired: true
    },
    login_ip: {
      type: String
    },
    login_device: {
      type: String,
      default: "pc"
    }
  })
  return mongoose.model('pm_token', TokenSchema);
}