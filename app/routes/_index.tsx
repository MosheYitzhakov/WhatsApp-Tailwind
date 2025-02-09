import type { MetaFunction } from "@remix-run/node";
import iconSecority from "../imgs/security-icon.png";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen text-white">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll scrollbar-hide">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="flex flex-col bg-gray-700 w-60">
        <div className="flex items-center h-12 px-3 shadow-md">
          Tailwind CSS
        </div>
      </div>
      <div className="bg-gray-600 p-3 flex-1 items-center justify-center">
        <div className="max-w-lg">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={iconSecority}
              alt="secority"
            />
            <div>
              <p className="flex items-baseline">
                <span className="text-green-500 mr-2 text-sm font-medium">
                  secority
                </span>
                <span className="text-xs text-gray-500">09/02/2025</span>
              </p>
              <p className="pt-1 text-gray-300">
                You can override it in your config if you want but ultimately we
                chose the defaults they did because they let you get results
                closest to what a professional designer would do more easily
              </p>
              <p className="pt-2 text-gray-300">
                You can override it in your config if you want but ultimately we
                chose the defaults they did because they let you get results
                closest to what a professional designer would do more easily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
