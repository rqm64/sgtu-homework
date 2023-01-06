package controller;

import java.util.Scanner;

import business.models.OrderModel;
import model.Model;
import view.View;

public class Controller {
    private Model model;
    private View view;

    public Controller(Model model, View view) {
        this.model = model;
        this.view = view;
    }

    /**
     * Запуск считывания пользовательских команд.
     */
    public void run() {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNextLine()) {
            String inputValue = scanner.nextLine();
            InputCommand inputCommand = InputCommand.initFromString(inputValue);
            this.handleCommand(inputCommand);
        }

        scanner.close();
    }

    /**
     * Обработка пользовательских команд.
     * 
     * @param command Пользовательская команда
     */
    private void handleCommand(InputCommand command) {
        try {
            if (command.hasValid()) {
                switch (command.getCommand()) {
                    case EXIT:
                        System.exit(0);
                        break;
                    case HELP:
                        this.view.printHelpInfo();
                        break;
                    case MENU:
                        this.view.printMenu(this.model.getProducts());
                        break;
                    case ORDER: {
                        if (command.getParams().length == 0) {
                            throw new Exception("Необходимо указать номер товара");
                        }
                        String productId = command.getParams()[0];
                        OrderModel order = this.model.createOrder(productId);
                        this.view.printOrderCreated(order);
                        break;
                    }
                    case ORDER_STATUS: {
                        String orderId = command.getParams()[0];
                        OrderModel order = this.model.getOrder(orderId);
                        this.view.printOrderStatus(order);
                        break;
                    }
                    case ADMIN_ORDER_NEXT_STATUS: {
                        String orderId = command.getParams()[0];
                        OrderModel order = this.model.changeOrderStatusToNext(orderId);
                        this.view.printChangeStatusSuccess(order);
                        break;
                    }
                    default:
                        break;
                }
            } else {
                throw new Exception("Для просмотра доступных команд введите help");
            }
        } catch (Exception e) {
            this.view.printInvalidInput(e.getMessage());
        }
    }
}
