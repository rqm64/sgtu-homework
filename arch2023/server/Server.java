import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

interface ServerCommandHandler {
    public String handleCommand(String command) throws IOException;
}

public class Server {
    private final int PORT = 8080;
    private Socket socket;
    private ServerSocket serverSocket;
    private static BufferedReader bufferIn;
    private static BufferedWriter bufferOut;
    private ServerCommandHandler commandHandler;

    public Server(ServerCommandHandler commandHandler) {
        this.commandHandler = commandHandler;
    }

    public void run() {
        this.run(PORT);
    }

    public void run(int port) {
        try {
            // прослушивание порта
            serverSocket = new ServerSocket(port);
            System.out.println("Server run - localhost:" + port);

            while (true) {
                // ожидание подключени клиента
                socket = serverSocket.accept();
                // входящие сообщения
                bufferIn = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                // исходящие сообщения
                bufferOut = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
                // сообщение от клиента
                String message = bufferIn.readLine();
                // обработка сообщения
                String response = commandHandler.handleCommand(message);
                // ответ клиенту
                bufferOut.write(response + "\n");
                bufferOut.flush();

                socket.close();
                bufferIn.close();
                bufferOut.close();
            }
        } catch (Exception e) {
            System.err.println(e);
        }
    }
}
