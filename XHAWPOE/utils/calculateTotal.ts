
interface Course {
  fee: number;
}

export default function calculateTotal(selectedCourses: Course[]): string {
  let total = selectedCourses.reduce((acc, course) => acc + course.fee, 0);

  const discount = selectedCourses.length === 1 ? 0 :
                   selectedCourses.length === 2 ? 0.05 :
                   selectedCourses.length === 3 ? 0.10 : 0.15;

  total *= 1 - discount;  
  total *= 1.15;          
  return total.toFixed(2);
}
