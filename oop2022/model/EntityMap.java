package model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import business.models.EntityModel;

public class EntityMap<T extends EntityModel> {
    private Map<String, T> list = new HashMap<String, T>();

    public List<T> get() {
        return new ArrayList<T>(this.list.values());
    }

    public T get(String id) {
        return this.list.get(id);
    }

    public void add(T entity) {
        this.list.put(Integer.toString(entity.getId()), entity);
    }
}
