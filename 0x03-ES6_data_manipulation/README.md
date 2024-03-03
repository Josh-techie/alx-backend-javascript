<p align="center">
<img src ="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F029a1497-45bd-4b48-af71-c2ab8a918091%2Ff3c7925b-7c2e-4e5e-9a26-d663cffbf68c%2F6ab7bec4727cb5c91257.jpg?table=block&id=16fef7a4-90df-4834-a046-f94092231fd5&spaceId=029a1497-45bd-4b48-af71-c2ab8a918091&width=2000&userId=9d08c749-75eb-439d-ad10-2a83e114a53b&cache=v2">
</p>

---

## ES6 data manipulation:

- This project focuses on JavaScript and ES6, particularly covering topics such as data manipulation using map, filter, and reduce on arrays, working with Typed Arrays, and using Set and Map data structures.

---

## Ressources:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

---

## Tasks:

0. **Basic list of objects**: Create a function `getListStudents` that returns an array of objects with three attributes: `id`, `firstName`, and `location`.

- Redirect to file: [0-get_list_students.js](./0-get_list_students.js)

1. **More mapping**: Create a function `getListStudentIds` that returns an array of ids from a list of objects.

- Use the `map` function on the array.
- Redirect to file: [1-get_list_student_ids.js](./1-get_list_student_ids.js)

2. **Filter**: Create a function `getStudentsByLocation` that returns an array of objects located in a specific city.

- Use the `filter` function on the array.
- Redirect to file: [2-get_students_by_loc.js](./2-get_students_by_loc.js)

3. **Reduce**: Create a function `getStudentIdsSum` that returns the sum of all student ids.

- Use the `reduce` function on the array.
- Redirect to file: [3-get_ids_sum.js](./3-get_ids_sum.js)

4. **Combine**: Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

- Use filter and map combined.
- Redirect to file: [4-update_grade_by_city.js](./4-update_grade_by_city.js)

5. **Typed Arrays**: Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

- Throw an error if adding the value is not possible.
- Redirect to file: [5-typed_arrays.js](./5-typed_arrays.js)

6. **Set data structure**: Create a function `setFromArray` that returns a Set from an array.

   - Redirect to file: [6-set.js](./6-set.js)

7. **More set data structure**: Create a function `hasValuesFromArray` that returns a boolean if all elements in the array exist within the set.

- Redirect to file: [7-has_array_values.js](./7-has_array_values.js)

8. **Clean set**: Create a function `cleanSet` that returns a string of all set values starting with a specific string.

- Redirect to file: [8-clean_set.js](./8-clean_set.js)

9. **Map data structure**: Create a function `groceriesList` that returns a map of groceries with specific items and quantities.

- Redirect to file: [9-groceries_list.js](./9-groceries_list.js)

### Advanced Tasks:

10. **More map data structure**: Create a function `updateUniqueItems` that updates the quantity to 100 for all items with an initial quantity of 1 in the map.

- Throw an error if updating the quantity is not possible.
- Redirect to file: [10-update_uniq_items.js](./10-update_uniq_items.js)

11. **Weak link data structure**: Export a constant instance of `WeakMap` named `weakMap`. Export a function named `queryAPI` that accepts an `endpoint` argument, tracks the number of times it is called for each endpoint in `weakMap`, and throws an error if the number of queries is greater than or equal to 5.

- Redirect to file: [100-weak.js](./100-weak.js)

---

## Author

- [`@Josh-techie`]() | Software Engineer Student

  > Reach out to me if you need any help or have any questions.

  <a href="mailto:youssef.abouyahia@e-polytechnique.ma">
  	<img alt="Feel free to contact me" src="https://img.shields.io/badge/-Ask_me_anything-blue?style=flat&logo=Gmail&logoColor=white&link=mailto:youssef.abouyahia@e-polytechnique.ma&color=3d85c6" />
  </a>
  <span> | </span>
    <a href="https://www.linkedin.com/in/youssef-abouyahia/">
        <img alt="Linkedin Profile" src="https://img.shields.io/badge/-Linkedin-0072b1?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/youssef-abouyahia/" />
    </a>
    <span> | </span>
    <a href="https://twitter.com/JoesephAb">
        <img alt="Twitter Profile" src="https://img.shields.io/badge/-Twitter-0072b1?style=flat&logo=Twitter&logoColor=white&link=https://twitter.com/JoesephAb&color=1DA1F2" />
    </a>
