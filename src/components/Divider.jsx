import React from 'react'

function Divider() {
  return (
    <div className="w-full h-8 flex justify-center opacity-20 my-8">
      <div
        className="w-64 h-full bg-contain bg-center bg-repeat-x"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIoyvd1B8DEXbvc1nKwfAU2Axr2DFRpHU_oeuXO2e4ve_q63O3b4BFkzzQtj979pJqk9EKpGFOUV_2t4vEZ2hLlsQIP_nSLiq7yqiZOPqVRUBEcPXQmTtfgG6c-M8JbCRw7FJ2OcoIllY_u6IBb879RwLZAl0QNwy6bJSIb5BoWkO5kgkKbCNhpDX10T9scgNZ59i8b0_B6ERWsVHmj764fHWKqy1trE7OVXasRSLLPk1_-TobxZsA")',
        }}
        role="separator"
        aria-label="Section divider"
      />
    </div>
  )
}

export default Divider