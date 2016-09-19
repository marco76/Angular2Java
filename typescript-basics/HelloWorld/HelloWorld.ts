class HelloWorld {
    public static main():void {
        console.log('Hello World');
    }

    public sayHello(name : string):string {
        return 'Hello ' + name;
    }
}
// static call
HelloWorld.main();

// instance creation and call
let instance = new HelloWorld();
console.log(instance.sayHello("Marco"));