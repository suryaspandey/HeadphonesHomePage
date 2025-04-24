import React from "react";

export const IntegrationCard = ({ integration }: any) => {
  const Icon = integration.icon;
  return (
    <div className="bg-primary dark:bg-white border border-white/10 rounded-3xl m-2 p-4 md:p-6 w-32 md:w-48 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-200">
      <Icon className="h-10 w-10 md:h-12 md:w-12 text-white dark:text-black" />
      <h3 className="text-lg md:text-xl font-semibold text-center mt-3 md:mt-4 text-white dark:text-gray-500">
        {integration.name}
      </h3>
      <p className="text-xs md:text-sm text-center text-white/70 dark:text-gray-400 mt-1 md:mt-2">
        {integration.description}
      </p>
    </div>
  );
};
