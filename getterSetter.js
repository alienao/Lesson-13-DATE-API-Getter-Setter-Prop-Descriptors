// 1. Write an object with getter/setter field name.

const obj = {
  _name: [], // ['name', length][]
  set name(newName) {
    newName = newName.split(", ");
    newName.forEach((element) => {
      let userName = [];
      userName.push([element, element.length]);
      obj._name.push(userName);
    });
  },
  get name() {
    return obj._name;
  },
};

console.log(obj.name);

obj.name = "Vrezh, Artavazd";

console.log(obj.name); // [['Vrezh', 7], ['Artavazd', 10]]
