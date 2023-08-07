const router = require('express').Router();
const issuesAction = require('../controllers/issues_action');

router.get('/create', issuesAction.createIssue);

router.get('/', issuesAction.getIssues);

module.exports = router;