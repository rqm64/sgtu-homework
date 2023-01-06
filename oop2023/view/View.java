package view;

import java.util.List;
import java.util.Map;

import business.models.OrderModel;
import business.models.ProductModel;
import business.types.OrderStatusType;

public class View {
    static final Map<OrderStatusType, String> ORDER_STATUS_NAMES = Map.of(
            OrderStatusType.CREATED, "Создан",
            OrderStatusType.PREPARED, "В процессе готовки",
            OrderStatusType.COMPLETED, "Готов");

    public void printHelpInfo() {
        System.out.println("=> Общие команды:");
        System.out.println("=> \"exit\" - выход");
        System.out.println("=> \"help\" - список доступных команд");
        System.out.println("=> Команды клиента:");
        System.out.println("=> \"menu\" - меню");
        System.out.println("=> \"order номер_пиццы\" - сделать заказ");
        System.out.println("=> \"order_status номер_заказа\" - статус заказ");
        System.out.println("=> Команды сотрудника:");
        System.out.println("=> \"admin_next_status номер_заказа\" - изменить статус заказ");
    }

    public void printInvalidInput() {
        System.err.println("=> Ошибка ввода");
    }

    public void printInvalidInput(String message) {
        this.printInvalidInput();
        System.err.println("=> " + message);
    }

    public void printMenu(List<ProductModel> menu) {
        menu.forEach(i -> {
            String menuItem = String.join(
                    " - ",
                    "=> ",
                    Integer.toString(i.getId()),
                    i.getName(),
                    i.getPrice());
            System.out.println(menuItem);
        });
    }

    public void printOrderCreated(OrderModel order) {
        System.out.println("=> Ваш заказ создан!");
        System.out.println("=> Номер заказа: " + order.getId());
    }

    public void printOrderStatus(OrderModel order) {
        System.out.println("=> Ваш заказ " + ORDER_STATUS_NAMES.get(order.getStatus()));
    }

    public void printChangeStatusSuccess(OrderModel order) {
        System.out.println(
            "=> Статус заказа " + order.getId() + " изменен на " + ORDER_STATUS_NAMES.get(order.getStatus())
        );
    }
}
