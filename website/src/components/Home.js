function GithubStats() {
  const stats = [
    { name: "Total Snippets", stat: "71,897" },
    { name: "Total Contributors", stat: "58.16%" },
    { name: "Total Languages", stat: "24.57%" },
  ];

  return (
    <div className="m-5">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Global Stats
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl m-5">VulnCodeHub</h1>
      <GithubStats />
    </div>
  );
}
