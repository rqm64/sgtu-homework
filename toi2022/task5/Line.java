public class Line {
    private Point a;
    private Point b;

    public Line(Point a, Point b) {
        this.a = new Point(a.getX(), a.getY());
        this.b = new Point(b.getX(), b.getY());
    }

    public Line(int x1, int y1, int x2, int y2) {
        this(new Point(x1, y1), new Point(x2, y2));
    }

    public String toString() {
        return String.format("Линия от %s до %s", this.a, this.b);
    }

    public double getLength() {
        return Math.sqrt(Math.pow(this.b.getX() - this.a.getX(), 2) + Math.pow(this.b.getY() - this.a.getY(), 2));
    }

    public Point getA() {
        return new Point(this.a.getX(), this.a.getY());
    }

    public void setA(Point a) {
        this.a = new Point(a.getX(), a.getY());
    }

    public Point getB() {
        return new Point(this.b.getX(), this.b.getY());
    }

    public void setB(Point b) {
        this.b = new Point(b.getX(), b.getY());
    }
}