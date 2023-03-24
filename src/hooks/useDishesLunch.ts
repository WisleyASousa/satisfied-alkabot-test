import { useState } from 'react'
import DishMenu from '../core/DishMenu'

const dishesLunchDefault = [
  new DishMenu(
    'Segunda',
    'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta'
  ),
  new DishMenu(
    'Terça',
    'carroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta'
  ),
  new DishMenu(
    'Quarta',
    'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta'
  ),
  new DishMenu(
    'Quinta',
    'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta'
  ),
  new DishMenu(
    'Sexta',
    'arroz, feijao, macarrao, carne de figado, repolho, cenoura, fruta'
  ),
]

export default function useDishesDinner() {
  // Tabela da Janta

  const [selectedDishLunch, setSelectedDishLunch] = useState<DishMenu>(
    DishMenu.empty()
  )
  const [dishesLunch, setDishesLunch] = useState(dishesLunchDefault)

  function dishSelectedLunch(dish: DishMenu) {
    setSelectedDishLunch(dish)
    console.log(dish.dish)
    console.log(dish.day)
  }
  function deletedLunch(dish: DishMenu) {
    console.log(`Deletando ... ${dish.dish}`)
    console.log(`Deletando ... ${dish.day}`)
  }
  function updatePlateLunch(dish: DishMenu) {
    console.log('savePlate', dish.dish)
    dishesLunch
      .filter((d) => d.day === dish.day)
      .map((d) => (d.dish = dish.dish))
    setDishesLunch([...dishesLunch])
  }
  return {
    selectedDishLunch,
    setSelectedDishLunch,
    dishesLunch,
    dishSelectedLunch,
    deletedLunch,
    updatePlateLunch,
  }
}
