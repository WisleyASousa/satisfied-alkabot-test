import { useState } from 'react'
import DishMenu from '../core/DishMenu'

const dishesDinnerDefault = [
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
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const [selectedDish, setSelectedDish] = useState<DishMenu>(DishMenu.empty())
  const [dishes, setDishes] = useState(dishesDinnerDefault)

  function dishSelected(dish: DishMenu) {
    setSelectedDish(dish)
    console.log(dish.dish)
    console.log(dish.day)
  }
  function deleted(dish: DishMenu) {
    console.log(`Deletando ... ${dish.dish}`)
    console.log(`Deletando ... ${dish.day}`)
  }
  function updatePlate(dish: DishMenu) {
    console.log('savePlate', dish.dish)
    dishes.filter((d) => d.day === dish.day).map((d) => (d.dish = dish.dish))
    setDishes([...dishes])
  }
  return {
    visible,
    setVisible,
    selectedDish,
    dishes,
    dishSelected,
    deleted,
    updatePlate,
  }
}
