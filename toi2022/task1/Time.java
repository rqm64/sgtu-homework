public class Time {
    private int MAX_TIME = 86400;
    private int time;

    public Time(int time) {
        this.time = time > this.MAX_TIME ? this.MAX_TIME : time;
    }

    public Time(int hours, int minutes, int seconds) {
        this(hours * 3600 + minutes * 60 + seconds);
    }

    public String toString() {
        return String.format("%02d:%02d:%02d", this._getHours(), this._getMinutes(), this._getSeconds());
    }

    private int _getHours() {
        return this.time / 3600;
    }

    private int _getMinutes() {
        return this.time % 3600 / 60;
    }

    private int _getSeconds() {
        return this.time % 3600 % 60;
    }

    public String getTotalSeconds() {
        return Integer.toString(this.time);
    }

    public String getHours() {
        return Integer.toString(this.time / 3600);
    }

    public String getMinutes() {
        return Integer.toString(this.time % 3600 / 60);
    }

    public String getSeconds() {
        return Integer.toString(this.time % 3600 % 60);
    }
}
