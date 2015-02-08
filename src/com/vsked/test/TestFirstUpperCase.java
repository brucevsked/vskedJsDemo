package com.vsked.test;

public class TestFirstUpperCase {

	public static void main(String[] args) {
		String phrase = "hello this is bruce can you see it";
		TestFirstUpperCase t = new TestFirstUpperCase();
		System.out.println(t.toJadenCase(phrase));

	}

	public String toJadenCase(String phrase) {
		if (phrase == null || "".equals(phrase))
			return null;

		StringBuilder sb=new StringBuilder();
		String[] sa = phrase.split(" ");

		for (String s : sa) {
			sb.append(s.substring(0, 1).toUpperCase()).append(s.substring(1, s.length()) + " ");
		}
		sb.setLength(phrase.length());
		return sb.toString();
	}

}
