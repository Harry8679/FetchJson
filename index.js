"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    // console.log(response.data);
    var _a = response.data, id = _a.id, title = _a.title, completed = _a.completed;
    console.log("The Todo with ID: ".concat(id, "\n    Has a title of : ").concat(title, "\n    Is it finished ").concat(completed));
});
