public class App {
    public static void main(String[] args) {
        Album album1 = new Album("Кукловод", "Металлов");
        Album album2 = new Album("Шоссе к ООП", "Асид");

        Track track1 = new Track("Состояние объектов", "Янг");
        Track track2 = new Track("Шоссе к ООП");
        Track track3 = new Track("Одноразовый программист", "Бертон");

        album2.addTrack(track1);
        album2.addTrack(track2);
        album1.addTrack(track3);

        System.out.println(track1);
        System.out.println(track2);
        System.out.println(track3);
        System.out.println(track1.getAlbumList());
    }
}