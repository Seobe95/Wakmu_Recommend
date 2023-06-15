interface ItemListProps<T> {
  data: T[];
  renderItems: (info: { item: T; index: number }) => React.ReactNode;
}

export default function ItemList<T>({ data, renderItems }: ItemListProps<T>) {
  return (
    <>
      {data.map((item, index) => {
        return renderItems({ item, index });
      })}
    </>
  );
}
