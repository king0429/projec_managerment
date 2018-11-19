'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/test1', controller.user.index);
  // 项目相关
  // 任务列表
  router.get('/project/project_list', controller.project.getList);
  // 查看单挑任务
  router.get('/project', controller.project.findOne);
  // 创建任务
  router.post('/project/create_project', controller.project.create);
  // 任务相关
  router.get('/task/task_list', controller.task.getList)
};
