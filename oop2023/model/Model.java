package model;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import business.models.OrderModel;
import business.models.PizzaModel;
import business.types.OrderStatusType;

public class Model {
    Map<String, OrderModel> orders = new HashMap<String, OrderModel>();
    Map<String, PizzaModel> menu = new HashMap<String, PizzaModel>();

    public Model() {
        this.addPizzaToMenu("Маргарита", "400.00");
        this.addPizzaToMenu("Пепперони", "450.00");
        this.addPizzaToMenu("Мясная", "650.00");
        this.addPizzaToMenu("Морская", "800.00");
        this.addPizzaToMenu("Сырная", "500.00");
    }

    public void addPizzaToMenu(String name, String price) {
        PizzaModel pizza = new PizzaModel(name, price);
        this.menu.put(Integer.toString(pizza.getId()), pizza);
    }

    public OrderModel addOrder(String productId) {
        OrderModel order = new OrderModel(this.menu.get(productId));
        this.orders.put(Integer.toString(order.getId()), order);
        return order;
    }

    public OrderModel getOrder(String orderId) {
        return orders.get(orderId);
    }


    public List<PizzaModel> getMenu() {
        return new ArrayList<PizzaModel>(this.menu.values());
    }

    public void changeOrderStatus(String orderId, OrderStatusType status) {
        OrderModel order = orders.get(orderId);
        order.setStatus(status);
    }

    public OrderModel changeOrderStatusToNext(String orderId) {
        OrderModel order = orders.get(orderId);
        OrderStatusType status = order.getStatus();

        switch (status) {
            case CREATED:
                order.setStatus(OrderStatusType.PREPARED);
                break;
            case PREPARED:
                order.setStatus(OrderStatusType.COMPLETED);
                break;
            case COMPLETED:
                // TODO Ошибка
                break;
            default:
                break;
        }

        return order;
    }
}
