import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.awt.CardLayout;
import java.awt.Color;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.awt.event.ActionEvent;

public class login extends JFrame implements ActionListener{

	private JPanel contentPane;
	private JTextField id;
	private JTextField pw;
	Home h1;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					login frame = new login();
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
	public login() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 404, 504);
		contentPane = new JPanel();
		contentPane.setBackground(Color.WHITE);
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		id = new JTextField();
		id.setBounds(122, 200, 116, 21);
		contentPane.add(id);
		id.setColumns(10);
		
		pw = new JTextField();
		pw.setBounds(122, 273, 116, 21);
		contentPane.add(pw);
		pw.setColumns(10);
		
		JButton b1 = new JButton("회원가입");
		
		b1.addActionListener(this);
		b1.setBounds(68, 344, 97, 23);
		contentPane.add(b1);
		
		JButton b2 = new JButton("로그인");
		b2.addActionListener(this);
		b2.setBounds(202, 344, 97, 23);
		contentPane.add(b2);
	}

		public void actionPerformed(ActionEvent e) {
			h1=new Home();
		}
	
	
}
