package business.models;

import utils.IdCounter;

public class PizzaModel {
    private int id;
    private String name;
    private String price;

    public PizzaModel(String name, String price) {
        this.id = IdCounter.next();
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getPrice() {
        return this.price;
    }
}
