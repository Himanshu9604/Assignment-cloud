public class PangramChecker {
    public static boolean isPangram(String input) {
         boolean[] alphabetPresent = new boolean[26];
        
        input = input.toLowerCase();
                
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
              
                alphabetPresent[c - 'a'] = true;
            }
        }      
           for (boolean present : alphabetPresent) {
            if (!present) {
                return false; 
            }
        }
        
        return true; 
    }

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean result = isPangram(input);
        
        if (result) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
