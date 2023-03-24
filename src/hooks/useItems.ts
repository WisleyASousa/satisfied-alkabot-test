import { useState } from 'react'

export default function useItems() {
  const [listItems, setListItems] = useState<
    { id: number; name: string; active: boolean; creationDate: string }[] | null
  >()

  return {
    listItems,
    setListItems,
  }
}
