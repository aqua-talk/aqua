import java.io.*;
import java.sql.*;
import java.util.Scanner;



public class WDB2 {

	public WDB2 (String ip, String id_2, String text) {
		Connection conn =null; //https://best421.tistory.com/47
		PreparedStatement pstmt =null;
		try {
			
		
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		//String sql= "INSERT INTO SAVE3 (COL_ID,COL_TEXT) VALUES(?,?)";
		String sql= "INSERT INTO INFO  VALUES(?,?,?)";
		String url = "jdbc:oracle:thin:@localhost:1521:orcl";
		String id ="SYSTEM";
		
		String pw = "6647784";
		//String sql2 = "select * from info";
		try {
			conn =DriverManager.getConnection(url,id,pw);
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1,ip);
			pstmt.setString(2,id_2);
			pstmt.setString(3,text);
			
			pstmt.executeUpdate();
			
			
		}catch(SQLException e){
			System.out.println("DB연결실패");
			e.printStackTrace();
		}
		
	}catch(ClassNotFoundException e){
		System.out.println("DB연결실패2");
		e.printStackTrace();
	
		
		
	}finally {
		if(pstmt != null) try{ pstmt.close();} catch(SQLException e){};

        if(conn != null) try{ conn.close();} catch(SQLException e){};




	}
}
}
