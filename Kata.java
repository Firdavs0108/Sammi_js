public class Kata {
    public static String evenOrOdd(int number) {
        return number % 2 == 0 ? "Even" : "Odd";
    }

    public static int makeNegative(final int x) {
    
       return -Math.abs(x);
        
      }

      public static boolean hero(int bullets, int dragons) {
    //    return bullets / 2 >= dragons;

    if (bullets <= 0 || dragons <= 0) {
        return false;
    }

    // Each dragon takes 2 bullets to be defeated
    int bulletsNeeded = dragons;

    // Check if the hero has enough bullets to defeat the dragons
    return bullets / 2 >= bulletsNeeded;
  }

}

