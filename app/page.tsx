import FilterAndSearch from "@/components/filter-and-serach/FilterAndSearch";
import HotelsList from "@/components/hotel/HotelsList";
import HotelsListSkeleton from "@/components/hotel/HotelsListSkeleton";
import { Suspense } from "react";
interface Props {
  searchParams: {
    query: string | undefined;
    country: string;
    state: string;
    city: string;
  };
}

export default function Home({ searchParams }: Props) {
  return (
    <div className="container-layout container mx-auto">
      <FilterAndSearch />
      <Suspense
        fallback={
          <div className="mt-10 text-center">
            <HotelsListSkeleton />
          </div>
        }
      >
        <HotelsList query={searchParams.query} />
      </Suspense>
    </div>
  );
}
