import React from "react";


const techSpecSmall = [
  [
    "Glass Content",
    "%",
    "±5",
    "≥ 75",
    "≥ 80"
  ],
  [
    "Tensile Strength",
    "Mpa",
    "min.",
    "700 - 850",
    "800 - 1000"
  ],
  [
    "Transverse Shear Tensile",
    "Mpa",
    "",
    "≥ 130",
    "135 - 200 Mpa"
  ],
  [
    "Tensile Modulus of Elasticity",
    "Mpa",
    "",
    "≥ 45000",
    "45000 - 55000"
  ],
  [
    "Ultimate Tensile Strain",
    "%",
    "",
    "≥ 1.1",
    "≥ 1.1"
  ],
  [
    "Glass Transition Temperature",
    "°C",
    "",
    "≥ 100",
    "101-115"
  ],
  [
    "Moisture Absorption (short hrs.)",
    "%",
    "min.",
    "≤ 0.25",
    "≤ 0.25"
  ],
  [
    "Moisture Absorption (long term)",
    "%",
    "min.",
    "≤ 1",
    "≤ 1"
  ],
  [
    "Alkaline Resistance",
    "Mpa",
    "",
    "≥ 80 % of mean ultimate tensile force of pristine bars",
    "≥ 80 % of mean ultimate tensile force of pristine bars"
  ],
  [
    "Bond Strength",
    "Mpa",
    "",
    "≥ 7.6",
    "8-15"
  ]
];

const techSpecLarge = [
  [
    "Glass Content",
    "%",
    "±5",
    "≥ 75",
    "≥ 80"
  ],
  [
    "Tensile Strength",
    "Mpa",
    "min.",
    "550 - 650",
    "16 mm ≥ 700\n20 mm ≥ 650\n25 mm ≥ 650"
  ],
  [
    "Transverse Shear Tensile",
    "Mpa",
    "",
    "≥ 130",
    "135 - 200 Mpa"
  ],
  [
    "Tensile Modulus of Elasticity",
    "Mpa",
    "",
    "≥ 45000",
    "45000 - 55000"
  ],
  [
    "Ultimate Tensile Strain",
    "%",
    "",
    "≥ 1.1",
    "≥ 1.1"
  ],
  [
    "Glass Transition Temperature",
    "°C",
    "",
    "≥ 100",
    "101-115"
  ],
  [
    "Moisture Absorption (short hrs.)",
    "%",
    "min.",
    "≤ 0.25",
    "≤ 0.25"
  ],
  [
    "Moisture Absorption (long term)",
    "%",
    "min.",
    "≤ 1",
    "≤ 1"
  ],
  [
    "Alkaline Resistance",
    "Mpa",
    "",
    "≥ 80 % of mean ultimate tensile force of pristine bars",
    "≥ 80 % of mean ultimate tensile force of pristine bars"
  ],
  [
    "Bond Strength",
    "Mpa",
    "",
    "≥ 7.6",
    "8-15 Mpa"
  ]
];

