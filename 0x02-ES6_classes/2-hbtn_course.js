class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the type of attributes during object creation
    if (
      typeof name !== "string" ||
      typeof length !== "number" ||
      !Array.isArray(students)
    ) {
      throw new TypeError("Invalid attribute type");
    }

    // Each attribute must be stored in an “underscore” attribute version
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Implement a getter for each attribute
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Implement a setter for each attribute
  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (
      !Array.isArray(newStudents) ||
      newStudents.some((student) => typeof student !== "string")
    ) {
      throw new TypeError("Students must be an array of strings");
    }
    this._students = newStudents;
  }
}

export default HolbertonCourse;
