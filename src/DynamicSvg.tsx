type DynamicSvgProps = {
  selected: number
  onSelect: (s: number) => void
}
function DynamicSvg({ selected, onSelect }: DynamicSvgProps) {

  return (
    <svg height="1080" width="1080" viewBox="0 0 4969 5200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M680.5 4184L1 1465.5L3294.5 1.5L4967.5 1037L2071 5198.5L680.5 4184Z" stroke="black" fill="white" />
      <rect x="3442.81" y="403" width="359" height="632" style={{ cursor: 'pointer' }} onClick={() => { onSelect(1) }} transform="rotate(36.7127 3442.81 403)" fill={selected === 1 ? "red" : "#D9D9D9"} />
      <rect x="1930.81" y="2978" width="359" height="632" style={{ cursor: 'pointer' }} onClick={() => { onSelect(2) }} transform="rotate(36.7127 1930.81 2978)" fill={selected === 2 ? "red" : "#D9D9D9"} />
      <rect x="1356.81" y="2385" width="359" height="632" style={{ cursor: 'pointer' }} onClick={() => { onSelect(3) }} transform="rotate(36.7127 1356.81 2385)" fill={selected === 3 ? "red" : "#D9D9D9"} />
      <rect x="3139.81" y="1879" width="359" height="632" style={{ cursor: 'pointer' }} onClick={() => { onSelect(4) }} transform="rotate(36.7127 3139.81 1879)" fill={selected === 4 ? "red" : "#D9D9D9"} />
      <rect x="2761.81" y="1595" width="359" height="632" style={{ cursor: 'pointer' }} onClick={() => { onSelect(5) }} transform="rotate(36.7127 2761.81 1595)" fill={selected === 5 ? "red" : "#D9D9D9"} />
      <rect x="2383.81" y="1336" width="359" height="632" style={{ cursor: 'pointer' }} onClick={() => { onSelect(6) }} transform="rotate(36.7127 2383.81 1336)" fill={selected === 6 ? "red" : "#D9D9D9"} />
      <rect x="4108.81" y="1089" width="359" height="632" style={{ cursor: 'pointer' }} onClick={() => { onSelect(7) }} transform="rotate(36.7127 4108.81 1089)" fill={selected === 7 ? "red" : "#D9D9D9"} />
      <rect x="3775.81" y="650" width="359" height="632" style={{ cursor: 'pointer' }} onClick={() => { onSelect(8) }} transform="rotate(36.7127 3775.81 650)" fill={selected === 8 ? "red" : "#D9D9D9"} />
    </svg>
  )
}

export default DynamicSvg
