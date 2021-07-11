import java.io.*;
import java.sql.*;
import java.util.Scanner;


public class WDB_input {
	
	public WDB_input(){
	Connection conn =null; //https://best421.tistory.com/47
	PreparedStatement pstmt =null;
	ResultSet rs = null;
	Statement stmt=null; // sql문 실행
	int index = 0;
	try {
		
	
	
	Class.forName("oracle.jdbc.driver.OracleDriver");
	//String sql= "INSERT INTO SAVE3 (COL_ID,COL_TEXT) VALUES(?,?)";
	String sql= "SELECT * from ifno";
	String url = "jdbc:oracle:thin:@localhost:1521:orcl";
	String id ="SYSTEM";
	
	String pw = "6647784";
	try {
		conn =DriverManager.getConnection(url,id,pw);
		
		//pstmt = conn.prepareStatement(sql);
		//pstmt.setString(1,"1");
		//pstmt.setString(2,"1");
	//	pstmt.setString(3,"1");
		
		//rs=pstmt.executeQuery();
		 stmt = conn.createStatement();
		 rs = stmt.executeQuery(sql);
		while(rs.next()) {
			 index++;
             String ip_read = rs.getString(1);
             String id_read = rs.getString(2);
             String text_read = rs.getString(3);
			
            
			
		}
		
		
		
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

