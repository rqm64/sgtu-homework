public class App {
    public static void main(String[] args) {
        Time time1 = new Time(10);
        Time time2 = new Time(100000);
        Time time3 = new Time(2,3,5);
        Time time4 = new Time(34056);
        Time time5 = new Time(4532);

        System.out.println(time1);
        System.out.println(time2);
        System.out.println(time3);
        System.out.println(time4.getHours());
        System.out.println(time5.getMinutes());
    }
}