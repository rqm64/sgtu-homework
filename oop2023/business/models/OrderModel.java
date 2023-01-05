package business.models;

import business.types.OrderStatusType;
import utils.IdCounter;

public class OrderModel {
    private int id;
    private OrderStatusType status;
    private PizzaModel pizza;

    public OrderModel(PizzaModel pizza) {
        this.id = IdCounter.next();
        this.status = OrderStatusType.CREATED;
        this.pizza = pizza;
    }

    public int getId() {
        return this.id;
    }

    public OrderStatusType getStatus() {
        return this.status;
    }

    public void setStatus(OrderStatusType status) {
        this.status = status;
    }

    public PizzaModel getPizza() {
        return this.pizza;
    }
}
