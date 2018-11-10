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
  router.get('/project', controller.project.insert);
  router.get('/project/project_list', controller.project.getList);
  // 任务相关
  router.get('/task/task_list', controller.task.getList)
};
