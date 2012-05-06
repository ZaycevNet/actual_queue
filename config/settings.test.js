var redis = require('redis');
exports.redis = redis.createClient(6379, '127.0.0.1');
exports.REDIS_PREFIX = "actual_queue_test"
exports.EVENT_QUEUE_TTL = 60 * 60; // 1 hour
exports.USER_POLL_THRESHOLD = 60 * 60 * 1000; // 30 min; x1000 fixed
exports.USET_POLL_THRESHOLD_ONLINE = 10 * 1000; //10 sec
exports.PS_TITLE = "actual_queue";
exports.PORT = 8000;
exports.PORT_UI = 8888;