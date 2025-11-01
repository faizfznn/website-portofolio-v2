
function PortfolioPage() {
  return (
    // Tambahkan mt-[92px] agar konten mulai 92px di bawah navbar
    <section className="flex flex-col items-center justify-center h-[60vh] mt-[92px]">
      <h1 className="text-5xl font-bold">My Portfolio</h1>
      <p className="text-xl text-gray-600 mt-4">
        This is where the portfolio projects will be displayed.
      </p>
    </section>
  );
}

export default PortfolioPage;
