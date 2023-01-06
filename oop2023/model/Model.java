package model;

import java.util.List;

import business.models.OrderModel;
import business.models.ProductModel;

public class Model {
    private EntityMap<OrderModel> orders = new EntityMap<OrderModel>();
    private EntityMap<ProductModel> products = new EntityMap<ProductModel>();
    
    public void initMockMenu() {
        this.createProduct("Маргарита", "400.00");
        this.createProduct("Пепперони", "450.00");
        this.createProduct("Мясная", "650.00");
    }
    
    /**
     * Получение меню.
     */
    public List<ProductModel> getProducts() {
        return this.products.get();
    }
    
    /**
     * Добавление товара в меню.
     * @param name Наименование.
     * @param price Стоимость.
     */
    public void createProduct(String name, String price) {
        this.products.add(new ProductModel(name, price));
    }
    
    /**
     * Получение заказа.
     * @param orderId Идентификатор заказа.
     */
    public OrderModel getOrder(String orderId) {
        return orders.get(orderId);
    }

    /**
     * Создание заказа
     * @param productId Идентификатор заказанной пиццы.
     */
    public OrderModel createOrder(String productId) throws Exception {
        if (this.products.get(productId) == null) {
            throw new Exception("Не найден товар по указанному идентификатору.");
        };
        OrderModel order = new OrderModel(productId);
        this.orders.add(order);
        
        return order;
    }

    /**
     * Продвижение заказа по статусу.
     * @param orderId Идентификатор заказа.
     */
    public OrderModel changeOrderStatusToNext(String orderId) {
        OrderModel order = orders.get(orderId);
        order.setStatus();
        return order;
    }
}
