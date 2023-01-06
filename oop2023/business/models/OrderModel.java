package business.models;

import java.util.ArrayList;
import java.util.List;

import business.types.OrderStatusType;

/**
 * Сущность "Заказ".
 */
public class OrderModel extends EntityModel {
    private OrderStatusType status = OrderStatusType.CREATED;
    private List<String> products = new ArrayList<String>();

    public OrderModel(String product) {
        this.products.add(product);
    }

    public OrderModel(List<String> products) {
        this.products = products;
    }

    public OrderStatusType getStatus() { return this.status; }

    public void setStatus() {
        switch (this.status) {
            case CREATED:
                this.status = OrderStatusType.PREPARED;
                break;
            case PREPARED:
                this.status = OrderStatusType.COMPLETED;
                break;
            case COMPLETED:
                // TODO Ошибка
                break;
            default:
                break;
        }
    }

    public void setStatus(OrderStatusType status) { this.status = status; }

    public List<String> getProducts() { return this.products; }
}
