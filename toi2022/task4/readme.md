### 4. Пистолет.

Необходимо разработать сущность Пистолет, которая описывается следующим образом:
    - Имеет Количество патронов (целое число)
    - Может быть создан с указанием начального количества патронов
    - Может быть создан без указания начального количества патронов, в этом случае он изначально заряжен пятью патронами.
    - Может Стрелять, что приводит к выводу на экран текста “Бах!” в том случае, если количество патронов больше нуля, иначе делает “Клац!”. После каждого выстрела (когда вывелся “Бах!”)	 количество патронов уменьшается на один. 
    - Имеет максимальное количество патронов. Максимальное количество устанавливается во время создания пистолета и не может быть изменено позднее. У пистолета можно узнать, какое максимальное количество он вмещает.
    - Может быть перезаряжен. Для перезарядки необходимо передать пистолету число, которое будет означать количество заряжаемых патронов. Если передано отрицательное число, необходимо выбросить ошибку, объясняющую, что отрицательного числа патронов быть не может. Если передано слишком большое число патронов – необходимо лишние вернуть.
    - Может быть разряжен. Это приводит к обнулению патронов в пистолете и возврате нужного числа пользователю.
    - Можно узнать сколько сейчас заряжено патронов.
    - Можно узнать заряжен он или разряжен.

Создайте пистолет вместимостью 7, зарядите три патрона, выстрелите из него пять раз, затем зарядите в него 8 патронов, выстрелите еще 2 раза, разрядите его, сделайте контрольный выстрел.

Если все выполнено верно, то должно быть выведено: Бах! Бах! Бах! Клац! Клац! Бах! Бах! Клац!

