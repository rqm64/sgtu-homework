package controller;

import java.util.Arrays;

public class InputCommand {
    private CommandType command;
    private String[] params;
    private boolean isValid;

    public InputCommand(CommandType command, String[] params, boolean isValid) {
        this.command = command;
        this.params = params;
        this.isValid = isValid;
    }

    public static InputCommand initFromString(String inputValue) {
        CommandType command = null;
        String[] params = null;
        boolean isValid = false;

        String[] splitedValue = inputValue.split("\\s+");

        try {
            command = CommandType.valueOf(splitedValue[0].toUpperCase());
            params = Arrays.copyOfRange(splitedValue, 1, splitedValue.length);
            isValid = true;
        } catch (Exception e) {}

        return new InputCommand(command, params, isValid);
    }

    public CommandType getCommand() {
        return this.command;
    }

    public String[] getParams() {
        return this.params;
    }

    public boolean hasValid() {
        return this.isValid;
    }
}
