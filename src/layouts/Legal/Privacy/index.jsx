import { privacyData } from "./privacy-data";

export const Privacy = () => {
  return (
    <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[85%] xl:max-w-[75%] m-auto">
      <div className="mt-20 text-center">
        <div className="uppercase font-bold text-3xl sm:text-5xl">
          {privacyData.title}
        </div>
        <div className="text-xl sm:text-3xl font-semibold mt-2">
          {privacyData.subtitle}
        </div>
      </div>
      <div className="mt-20">
        <div className="p-10 bg-serenade rounded-2xl">
          <div className="flex items-center gap-2">
            <div>{privacyData.blocks.lead.icon}</div>
            <div className="font-semibold text-2xl">
              {privacyData.blocks.lead.title}
            </div>
          </div>
          <div className="text-[18px] mt-2">
            {privacyData.blocks.lead.description}
          </div>
        </div>
        <div>
          {privacyData.blocks.first_group.map((item, index) => (
            <div key={index} className="p-10 bg-serenade rounded-2xl mt-10">
              <div className="flex items-center gap-2">
                <div>{item.icon}</div>
                <div className="font-semibold text-2xl">{item.title}</div>
              </div>
              <div className="text-[18px] mt-2">{item.subtitle}</div>
              <div className="grid sm:grid-cols-2 mt-2 gap-4">
                {item.description.map((desc, index) => (
                  <div key={index} className="bg-details p-4 rounded-xl ">
                    <div>{desc.title}</div>
                    <div>
                      {desc.listItems.map((listItem, index) => (
                        <ul key={index} className="mt-2">
                          <li className="list-disc ml-4">{listItem}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          {privacyData.blocks.second_group.map((item, index) => (
            <div key={index} className="p-10 bg-serenade rounded-2xl mt-10">
              <div className="flex items-center gap-2">
                <div>{item.icon}</div>
                <div className="font-semibold text-2xl">{item.title}</div>
              </div>
              <div className="text-[18px] mt-2">{item.subtitle}</div>
              <div>
                {item.listItems.map((listItem, index) => (
                  <div key={index} className="lg:flex mt-2 gap-1">
                    <div className="font-semibold">{listItem.title}</div>
                    <div>{listItem.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="p-10 bg-big-stone rounded-2xl text-white">
            <div className="flex items-center gap-2">
              <div>{privacyData.blocks.support.icon}</div>
              <div className="font-semibold text-2xl">
                {privacyData.blocks.support.title}
              </div>
            </div>
            <div className="text-[18px] mt-2">
              {privacyData.blocks.support.subtitle}
            </div>
            <div className="mt-2">
              {privacyData.blocks.support.listItems.map((item, index) => (
                <div key={index}>
                  <div className="sm:flex gap-2">
                    <div>{item.title}</div>
                    <div>{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
