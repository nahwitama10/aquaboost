export default function FoodCard({ name, type, protein, fish }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Type: {type}</p>
      <p>Protein: {protein}%</p>
      <p>Best for: {fish}</p>
    </div>
  )
}