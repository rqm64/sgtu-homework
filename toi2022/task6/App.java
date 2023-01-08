public class App {
    public static void main(String[] args) {
        Name name1 = new Name("Клеопатра");
        Name name2 = new Name("Александр", "Сергеевич", "Пушкин");
        Name name3 = new Name("Владимир", "Маяковский");
        Name name4 = new Name("Христофор", null, "Бонифатьевич");

        System.out.println(name1);
        System.out.println(name2);
        System.out.println(name3);
        System.out.println(name4);

        name4.setLastName("Врунгель");
        System.out.println(name4);

        // test errors
        // Name name5 = new Name(null);
        // Name name6 = new Name("");
        // name2.setFirstName(null);
        // name2.setFirstName("");
        // name2.setLastName(null);
        // name2.setLastName("");
        // name2.setMiddleName(null);
        // name2.setMiddleName("");
    }
}