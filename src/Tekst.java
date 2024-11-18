import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Tekst {
        private List<String> tekstLinjer;
        public Tekst() {
            this.tekstLinjer = new ArrayList<>();
        }


    private ArrayList<String> tekstlinjer;
    public void tilføj( String tekststreng){
        tekstlinjer.add(tekststreng);

    }
    public int findAntalUnikke() {
        int tekstLinjer = 0;
        Set<String> unikkeLinjer = new HashSet<>(tekstLinjer);
        return unikkeLinjer.size();
    }
}


