import { rightsData } from "./rights-data";

export const Rights = () => {
  return (
    <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[85%] xl:max-w-[75%] m-auto">
      <div className="mt-20 text-center">
        <div className="uppercase font-bold text-3xl sm:text-5xl">
          {rightsData.title}
        </div>
        <div className="text-xl sm:text-3xl font-semibold mt-2">
          {rightsData.subtitle}
        </div>
      </div>
      <div className="mt-20">
        <div className="p-10 bg-serenade rounded-2xl">
          <div className="flex items-center gap-2">
            <div>{rightsData.blocks.lead.icon}</div>
            <div className="font-semibold text-2xl">
              {rightsData.blocks.lead.title}
            </div>
          </div>
          <div className="text-[18px] mt-2">
            {rightsData.blocks.lead.description.map((item, index) => (
              <div key={index} className="mt-2">
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {rightsData.blocks.blocks_group.map((item, index) => (
            <div key={index} className="p-10 bg-serenade rounded-2xl mt-10">
              <div className="flex items-center gap-2">
                <div>{item.icon}</div>
                <div className="font-semibold text-2xl">{item.title}</div>
              </div>
              <div className="text-[18px] mt-2">{item.subtitle}</div>
              <div>
                {item.list.map((li, index) => (
                  <ul key={index} className="mt-2">
                    <li className="list-disc ml-4">{li}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="p-10 bg-big-stone rounded-2xl text-white">
            <div className="flex items-center gap-2">
              <div>{rightsData.blocks.support.icon}</div>
              <div className="font-semibold text-2xl">
                {rightsData.blocks.support.title}
              </div>
            </div>
            <div className="text-[18px] mt-2">
              {rightsData.blocks.support.subtitle}
            </div>
            <div className="mt-2">
              {rightsData.blocks.support.listItems.map((item, index) => (
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
