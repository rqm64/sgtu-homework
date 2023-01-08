public class Gun {
    private int ammo;
    private final int maxAmmo;

    public Gun(int maxAmmo) {
        this(maxAmmo, 5);
    }

    public Gun(int maxAmmo, int ammo) {
        this.maxAmmo = maxAmmo;
        this.ammo = ammo;
    }

    public void shot() {
        if (this.ammo > 0) {
            System.out.println("Бах!");
            this.ammo -= 1;
        } else {
            System.out.println("Клац!");
        }
    }

    public int getMaxAmmo() {
        return this.maxAmmo;
    }

    public int loadAmmo(int ammo) {
        if (ammo < 0) {
            throw new Error("Нельзя зарядить отрицательное количество патронов.");
        }

        int nextAmmo = this.ammo + ammo;

        if (nextAmmo > maxAmmo) {
            this.ammo = maxAmmo;
            return nextAmmo - maxAmmo;
        }

        return 0;
    }

    public int unloadAmmo() {
        int ammo = this.ammo;
        this.ammo = 0;

        return ammo;
    }

    public int checkAmmo() {
        return this.ammo;
    }

    public boolean isLoaded() {
        return this.ammo > 0;
    }
}
