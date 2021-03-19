import java.io.IOException;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) throws IOException {
    Scanner sc = new Scanner(System.in);
    double pi, A;

    pi = 3.14159;
    A = sc.nextDouble();

    A = Math.pow(A, 2) * pi;
    System.out.printf("A=%.4f\n", A);
  }
}