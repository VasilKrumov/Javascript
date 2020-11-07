function scolarship(salary, gpa, minSalary) {
  salary = Number(salary);
  gpa = Number(gpa);
  minSalary = Number(minSalary);

  let socialScolarship = 0;
  let excellentScolarship = 0;

  if (salary < minSalary) {
    if (gpa > 4.5) {
      socialScolarship = minSalary * 0.35;
    }
  }

  if (gpa >= 5.5) {
    excellentScolarship = gpa * 25;
  }

  if (socialScolarship > excellentScolarship) {
    console.log(
      `You get a Social scholarship ${Math.floor(socialScolarship)} BGN`
    );
  } else if (excellentScolarship > socialScolarship) {
    console.log(
      `You get a scholarship for excellent results ${Math.floor(
        excellentScolarship
      )} BGN`
    );
  } else {
    console.log('You cannot get a scholarship!');
  }
}
