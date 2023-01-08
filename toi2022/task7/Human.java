public class Human {
    private String firstName;
    private String lastName;
    private int height;
    private Human father = null;

    public Human(String firstName, int height) {
        this(firstName, null, height);
    }

    public Human(String firstName, String lastName, int height) {
        this.setHeight(height);
        this.lastName = lastName;
        this.firstName = firstName;
    }

    public Human(String firstName, int height, Human father) {
        this(firstName, father.getLastName(), height);
        this.father = father;
    }

    public String getLastName() {
        return this.lastName;
    }

    public int getHeight() {
        return this.height;
    }

    public void setHeight(int height) {
        if (height < 1 || height > 500) {
            throw new Error("Рост не может быть меньше 1 и больше 500");
        }
        this.height = height;
    }

    public String toString() {
        String str = this.firstName;

        if (this.lastName != null) { str += " " + this.lastName; }
    
        if (this.height < 160) { return str + " маленький человек"; }

        if (this.height > 185) { return str + " большой человек"; } 

        return str + " средний человек";
    }
}
