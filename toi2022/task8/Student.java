import java.util.Arrays;
import java.util.stream.IntStream;

public class Student {
    private String name;
    private int[] grades = {};

    public Student (String name, int...grades) {
        this.name = name;

        if (grades.length > 0) {
            for (int i = 0; i < grades.length; i++) {
                if (grades[i] < 2 || grades[i] > 5) {
                    throw new IllegalArgumentException("Студенту можно добавлять только оценки в диапазоне от 2 до 5");
                }
            }

            this.grades = grades;
        }
    }

    public double getAverageGrade() {
        return this.grades.length == 0 ? 0 : IntStream.of(this.grades).average().getAsDouble();
    }

    public boolean isExcellent() {
        if (this.grades.length == 0) {
            return false;
        }

        for (int i = 0; i < this.grades.length; i++) {
            if (this.grades[i] != 5) return false;
        }

        return true;
    }

    public int[] getGrades() {
        return this.grades.clone();
    }

    public String toString() {
        return String.format("%s: %s", name, Arrays.toString(this.grades));
    }
}
