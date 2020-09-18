console.log(this);

var user = {
  firstName: "YSG",
  courseCount: 4,
//the below function - getCourseCount() is a method and not a regular function hence it points to user object in which it exists/ present 
  getCourseCount: function () {
    console.log("LINE 8", this);
// the below function-sayHello() is a regular function hence 'this-keyword' points to global object
    function sayHello() {
      console.log("Hello");
      console.log("LINE 12", this);
    }

    sayHello();

  },
};

user.getCourseCount();


//For all regular function calls, 'this' points to 'window / Global' object