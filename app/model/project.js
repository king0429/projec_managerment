const Int32 = require('mongoose-int32');
module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const ProjectSchema = new Schema({
    project_name: {
      type: String,
      required: true
    },
    project_uid: {
      type: String,
      unique: true,
      required: true
    },
    project_duration: {
      type: Int32,
      default: 30
    },
    project_originator: {
      type: String,
      required: true
    },
    project_persion: {
      type: Array,
      default: []
    },
    project_level: {
      type:Int32,
      default: 1
    },
    project_documents: {
      type: Array,
      default: []
    },
    project_relation: {
      type: Object,
      default: {}
    },
    project_status: {
      type: Int32,
      default: 0
    },
    create_time: {
      type: Date,
      default: Date.now()
    }
  })
  return mongoose.model('pm_project', ProjectSchema);
}