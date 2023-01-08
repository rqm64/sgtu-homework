import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Name {
    private String firstName;
    private String lastName;
    private String middleName;

    public Name(String firstName) {
        this(firstName, null, null);
    }

    public Name(String firstName, String lastName) {
        this(firstName, lastName, null);
    }

    public Name(String firstName, String lastName, String middleName) {
        if (firstName == null || firstName.isEmpty()) {
            throw new Error("Имя не может быть пустым");
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.validateInput(this.firstName, firstName, "Имя");
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.validateInput(this.lastName, lastName, "Фамилия");
        this.lastName = lastName;
    }

    public String getMiddleName() {
        return this.middleName;
    }

    public void setMiddleName(String middleName) {
        this.validateInput(this.middleName, middleName, "Отчество");
        this.middleName = middleName;
    }

    private void validateInput(String prevValue, String nextValue, String fieldName) {
        System.out.println("123");
        if ((nextValue == null || nextValue.isEmpty()) && prevValue != null && !prevValue.isEmpty()) {
            throw new Error(String.format(
                "Нельзя установить пустое значение в поле %s, если значение ранее было присвоено", fieldName));
        }
    }

    public String toString() {
        return Stream.of(this.lastName, this.firstName, this.middleName)
            .filter(i -> i != null && !i.isEmpty())
            .collect(Collectors.joining(" "));
    }
}
