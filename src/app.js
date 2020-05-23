"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.json({
                message: 'Hello, World!'
            });
        });
        router.get('/sanity', function (req, res) {
            res.sendStatus(200);
        });
        this.express.use('/', router);
        this.express.use('/sanity', router);
    };
    return App;
}());
exports["default"] = new App().express;
