// class Student<T> {
//   public lastName: T;
//   public firstName: T;
//   public patronymic: T | undefined;
//   public DOB: Date;
//   public GPA: number;
//   public number: number;
//
//   constructor(lastName: T, firstName: T, DOB: Date, GPA: number, patronymic?: T) {
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.patronymic = patronymic;
//     this.DOB = DOB;
//     this.GPA = GPA;
//     this.number = StudentList.length;
//   }
// }
//
// export class StudentList<T> {
//   public insert(lastName: T, firstName: T, DOB: Date, GPA: number, patronymic?: T): Student<T> {
//     const STUDENT = new Student(lastName, firstName, DOB, GPA, patronymic);
//     return STUDENT;
//   }
//
//   public allStudents(): Array<T> {
//     const result: Array<T> = [];
//     const recursive = (node: Student<T> | null) => {
//           recursive(node);
//           // @ts-ignore
//       result.push(node);
//     };
//     return result;
//   }
// }
