import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.border.EmptyBorder;
import java.awt.Color;
import java.awt.SystemColor;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JTextArea;
import javax.swing.JScrollBar;

public class home2 extends JFrame implements ActionListener, Runnable {

	private JPanel contentPane;
	Socket socket;
	PrintWriter out;
	BufferedReader in;
	String str; 	
	String str2;

	JTextArea textArea= new JTextArea();
	JTextArea textArea_1 = new JTextArea();
	
	JTextField textField;
	String[] chatting_id = new String[50]; //데이터 집어넣는공간
	String[] chatting_text=new String[50];
	//JScrollPane scrollPane = new JScrollPane(textArea);
	

	/**
	 * Launch the application.
	 */
	
	

	/**
	 * Create the frame.
	 */
	public home2(String ip, int port) {
		
		
		
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 449, 528);
		contentPane = new JPanel();
		contentPane.setBackground(SystemColor.activeCaption);
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		
	
	
		
		//JTextArea textArea = new JTextArea();
		//textArea = new JTextArea();
		
		textArea.setBounds(12, 44, 326, 57);
		contentPane.add(textArea);
		
		textField = new JTextField();
		textField.setBounds(12, 446, 326, 33);
		contentPane.add(textField);
		textField.setColumns(10);
		textField.addActionListener(this);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(12, 111, 326, 305);
		contentPane.add(scrollPane);
		scrollPane.setViewportView(textArea_1);
		
		
      //  for(int i=0;i<chatting_id.length;i++) {
        //	textArea_1.append(chatting_id[i] + "\t" + "1" + "\t" + chatting_text[i]
          //  + "\n" );

      //  }
	        
	       
	        setLocation(200, 0);
	        setVisible(true);
	        
	        initNet(ip, port);
			System.out.println("ip = " + ip);
		
		
	}
	private void initNet(String ip, int port) {
		try {
			// 서버에 접속 시도
			socket = new Socket(ip, port);
			// 통신용 input, output 클래스 설정
			in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			// ture : auto flush 설정
			out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream())), true);
		} catch (UnknownHostException e) {
			System.out.println("IP 주소가 다릅니다.");
			//e.printStackTrace();
		} catch (IOException e) {
			System.out.println("접속 실패");
			//e.printStackTrace();
		}
		// 쓰레드 구동
		Thread thread = new Thread(this); // run 함수 -> this
		thread.start();
	
	
	}
	
	  public void readdatabase2 () {
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
			String sql = "select * from INFO";
			try {
				conn =DriverManager.getConnection(url,id,pw);
				stmt=conn.createStatement();
				
				rs=stmt.executeQuery(sql);
				textArea_1.setText("");
		        textArea_1.append("아이피\t" + "아이디\t" + "텍스트\n");
		        textArea_1.append("------------------------------------------------------------------------\n ");
		        
				while(rs.next()) {
				//	int i=0;
					String ip1=rs.getNString("COL_IP");
					String id1=rs.getNString("COL_ID");
					String text1=rs.getNString("COL_TEXT");
					System.out.println(ip1+id1+text1);
				//	chatting_id[i]=ip1;
				//	chatting_text[i]=text1;
				////++;
					
					textArea_1.append(ip1 + "\t" + id1 + "\t" + text1
	                        + "\n" );
					
					
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
	@Override
	public void run() {
		while(true) {
			try {
				//readdatabase r1=new readdatabase();
				readdatabase2();
				str2 = in.readLine();
				textArea.append(str2 + "\n");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} 
	} //run end
	@Override
	public void actionPerformed(ActionEvent e) {
		// textField의 문자열을 읽어와서 서버로 전송함
		str = textField.getText();
		out.println(str);
		// textField 초기화
		textField.setText("");
	} //
}
