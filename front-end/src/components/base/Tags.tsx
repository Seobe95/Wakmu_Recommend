interface TagsProps {
  features: string[];
}

function Tag({ feature }: { feature: string }) {
  return (
    <li className="pr-2 max-[480px]:pr-1 max-[480px]:px-1 max-[480px]:py-0 first:ml-0 last:mr-0 px-2 py-1 cursor-default">
      <p className="text-green-500 text-sm p-0 m-0 inline-grid">{'#' + feature}</p>
    </li>
  );
}

export default function Tags({ features }: TagsProps) {
  return (
    <div className="my-2">
      <ul role="list" className="flex flex-row flex-wrap">
        {features.map((item, index) => {
          return <Tag feature={item} key={item + index} />;
        })}
      </ul>
    </div>
  );
}
