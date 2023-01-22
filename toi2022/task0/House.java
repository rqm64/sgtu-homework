public class House {
    private int floor;

    public House(int floor) {
        if (floor < 1) {
            throw new IllegalArgumentException("У дома не может быть этажей меньше 1");
        } else {
            this.floor = floor;
        }
    }

    public int getFloor() {
        return this.floor;
    }

    public String toString() {
        String postfix;

        if (Integer.toString(this.floor).endsWith("1")) {
            postfix = " этажом";
        } else {
            postfix = " этажами";
        }

        return "Дом с " + this.floor + postfix;
    }
}
