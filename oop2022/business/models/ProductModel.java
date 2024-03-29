package business.models;

public class ProductModel extends EntityModel {
    private String name;
    private String price;

    public ProductModel(String name, String price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return this.name;
    }

    public String getPrice() {
        return this.price;
    }
}
