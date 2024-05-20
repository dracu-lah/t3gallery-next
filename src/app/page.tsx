export default function HomePage() {
  const imageUrls = Array.from({ length: 200 }).map((_, index) => ({
    id: index,
    src: "https://utfs.io/f/cdd51216-d13b-4f59-b73a-d6918281d6a0-30awpa.NIGHT~2.jpg",
  }));

  return (
    <main className="">
      <div className=" flex w-full flex-wrap  justify-center gap-4">
        {imageUrls.map((imageUrl) => (
          <img
            key={imageUrl.id}
            src={imageUrl.src}
            alt={imageUrl.id + ".png"}
            className="h-32 w-56 rounded-sm border object-cover"
          />
        ))}
      </div>
    </main>
  );
}
