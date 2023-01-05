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

    public void run() {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNextLine()) {
            String inputValue = scanner.nextLine();
            InputCommand inputCommand = InputCommand.initFromString(inputValue);
            this.handleCommand(inputCommand);
        }

        scanner.close();
    }

    private void handleCommand(InputCommand command) {
        if (command.hasValid()) {
            switch (command.getCommand()) {
                case EXIT:
                    System.exit(0);
                    break;
                case HELP:
                    this.view.printHelpInfo();
                    break;
                case MENU:
                    this.view.printMenu(this.model.getMenu());
                    break;
                case ORDER:
                    try {
                        String productId = command.getParams()[0];
                        OrderModel order = this.model.addOrder(productId);
                        this.view.printOrderCreated(order);
                    } catch (Exception e) {
                        this.view.printInvalidInput();
                    }
                    break;
                case ORDER_STATUS:
                    try {
                        String orderId = command.getParams()[0];
                        OrderModel order = this.model.getOrder(orderId);
                        this.view.printOrderStatus(order);
                    } catch (Exception e) {
                        this.view.printInvalidInput();
                    }
                    break;
                case ADMIN_ORDER_NEXT_STATUS:
                    try {
                        String orderId = command.getParams()[0];
                        OrderModel order = this.model.changeOrderStatusToNext(orderId);
                        this.view.printChangeStatusSuccess(order);
                    } catch (Exception e) {
                        this.view.printInvalidInput();
                    }
                    break;
                default:
                    break;
            }
        } else {
            this.view.printInvalidInput();
        }
    }
}
