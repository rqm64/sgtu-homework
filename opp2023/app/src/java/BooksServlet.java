import jakarta.servlet.ServletConfig;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = {"/books"})
public class BooksServlet extends HttpServlet {
    private void createTestTable (Statement statement) throws SQLException {
        statement.executeUpdate(
            "CREATE TABLE IF NOT EXISTS Books" + 
            "(`id` INTEGER not NULL, " + 
            " `title` VARCHAR(255), " +  
            " `author` VARCHAR(255), " +  
            " `year` INTEGER, " +
            " PRIMARY KEY ( `id` ))"
        );
        statement.executeUpdate("INSERT INTO Books VALUES (1, 'Trust', 'Hernan Diaz', 2022)");
        statement.executeUpdate("INSERT INTO Books VALUES (2, 'The Covenant of Water', 'Abraham Verghese', 2023)");
        statement.executeUpdate("INSERT INTO Books VALUES (3, 'Solito: A Memoir', 'Javier Zamora', 2022)");
        statement.executeUpdate("INSERT INTO Books VALUES (4, 'Poverty, by America', 'Matthew Desmond', 2023)");

    }
    
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
        String year = req.getParameter("year");
        PrintWriter out = resp.getWriter();

        try {
            Class.forName("org.h2.Driver");
            Connection connection = DriverManager.getConnection("jdbc:h2:mem:test");

            Statement statement = connection.createStatement();
            // database test
//            createTestTable(statement);
            
            try {
                ResultSet rs = statement.executeQuery("SELECT * FROM Books WHERE `year` >= " + year);
                
                while (rs.next()) {
                    out.println(rs.getString("title") + " / " + rs.getString("author") + " / " + rs.getString("year"));
                }
            } finally {
                statement.close();
                connection.close();
            }


        } catch (SQLException|ClassNotFoundException sqlex) {
            out.print(sqlex);
        }
        out.close();
    }
}
