
import type { CategoryType } from "../type/category";

function CategoryCard({ data }: { data: CategoryType }) {
  return (
    <div className="category-card">

      <img
        src={data.image}
        alt={data.title}
      />

      <h2>{data.title}</h2>

    </div>
  );
}

export default CategoryCard;
