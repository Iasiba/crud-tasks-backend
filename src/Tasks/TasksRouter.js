const router = require('express').Router()
const Service = require('./TasksService.js')


router.route('/tasks')
    .get(Service.getAll)
    .post(Service.createtask)

router.route('/tasks/:id')
    .get(Service.getById)
    .delete(Service.deletetask)
    .put(Service.endtask)
    .post(Service.update)
//.put()
//.delete()

module.exports = {
    router
}

