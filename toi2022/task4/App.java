public class App {
    public static void main(String[] args) {
        Gun gun = new Gun(7, 3);
        gun.shot();
        gun.shot();
        gun.shot();
        gun.shot();
        gun.shot();
        gun.loadAmmo(8);
        gun.shot();
        gun.shot();
        gun.unloadAmmo();
        gun.shot();
    }
}