import java.util.ArrayList;
import java.util.List;

public class Album {
    private String title;
    private String author;
    private List<Track> tracks = new ArrayList<Track>();

    public Album(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public void addTrack(Track track) {
        track.setAlbum(this);
        tracks.add(track);
    }

    public String getAuthor() {
        return this.author;
    }

    public List<Track> getTracks() {
        return this.tracks;
    }
}
