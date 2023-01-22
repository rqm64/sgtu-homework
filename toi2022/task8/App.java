public class App {
    public static void main(String[] args) {
        Student student1 = new Student("Вася", 3, 4, 5, 4);
        System.out.println(student1);
        Student student2 = new Student("Петя", 5, 5, 5, 5);

        System.out.println(student1.getAverageGrade());
        System.out.println(student1.isExcellent());
        System.out.println(student2.getAverageGrade());
        System.out.println(student2.isExcellent());

        // incorrect test
        Student student3 = new Student("Ваня", 1);

        // set incorrect test
        // Student student3 = new Student("Ваня", 2, 3, 4, 5);
        // int[] student3Grades = student3.getGrades();
        // student3Grades[0] = 1;
        // System.out.println(student3);
    }
}
