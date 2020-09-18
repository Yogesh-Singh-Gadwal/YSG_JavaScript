var user = {
  firstName: "Yogesh",
  lastName: "Singh",
  role: "Admin",
  loginCount: 12,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },

  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },

  info : function() { return `
  Name : ${this.firstName} ${this.lastName}
  role : ${this.role}
  loginCount : ${this.loginCount}
  facebookSignedIn: ${this.facebookSignedIn}
  Total Courses : ${this.courseList.length}
  Course List : ${this.courseList}
  `   
  }
};

var courseList = true;
console.log(user.firstName);

console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());
user.buyCourse("Vue course");
console.log(user.info());
