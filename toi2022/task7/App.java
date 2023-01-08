public class App {
    public static void main(String[] args) {
        // test task
        Human human1 = new Human("Лев", 170);
        Human human2 = new Human("Сергей Пушкин", 170, human1);
        Human human3 = new Human("Александр", 167, human2);

        System.out.println(human1);
        System.out.println(human2);
        System.out.println(human3);

        // test custom
        Human human4 = new Human("Иван", "Иванов", 151);
        Human human5 = new Human("Юрий", 161, human4);
        System.out.println(human4);
        System.out.println(human5);
        System.out.println(human5.getHeight());

        // test error
        // Human human6 = new Human("Юрий", 0);
        // Human human7 = new Human("Юрий", 501);
        // human5.setHeight(0);
        // human5.setHeight(501);
    }
}
