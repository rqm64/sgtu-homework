package business.models;

import utils.IdCounter;

/**
 * Общая модель сущности приложения.
 */
public abstract class EntityModel {
    private int id;

    public EntityModel() {
        this.id = IdCounter.next();
    }

    /**
     * Получение идентификатора.
     */
    public int getId() {
        return this.id;
    }
}
