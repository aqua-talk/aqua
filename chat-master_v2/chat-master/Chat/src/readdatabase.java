import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class readdatabase {
	
	
	public readdatabase () {
		Connection conn =null; //https://best421.tistory.com/47
		Statement stmt= null;
		ResultSet rs=null;
	
		
		
		try {
			
		
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		//String sql= "INSERT INTO SAVE3 (COL_ID,COL_TEXT) VALUES(?,?)";
	//	String sql= "INSERT INTO INFO  VALUES(?,?,?)";
		String url = "jdbc:oracle:thin:@localhost:1521:orcl";
		String id ="SYSTEM";
		
		String pw = "6647784";
		String sql = "select * from info";
		try {
			conn =DriverManager.getConnection(url,id,pw);
			stmt=conn.createStatement();
			
			rs=stmt.executeQuery(sql);
			
			while(rs.next()) {
				String ip1=rs.getNString("COL_IP");
				String id1=rs.getNString("COL_ID");
				String text1=rs.getNString("COL_TEXT");
				System.out.println(id1+text1);
				
			}
			
			
		}catch(SQLException e){
			System.out.println("DB연결실패");
			e.printStackTrace();
		}
		
	}catch(ClassNotFoundException e){
		System.out.println("DB연결실패2");
		e.printStackTrace();
	
		
		
	}finally {
		if(stmt != null) try{ stmt.close();} catch(SQLException e){};

        if(conn != null) try{ conn.close();} catch(SQLException e){};




	}
}
}
