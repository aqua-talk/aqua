package com.example.aquatalk;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.AdapterView.OnItemLongClickListener;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainActivity extends AppCompatActivity implements OnItemClickListener, OnItemLongClickListener {

    ImageView Friends, Chatting, Mypage;

    String[] words = new String[] {
            "김정국", "김현", "엄태혁"
    };

    int[] c_icon = new int[] {
            R.drawable.profile2, R.drawable.profile3, R.drawable.profile4
    };

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        Friends = (ImageView) findViewById(R.id.friends);
        Chatting = (ImageView) findViewById(R.id.chatting);
        Mypage = (ImageView) findViewById(R.id.mypage);

        Friends.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setContentView(R.layout.main);
            }
        });
        Chatting.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setContentView(R.layout.chatting);
            }
        });
        Mypage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setContentView(R.layout.mypage);
            }
        });

        ArrayList<HashMap<String, Object>> data =
                new ArrayList<HashMap<String, Object>>();

        for(int i = 0; i < 3; i++){
            HashMap<String, Object> map =
                    new HashMap<String, Object>();

            map.put("profile", words[i]);
            map.put("app_icon", c_icon[i]);
            data.add(map);

            CustomAdapter ca = new CustomAdapter(this, data, R.layout.row,
                    new String[]{"profile"},
                    new int[]{R.id.profile}
            );

            ListView lv = (ListView)findViewById(R.id.listview);
            lv.setAdapter(ca);
        }

    }

    public class CustomAdapter extends SimpleAdapter{
        LayoutInflater mLayoutInflater;

        public CustomAdapter(
                Context context,
                List<? extends Map<String, ?>> data,
                int resource,
                String[] from, int[] to) {
            super(context, data, resource, from, to);
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            mLayoutInflater = LayoutInflater.from(getBaseContext() );

            convertView = mLayoutInflater.inflate(R.layout.row, parent, false);
            ListView listView = (ListView) parent;

            Map<String, Object> data = (Map<String, Object>) listView.getItemAtPosition(position);

            TextView profile = (TextView) convertView.findViewById(R.id.profile);
            profile.setText( (String)data.get("profile") );

            ImageView app_icon = (ImageView) convertView.findViewById(R.id.app_icon);
            app_icon.setImageResource( (Integer)data.get("app_icon") );

            return convertView;
        }
    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        Log.d("onItemClick", "position: " + String.valueOf(position));
        Toast.makeText(this, words[position], Toast.LENGTH_SHORT).show();
    }

    @Override
    public boolean onItemLongClick(
            AdapterView<?> parent,
            View view, int position, long id) {
        Log.d("onItemClick", "position: " + String.valueOf(position));
        Toast.makeText(this, words[position], Toast.LENGTH_SHORT).show();
        return false;
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        menu.add(Menu.NONE, 0, Menu.NONE, "편집");
        menu.add(Menu.NONE, 1, Menu.NONE, "친구 관리");
        menu.add(Menu.NONE, 2, Menu.NONE, "전체 설정");
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case 0:
                Toast.makeText(this, "편집", Toast.LENGTH_SHORT).show();
                break;
            case 1:
                Toast.makeText(this, "친구 관리", Toast.LENGTH_SHORT).show();
                break;
            case 2:
                Toast.makeText(this, "전체 설정", Toast.LENGTH_SHORT).show();
                break;
        }
        return true;
    }
}