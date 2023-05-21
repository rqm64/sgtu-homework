import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;
import java.util.stream.Collectors;

public class Client {
    private final int PORT = 8080;
    private static Socket socket;
    private static BufferedReader input;
    private static BufferedReader serverIn;
    private static BufferedWriter serverOut;

    public void run () {
        this.run(PORT);
    }

    public void run (int port) {
        try {
            while (true) {
                // соединение с сервером
                socket = new Socket("localhost", port);
                // сообщения пользователя
                input = new BufferedReader(new InputStreamReader(System.in));
                // сообщения с сервера
                serverIn = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                // сообщения на сервер
                serverOut = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
                // ввод пользователя
                String clientMessage = input.readLine();
                // отправка сообщения на сервер
                serverOut.write(clientMessage + "\n");
                serverOut.flush();
                // ответ сервера
                String serverMessage = serverIn.lines().collect(Collectors.joining("\n"));
                System.out.println("server: " + serverMessage);

                socket.close();
                serverIn.close();
                serverOut.close();
            }
        } catch (Exception e) {
            System.err.println(e);
        }
    }
}
