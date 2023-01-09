import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Track {
    private String title;
    private Album album = null;
    private List<String> coAuthors = new ArrayList<String>();

    public Track(String title) {
        this.title = title;
    }

    public Track(String title, String...coAuthors) {
        this.title = title;
        this.coAuthors.addAll(Arrays.asList(coAuthors));
    }

    public void setAlbum(Album album) {
        if (this.album == null) {
            this.album = album;
        } else {
            System.err.println("Трек уже прикреплен к альбому.");
        }
    }

    public String getTitle() {
        return this.title;
    }

    public String toString() {
        String str = this.title;
        if (this.coAuthors.size() > 0) {
            str += ", авторы: " + this.album.getAuthor() + ", " + String.join(", ", this.coAuthors);
        } else {
            str += ", автор: " + this.album.getAuthor();
        }

        return str;
    }

    public String getAlbumList() {
        if (album == null) {
            return "У трека отсутствует альбом.";
        }

        return this.album.getTracks()
            .stream()
            .map(i -> i.getTitle())
            .collect(Collectors.joining(", "));
        }
}
