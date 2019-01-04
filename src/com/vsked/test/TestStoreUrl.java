package com.vsked.test;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class TestStoreUrl {

	public static void main(String[] args) throws Exception {
		Map<String,Object> tm=new HashMap<String,Object>();
		tm.put("1", "11");
		System.out.println(tm.size());
		getSystemInfo();
	}
	

	public static void getSystemInfo(){
		Properties systemProperties = System.getProperties();
	      Enumeration<?> en = systemProperties.propertyNames();
	      while (en.hasMoreElements())
	      {
	         String key = (String)en.nextElement();
	         System.out.println(key + "=" + systemProperties.getProperty(key));
	      }
	}
	


}
