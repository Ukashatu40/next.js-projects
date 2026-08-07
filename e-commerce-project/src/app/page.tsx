import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
      <section className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          Modern Shopping Experience
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          Discover Products You'll Love
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Browse quality products, enjoy seamless shopping, and experience a
          fast, intuitive ecommerce platform built with Next.js.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/ecommerce"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-xl"
          >
            Shop Now →
          </Link>

          <Link
            href="/ecommerce"
            className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-200 hover:border-blue-600 hover:text-blue-600"
          >
            Explore Products
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">🚚</div>
            <h3 className="mt-3 font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-sm text-gray-600">
              Quick and reliable delivery for every order.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">🔒</div>
            <h3 className="mt-3 font-semibold">Secure Payments</h3>
            <p className="mt-2 text-sm text-gray-600">
              Safe checkout with trusted payment methods.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">⭐</div>
            <h3 className="mt-3 font-semibold">Quality Products</h3>
            <p className="mt-2 text-sm text-gray-600">
              Carefully selected products you'll enjoy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
