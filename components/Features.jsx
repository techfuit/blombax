import React from "react";
import LayoutCard from "./LayoutCard";

export default function Features() {
  return (
    <div className="py-10" id="roadmap">
      <LayoutCard title="Bloombax" highlight="Roadmap">
          <div className="flex gap-5 max-md:flex-col w-full justify-center items-center">
            <Card
                title="Phase 1"
              >
                <ol type="1">
                  <li>Initial Launch and Market Penetration </li>
                  <li>Q3 2024 </li>
                  <li>Platform Started </li>
                  <li>Q4 2024 </li>
                  <li>
                    Achieve initial user acquisition and trading volume targets{" "}
                  </li>
                  <li>Q1 2025 </li>
                  <li>Expansion and Enhancement </li>
                </ol>
              </Card>
              <Card
                title="Phase 2"
              >
                <ol type="1">
                 
                  <li>Q2 2025 </li>
                  <li>List on coin market cap and major crypto portfolio platform</li>
                  <li>Expand platform features and integrations </li>
                  <li>Q3 2025 </li>
                  <li>
                  Increase market presence and user base
                  </li>
                  <li>Q4 2025 </li>
                 
                  <li>Major cex partnership agreements and DeFi integrations</li>
                </ol>
              </Card>
            <Card
                title="Phase 3"
              >
                <ol>
                  <li>Leadership and Innovation </li>
                  <li>Q3 2027 </li>
                  <li>Industry-wide recognition and accolades </li>
                  <li>Q1 2028 </li>
                  <li>
                  Significant advancements in AI and blockchain technologies
                  </li>
                  <li>Q3 2028 </li>
                  <li>Establish Finanx AI as a leader in the financial technology space</li>
                </ol>
              </Card>
          </div>
      </LayoutCard>
    </div>
  );
}

const Card = ({ title, children }) => {
  return (
    <div className="bg-[#d1d1d10a] border border-[#ffffff5b] glassBlur rounded-2xl p-6 w-[95%] md:w-[45%] lg:w-[30%] min-h-80 ">
      <h2 className="mb-2 text-xl font-semibold">
        {title}
      </h2>
      {children}
    </div>
  );
};
