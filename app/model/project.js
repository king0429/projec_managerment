const Int32 = require('mongoose-int32');
module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;
  const ProjectSchema = new Schema({
  	// 项目名称
    project_name: {
      type: String,
      required: true
    },
    // uid，项目唯一id，创建时生成
    project_uid: {
      type: String,
      unique: true,
      required: true
    },
    // 项目时长，单位位天
    project_duration: {
      type: Int32,
      default: 30
    },
    // 所有者，创建人
    project_originator: {
      type: String,
      required: true
    },
    // 项目成员
    project_persion: {
      type: Array,
      default: []
    },
    // 项目登记， 共5级
    project_level: {
      type:Int32,
      default: 1
    },
    // 项目文档
    project_documents: {
      type: Array,
      default: []
    },
    // 项目关系，暂无
    project_relation: {
      type: Object,
      default: {}
    },
    // 项目状态
    project_status: {
      type: Int32,
      default: 0
    },
    // 创建时间，自动生成
    create_time: {
      type: Date,
      default: Date.now()
    },
    // 项目描述
    project_desc: {
    	type: String
    }
  })
  return mongoose.model('pm_project', ProjectSchema);
}