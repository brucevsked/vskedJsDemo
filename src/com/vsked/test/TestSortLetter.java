package com.vsked.test;

public class TestSortLetter {

	public static void main(String[] args) {
		String code="fedcba";
		TestSortLetter tsl=new TestSortLetter();
		System.out.println(tsl.sortGiftCode(code));
		System.out.println(tsl.sortGiftCodeN(code));
		

	}
	//TODO will goon write
	  public String sortGiftCode(String code){
		 char[] arr=code.toCharArray();
			for(int i=0;i<arr.length-1;i++){
				for(int j=0;j<arr.length-i-1;j++){
					if(arr[j]>arr[j+1]){
						char tmp=arr[j];
						arr[j]=arr[j+1];
						arr[j+1]=tmp;
					}
				}
			}
			StringBuilder sb=new StringBuilder();
			for(char c:arr) sb.append(c);
		  return sb.toString();
      }
	  
	 public String sortGiftCodeN(String code){
		 char[] arr=code.toCharArray();
		 java.util.Arrays.sort(arr);
		 return new String(arr);
	 }

}
