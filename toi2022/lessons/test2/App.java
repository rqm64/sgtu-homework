interface Cat {
    public void meow();
}

interface Dog {
    public void gav();
}

class CatDog implements Cat, Dog {
    private Cat cat;
    private Dog dog;

    public CatDog(Cat cat, Dog dog) {
        this.cat = cat;
        this.dog = dog;
    }

    @Override
    public void meow() {
        this.cat.meow();
    }

    @Override
    public void gav() {
        this.dog.gav();();
    }
}

public class App {
	public static vo
    id main(String[] args) {

	}
}
