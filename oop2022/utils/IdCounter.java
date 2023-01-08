package utils;

import java.util.concurrent.atomic.AtomicInteger;

public class IdCounter {
    private static final AtomicInteger sequence = new AtomicInteger();

    public static int next() {
        return sequence.incrementAndGet();
    }
}
