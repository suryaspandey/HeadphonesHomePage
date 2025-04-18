import React from "react";

export const IntegrationCard = ({ integrations, className }: any) => {
  return (
    <div className={"flex flex-col gap-4 pb-4"}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-primary border border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <img
              className="size-24"
              src={integration.icon}
              alt={integration.name}
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};
