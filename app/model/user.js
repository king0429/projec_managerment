module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: {
    	type: String
    },
    password: {
    	type: String
    },
    role: {
      type: String
    },
    avatar: {
      type: String,
      default: '/avatat_default.png'
    }
  })
  return mongoose.model('pm_user', UserSchema);
}
