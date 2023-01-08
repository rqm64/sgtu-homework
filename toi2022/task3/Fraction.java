public class Fraction {
    private int numerator;
    private int denominator;

    public Fraction(int numerator, int denominator) {
        if (denominator <= 0) {
            throw new Error("Знаменатель не может быть меньше или равен нулю.");
        }

        this.numerator = numerator;
        this.denominator = denominator;
    }

    public int getNumerator() {
        return this.numerator;
    }

    public int getDenominator() {
        return this.denominator;
    }

    private int getGCD(int a,int b) {
        return b == 0 ? a : this.getGCD(b,a % b);		
    }

    private int getLCM(int a,int b) {
        return a / this.getGCD(a,b) * b;
    }

    public String toString() {
        return String.format("%d/%d", numerator, denominator);
    }

    public Fraction plus(Fraction fraction) {
        int lcm = this.getLCM(this.denominator, fraction.getDenominator());
        int multiplierX = lcm / this.denominator;
        int multiplierY = lcm / fraction.getDenominator();

        int numerator = this.numerator * multiplierX + fraction.getNumerator() * multiplierY;
        int denominator = this.getLCM(this.denominator, fraction.getDenominator());

        int gcd = Math.abs((getGCD(numerator, denominator)));

        return new Fraction(numerator / gcd, denominator / gcd);
    }

    public Fraction plus(int number) {
        return this.plus(new Fraction(number, 1));
    }

    public Fraction minus(Fraction fraction) {
        return this.plus(new Fraction(-fraction.getNumerator(), fraction.getDenominator()));
    }

    public Fraction minus(int number) {
        return this.plus(new Fraction(-number, 1));
    }

    public Fraction multiply(Fraction fraction) {
        int numerator = this.numerator * fraction.getNumerator();
        int denominator = this.denominator * fraction.getDenominator();

        int gcd = Math.abs((getGCD(numerator, denominator)));

        return new Fraction(numerator / gcd, denominator / gcd);
    }

    public Fraction multiply(int number) {
        return this.multiply(new Fraction(number, 1));
    }

    public Fraction div(Fraction fraction) {
        return this.multiply(new Fraction(
            fraction.getDenominator() * Integer.signum(fraction.getNumerator()),
            Math.abs(fraction.getNumerator())
        ));
    }

    public Fraction div(int number) {
        return this.div(new Fraction(number, 1));
    }
}
