const Article = () => {
  return (
    <section className="flex flex-col px-28 py-20 max-lg:px-10 gap-12 bg-very-light-gray-neutral">
      <h1>Latest Articles</h1>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7">
        <div className="bg-white rounded-lg transition-transform hover:scale-105">
          <img
            src="images/image-currency.jpg"
            className=" rounded-t-lg"
            alt="article image"
          />
          <div className="p-7 flex flex-col gap-2">
            <p>By Claire Robinson</p>
            <h2 className="hover:text-lime-green-primary cursor-pointer">Receive money in any currency with no fees</h2>
            <p>
              The world is getting smaller and {`we're`} becoming more mobile.
              So why should you be forced to only receive money in a single...
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg transition-transform hover:scale-105">
          <img
            src="images/image-restaurant.jpg"
            className=" rounded-t-lg"
            alt="article image"
          />
          <div className="p-7 flex flex-col gap-2">
            <p>By Wilson Hutton</p>
            <h2 className="hover:text-lime-green-primary cursor-pointer">Treat yourself without worrying about money</h2>
            <p>
              Our simple budgeting feature allows you to seperate out your
              spending and set realistic limits each month. That means you ...
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg transition-transform hover:scale-105">
          <img
            src="images/image-plane.jpg"
            className=" rounded-t-lg"
            alt="article image"
          />
          <div className="p-7 flex flex-col gap-2">
            <p>By Wilson Hutton</p>
            <h2 className="hover:text-lime-green-primary cursor-pointer">Take your Easybank card wherever you go</h2>
            <p>
              We want you to enjoy your travels. This is we {`don't`} charge any
              fees on purchases while {`you're`} abroad. {`We'll`} even show you
              ...
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg transition-transform hover:scale-105">
          <img
            src="images/image-confetti.jpg"
            className=" rounded-t-lg"
            alt="article image"
          />
          <div className="p-7 flex flex-col gap-2">
            <p>By Claire Robinson</p>
            <h2 className="hover:text-lime-green-primary cursor-pointer">Our invite-only Beta accounts are now live!</h2>
            <p>
              After a lot of hard work by the whole team, {`we're`} excited to
              launch our closed beta. {`It's`} easy to request an invite through
              the site ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
