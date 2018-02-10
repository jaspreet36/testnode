'use strict';

const assert = require('assert');
const authController = require('../controllers/auth.controller');

describe('Auth Controller', function() {
    describe('isAuthorized', function() {
        it('should return false when not authorized', function() {
            assert.equal(false, authController.IsAuthorized(['user'], 'admin'));
        })
    })
});