export default function TechnicalSpecification() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-16 px-4 md:px-0">
      <div className="max-w-5xl mx-auto bg-white/80 rounded-3xl shadow-2xl p-4 md:p-10 border border-orange-200">
        {/* Product Portfolio Title */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-700 tracking-tight mb-1">
            <span className="block text-2xl md:text-3xl font-bold text-orange-800">PRODUCT</span>
            PORTFOLIO
          </h1>
        </div>

        {/* Product Specifications Section */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center">Product Specifications</h2>
        <div className="w-full flex flex-col items-center mb-8">
          {/* Staight Bar Table */}
          <div className="w-full overflow-x-auto mb-2">
            <table className="min-w-full border border-orange-200 rounded-xl text-xs md:text-base text-center">
              <thead className="bg-orange-100">
                <tr>
                  <th className="p-2 border border-orange-200">Diameter</th>
                  <th className="p-2 border border-orange-200">6mm</th>
                  <th className="p-2 border border-orange-200">8mm</th>
                  <th className="p-2 border border-orange-200">10mm</th>
                  <th className="p-2 border border-orange-200">12mm</th>
                  <th className="p-2 border border-orange-200">16mm</th>
                  <th className="p-2 border border-orange-200">20mm</th>
                  <th className="p-2 border border-orange-200">25mm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-orange-100 font-semibold">Unit Weight (Kg/mtr)</td>
                  <td className="p-2 border border-orange-100">0.05</td>
                  <td className="p-2 border border-orange-100">0.10</td>
                  <td className="p-2 border border-orange-100">0.135</td>
                  <td className="p-2 border border-orange-100">0.20</td>
                  <td className="p-2 border border-orange-100">0.36</td>
                  <td className="p-2 border border-orange-100">0.61</td>
                  <td className="p-2 border border-orange-100">0.973</td>
                </tr>
                <tr>
                  <td className="p-2 border border-orange-100 font-semibold">Length Available</td>
                  <td className="p-2 border border-orange-100" colSpan={4}>Up to 100 metres (in coil form)</td>
                  <td className="p-2 border border-orange-100" colSpan={3}>Up to 12 metres (in straight bars)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-600 mt-2">
            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-orange-400 inline-block"></span> Diameter</div>
            <div className="flex items-center gap-1"><span className="w-3 h-0.5 bg-orange-400 inline-block"></span> Length Available</div>
            <div className="flex items-center gap-1"><span className="w-3 h-3 border-2 border-orange-400 rounded-full inline-block"></span> Unit Weight</div>
          </div>
        </div>

        {/* Bend Bar Section */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-bold text-orange-700 mb-2 text-center">Bend Bar</h3>
          <div className="text-center text-orange-700 font-semibold mb-4 text-sm md:text-base">
            Bend | 90-degree bend | Hook bend | 45 degree bend | S- Bend | U – Bend | Offset Bend
          </div>
        </div>

        

        {/* Technical Specification Tables (original content) */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center mt-10">Technical Specification of GFRP Rebars</h2>
        <div className="mb-10">
          <h3 className="text-lg font-bold text-orange-600 mb-2 text-center">GFRP Rebar (6, 8, 10, 12 mm)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-orange-200 rounded-xl text-xs md:text-base">
              <thead className="bg-orange-100">
                <tr>
                  <th className="p-2 border border-orange-200">S.No.</th>
                  <th className="p-2 border border-orange-200">Properties</th>
                  <th className="p-2 border border-orange-200">UOM</th>
                  <th className="p-2 border border-orange-200">Tolerance</th>
                  <th className="p-2 border border-orange-200">IS 18256 : 2023</th>
                  <th className="p-2 border border-orange-200">VEGNAR GFRP Rebar</th>
                </tr>
              </thead>
              <tbody>
                {techSpecSmall.map(([prop, uom, tol, isval, vegval], i) => (
                  <tr key={prop} className="even:bg-orange-50">
                    <td className="p-2 border border-orange-100 text-center">{i + 1}</td>
                    <td className="p-2 border border-orange-100">{prop}</td>
                    <td className="p-2 border border-orange-100 text-center">{uom}</td>
                    <td className="p-2 border border-orange-100 text-center">{tol}</td>
                    <td className="p-2 border border-orange-100 text-center">{isval}</td>
                    <td className="p-2 border border-orange-100 text-center whitespace-pre-line">{vegval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-orange-600 mb-2 text-center">GFRP Rebar (16, 20, 25 mm)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-orange-200 rounded-xl text-xs md:text-base">
              <thead className="bg-orange-100">
                <tr>
                  <th className="p-2 border border-orange-200">S.No.</th>
                  <th className="p-2 border border-orange-200">Properties</th>
                  <th className="p-2 border border-orange-200">UOM</th>
                  <th className="p-2 border border-orange-200">Tolerance</th>
                  <th className="p-2 border border-orange-200">IS 18256 : 2023</th>
                  <th className="p-2 border border-orange-200">VEGNAR GFRP Rebar</th>
                </tr>
              </thead>
              <tbody>
                {techSpecLarge.map(([prop, uom, tol, isval, vegval], i) => (
                  <tr key={prop} className="even:bg-orange-50">
                    <td className="p-2 border border-orange-100 text-center">{i + 1}</td>
                    <td className="p-2 border border-orange-100">{prop}</td>
                    <td className="p-2 border border-orange-100 text-center">{uom}</td>
                    <td className="p-2 border border-orange-100 text-center">{tol}</td>
                    <td className="p-2 border border-orange-100 text-center">{isval}</td>
                    <td className="p-2 border border-orange-100 text-center whitespace-pre-line">{vegval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-6 text-right">*Note: Values may vary as per actuals.</div>
      </div>
    </div>
  );
}
