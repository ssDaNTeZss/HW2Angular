class Student {
  public lastName: string;
  public firstName: string;
  public patronymic: string | undefined;
  public DOB: string;
  public GPA: number;

  constructor(lastName: string, firstName: string, DOB: string, GPA: number, patronymic?: string) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.patronymic = patronymic;
    this.DOB = DOB;
    this.GPA = GPA;
  }
}

export class StudentList<T> {

  students: Student[] = [
    {lastName: "Первая", firstName: "Светлана", patronymic: "Владимировна", DOB: "2000-01-26", GPA: 5.00},
    {lastName: "Невзорова", firstName: "Светлана", patronymic: "Михаиловна", DOB: "1985-05-07", GPA: 4.20},
    {lastName: "Букин", firstName: "Иннокентий", patronymic: "Венедиктович", DOB: "1992-10-14", GPA: 3.31},
    {lastName: "Негин", firstName: "Захар", patronymic: "Ефремович", DOB: "1994-06-03", GPA: 3.94},
    {lastName: "Бурда", firstName: "Алена", patronymic: "Артемова", DOB: "2000-01-26", GPA: 4.42},
    {lastName: "Карпюка", firstName: "Марианна", patronymic: "Васильевна", DOB: "1999-05-27", GPA: 4.82},
    {lastName: "Кирилишена", firstName: "Ирина", patronymic: "Никифоровна", DOB: "1994-05-11", GPA: 3.58},
    {lastName: "Жиглов", firstName: "Гавриил", patronymic: "Даниилович", DOB: "1993-01-03", GPA: 2.63},
    {lastName: "Карев", firstName: "Ефим", patronymic: "Себастьянович", DOB: "1996-03-16", GPA: 4.72},
    {lastName: "Нечаева", firstName: "Евгения", patronymic: "Семеновна", DOB: "1993-02-18", GPA: 4.69},
    {lastName: "Кокорев", firstName: "Игнатий", patronymic: "Ефимович", DOB: "1996-12-19", GPA: 3.59},
    {lastName: "Волгина", firstName: "Маргарита", patronymic: "Наумовна", DOB: "1998-06-22", GPA: 4.25},
    {lastName: "Кошляк", firstName: "Евгения", patronymic: "Арсеньевна", DOB: "2000-01-27", GPA: 5.00},
    {lastName: "Селезнева", firstName: "Галина", patronymic: "Севастьяновна", DOB: "1992-12-31", GPA: 5.00},
    {lastName: "Кабисов", firstName: "Георгий", patronymic: "Денисович", DOB: "1994-05-16", GPA: 5.00},
    {lastName: "Левин", firstName: "Максим", patronymic: "Никанорович", DOB: "1998-03-29", GPA: 3.60},
    {lastName: "Обухова", firstName: "Маргарита", patronymic: "Григориевна", DOB: "1993-07-06", GPA: 3.98},
    {lastName: "Савина", firstName: "Елизавета", patronymic: "Якововна", DOB: "2000-09-26", GPA: 3.09},
    {lastName: "Абалихин", firstName: "Илья", patronymic: "Викторович", DOB: "1998-06-24", GPA: 4.49},
    {lastName: "Таланов", firstName: "Филипп", patronymic: "Семенович", DOB: "1996-03-12", GPA: 5.00},
    {lastName: "Пончикова", firstName: "Вероника", patronymic: "Владимировна", DOB: "1997-01-29", GPA: 2.96},
    {lastName: "Салтыков", firstName: "Алексей", patronymic: "Кузьмич", DOB: "1995-12-26", GPA: 3.51},
    {lastName: "Карандасов", firstName: "Семен", patronymic: "Романович", DOB: "1999-11-02", GPA: 4.00},
    {lastName: "Шапошников", firstName: "Венедикт", patronymic: "Максимович", DOB: "1998-08-20", GPA: 4.66},
    {lastName: "Ижутина", firstName: "Марфа", patronymic: "Васильевна", DOB: "2000-08-30", GPA: 4.82},
  ];

