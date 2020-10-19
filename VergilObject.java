package FormatingScripts;

import java.util.ArrayList;

public class VergilObject 
{
	String author;
	String title;
	int book;
	int chapter;
	int line;
	String content;
	
	public VergilObject(int a, int b, int c, String d)
	{
		author = "Vergil";
		title = "The Aeneid";
		book = a;
		chapter = b;
		line = c;
		content = d;
	}
	
	public VergilObject(ArrayList<String> list)
	{
		author = "Vergil";
		title = "The Aeneid";
	}
	
	public String toString()
	{
		return '"' + author + '~' + title + '~' + book + '~' + chapter + '~' + line + '~' + content + '"';
	}
}
