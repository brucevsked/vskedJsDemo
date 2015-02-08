package com.vsked.test;

import java.util.Random;

public class BubbleSortLetter {
	
	public static void main(String[] args) {
		char[] arr=initArray();
		outPutArray(arr);
		sort(arr);
		outPutArray(arr);

	}
	
	public static char[]  initArray(){
		char[] tmpAr=new char[10];
		Random r=new Random();
		for(int i=0;i<10;i++){
			tmpAr[i]=(char) (97+r.nextInt(26));
		}
		return tmpAr;
		
	}
    
	public static void outPutArray(char arr[]){
		for(int i=0;i<arr.length;i++)
			System.out.println(i+":"+arr[i]);
	}
	
	public static void sort(char arr[]){
		for(int i=0;i<arr.length-1;i++){
			for(int j=0;j<arr.length-i-1;j++){
				if(arr[j]>arr[j+1]){
					swap(arr,j,j+1);
				}
			}
		}
	}
	
	public static void swap(char arr[],int i,int j){
		char tmp=arr[i];
		arr[i]=arr[j];
		arr[j]=tmp;
	}
}
