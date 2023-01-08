public class App {
    public static void main(String[] args) {
        Line line1 = new Line(new Point(1, 1), new Point(2, 2));
        Line line2 = new Line(2, 2, 4, 4);

        System.out.println(line1);
        System.out.println(line2);

        System.out.println(line1.getLength());
        System.out.println(line1.getA());
        System.out.println(line1.getB());

        line1.setA(new Point(3, 3));
        line1.setB(new Point(5, 5));

        System.out.println(line1.getA());
        System.out.println(line1.getB());
    }
}