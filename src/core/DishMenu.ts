export default class DishMenu {
  #day: string
  #dish: string

  constructor(day: string, dish: string) {
    this.#day = day
    this.#dish = dish
  }

  static empty() {
    return new DishMenu('', '')
  }

  get day() {
    return this.#day
  }
  get dish() {
    return this.#dish
  }

  set dish(dish) {
    this.#dish = dish
  }
}
