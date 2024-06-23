import Image from "next/image";

const Story = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="relative flex justify-center items-center mb-20 lg:mb-40">
        {/* Image 1 */}
        <div className="relative w-full lg:w-1/2 h-96 mx-4">
          <Image
            src="/image1.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl shadow-lg"
          />
        </div>
        {/* Image 2 */}
        <div className="relative w-full lg:w-1/2 h-96 mx-4">
          <Image
            src="/image2.jpg"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Starting</strong> from
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            The story of Cafe Keko Indonesia began with a simple idea: to create
            a space where relaxation meets productivity. Founded by ... of
            coffee enthusiasts, the cafe sources the finest local beans to
            provide an exceptional coffee experience. With a comfortable and
            inspiring co-working space, Cafe Keko has become a favorite spot for
            entrepreneurs, freelancers, and coffee lovers alike.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
