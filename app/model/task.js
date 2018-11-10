module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;
  const TaskSchema = new Schema({
    task_name: {
    	type: String
    },
    task_number: {
    	type: String
    },
    start_date: {
      type: String
    },
    end_date: {
      type: String,
      default: '/avatat_default.png'
    },
    create_time: {
      type: {
        type: Date,
        default: Date.now()
      }
    },
    project_id: {
      type:ObjectId
    }
  })
  return mongoose.model('pm_task', TaskSchema);
}
