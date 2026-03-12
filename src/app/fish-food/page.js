import FoodCard from "@/components/FoodCard"
import fishFoods from "@/data/fishFood"

export default function FishFoodPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Fish Food Types
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {fishFoods.map((food, index) => (
          <FoodCard
            key={index}
            name={food.name}
            type={food.type}
            protein={food.protein}
            fish={food.fish}
          />
        ))}
      </div>
    </div>
  )
}