  public sorting(fieldName: "lastName" | "DOB" | "GPA" = "lastName", type: "AtoZ" | "ZtoA" = "AtoZ", students: Student[]): Student[] {
    if (fieldName === "lastName") {
      if (type === "AtoZ") {
        students.sort(function(a, b) {
          if (a.lastName > b.lastName) {
            return 1;
          }
          if (a.lastName < b.lastName) {
            return -1;
          }
          return 0;
        });
      } else {
        students.sort(function(a, b) {
          if (a.lastName < b.lastName) {
            return 1;
          }
          if (a.lastName > b.lastName) {
            return -1;
          }
          return 0;
        });
      }
      return students;
    }

    if (fieldName === "DOB") {
      if (type === "AtoZ") {
        students.sort(function(a, b) {
          if (a.DOB > b.DOB) {
            return 1;
          }
          if (a.DOB < b.DOB) {
            return -1;
          }
          return 0;
        });
      } else {
        students.sort(function(a, b) {
          if (a.DOB < b.DOB) {
            return 1;
          }
          if (a.DOB > b.DOB) {
            return -1;
          }
          return 0;
        });
      }
      return students;
    }

    if (fieldName === "GPA") {
      if (type === "AtoZ") {
        students.sort(function(a, b) {
          if (a.GPA > b.GPA) {
            return 1;
          }
          if (a.GPA < b.GPA) {
            return -1;
          }
          return 0;
        });
      } else {
        students.sort(function(a, b) {
          if (a.GPA < b.GPA) {
            return 1;
          }
          if (a.GPA > b.GPA) {
            return -1;
          }
          return 0;
        });
      }
      return students;
    }
  }

  public returnNormalSL(): Student[] {
    return this.students;
  }

  public removingStudent(entry: Student, list: Student[]): Student[] {
    list.splice(list.indexOf(entry), 1);
    return list;
  }


  public filterByDate(typeData: "dateFrom" | "dateTo" | "dateDouble", dateArr: any): Student[] {
    let newStudents = [];

    if (typeData === "dateFrom") {
      for (const student of this.students) {
        if (student.DOB >= dateArr[0]) {
          newStudents.push(student);
        }
      }
    }

    if (typeData === "dateTo") {
      for (const student of this.students) {
        if (student.DOB <= dateArr[0]) {
          newStudents.push(student);
        }
      }
    }

    if (typeData === "dateDouble") {
      for (const student of this.students) {
        if (student.DOB >= dateArr[0] && student.DOB <= dateArr[1]) {
          newStudents.push(student);
        }
      }
    }

    return newStudents;
  }

  public filterByGPA(typeGPA: "GPAFrom" | "GPATo" | "GPADouble" = "GPAFrom", GPAArr: any): Student[] {

    let newStudents = [];

    if (typeGPA === "GPAFrom") {
      for (const student of this.students) {
        if (student.GPA >= GPAArr[0]) {
          newStudents.push(student);
        }
      }
    }

    if (typeGPA === "GPATo") {
      for (const student of this.students) {
        if (student.GPA <= GPAArr[0]) {
          newStudents.push(student);
        }
      }
    }

    if (typeGPA === "GPADouble") {
      for (const student of this.students) {
        if (student.GPA >= GPAArr[0] && student.GPA <= GPAArr[1]) {
          newStudents.push(student);
        }
      }
    }

    return newStudents;
  }

  public filterByDateAndGPA(typeData: "dateFrom" | "dateTo" | "dateDouble" = "dateFrom", dateArr: any,
                            typeGPA: "GPAFrom" | "GPATo" | "GPADouble" = "GPAFrom", GPAArr: any): Student[] {

    let newStudentsByDate = [],
      newStudentsByDateAndGPA = [];

    if (typeData === "dateFrom") {
      for (const student of this.students) {
        if (student.DOB >= dateArr[0]) {
          newStudentsByDate.push(student);
        }
      }
    }

    if (typeData === "dateTo") {
      for (const student of this.students) {
        if (student.DOB <= dateArr[0]) {
          newStudentsByDate.push(student);
        }
      }
    }

    if (typeData === "dateDouble") {
      for (const student of this.students) {
        if (student.DOB >= dateArr[0] && student.DOB <= dateArr[1]) {
          newStudentsByDate.push(student);
        }
      }
    }

    if (typeGPA === "GPAFrom") {
      for (const student of newStudentsByDate) {
        if (student.GPA >= GPAArr[0]) {
          newStudentsByDateAndGPA.push(student);
        }
      }
    }

    if (typeGPA === "GPATo") {
      for (const student of newStudentsByDate) {
        if (student.GPA <= GPAArr[0]) {
          newStudentsByDateAndGPA.push(student);
        }
      }
    }

    if (typeGPA === "GPADouble") {
      for (const student of newStudentsByDate) {
        if (student.GPA >= GPAArr[0] && student.GPA <= GPAArr[1]) {
          newStudentsByDateAndGPA.push(student);
        }
      }
    }

    return newStudentsByDateAndGPA;
  }
}
