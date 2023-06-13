import { CardList } from "@/components/common";
import { useRecommendSongs } from "@/lib/zustand/useRecommendSongs";

export default function index() {
  const {recommendSongs} = useRecommendSongs((state) => ({recommendSongs: state.songs}))
  return (
    <div className="w-full">
      <CardList songs={recommendSongs} />
    </div>
  );
}
