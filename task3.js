function User(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.hello = function() {
        alert(`Hello, my firstName is ${this.firstname}, lastName is ${this.lastname}. I am very exited to learn JavaScript!`);
      };
  }

  let firstname = prompt('Enter your firstname:', 'Valik');
  let lastName = prompt('Enter your lastname:', 'Lapotkov');
  const obj = new User(firstname, lastName);
  obj.hello();