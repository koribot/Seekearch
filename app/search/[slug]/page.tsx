import WebsiteContentCard from "@/components/card/WebsiteContentCard";
import { websiteNames } from "@/data/websiteNames";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug.replace(/%20/g, " ");
  return (
    <div>
      <div className="mt-[50px] grid justify-between grid-cols-2">
        {websiteNames.map(
          (
            item: {
              platform: string;
              searchUrlStructure: string;
              additionalSearchUrlParams?: string;
            },
            index: number
          ) => {
            return (
              <div key={index} className="w-full p-5">
                <WebsiteContentCard
                  platform={item.platform}
                  searhKeyword={slug}
                  searchUrlStructure={item.searchUrlStructure}
                  additionalSearchUrlParams={item.additionalSearchUrlParams}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
