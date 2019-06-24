import { useState, useEffect } from 'react';

function useFruits(fruit = undefined) {
  const initialFruits = [
    { value: "banana", label: "Banana" },
    { value: "apple", label: "Apple" },
    { value: "mango", label: "Mango" }
  ];
  const [fruits, setFruits] = useState(initialFruits);

  useEffect(() => {
    if (fruit) {
      setFruits(f => f.push(fruit));
    }

    return () => {
      setFruits([]);
    };
  }, [fruit]);

  return fruits;
}

export default useFruits;