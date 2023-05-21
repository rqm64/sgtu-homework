import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

public class OSCommandHandler implements ServerCommandHandler {
    public String handleCommand(String command) {
        try {
            // выполнение ОС команды
            Process process = Runtime.getRuntime().exec(command);

            // считывание результата выполнения ОС команды
            BufferedReader processInput = new BufferedReader(new InputStreamReader(process.getInputStream()));
            // считывание ошибок выполнения ОС команды
            BufferedReader processError = new BufferedReader(new InputStreamReader(process.getErrorStream()));

            // формирование результата выполнения команды
            String message = processInput.lines().collect(Collectors.joining("\n"));
            String error = processError.lines().collect(Collectors.joining("\n"));

            if (!message.isEmpty()) {
                return message;
            }

            if (!error.isEmpty()) {
                return error;
            }

            return "success";
        } catch (Exception e) {
            return "error";
        }
    }
}
