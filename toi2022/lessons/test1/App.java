interface Combination {
    public void executeCombination(Karateka karateka);
}

class Karateka {
    private final String name;
    private Combination combination;

    public Karateka(String name, Combination combination) {
        this.name = name;
        this.combination = combination;
    }

    public void hitHand () {
        System.out.println(this.name + ": бац!");
    }

    public void hitFoot() {
        System.out.println(this.name + ": кия!");
    }

    public void hitJump() {
        System.out.println(this.name + ": вжух!");
    }

    public void executeCombination() {
        this.combination.executeCombination(this);
    }

    public void setCombination(Combination combination) {
        this.combination = combination;
    }
}

public class App {
	public static void main(String[] args) {
		Karateka karateka = new Karateka("Дэниэл", x -> {
            x.hitFoot();
            x.hitJump();
            x.hitFoot();
        });
        karateka.executeCombination();
        karateka.setCombination(x -> {
            x.hitHand();
            x.hitHand();
        });
        karateka.executeCombination();
	}
}
