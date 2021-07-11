

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.awt.Color;
import java.awt.Dimension;

import javax.swing.BoxLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.JList;
import javax.swing.JLabel;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JTextField;
import javax.swing.JScrollPane;

public class Home extends JFrame implements MouseListener, MouseMotionListener {
	SubFrame sf;
	home2 h2;
	JPanel contentPane;
	public int readline_num=0;
	String user_id;
	String[] user_name =new String[100];
	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Home frame = new Home();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Home() {
		//데이터베이스에서 리스트 숫자 받아와서 숫자만큼 label 생성 label 위치도 조정이되z야되고 
	//	readdatabase3();
		setBackground(Color.WHITE);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 618, 548);
		contentPane = new JPanel();
		contentPane.setBackground(Color.WHITE);
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JPanel panel_left = new JPanel();
		panel_left.setBounds(5, 5, 115, 494);
		contentPane.add(panel_left);
		panel_left.setPreferredSize(new Dimension(350, 190));
		panel_left.setLayout(null);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(128, 5, 446, 464);
		contentPane.add(scrollPane);
		
		JPanel panel_right = new JPanel();
		scrollPane.setViewportView(panel_right);
		panel_right.setBackground(Color.WHITE);
		panel_right.setLayout(null);
		
		JLabel lblNewLabel = new JLabel("");
		lblNewLabel.setIcon(new ImageIcon("D:\\java\\guitest1\\images\\i.jpg"));
		lblNewLabel.setBounds(30, 36, 44, 34);
		panel_right.add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("");
		lblNewLabel_1.setIcon(null);
		lblNewLabel_1.setBounds(30, 170, 44, 34);
		panel_right.add(lblNewLabel_1);
		
		JLabel lblNewLabel_2 = new JLabel("New label");
		lblNewLabel_2.setBounds(123, 36, 110, 34);
		lblNewLabel_2.addMouseListener(this);
		lblNewLabel_2.addMouseMotionListener(this);
		panel_right.add(lblNewLabel_2);
		
		
		
		
		
		setVisible(true);
		JLabel[] j1=new JLabel[10];
		readdatabase3();
		for(int i=0; i<readline_num;i++) {
			
			j1[i] =new JLabel(user_name[i]);
			System.out.println(readline_num);
			j1[i].setBounds(123, 170, 110, 34+i*500);
			
			panel_right.add(j1[i]);
		}
		
		
		
	}
		public void mousePressed(MouseEvent e) {
			
			
	}
		public void mouseReleased(MouseEvent e) {
			
			
		}
		public void mouseEntered(MouseEvent e) {
			
			
		}
		public void mouseExited(MouseEvent e) {
			
			
		}
		@Override
		public void mouseClicked(MouseEvent e) {
			
//			 if(sf == null){
//		            sf = new SubFrame();
//		        }else{
//		            sf.dispose();
//		            sf = new SubFrame();
//		        }
			try {
				InetAddress ia =InetAddress.getLocalHost();
				String ip_str = ia.toString();
				String ip= ip_str.substring(ip_str.indexOf("/")+1);
				 //new ClientGui(ip,6077);
				 new home2(ip,6077);
			}catch(UnknownHostException e1)
			{
				e1.printStackTrace();
			}
	          //  h2 = new home2();
	       
			
			
			
		}

		@Override
		public void mouseDragged(MouseEvent e) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void mouseMoved(MouseEvent e) {
			// TODO Auto-generated method stub
			
		}
	
		public void readdatabase3 () {
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
			String sql = "select * from user_info";
			try {
				conn =DriverManager.getConnection(url,id,pw);
				stmt=conn.createStatement();
				
				rs=stmt.executeQuery(sql);
			
				
				while(rs.next()) {
				//	int i=0;
					
					String ip1=rs.getNString("id");
					user_name[readline_num]=rs.getNString("username");
					
					
					readline_num++;
					
				//	chatting_id[i]=ip1;
				//	chatting_text[i]=text1;
				////++;
				
					
					
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
class SubFrame extends JFrame implements ActionListener{

    public SubFrame(){
        super("나는 자식");
        setSize(100,100);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JButton bt = new JButton("닫기");
        add(bt);
        bt.addActionListener(this);
        setLocation(200, 0);
        setVisible(true);
    }
    
  

    @Override
    public void actionPerformed(ActionEvent e) {
        // TODO Auto-generated method stub
        dispose();
    }
    
    
  
    
    
}
class test_Frame2 extends JDialog{
    JLabel jlb = new JLabel("");
    public test_Frame2(String str){
            getContentPane().add(jlb);
           
            jlb.setText(str.toString());
           
            this.setSize(200,100);
            this.setModal(true);
            this.setVisible(true);
           
    }
    
    
}
    