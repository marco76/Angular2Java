var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.main = function () {
        console.log('Hello World');
    };
    HelloWorld.prototype.sayHello = function (name) {
        return 'Hello ' + name;
    };
    return HelloWorld;
}());
// static call
HelloWorld.main();
// instance creation and call
var instance = new HelloWorld();
console.log(instance.sayHello("Marco"));
