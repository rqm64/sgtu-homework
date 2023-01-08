public class App {
    public static void main(String[] args) {
        Fraction fractionX = new Fraction(2, 4);
        Fraction fractionY = new Fraction(2, 5);

        Fraction fraction1 = fractionX.plus(fractionY);
        Fraction fraction2 = fractionX.plus(2);
        Fraction fraction3 = fractionX.minus(fractionY);
        Fraction fraction4 = fractionX.minus(2);
        Fraction fraction5 = fractionX.multiply(fractionY);
        Fraction fraction6 = fractionX.multiply(2);
        Fraction fraction7 = fractionX.div(fractionY);
        Fraction fraction8 = fractionX.div(2);

        System.out.println(String.format("%s + %s = %s", fractionX, fractionY, fraction1));
        System.out.println(String.format("%s + 2 = %s", fractionX, fraction2));
        System.out.println(String.format("%s - %s = %s", fractionX, fractionY, fraction3));
        System.out.println(String.format("%s - 2 = %s", fractionX, fraction4));
        System.out.println(String.format("%s * %s = %s", fractionX, fractionY, fraction5));
        System.out.println(String.format("%s * 2 = %s", fractionX, fraction6));
        System.out.println(String.format("%s / %s = %s", fractionX, fractionY, fraction7));
        System.out.println(String.format("%s / 2 = %s", fractionX, fraction8));
    }
}